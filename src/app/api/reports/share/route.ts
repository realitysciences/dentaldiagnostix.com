import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { randomBytes } from "crypto";

const service = createServiceClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { reportId } = await request.json().catch(() => ({}));
    if (!reportId) return NextResponse.json({ error: "reportId required" }, { status: 400 });

    // Verify ownership
    const { data: practice } = await supabase.from("dd_practices").select("id").eq("user_id", user.id).single();
    if (!practice) return NextResponse.json({ error: "No practice found" }, { status: 404 });

    const { data: report } = await supabase.from("dd_reports").select("id, practice_id, share_token").eq("id", reportId).single();
    if (!report || report.practice_id !== practice.id) return NextResponse.json({ error: "Report not found" }, { status: 404 });

    // Return existing token or generate new one
    if (report.share_token) {
      return NextResponse.json({ success: true, token: report.share_token });
    }

    const token = randomBytes(20).toString("hex");
    const { error } = await service.from("dd_reports").update({ share_token: token }).eq("id", reportId);
    if (error) return NextResponse.json({ error: "Failed to generate share link" }, { status: 500 });

    return NextResponse.json({ success: true, token });
  } catch (err) {
    console.error("Share route error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
