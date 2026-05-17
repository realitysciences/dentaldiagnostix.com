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
  title: "How It Works — DentalDiagnostix",
  description: "A simple pre-visit check-in becomes a chairside behavioral brief for the dentist. See how DentalDiagnostix works before the appointment.",
};

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 14 }}>How it works</p>
            <h1 style={{ fontSize: 46, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              How DentalDiagnostix&trade; works before the appointment.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>
              A simple pre-visit check-in becomes a chairside behavioral brief for the dentist.
            </p>
          </div>

          {/* Right — phone + report mockup */}
          <div style={{ position: "relative", height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Phone mockup (voice intake) */}
            <div style={{ position: "absolute", left: 0, top: 20, width: 160, background: DARK, borderRadius: 24, padding: "12px 10px", boxShadow: "0 8px 32px rgba(0,0,0,0.25)", zIndex: 2 }}>
              <div style={{ background: "#1A1640", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ background: "rgba(109,40,217,0.4)", padding: "10px 12px", textAlign: "center" }}>
                  <p style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>Voice Intake</p>
                  <p style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>Question 3 of 8</p>
                </div>
                <div style={{ padding: "10px 12px 12px" }}>
                  <div style={{ height: 6, background: "#2D2A5E", borderRadius: 3, marginBottom: 8 }}>
                    <div style={{ height: "100%", width: "37%", background: P, borderRadius: 3 }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, marginBottom: 10, height: 28 }}>
                    {[8, 14, 10, 20, 12, 18, 8, 16, 10].map((h, i) => (
                      <div key={i} style={{ width: 3, height: h, background: i < 5 ? "#A78BFA" : "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                    ))}
                  </div>
                  <div style={{ background: P, borderRadius: 8, padding: "6px", textAlign: "center" }}>
                    <p style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>Tap to respond</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report card preview */}
            <div style={{ position: "absolute", right: 0, top: 0, width: 280, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 40px rgba(109,40,217,0.12)", zIndex: 1 }}>
              <div style={{ background: DARK, padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Patient Behavioral Brief</span>
                <span style={{ fontSize: 9, color: "#A78BFA" }}>Ready</span>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 2 }}>Sarah M., 38</p>
                <p style={{ fontSize: 10, color: MUTED, marginBottom: 12 }}>New patient &middot; Thu Apr 17 &middot; 2:00 PM</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
                  {[
                    { label: "Avoidance", value: "Shame-based", color: P },
                    { label: "Legal risk", value: "Elevated", color: RED },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 6, padding: 8 }}>
                      <p style={{ fontSize: 8, textTransform: "uppercase", color: MUTED, letterSpacing: 0.5, marginBottom: 3 }}>{s.label}</p>
                      <p style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: PL, borderLeft: `2px solid ${P}`, borderRadius: "0 4px 4px 0", padding: "8px 10px", marginBottom: 8 }}>
                  <p style={{ fontSize: 8, textTransform: "uppercase", color: P, letterSpacing: 0.8, marginBottom: 4, fontWeight: 600 }}>Opening approach</p>
                  <p style={{ fontSize: 10, color: TEXT, lineHeight: 1.6 }}>Open with curiosity, not assessment. Normalize the gap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 32, fontWeight: 700, color: TEXT, textAlign: "center", lineHeight: 1.2, marginBottom: 16 }}>
            The process is simple. The impact is powerful.
          </p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 4rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", position: "relative" }}>
            {/* Dashed connector line */}
            <div style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 1, borderTop: `2px dashed ${PB}`, zIndex: 0 }} />

            {[
              {
                num: 1,
                icon: "✈",
                title: "The practice sends the link",
                body: "The link goes out with the existing appointment confirmation or pre-visit message. No new software for your team.",
              },
              {
                num: 2,
                icon: "💬",
                title: "The patient completes a short voice or text intake",
                body: "No login. No clinical form. One question at a time. Takes about 3 to 5 minutes.",
              },
              {
                num: 3,
                icon: "🧠",
                title: "DentalDiagnostix™ maps the behavioral terrain",
                body: "Our system listens for patterns in experience, trust, communication style, concerns, and decision-making preferences.",
              },
              {
                num: 4,
                icon: "📄",
                title: "The dentist receives the brief before the visit",
                body: "Walk in knowing how to open, what to avoid, and how to build trust from the first minute.",
              },
            ].map((step) => (
              <div key={step.num} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>
                  {step.icon}
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: P, marginBottom: 6 }}>Step {step.num}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 10, lineHeight: 1.3 }}>{step.title}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CHANGES FOR YOUR TEAM */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 34, fontWeight: 700, color: TEXT, textAlign: "center", lineHeight: 1.2, marginBottom: 8 }}>
            What changes for your team?
          </p>
          <p style={{ fontSize: 15, color: MUTED, textAlign: "center", fontWeight: 300, marginBottom: 16 }}>Almost nothing. The workflow stays the same.</p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 4rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }}>
            {[
              {
                icon: "👤",
                role: "Front Desk",
                body: "Sends or includes the link in the existing confirmation process.",
              },
              {
                icon: "👤",
                role: "Patient",
                body: "Completes the check-in before arrival from their phone (voice or text).",
              },
              {
                icon: "🦷",
                role: "Dentist",
                body: "Reads the behavioral brief before entering the operatory.",
              },
              {
                icon: "🛡️",
                role: "Practice",
                body: "Keeps the relationship under your brand. We work behind the scenes.",
              },
            ].map((col) => (
              <div key={col.role} style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: PL, border: `1px solid ${PB}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 16px" }}>
                  {col.icon}
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{col.role}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS / IS NOT */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 34, fontWeight: 700, color: TEXT, textAlign: "center", marginBottom: 16 }}>What it is. And what it is not.</p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 3rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* It is */}
            <div style={{ background: GL, border: `1px solid #BBF7D0`, borderRadius: 12, padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>✓</div>
                <p style={{ fontSize: 17, fontWeight: 700, color: GREEN }}>It is</p>
              </div>
              {[
                "Behavioral context about the person, not the condition",
                "Communication guidance for starting the appointment",
                "Trust-friction awareness before it becomes resistance",
                "Opening recommendations tailored to the patient",
                "A tool to help you build rapport and connection",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>✓</span>
                  <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* It is not */}
            <div style={{ background: "#FBF0EF", border: `1px solid #FCA5A5`, borderRadius: 12, padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: RED, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, color: "#fff" }}>✕</div>
                <p style={{ fontSize: 17, fontWeight: 700, color: RED }}>It is not</p>
              </div>
              {[
                "A diagnosis",
                "A treatment plan or clinical recommendation",
                "Mental health therapy or counseling",
                "A replacement for your judgment or expertise",
                "A medical or clinical decision support system",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: RED, fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>✕</span>
                  <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 12, color: MUTED, textAlign: "center", marginTop: 20 }}>
            🔒 DentalDiagnostix&trade; provides behavioral insight only. It does not provide clinical advice or diagnose conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(109,40,217,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🏥</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>See how it fits into your practice.</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>A better opening. A stronger relationship. All before the appointment even starts.</p>
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
