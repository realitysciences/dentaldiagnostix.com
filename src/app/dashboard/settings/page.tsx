import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: practice } = await supabase
    .from("dd_practices")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!practice) redirect("/dashboard");

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <header style={{ background: "#1A2B3C", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: "18px", color: "#fff", letterSpacing: "0.3px" }}>DentalDiagnostix</span>
          </Link>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/dashboard" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>Patients</Link>
            <Link href="/dashboard/roi" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>ROI</Link>
            <Link href="/dashboard/settings" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#7DD4C4", textDecoration: "none", fontWeight: 500 }}>Settings</Link>
          </nav>
        </div>
        <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0" }}>{practice.practice_name}</span>
      </header>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 6px" }}>Practice settings</h1>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: "0 0 32px" }}>
          Update your practice name and dentist name.
        </p>
        <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "32px" }}>
          <SettingsForm practiceName={practice.practice_name} dentistName={practice.dentist_name} />
        </div>

        <div style={{ marginTop: "32px", background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "28px 32px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>Account</p>
          <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C" }}>{user.email}</p>
          <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0" }}>To change your email or password, contact support.</p>
        </div>
      </div>
    </main>
  );
}
