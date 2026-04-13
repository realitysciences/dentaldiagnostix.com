import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import CSVImportForm from "./CSVImportForm";

export default async function ImportPatientsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: practice } = await supabase.from("dd_practices").select("practice_name").eq("user_id", user.id).single();
  if (!practice) redirect("/dashboard");

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <header style={{ background: "#1A2B3C", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: "18px", color: "#fff" }}>DentalDiagnostix</span>
          </Link>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/dashboard" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>Patients</Link>
            <Link href="/dashboard/roi" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>ROI</Link>
            <Link href="/dashboard/settings" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>Settings</Link>
          </nav>
        </div>
        <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0" }}>{practice.practice_name}</span>
      </header>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ marginBottom: "28px" }}>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 8px" }}>Import patients</h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: 0 }}>
            Upload a CSV file to create multiple patients at once. Max 100 rows per import.
          </p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "24px 28px", marginBottom: "20px" }}>
          <p style={{ margin: "0 0 10px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
            Required CSV format
          </p>
          <div style={{ background: "#F7F5F0", borderRadius: "6px", padding: "12px 16px", fontFamily: "monospace", fontSize: "13px", color: "#1A2B3C" }}>
            name,email,appointment_date<br />
            Jane Smith,jane@example.com,2026-04-20<br />
            John Doe,john@example.com,
          </div>
          <p style={{ margin: "10px 0 0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0" }}>
            <code>appointment_date</code> is optional. Use ISO format (YYYY-MM-DD) if included.
          </p>
        </div>

        <CSVImportForm />

        <div style={{ marginTop: "20px" }}>
          <Link href="/dashboard" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568", textDecoration: "none" }}>
            ← Back to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
