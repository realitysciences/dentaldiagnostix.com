import OutcomeRecordForm from "./OutcomeRecordForm";

export default async function OutcomeRecordPage({
  searchParams,
}: {
  searchParams: Promise<{ patientId?: string; showedUp?: string; treatmentAccepted?: string }>;
}) {
  const params = await searchParams;

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
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#0E6B5E",
              margin: "0 0 6px",
            }}
          >
            DentalDiagnostix
          </p>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "24px",
              fontWeight: 400,
              color: "#1A2B3C",
              margin: 0,
            }}
          >
            Log appointment outcome
          </h1>
        </div>
        <OutcomeRecordForm
          patientId={params.patientId ?? ""}
          initialShowedUp={params.showedUp}
          initialTreatmentAccepted={params.treatmentAccepted}
        />
      </div>
    </main>
  );
}
