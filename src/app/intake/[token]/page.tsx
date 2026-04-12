import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import IntakeFlow from "./IntakeFlow";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function IntakePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const { data: patient } = await supabase
    .from("dd_patients")
    .select("id, name, status, practice_id")
    .eq("token", token)
    .single();

  if (!patient) return notFound();

  const { data: practice } = await supabase
    .from("dd_practices")
    .select("practice_name, dentist_name")
    .eq("id", patient.practice_id)
    .single();

  if (patient.status === "complete") {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#F7F5F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#1A2B3C",
              marginBottom: "16px",
            }}
          >
            You&apos;re all set
          </h1>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "16px",
              color: "#4A5568",
              lineHeight: 1.7,
            }}
          >
            You&apos;ve already completed this intake. Your dentist will review
            it before your appointment.
          </p>
        </div>
      </main>
    );
  }

  return (
    <IntakeFlow
      token={token}
      patientName={patient.name}
      patientId={patient.id}
      practiceName={practice?.practice_name ?? "your dentist"}
    />
  );
}
