import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NewPatientForm from "./NewPatientForm";

export default async function NewPatientPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: practice } = await supabase
    .from("dd_practices")
    .select("id, practice_name, dentist_name")
    .eq("user_id", user.id)
    .single();

  if (!practice) redirect("/signup");

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <header
        style={{
          background: "#1A2B3C",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "18px",
            color: "#fff",
          }}
        >
          DentalDiagnostix
        </span>
        <a
          href="/dashboard"
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "13px",
            color: "#A0B0C0",
            textDecoration: "none",
          }}
        >
          Back to dashboard
        </a>
      </header>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "48px 24px" }}>
        <h1
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#1A2B3C",
            marginBottom: "8px",
          }}
        >
          Send intake
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "14px",
            color: "#4A5568",
            marginBottom: "36px",
          }}
        >
          The patient will receive an email with a link to complete their
          pre-appointment conversation.
        </p>
        <NewPatientForm
          practiceId={practice.id}
          practiceName={practice.practice_name}
          dentistName={practice.dentist_name}
        />
      </div>
    </main>
  );
}
