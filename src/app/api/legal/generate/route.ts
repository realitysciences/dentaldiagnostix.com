import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Anthropic from "@anthropic-ai/sdk";

export const maxDuration = 60;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LEGAL_DOC_PROMPT = `You are helping a dentist create a brief internal documentation note for a patient flagged with elevated or high legal risk based on their behavioral intake.

Generate a concise internal documentation template the dentist should complete before or after the appointment. This is for the dentist's own records — it helps protect them if a patient dispute arises later.

Return a JSON object with exactly these fields:

summary: 2-3 sentence plain-language summary of why this patient carries legal risk based on the intake data
documentation_checklist: array of 5-7 specific things the dentist should document before/during/after the appointment (e.g., "Obtain written informed consent specifying risks of delaying treatment")
verbal_scripts: array of 2-3 exact phrases the dentist should say aloud and note they said (e.g., "I explained that delaying this treatment carries the following risks...")
red_flags: array of 2-4 specific behaviors to watch for during the appointment that should be documented immediately
template_note: a pre-filled clinical note template the dentist can adapt and add to the patient record, written in first-person clinical style (2-3 sentences)

Return only valid JSON. No markdown, no explanation.`;

export async function POST(request: NextRequest) {
  try {
    const { patientId, reportId } = await request.json().catch(() => ({}));
    if (!patientId || !reportId) {
      return NextResponse.json({ error: "patientId and reportId are required" }, { status: 400 });
    }

    const { data: report } = await supabase.from("dd_reports").select("*").eq("id", reportId).single();
    if (!report) return NextResponse.json({ error: "Report not found" }, { status: 404 });

    const { data: patient } = await supabase.from("dd_patients").select("*").eq("id", patientId).single();
    if (!patient) return NextResponse.json({ error: "Patient not found" }, { status: 404 });

    const context = `
Patient name: ${patient.name}
Legal risk level: ${report.legal_risk}
Legal flag: ${report.legal_flag ?? "None"}
Avoidance type: ${report.avoidance_type}
Compliance risk: ${report.compliance_risk}
Terrain summary: ${report.terrain_summary}
Compliance signal: ${report.compliance_signal}
    `.trim();

    let aiResponse;
    try {
      aiResponse = await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 2048,
        system: LEGAL_DOC_PROMPT,
        messages: [{ role: "user", content: context }],
      });
    } catch (aiErr) {
      console.error("Anthropic error:", aiErr);
      return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
    }

    const content = aiResponse.content[0];
    if (content.type !== "text") return NextResponse.json({ error: "Unexpected AI response" }, { status: 500 });

    let docData: {
      summary: string;
      documentation_checklist: string[];
      verbal_scripts: string[];
      red_flags: string[];
      template_note: string;
    };
    try {
      const cleaned = content.text.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();
      docData = JSON.parse(cleaned);
    } catch {
      console.error("Parse error:", content.text);
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    // Delete any previous legal doc for this patient
    await supabase.from("dd_legal_docs").delete().eq("patient_id", patientId);

    const { data: saved, error: saveError } = await supabase
      .from("dd_legal_docs")
      .insert({
        patient_id: patientId,
        practice_id: patient.practice_id,
        risk_level: report.legal_risk,
        template_html: JSON.stringify(docData),
        completed: false,
      })
      .select()
      .single();

    if (saveError || !saved) {
      console.error("Save error:", saveError);
      return NextResponse.json({ error: "Failed to save legal doc" }, { status: 500 });
    }

    return NextResponse.json({ success: true, doc: docData, docId: saved.id });
  } catch (err) {
    console.error("Legal generate error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
