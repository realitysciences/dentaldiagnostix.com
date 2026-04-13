import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function ROIDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: practice } = await supabase
    .from("dd_practices")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!practice) redirect("/dashboard");

  const { data: patients } = await supabase
    .from("dd_patients")
    .select("id, name, email, status, created_at")
    .eq("practice_id", practice.id)
    .order("created_at", { ascending: false });

  const { data: outcomes } = await supabase
    .from("dd_outcomes")
    .select("*")
    .eq("practice_id", practice.id);

  const totalIntakes = patients?.length ?? 0;
  const totalCompleted = patients?.filter((p: { status: string }) => p.status === "complete").length ?? 0;
  const completionRate = totalIntakes > 0 ? Math.round((totalCompleted / totalIntakes) * 100) : 0;

  const totalOutcomes = outcomes?.length ?? 0;
  const showedUp = outcomes?.filter((o: { showed_up: boolean }) => o.showed_up).length ?? 0;
  const showUpRate = totalOutcomes > 0 ? Math.round((showedUp / totalOutcomes) * 100) : null;

  const withTreatment = outcomes?.filter((o: { showed_up: boolean }) => o.showed_up) ?? [];
  const fullAccept = withTreatment.filter((o: { treatment_accepted: string }) => o.treatment_accepted === "yes").length;
  const partialAccept = withTreatment.filter((o: { treatment_accepted: string }) => o.treatment_accepted === "partial").length;
  const declined = withTreatment.filter((o: { treatment_accepted: string }) => o.treatment_accepted === "no").length;
  const acceptanceRate = withTreatment.length > 0
    ? Math.round(((fullAccept + partialAccept) / withTreatment.length) * 100)
    : null;

  const totalTreatmentValue = outcomes?.reduce(
    (sum: number, o: { treatment_value_accepted: number | null }) =>
      sum + (o.treatment_value_accepted ?? 0),
    0
  ) ?? 0;

  // Build a map of patientId → outcome for the table
  const outcomeMap = new Map(
    (outcomes ?? []).map((o: { patient_id: string }) => [o.patient_id, o])
  );

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      {/* Header */}
      <header
        style={{
          background: "#1A2B3C",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: "18px", color: "#fff", letterSpacing: "0.3px" }}>
              DentalDiagnostix
            </span>
          </Link>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/dashboard" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", textDecoration: "none" }}>
              Patients
            </Link>
            <Link href="/dashboard/roi" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#7DD4C4", textDecoration: "none", fontWeight: 500 }}>
              ROI
            </Link>
          </nav>
        </div>
        <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0" }}>
          {practice.practice_name}
        </span>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 6px" }}>
            ROI Dashboard
          </h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: 0 }}>
            Based on {totalOutcomes} logged outcome{totalOutcomes !== 1 ? "s" : ""} out of {totalCompleted} completed intake{totalCompleted !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Money line */}
        {totalTreatmentValue > 0 && (
          <div
            style={{
              background: "#1A2B3C",
              borderRadius: "12px",
              padding: "28px 32px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#7DD4C4" }}>
                Treatment value accepted
              </p>
              <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "42px", color: "#fff", lineHeight: 1 }}>
                {formatCurrency(totalTreatmentValue)}
              </p>
            </div>
            <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", maxWidth: 240, lineHeight: 1.6 }}>
              Total treatment value accepted across all logged appointments with DentalDiagnostix intake
            </p>
          </div>
        )}

        {/* Metric cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <MetricCard label="Total intakes sent" value={String(totalIntakes)} />
          <MetricCard label="Completion rate" value={totalIntakes > 0 ? `${completionRate}%` : "—"} />
          <MetricCard
            label="Show-up rate"
            value={showUpRate !== null ? `${showUpRate}%` : "—"}
            note={showUpRate === null ? "No outcomes logged yet" : undefined}
          />
          <MetricCard
            label="Treatment acceptance"
            value={acceptanceRate !== null ? `${acceptanceRate}%` : "—"}
            note={acceptanceRate === null ? "No showed-up outcomes yet" : undefined}
          />
        </div>

        {/* Treatment acceptance breakdown */}
        {withTreatment.length > 0 && (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2DDD5",
              borderRadius: "10px",
              padding: "24px 28px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: "0 0 20px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
              Treatment acceptance breakdown
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <BarRow label="Full acceptance" count={fullAccept} total={withTreatment.length} color="#1A6B3C" />
              <BarRow label="Partial acceptance" count={partialAccept} total={withTreatment.length} color="#B07D2E" />
              <BarRow label="Declined" count={declined} total={withTreatment.length} color="#9B3B3B" />
            </div>
          </div>
        )}

        {/* Patient breakdown table */}
        {totalCompleted > 0 && (
          <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ padding: "18px 24px", borderBottom: "1px solid #E2DDD5" }}>
              <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
                Patient breakdown
              </p>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E2DDD5" }}>
                  {["Patient", "Date", "Showed up", "Treatment", "Value"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "10px 20px",
                        textAlign: "left",
                        fontFamily: "DM Sans, Arial, sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#4A5568",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(patients ?? [])
                  .filter((p: { status: string }) => p.status === "complete")
                  .map((p: { id: string; name: string; email: string; created_at: string }) => {
                    const outcome = outcomeMap.get(p.id) as {
                      showed_up: boolean;
                      treatment_accepted: string;
                      treatment_value_accepted: number | null;
                    } | undefined;

                    return (
                      <tr key={p.id} style={{ borderBottom: "1px solid #F0EFEC" }}>
                        <td style={{ padding: "12px 20px" }}>
                          <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", fontWeight: 500 }}>{p.name}</p>
                          <p style={{ margin: "2px 0 0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#4A5568" }}>{p.email}</p>
                        </td>
                        <td style={{ padding: "12px 20px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>
                          {formatDate(p.created_at)}
                        </td>
                        <td style={{ padding: "12px 20px" }}>
                          {outcome == null ? (
                            <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0" }}>Not logged</span>
                          ) : outcome.showed_up ? (
                            <span style={{ background: "#E4F2F0", color: "#0E6B5E", padding: "2px 8px", borderRadius: "20px", fontSize: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontWeight: 500 }}>Yes</span>
                          ) : (
                            <span style={{ background: "#F0EFEC", color: "#4A5568", padding: "2px 8px", borderRadius: "20px", fontSize: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontWeight: 500 }}>No-show</span>
                          )}
                        </td>
                        <td style={{ padding: "12px 20px" }}>
                          {outcome == null ? (
                            <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0" }}>—</span>
                          ) : (
                            <TreatmentBadge value={outcome.treatment_accepted} />
                          )}
                        </td>
                        <td style={{ padding: "12px 20px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", fontWeight: outcome?.treatment_value_accepted ? 500 : 400 }}>
                          {outcome?.treatment_value_accepted
                            ? formatCurrency(outcome.treatment_value_accepted)
                            : <span style={{ color: "#A0B0C0" }}>—</span>}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}

        {totalCompleted === 0 && (
          <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "48px 32px", textAlign: "center" }}>
            <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#4A5568", margin: "0 0 6px" }}>
              No completed intakes yet.
            </p>
            <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0", margin: 0 }}>
              ROI data will appear here once patients complete their intake and you log appointment outcomes.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

function MetricCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E2DDD5",
        borderRadius: "10px",
        padding: "20px 22px",
      }}
    >
      <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
        {label}
      </p>
      <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "30px", color: "#1A2B3C", lineHeight: 1 }}>
        {value}
      </p>
      {note && (
        <p style={{ margin: "6px 0 0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", color: "#A0B0C0" }}>
          {note}
        </p>
      )}
    </div>
  );
}

function BarRow({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#1A2B3C" }}>{label}</span>
        <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>
          {count} &nbsp;·&nbsp; {pct}%
        </span>
      </div>
      <div style={{ height: "8px", background: "#F0EFEC", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: "4px", transition: "width 0.4s ease" }} />
      </div>
    </div>
  );
}

function TreatmentBadge({ value }: { value: string }) {
  const map: Record<string, { label: string; bg: string; color: string }> = {
    yes: { label: "Full", bg: "#E4F2F0", color: "#1A6B3C" },
    partial: { label: "Partial", bg: "#FDF4E3", color: "#B07D2E" },
    no: { label: "Declined", bg: "#FBF0EF", color: "#9B3B3B" },
  };
  const s = map[value] ?? { label: value, bg: "#F0EFEC", color: "#4A5568" };
  return (
    <span style={{ background: s.bg, color: s.color, padding: "2px 8px", borderRadius: "20px", fontSize: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontWeight: 500 }}>
      {s.label}
    </span>
  );
}
