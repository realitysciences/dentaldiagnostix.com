import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { practice_name, dentist_name } = await request.json();
    if (!practice_name?.trim() || !dentist_name?.trim()) {
      return NextResponse.json({ error: "Practice name and dentist name are required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("dd_practices")
      .update({ practice_name: practice_name.trim(), dentist_name: dentist_name.trim() })
      .eq("user_id", user.id);

    if (error) {
      console.error("Practice update error:", error);
      return NextResponse.json({ error: "Failed to update practice" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled error in /api/practice/update:", err);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
