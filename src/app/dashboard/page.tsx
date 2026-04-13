import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
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

  if (!practice) {
    return (
      <main style={{ minHeight: "100vh", background: "#F7F5F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "26px", fontWeight: 400, color: "#1A2B3C", marginBottom: "12px" }}>
            Finish setting up your practice
          </h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", marginBottom: "28px" }}>
            Your account exists but your practice profile is incomplete. Complete it to access your dashboard.
          </p>
          <Link href="/setup-practice" style={{ background: "#0E6B5E", color: "#fff", padding: "12px 28px", borderRadius: "8px", textDecoration: "none", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", fontWeight: 500 }}>
            Complete setup
          </Link>
        </div>
      </main>
    );
  }

  const { data: patients } = await supabase
    .from("dd_patients")
    .select("*")
    .eq("practice_id", practice.id)
    .order("created_at", { ascending: false });

  const statusLabel = (s: string) => {
    if (s === "complete") return { text: "Complete", color: "#0E6B5E", bg: "#E4F2F0" };
    if (s === "in_progress") return { text: "In progress", color: "#B07D2E", bg: "#FDF4E3" };
    return { text: "Pending", color: "#4A5568", bg: "#F0EFEC" };
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      {/* Top bar */}
      <header
        style={{
          background: "#1A2B3C",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "18px",
              color: "#fff",
              letterSpacing: "0.3px",
            }}
          >
            DentalDiagnostix
          </span>
        </Link>
        <span
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "13px",
            color: "#A0B0C0",
          }}
        >
          {practice.practice_name}
        </span>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        {/* Page header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "32px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "#1A2B3C",
                margin: 0,
              }}
            >
              Patients
            </h1>
            <p
              style={{
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "14px",
                color: "#4A5568",
                margin: "6px 0 0",
              }}
            >
              {patients?.length ?? 0} intake
              {patients?.length !== 1 ? "s" : ""} sent
            </p>
          </div>
          <Link
            href="/patients/new"
            style={{
              background: "#0E6B5E",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Send new intake
          </Link>
        </div>

        {/* Table */}
        {!patients || patients.length === 0 ? (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2DDD5",
              borderRadius: "10px",
              padding: "48px 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "15px",
                color: "#4A5568",
              }}
            >
              No patients yet. Send your first intake to get started.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2DDD5",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E2DDD5" }}>
                  {["Name", "Email", "Status", "Date sent", ""].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 20px",
                        textAlign: "left",
                        fontFamily: "DM Sans, Arial, sans-serif",
                        fontSize: "12px",
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
                {patients.map(
                  (p: {
                    id: string;
                    name: string;
                    email: string;
                    status: string;
                    created_at: string;
                  }) => {
                    const s = statusLabel(p.status);
                    return (
                      <tr
                        key={p.id}
                        style={{ borderBottom: "1px solid #F0EFEC" }}
                      >
                        <td
                          style={{
                            padding: "14px 20px",
                            fontFamily: "DM Sans, Arial, sans-serif",
                            fontSize: "14px",
                            color: "#1A2B3C",
                            fontWeight: 500,
                          }}
                        >
                          {p.name}
                        </td>
                        <td
                          style={{
                            padding: "14px 20px",
                            fontFamily: "DM Sans, Arial, sans-serif",
                            fontSize: "14px",
                            color: "#4A5568",
                          }}
                        >
                          {p.email}
                        </td>
                        <td style={{ padding: "14px 20px" }}>
                          <span
                            style={{
                              background: s.bg,
                              color: s.color,
                              padding: "3px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontFamily: "DM Sans, Arial, sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {s.text}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "14px 20px",
                            fontFamily: "DM Sans, Arial, sans-serif",
                            fontSize: "14px",
                            color: "#4A5568",
                          }}
                        >
                          {formatDate(p.created_at)}
                        </td>
                        <td style={{ padding: "14px 20px" }}>
                          {p.status === "complete" && (
                            <Link
                              href={`/reports/${p.id}`}
                              style={{
                                color: "#0E6B5E",
                                textDecoration: "none",
                                fontFamily: "DM Sans, Arial, sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                border: "1px solid #0E6B5E",
                                padding: "4px 12px",
                                borderRadius: "6px",
                              }}
                            >
                              View report
                            </Link>
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
