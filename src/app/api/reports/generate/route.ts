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
  try {
    const body = await request.json().catch(() => ({}));
    const { patientId } = body;

    if (!patientId) {
      return NextResponse.json({ error: "patientId is required" }, { status: 400 });
    }

    const { data: patient, error: patientError } = await supabase
      .from("dd_patients")
      .select("*")
      .eq("id", patientId)
      .single();

    if (patientError || !patient) {
      console.error("Patient lookup error:", patientError);
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }

    const { data: responses, error: responsesError } = await supabase
      .from("dd_responses")
      .select("*")
      .eq("patient_id", patientId)
      .order("created_at", { ascending: true });

    if (responsesError || !responses || responses.length === 0) {
      console.error("Responses lookup error:", responsesError, "count:", responses?.length);
      return NextResponse.json({ error: "No responses found for this patient" }, { status: 400 });
    }

    const { data: practice, error: practiceError } = await supabase
      .from("dd_practices")
      .select("*")
      .eq("id", patient.practice_id)
      .single();

    if (practiceError || !practice) {
      console.error("Practice lookup error:", practiceError);
      return NextResponse.json({ error: "Practice not found" }, { status: 404 });
    }

    const conversationText = responses
      .map((r: { question_text: string; answer: string }) => `Q: ${r.question_text}\nA: ${r.answer}`)
      .join("\n\n");

    let aiResponse;
    try {
      aiResponse = await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 2048,
        system: REPORT_SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Patient name: ${patient.name}\n\nIntake conversation:\n\n${conversationText}` }],
      });
    } catch (aiErr) {
      console.error("Anthropic API error:", aiErr);
      return NextResponse.json({ error: "AI generation failed. Check API key and model name." }, { status: 500 });
    }

    const content = aiResponse.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Unexpected AI response type" }, { status: 500 });
    }

    let reportData: Partial<Report>;
    try {
      // Strip markdown code fences if present
      const cleaned = content.text.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();
      reportData = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse report JSON:", content.text);
      return NextResponse.json({ error: "Failed to parse AI response as JSON" }, { status: 500 });
    }

    // Delete any previous report for this patient before inserting
    await supabase.from("dd_reports").delete().eq("patient_id", patientId);

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

    if (reportError || !savedReport) {
      console.error("Report save error:", reportError);
      return NextResponse.json({ error: "Failed to save report to database" }, { status: 500 });
    }

    // Send email to dentist (non-blocking — don't fail if email fails)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";
    const emailHtml = buildReportEmail(savedReport as Report, patient as Patient, practice as Practice, appUrl);

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "davidbensondds@gmail.com",
      subject: `Patient report ready: ${patient.name}`,
      html: emailHtml,
    }).catch((e: unknown) => console.error("Resend error:", e));

    return NextResponse.json({ success: true, reportId: savedReport.id });
  } catch (err) {
    console.error("Unhandled error in /api/reports/generate:", err);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
