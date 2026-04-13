import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { buildReportEmail } from "@/lib/report-email";
import type { Report, Patient, Practice } from "@/types/database";

export const maxDuration = 60;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

const REPORT_SYSTEM_PROMPT = `You are analyzing a dental patient's intake conversation to generate a behavioral terrain report for their dentist. Analyze all the patient's responses and return a JSON object with exactly these fields:

avoidance_type: one of "Shame-based" | "Fear-based" | "Indifference" | "Circumstantial" | "Mixed"
compliance_risk: one of "Low" | "Moderate" | "High"
legal_risk: one of "Low" | "Elevated" | "High"
hygiene_relationship: one of "Guilt-driven" | "Diligent" | "Indifferent" | "Inconsistent" | "Avoidant"
terrain_summary: 2-3 sentence paragraph describing the patient's core psychological relationship with dental care. Plain language. No jargon. Write directly to the dentist as if briefing them before walking into the room.
compliance_signal: 2-3 sentence paragraph describing the patient's likely compliance behavior. Be specific about what the dentist should watch for.
legal_flag: 2-3 sentence paragraph if any legal risk is present. If legal risk is Low, return null.
dentist_history: 1-2 sentence summary of the patient's history with past dentists. Include tone and outcome.
dos: array of 3-5 specific actionable strings of what the dentist should do
donts: array of 3-5 specific actionable strings of what the dentist should not do

Return only valid JSON. No markdown, no explanation.`;

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json({ error: "token is required" }, { status: 400 });
  }

  // Fetch patient by token
  const { data: patient, error: patientError } = await supabase
    .from("dd_patients")
    .select("*")
    .eq("token", token)
    .single();

  if (patientError || !patient) {
    return NextResponse.json({ error: "Patient not found" }, { status: 404 });
  }

  // Update status to complete
  await supabase
    .from("dd_patients")
    .update({ status: "complete" })
    .eq("id", patient.id);

  // Fetch all responses
  const { data: responses } = await supabase
    .from("dd_responses")
    .select("*")
    .eq("patient_id", patient.id)
    .order("created_at", { ascending: true });

  if (!responses || responses.length === 0) {
    return NextResponse.json(
      { error: "No responses found" },
      { status: 400 }
    );
  }

  // Fetch practice
  const { data: practice } = await supabase
    .from("dd_practices")
    .select("*")
    .eq("id", patient.practice_id)
    .single();

  if (!practice) {
    return NextResponse.json(
      { error: "Practice not found" },
      { status: 404 }
    );
  }

  // Send immediate "intake complete" alert — fires before report generation so dentist knows right away
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "davidbensondds@gmail.com",
    subject: `Intake complete: ${patient.name} — report generating`,
    html: `
      <div style="font-family:DM Sans,Arial,sans-serif;max-width:500px;">
        <div style="background:#1A2B3C;padding:16px 24px;margin-bottom:0;">
          <span style="font-family:Lora,Georgia,serif;font-size:16px;color:#fff;">DentalDiagnostix</span>
        </div>
        <div style="background:#fff;padding:28px 24px;border:1px solid #E2DDD5;border-top:none;">
          <p style="margin:0 0 6px;font-size:15px;color:#1A2B3C;font-weight:500;">${patient.name} just completed their intake.</p>
          <p style="margin:0 0 20px;font-size:13px;color:#4A5568;">Their behavioral terrain report is being generated now and will be ready in under a minute.</p>
          <a href="${appUrl}/reports/${patient.id}" style="display:inline-block;padding:11px 22px;background:#0E6B5E;color:#fff;text-decoration:none;border-radius:7px;font-size:14px;font-weight:500;">View report</a>
        </div>
      </div>`,
  }).catch((e: unknown) => console.error("Alert email error:", e));

  // Build conversation for Claude
  const conversationText = responses
    .map(
      (r: { question_text: string; answer: string }) =>
        `Q: ${r.question_text}\nA: ${r.answer}`
    )
    .join("\n\n");

  // Generate report
  const aiResponse = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 2048,
    system: REPORT_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Patient name: ${patient.name}\n\nIntake conversation:\n\n${conversationText}`,
      },
    ],
  });

  const content = aiResponse.content[0];
  if (content.type !== "text") {
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }

  let reportData: Partial<Report>;
  try {
    reportData = JSON.parse(content.text);
  } catch {
    console.error("Failed to parse report JSON:", content.text);
    return NextResponse.json(
      { error: "Failed to parse report" },
      { status: 500 }
    );
  }

  // Save report
  const { data: savedReport, error: reportError } = await supabase
    .from("dd_reports")
    .insert({
      patient_id: patient.id,
      practice_id: patient.practice_id,
      avoidance_type: reportData.avoidance_type,
      compliance_risk: reportData.compliance_risk,
      legal_risk: reportData.legal_risk,
      hygiene_relationship: reportData.hygiene_relationship,
      terrain_summary: reportData.terrain_summary,
      compliance_signal: reportData.compliance_signal,
      legal_flag: reportData.legal_flag ?? null,
      dentist_history: reportData.dentist_history,
      dos: reportData.dos,
      donts: reportData.donts,
      full_report_json: reportData,
    })
    .select()
    .single();

  if (reportError) {
    console.error("Report save error:", reportError);
    return NextResponse.json(
      { error: "Failed to save report" },
      { status: 500 }
    );
  }

  // Send email to dentist
  const emailHtml = buildReportEmail(
    savedReport as Report,
    patient as Patient,
    practice as Practice,
    appUrl
  );

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "davidbensondds@gmail.com",
    subject: `Patient report ready: ${patient.name}`,
    html: emailHtml,
  });

  return NextResponse.json({ success: true, reportId: savedReport.id });
}
