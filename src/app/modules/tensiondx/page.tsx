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
  title: "TensionDx™ — DentalDiagnostix",
  description: "Respond before an upset patient becomes a rupture. TensionDx identifies emotional drivers behind complaints and trust breakdown.",
};

export default function TensionDxPage() {
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
          <span style={{ color: TEXT, fontWeight: 500 }}>TensionDx&trade;</span>
        </p>
      </div>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "3rem 0 5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left */}
          <div>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PL, border: `1px solid ${PB}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>
              🛡️
            </div>
            <p style={{ fontSize: 22, fontWeight: 700, color: P, marginBottom: 8 }}>TensionDx&trade;</p>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              Respond before an upset patient becomes a rupture.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              TensionDx&trade; identifies the emotional driver underneath complaints, review risk, legal threats, and trust breakdowns so you can open the conversation calmly and correctly.
            </p>
            <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 10, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>👤</span>
              <p style={{ fontSize: 13, fontStyle: "italic", color: DARK, lineHeight: 1.7 }}>
                &ldquo;When trust is strained, the first move matters most. TensionDx&trade; gives you the insight and the words that protect the relationship.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — Sample TensionDx Brief */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 40px rgba(109,40,217,0.1)" }}>
            <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Sample TensionDx&trade; Brief</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Generated: May 12, 2025</span>
            </div>
            <div style={{ padding: "20px 22px" }}>
              {/* Patient info rows */}
              {[
                { label: "Patient", value: "Patricia H., 58" },
                { label: "Situation", value: "Post-op discomfort after crown prep" },
                { label: "Signal", value: "Told front desk, \"Maybe I should talk to someone about this.\"" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, width: 70, flexShrink: 0, paddingTop: 2 }}>{row.label}</p>
                  <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>{row.value}</p>
                </div>
              ))}

              {/* Tension level */}
              <div style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, marginBottom: 6 }}>Tension level</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: AMBER }}>Moderate &ndash; High</p>
                  <div style={{ flex: 1, height: 6, background: "#F3F4F6", borderRadius: 3 }}>
                    <div style={{ height: "100%", width: "70%", background: `linear-gradient(to right, ${AMBER}, ${RED})`, borderRadius: 3 }} />
                  </div>
                </div>
              </div>

              {[
                { label: "Primary driver", value: "Feels ignored, not necessarily harmed" },
                { label: "Risk if unaddressed", value: "Trust erosion, public review, escalation if dismissed" },
              ].map((row) => (
                <div key={row.label} style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.8, fontWeight: 600, marginBottom: 4 }}>{row.label}</p>
                  <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>{row.value}</p>
                </div>
              ))}

              {/* Approach boxes */}
              <div style={{ borderLeft: `3px solid ${P}`, paddingLeft: 12, marginBottom: 12, paddingTop: 4, paddingBottom: 4 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: 0.8, fontWeight: 600, marginBottom: 4 }}>Recommended opening approach</p>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>Personal call from the dentist. Listen first. Do not explain clinically too early.</p>
              </div>

              <div style={{ borderLeft: `3px solid ${P}`, paddingLeft: 12, marginBottom: 14, paddingTop: 4, paddingBottom: 4 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: 0.8, fontWeight: 600, marginBottom: 4 }}>Suggested opening line</p>
                <p style={{ fontSize: 13, color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;Patricia, I wanted to call you yourself. I heard you have been uncomfortable, and before I explain anything, I want to understand what this has felt like from your side.&rdquo;
                </p>
              </div>

              <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.6 }}>
                🔒 Full TensionDx&trade; Briefs include deeper drivers, past pattern insights, and calibrated interaction guidance.
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
              <p style={{ fontSize: 16, fontWeight: 700, color: GREEN }}>What TensionDx&trade; detects</p>
            </div>
            {[
              "Feels ignored or dismissed",
              "Loss of control",
              "Justice sensitivity (\"that is not fair\")",
              "Fear of cost or being taken advantage of",
              "Prior bad dental experience",
              "Clinical concern vs. trust rupture",
              "Need for accountability",
              "Review or complaint risk",
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
              <p style={{ fontSize: 16, fontWeight: 700, color: "#1D4ED8" }}>What it helps prevent</p>
            </div>
            {[
              "Defensive conversations",
              "Premature clinical explanations",
              "Escalation and legal threats",
              "Public reviews and reputation damage",
              "Patient silence followed by resentment",
              "Breakdown of long-term trust",
              "Lost treatment acceptance",
              "Time, stress, and team distraction",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#1D4ED8", flexShrink: 0, lineHeight: 1.5, fontWeight: 700 }}>✓</span>
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
            {[
              "Not legal advice",
              "Not a clinical diagnosis",
              "Not a substitute for documentation, judgment, or professional response",
              "Does not replace your expertise or clinical decisions",
              "Does not guarantee a specific outcome",
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
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          {/* Wrong flow */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: RED, marginBottom: 20 }}>The mistake TensionDx&trade; helps avoid</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "Dentist explains too early",
                "Patient feels dismissed",
                "Tension escalates",
                "Trust breaks",
              ].map((step, i, arr) => (
                <div key={step}>
                  <div style={{ background: "#FBF0EF", border: `1px solid #FCA5A5`, borderRadius: 8, padding: "12px 16px", textAlign: "center" }}>
                    <p style={{ fontSize: 14, color: RED, fontWeight: 600 }}>{step}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0", color: RED, fontSize: 18 }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right flow */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: GREEN, marginBottom: 20 }}>The better first move</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "Dentist calls personally",
                "Listens first",
                "Acknowledges experience",
                "Explains only after the patient feels heard",
              ].map((step, i, arr) => (
                <div key={step}>
                  <div style={{ background: GL, border: `1px solid #BBF7D0`, borderRadius: 8, padding: "12px 16px", textAlign: "center" }}>
                    <p style={{ fontSize: 14, color: GREEN, fontWeight: 600 }}>{step}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0", color: GREEN, fontSize: 18 }}>↓</div>
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
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(109,40,217,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🛡️</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Better first conversations. Stronger relationships. Fewer ruptures.</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>TensionDx&trade; gives your team the insight to open the right way when it matters most.</p>
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
