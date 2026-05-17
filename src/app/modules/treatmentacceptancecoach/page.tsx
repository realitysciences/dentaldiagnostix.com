import Link from "next/link";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";
const AMBER = "#B07D2E";
const RED = "#9B3B3B";
const GREEN = "#15803D";
const GL = "#F0FDF4";

export const metadata = {
  title: "Treatment Acceptance Coach™ — DentalDiagnostix",
  description:
    "Present treatment in the order the patient can actually hear. Treatment Acceptance Coach reads behavioral signals to guide case presentation sequence.",
};

const BLUE = "#1D4ED8";

const mistakeSteps = [
  { icon: "🦷", label: "Dentist presents clinical plan." },
  { icon: "😟", label: "Patient hears cost, threat, or shame." },
  { icon: "🙂", label: "Patient nods politely in the chair." },
  { icon: "📭", label: "Patient never schedules or follows through." },
];

const betterSteps = [
  { icon: "🔍", label: "Behavioral barrier is identified." },
  { icon: "🔄", label: "Conversation sequence changes." },
  { icon: "🤝", label: "Patient feels oriented and respected." },
  { icon: "✅", label: "Treatment discussion becomes easier and more productive." },
];

export default function TreatmentAcceptanceCoachPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "grid", gridTemplateColumns: "repeat(3,4px)", gap: 2 }}>
              {Array(9).fill(0).map((_, i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />)}
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>Dental</span>
            <span style={{ fontSize: 17, fontWeight: 700, color: P, marginLeft: -4 }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P }}>&trade;</sup>
          </Link>
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 2rem 0" }}>
        <p style={{ fontSize: 12, color: MUTED }}>
          <Link href="/modules" style={{ color: MUTED, textDecoration: "none" }}>Modules</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: TEXT, fontWeight: 500 }}>Treatment Acceptance Coach&trade;</span>
        </p>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "3rem 0 5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left */}
          <div>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#EFF6FF", border: "1px solid #BFDBFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>
              📊
            </div>
            <p style={{ fontSize: 22, fontWeight: 700, color: BLUE, marginBottom: 8 }}>Treatment Acceptance Coach&trade;</p>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              Present treatment in the order the patient can actually hear.
            </h1>
            <div style={{ width: 44, height: 4, background: BLUE, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              Treatment Acceptance Coach&trade; reads the patient&rsquo;s behavioral brief and helps the dentist plan the conversation path based on trust, shame, cost anxiety, and decision style.
            </p>
            <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>📊</span>
              <p style={{ fontSize: 13, fontStyle: "italic", color: DARK, lineHeight: 1.7 }}>
                The same treatment plan can be heard differently by different patients. The order of the conversation changes everything.
              </p>
            </div>
          </div>

          {/* Right — Sample Brief Card */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 40px rgba(109,40,217,0.1)" }}>
            <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Sample Treatment Acceptance Coach&trade; Brief</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Generated May 12, 2025</span>
            </div>
            <div style={{ padding: "20px 22px" }}>
              {[
                { label: "Patient", value: "Maria S., 52" },
                { label: "Treatment", value: "$4,200 restorative plan" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, width: 120, flexShrink: 0, paddingTop: 2 }}>{row.label}</p>
                  <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>{row.value}</p>
                </div>
              ))}

              {/* Acceptance risk */}
              <div style={{ display: "flex", gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}`, alignItems: "center" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, width: 120, flexShrink: 0 }}>Acceptance risk</p>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: AMBER, flexShrink: 0 }}>Moderate – High</p>
                  <div style={{ flex: 1, height: 6, background: "#F3F4F6", borderRadius: 3 }}>
                    <div style={{ height: "100%", width: "75%", background: `linear-gradient(to right, ${AMBER}, ${RED})`, borderRadius: 3 }} />
                  </div>
                </div>
              </div>

              {[
                { label: "Primary barrier", value: "Cost anxiety mixed with shame" },
                { label: "Decision style", value: "Needs reassurance and sequence clarity" },
                { label: "Recommended sequence", value: "Financial pathway first, clinical details second" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, width: 120, flexShrink: 0, paddingTop: 2 }}>{row.label}</p>
                  <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>{row.value}</p>
                </div>
              ))}

              {/* Opening approach */}
              <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 12, marginBottom: 12, paddingTop: 4, paddingBottom: 4 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: GREEN, letterSpacing: 0.8, fontWeight: 600, marginBottom: 4 }}>Opening approach</p>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>Normalize the money conversation before presenting treatment.</p>
              </div>

              {/* Suggested line */}
              <div style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 12, marginBottom: 14, paddingTop: 4, paddingBottom: 4 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: BLUE, letterSpacing: 0.8, fontWeight: 600, marginBottom: 4 }}>Suggested line</p>
                <p style={{ fontSize: 13, color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;Before I show you what I&rsquo;m seeing clinically, I want to walk you through how patients usually handle the financial side, because that often makes the rest of the conversation easier.&rdquo;
                </p>
              </div>

              <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.6 }}>
                🔒 Full Treatment Acceptance Coach&trade; briefs include deeper barrier insights, past pattern signals, and conversation sequencing guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SECTION — 3 cols */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {/* Detects */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }}>🔍</span>
              <p style={{ fontSize: 16, fontWeight: 700, color: GREEN }}>What it detects</p>
            </div>
            <p style={{ fontSize: 12, color: MUTED, fontWeight: 300, lineHeight: 1.65, marginBottom: 16 }}>Behavioral signals that shape how a patient receives a treatment conversation.</p>
            {[
              "Cost anxiety",
              "Shame-based avoidance",
              "Decision paralysis",
              "Need for control or certainty",
              "Trust sensitivity",
              "Prior treatment disappointment",
              "Value mismatch",
              "Information overwhelm signals",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: GREEN, flexShrink: 0, lineHeight: 1.5, fontWeight: 700 }}>✓</span>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Prevents */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }}>🛡️</span>
              <p style={{ fontSize: 16, fontWeight: 700, color: BLUE }}>What it helps prevent</p>
            </div>
            <p style={{ fontSize: 12, color: MUTED, fontWeight: 300, lineHeight: 1.65, marginBottom: 16 }}>Protects the case presentation and the patient relationship.</p>
            {[
              "\"Yes\" in the chair, silence afterward",
              "Unscheduled treatment",
              "Overwhelming the patient",
              "Premature fee shock",
              "Case presentation in the wrong order",
              "Patients feeling judged or sold to",
              "Breakdown in trust during the conversation",
              "Longer case acceptance cycles",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: BLUE, flexShrink: 0, lineHeight: 1.5, fontWeight: 700 }}>✓</span>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Is not */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }}>✕</span>
              <p style={{ fontSize: 16, fontWeight: 700, color: RED }}>What it is not</p>
            </div>
            <p style={{ fontSize: 12, color: MUTED, fontWeight: 300, lineHeight: 1.65, marginBottom: 16 }}>Important boundaries. This is behavioral insight, not scripting.</p>
            {[
              "Not sales scripting",
              "Not pressure tactics",
              "Not treatment planning",
              "Not financial advice",
              "Not a guarantee of treatment acceptance",
              "Not a replacement for dentist judgment",
              "Not a clinical or diagnostic tool",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: RED, flexShrink: 0, lineHeight: 1.5, fontWeight: 700 }}>✕</span>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW DIAGRAMS */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          {/* Mistake flow */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 28 }}>The mistake it helps avoid</p>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
              {mistakeSteps.map((step, i) => (
                <div key={step.label} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#FBF0EF", border: "1px solid #FCA5A5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                      {step.icon}
                    </div>
                    <p style={{ fontSize: 11, color: RED, textAlign: "center", lineHeight: 1.5, fontWeight: 500 }}>{step.label}</p>
                  </div>
                  {i < mistakeSteps.length - 1 && (
                    <div style={{ color: RED, fontSize: 16, flexShrink: 0, padding: "12px 4px 0" }}>&rarr;</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Better flow */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: GREEN, marginBottom: 28 }}>The better first move</p>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
              {betterSteps.map((step, i) => (
                <div key={step.label} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: GL, border: "1px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                      {step.icon}
                    </div>
                    <p style={{ fontSize: 11, color: GREEN, textAlign: "center", lineHeight: 1.5, fontWeight: 500 }}>{step.label}</p>
                  </div>
                  {i < betterSteps.length - 1 && (
                    <div style={{ color: GREEN, fontSize: 16, flexShrink: 0, padding: "12px 4px 0" }}>&rarr;</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(29,78,216,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>📊</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>The right conversation. In the right order. With more trust.</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Treatment Acceptance Coach&trade; helps you communicate in a way each patient can hear, so good treatment gets completed.</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <Link href="/for-practices" style={{ background: P, color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Request Early Access &rarr;</Link>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>🔒 No obligation. Limited early access.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "2rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, color: MUTED, fontWeight: 500 }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: MUTED, display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/privacy" style={{ color: MUTED, textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral insight only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
