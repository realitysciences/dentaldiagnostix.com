import Link from "next/link";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";
const GREEN = "#15803D";
const GL = "#F0FDF4";
const RED = "#9B3B3B";

export const metadata = {
  title: "Sample Report — DentalDiagnostix",
  description: "See what the dentist receives before the appointment. A sample Patient Behavioral Brief generated from a pre-visit voice intake.",
};

export default function SampleReportPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontSize: 18, fontWeight: 700, color: P }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P, verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </Link>
          <div className="lp-nav-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HERO + REPORT CARD */}
      <section style={{ background: "#fff", padding: "5rem 0 4rem" }}>
        <div className="lp-module-hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", gap: "5rem", alignItems: "flex-start" }}>

          {/* LEFT */}
          <div style={{ paddingTop: "1rem" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 16 }}>Sample report</p>
            <h1 className="lp-module-h1" style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              See what the dentist receives before the appointment.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 40 }}>
              A sample behavioral brief generated from a patient&apos;s pre-visit voice intake.
            </p>

            {[
              {
                icon: "🎙️",
                title: "Voice intake captures the patient's story.",
                body: <>DentalDiagnostix&trade; turns it into <span style={{ color: P, fontWeight: 600 }}>chairside insight.</span></>
              },
              {
                icon: "🚫",
                title: "Prevents the wrong opening.",
                body: "Understand the patient before you walk in so you start the appointment the right way."
              },
              {
                icon: "🛡️",
                title: "Flags trust friction early.",
                body: "See what could create resistance so you can build trust from the first hello."
              },
              {
                icon: "💬",
                title: "Guides the first two minutes.",
                body: "Know what to say, what to avoid, and how to lead with empathy and clarity."
              },
            ].map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: PL, border: `1px solid ${PB}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.65 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — REPORT CARD */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, boxShadow: "0 8px 48px rgba(109,40,217,0.10)", overflow: "hidden" }}>
            {/* Card header */}
            <div style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: TEXT }}>Patient Behavioral Brief</p>
              <p style={{ fontSize: 11, color: MUTED }}>Generated: May 7, 2025</p>
            </div>

            {/* Patient + overall approach */}
            <div style={{ padding: "20px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: DARK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>SM</span>
                </div>
                <div>
                  <p style={{ fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 4 }}>Sarah M.</p>
                  <p style={{ fontSize: 12, color: MUTED, marginBottom: 2 }}>42 &nbsp;|&nbsp; New Patient</p>
                  <p style={{ fontSize: 12, color: MUTED }}>Hasn&apos;t seen a dentist in 3+ years</p>
                </div>
              </div>
              <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 10, padding: "12px 14px", minWidth: 150, flexShrink: 0 }}>
                <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "1px", color: P, fontWeight: 700, marginBottom: 6 }}>Overall approach</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: P, lineHeight: 1.2, marginBottom: 8 }}>Empathize<br />&amp; Guide</p>
                <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.65 }}>Build trust early.<br />Explain clearly.<br />Give control.</p>
              </div>
            </div>

            {/* Insight rows */}
            {[
              {
                icon: "🧠",
                label: "KEY INSIGHT",
                title: "Shame-based avoidance, not simple fear.",
                body: "She's carrying embarrassment and worries about judgment. Comfort and respect will matter more than clinical details.",
              },
              {
                icon: "🛡️",
                label: "TRUST RISK",
                title: "Sensitive to feeling judged or rushed.",
                body: "Past experiences may have felt critical or impersonal. High risk of shutting down if trust isn't established.",
              },
              {
                icon: "⚖️",
                label: "DECISION PATTERN",
                title: "Needs options and time before committing.",
                body: "Thoughtful and research-oriented. Wants to understand choices and long-term value before deciding.",
              },
            ].map((row) => (
              <div key={row.label} style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#F9FAFB", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{row.icon}</span>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1px", color: MUTED, fontWeight: 700, marginBottom: 4 }}>{row.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 4 }}>{row.title}</p>
                  <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65, fontWeight: 300 }}>{row.body}</p>
                </div>
              </div>
            ))}

            {/* Opening recommendation */}
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", gap: 14, alignItems: "flex-start", background: "#FAFAF9" }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#FEF9C3", border: "1px solid #FDE68A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>⭐</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1px", color: MUTED, fontWeight: 700, marginBottom: 10 }}>Opening recommendation</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["Acknowledge the gap. Remove shame.", "Explain what will happen and why.", "Give choices and control.", "Invite questions. Do not rush."].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: GREEN, fontSize: 13, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: TEXT }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What not to say */}
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#FEF2F2", border: "1px solid #FECACA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>✗</span>
              <div>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1px", color: RED, fontWeight: 700, marginBottom: 10 }}>What not to say</p>
                {[`"Why haven't you been in?"`, `"You really need to get this taken care of."`, `"This is going to take a while."`].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
                    <span style={{ color: "#D1D5DB", fontSize: 11, flexShrink: 0, marginTop: 2 }}>–</span>
                    <span style={{ fontSize: 12.5, color: MUTED, fontStyle: "italic" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Say instead */}
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", gap: 14, alignItems: "flex-start", background: GL }}>
              <span style={{ width: 36, height: 36, borderRadius: "50%", background: "#DCFCE7", border: "1px solid #86EFAC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>✓</span>
              <div>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1px", color: GREEN, fontWeight: 700, marginBottom: 10 }}>Say instead</p>
                {[`"I'm glad you came in. We'll take this one step at a time."`, `"I'll explain what I'm seeing as we go."`, `"You're in control of the plan. We'll decide together."`].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
                    <span style={{ color: GREEN, fontSize: 11, flexShrink: 0, marginTop: 2 }}>–</span>
                    <span style={{ fontSize: 12.5, color: TEXT, fontStyle: "italic", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card footer */}
            <div style={{ padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14, color: MUTED }}>🔒</span>
              <p style={{ fontSize: 12, color: MUTED, fontWeight: 300 }}>Behavioral insight, not clinical data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE SECTION */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: TEXT, textAlign: "center", marginBottom: "3rem" }}>The difference in the first two minutes.</h2>
          <div className="lp-module-2col" style={{ gap: "2.5rem", alignItems: "center" }}>

            {/* Without */}
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#FEF2F2", border: "1px solid #FECACA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>✗</span>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>Without DentalDiagnostix&trade;</p>
              </div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                You walk in blind and rely on standard clinical questions, which can trigger defensiveness or shut down the conversation.
              </p>
              {[`"Why haven't you been in?"`, `"You really need to take better care of your teeth."`, `"We have a lot to get through today."`].map((q) => (
                <p key={q} style={{ fontSize: 13, color: "#9CA3AF", fontStyle: "italic", marginBottom: 6 }}>{q}</p>
              ))}
            </div>

            {/* VS */}
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: DARK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>VS.</span>
            </div>

            {/* With */}
            <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 12, padding: "2rem" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#DCFCE7", border: "1px solid #86EFAC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT }}>With DentalDiagnostix&trade;</p>
              </div>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                You walk in informed and lead with what matters. The patient feels seen, heard, and more open to your guidance.
              </p>
              {[`"I'm glad you came in. We'll take this one step at a time."`, `"I'll explain what I'm seeing as we go."`, `"You're in control of the plan. We'll decide together."`].map((q) => (
                <p key={q} style={{ fontSize: 13, color: P, fontStyle: "italic", fontWeight: 500, marginBottom: 6 }}>{q}</p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(109,40,217,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>👥</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>Want to see what this would look<br />like for your practice?</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Every patient is different. See how DentalDiagnostix&trade; helps you start every visit with the right insight.</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <Link href="/signup" style={{ background: P, color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>
              Request Early Access
            </Link>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#A78BFA" }}>🔒</span>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>No obligation. Limited early access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "2rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, color: MUTED, fontWeight: 500 }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: MUTED, display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/privacy" style={{ color: MUTED, textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral intake only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
