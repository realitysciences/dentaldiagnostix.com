import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { patientId, showedUp, treatmentAccepted, treatmentValue, issueNotes } = body;

    if (!patientId) {
      return NextResponse.json({ error: "patientId is required" }, { status: 400 });
    }
    if (showedUp === undefined || showedUp === null) {
      return NextResponse.json({ error: "showedUp is required" }, { status: 400 });
    }
    if (!treatmentAccepted) {
      return NextResponse.json({ error: "treatmentAccepted is required" }, { status: 400 });
    }

    const { data: patient } = await supabase
      .from("dd_patients")
      .select("id, practice_id")
      .eq("id", patientId)
      .single();

    if (!patient) {
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }

    // Upsert — replace any previous outcome for this patient
    await supabase.from("dd_outcomes").delete().eq("patient_id", patientId);

    const { error } = await supabase.from("dd_outcomes").insert({
      patient_id: patientId,
      practice_id: patient.practice_id,
      showed_up: showedUp,
      treatment_accepted: treatmentAccepted,
      treatment_value_accepted: treatmentValue ?? null,
      had_issues: issueNotes ? true : false,
      issue_notes: issueNotes ?? null,
    });

    if (error) {
      console.error("Outcome insert error:", error);
      return NextResponse.json({ error: "Failed to save outcome" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled error in /api/outcomes/record:", err);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
