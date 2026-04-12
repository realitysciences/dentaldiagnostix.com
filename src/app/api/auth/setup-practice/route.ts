import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  const { userId, practiceName, dentistName, email } = await request.json();

  if (!userId || !practiceName || !dentistName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("dd_practices").insert({
    user_id: userId,
    practice_name: practiceName,
    dentist_name: dentistName,
    email,
  });

  if (error) {
    console.error("Setup practice error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
