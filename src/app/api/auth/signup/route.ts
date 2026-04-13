import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(_request: NextRequest) {
  return NextResponse.json({ error: "New signups are not currently open. Request access at dentaldiagnostix.com." }, { status: 403 });
  // eslint-disable-next-line no-unreachable
  const { email, password, practiceName, dentistName } = await _request.json();

  if (!email || !password || !practiceName || !dentistName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Create the user server-side so it's fully committed before we insert the practice row
  const { data: userData, error: userError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // skip email confirmation so they can log in immediately
  });

  if (userError || !userData?.user) {
    return NextResponse.json({ error: userError?.message ?? "Signup failed" }, { status: 400 });
  }

  const userId = userData.user!.id;

  const { error: practiceError } = await supabase.from("dd_practices").insert({
    user_id: userId,
    practice_name: practiceName,
    dentist_name: dentistName,
    email,
  });

  if (practiceError) {
    // Roll back: delete the user we just created
    await supabase.auth.admin.deleteUser(userId);
    console.error("Practice insert error:", practiceError);
    return NextResponse.json({ error: practiceError?.message ?? "Failed to create practice" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
