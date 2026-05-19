import Link from "next/link";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";
const GREEN = "#15803D";
const RED = "#9B3B3B";

export const metadata = {
  title: "Request Received — DentalDiagnostix",
  description: "Your early access request has been received. We will review your practice fit and follow up with next steps.",
};

export default function RequestReceivedPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "grid", gridTemplateColumns: "repeat(3,4px)", gap: 2 }}>
              {Array(9).fill(0).map((_, i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />)}
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontSize: 17, fontWeight: 700, color: P }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P }}>&trade;</sup>
          </Link>
          <div className="lp-nav-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="lp-module-hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left */}
          <div>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F0FDF4", border: `2px solid #BBF7D0`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 24 }}>
              ✓
            </div>
            <h1 className="lp-module-h1" style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.15, marginBottom: 12 }}>
              Your early access request has been received.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: P, fontWeight: 600, marginBottom: 12 }}>
              We will review your practice fit and follow up with next steps.
            </p>
            <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>
              DentalDiagnostix&trade; is currently in limited early access. Submitting this form does not create an obligation or guarantee access.
            </p>
          </div>

          {/* Right — report card with envelope */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 40px rgba(109,40,217,0.1)" }}>
              <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Patient Behavioral Brief</span>
                <span style={{ fontSize: 9, color: "#A78BFA", display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA", display: "inline-block" }} />
                  Pending setup
                </span>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <p style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 2 }}>Sarah M., 38</p>
                <p style={{ fontSize: 11, color: MUTED, marginBottom: 16 }}>New patient &middot; Thu Apr 17 &middot; 2:00 PM</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {[
                    { label: "Avoidance type", value: "Shame-based", color: P },
                    { label: "Legal risk", value: "Elevated", color: RED },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 7, padding: 10 }}>
                      <p style={{ fontSize: 9, textTransform: "uppercase", color: MUTED, letterSpacing: 0.7, marginBottom: 4 }}>{s.label}</p>
                      <p style={{ fontSize: 12, fontWeight: 600, color: s.color }}>{s.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: PL, borderLeft: `2px solid ${P}`, borderRadius: "0 6px 6px 0", padding: "10px 12px" }}>
                  <p style={{ fontSize: 9, textTransform: "uppercase", color: P, letterSpacing: 0.8, marginBottom: 5, fontWeight: 600 }}>Opening approach</p>
                  <p style={{ fontSize: 12, color: TEXT, lineHeight: 1.6, filter: "blur(3px)", userSelect: "none" }}>Open with curiosity, not assessment. Normalize the gap. Do not comment on her teeth.</p>
                </div>
              </div>
            </div>
            {/* Envelope decoration */}
            <div style={{ position: "absolute", bottom: -16, right: -12, fontSize: 48, lineHeight: 1 }}>📧</div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 32, fontWeight: 700, color: TEXT, textAlign: "center", marginBottom: 16 }}>What happens next</p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 4rem" }} />

          <div className="lp-module-3col" style={{ gap: "2.5rem", position: "relative" }}>
            <div style={{ position: "absolute", top: 28, left: "16.7%", right: "16.7%", height: 1, borderTop: `2px dashed ${PB}`, zIndex: 0 }} />
            {[
              {
                num: 1,
                icon: "📋",
                title: "Practice fit review",
                body: "We look at your practice type, patient flow, and communication needs to make sure it is a good fit.",
              },
              {
                num: 2,
                icon: "💬",
                title: "Early access conversation",
                body: "A short call to understand your challenges, answer questions, and explore how it fits your workflow.",
              },
              {
                num: 3,
                icon: "⚙️",
                title: "Pilot setup",
                body: "If there is alignment, we configure your pre-visit intake and behavioral brief to match your practice and patients.",
              },
            ].map((step) => (
              <div key={step.num} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>
                  {step.icon}
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: P, marginBottom: 6 }}>Step {step.num}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{step.title}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARE FOR THE CALL */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 14, padding: "2rem 2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 24 }}>💡</span>
              <p style={{ fontSize: 16, fontWeight: 700, color: DARK }}>Want to prepare for the call?</p>
            </div>
            <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 20 }}>
              Think about one patient type your team repeatedly struggles with:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "👤 Anxious new patients",
                "🛡️ Treatment avoiders",
                "📅 Long-gap patients",
                "🔄 Patients who agree then disappear",
                "✓ Patients with low trust",
              ].map((tag) => (
                <span key={tag} style={{ background: "#fff", border: `1px solid ${PB}`, borderRadius: 20, padding: "6px 14px", fontSize: 13, color: DARK, fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 32 }}>Want to explore more while you wait?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link href="/sample-report" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: "16px 24px", textDecoration: "none", color: TEXT, fontSize: 15, fontWeight: 600, background: "#fff" }}>
              <span>📊</span> View sample report again
            </Link>
            <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: "16px 24px", textDecoration: "none", color: TEXT, fontSize: 15, fontWeight: 600, background: "#fff" }}>
              <span>🏠</span> Return to homepage
            </Link>
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Request received.</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#A78BFA" }}>Next step: practice fit review.</p>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300, maxWidth: 380, lineHeight: 1.7 }}>
            DentalDiagnostix&trade; is currently in limited early access. Submitting a request does not create an obligation or guarantee access.
          </p>
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
