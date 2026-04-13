import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";

const service = createServiceClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { patientId, note } = await request.json().catch(() => ({}));
    if (!patientId) return NextResponse.json({ error: "patientId required" }, { status: 400 });

    const { data: practice } = await supabase.from("dd_practices").select("id").eq("user_id", user.id).single();
    if (!practice) return NextResponse.json({ error: "No practice" }, { status: 404 });

    const { error } = await service.from("dd_patients").update({ notes: note ?? null }).eq("id", patientId).eq("practice_id", practice.id);
    if (error) return NextResponse.json({ error: "Failed to save note" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Note save error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
