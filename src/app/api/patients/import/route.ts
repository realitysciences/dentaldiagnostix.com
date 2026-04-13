import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

const service = createServiceClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data: practice } = await supabase.from("dd_practices").select("*").eq("user_id", user.id).single();
    if (!practice) return NextResponse.json({ error: "No practice found" }, { status: 404 });

    const { rows } = await request.json().catch(() => ({ rows: [] }));
    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: "No rows provided" }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";

    const results: { name: string; email: string; status: "ok" | "error"; intakeLink?: string; error?: string }[] = [];

    for (const row of rows.slice(0, 100)) {
      const name = row.name?.trim();
      const email = row.email?.trim();
      const appointmentDate = row.appointment_date?.trim() || null;

      if (!name || !email) {
        results.push({ name: name ?? "", email: email ?? "", status: "error", error: "Missing name or email" });
        continue;
      }

      const token = randomUUID().replace(/-/g, "").slice(0, 32);
      const { data: patient, error } = await service
        .from("dd_patients")
        .insert({ name, email, practice_id: practice.id, status: "pending", token, appointment_date: appointmentDate })
        .select()
        .single();

      if (error || !patient) {
        results.push({ name, email, status: "error", error: error?.message ?? "Insert failed" });
      } else {
        results.push({ name, email, status: "ok", intakeLink: `${appUrl}/intake/${patient.token}` });
      }
    }

    const succeeded = results.filter(r => r.status === "ok").length;
    const failed = results.filter(r => r.status === "error").length;

    return NextResponse.json({ success: true, succeeded, failed, results });
  } catch (err) {
    console.error("Import error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
