import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  const { patientId, questionId, questionText, answer } =
    await request.json();

  if (!patientId || !questionId || !questionText || !answer) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Update patient status to in_progress if still pending
  await supabase
    .from("dd_patients")
    .update({ status: "in_progress" })
    .eq("id", patientId)
    .eq("status", "pending");

  const { error } = await supabase.from("dd_responses").insert({
    patient_id: patientId,
    question_id: questionId,
    question_text: questionText,
    answer,
  });

  if (error) {
    console.error("Save response error:", error);
    return NextResponse.json(
      { error: "Failed to save response" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
