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

export const metadata = {
  title: "Modules — DentalDiagnostix",
  description: "Behavioral intelligence for the moments that change outcomes. Six modules across the patient journey.",
};

const moduleRows = [
  {
    phase: "BEFORE THE VISIT",
    description: "Reduce friction and protect your schedule before problems reach the chair.",
    modules: [
      {
        icon: "📅",
        name: "No-Show Predictor™",
        badge: "PROTECT TIME",
        badgeColor: AMBER,
        badgeBg: "#FDF4E3",
        body: "Flags patients who are likely to miss or avoid the appointment so your team can intervene early and protect your schedule.",
        href: "/modules/noshowpredictor",
      },
      {
        icon: "💎",
        name: "Elective Case Identifier™",
        badge: "FIND OPPORTUNITY",
        badgeColor: GREEN,
        badgeBg: "#F0FDF4",
        body: "Surfaces patients who may be open to higher-value elective treatment based on motivation, language, and readiness.",
        href: "/modules/electivecaseidentifier",
      },
    ],
  },
  {
    phase: "DURING THE VISIT",
    description: "Guide the conversation and increase acceptance in the moments that matter most.",
    modules: [
      {
        icon: "👤",
        name: "Treatment Acceptance Coach™",
        badge: "DRIVE ACCEPTANCE",
        badgeColor: "#1D4ED8",
        badgeBg: "#EFF6FF",
        body: "Helps you present treatment in the order the patient can actually hear so acceptance goes up and pushback goes down.",
        href: "/modules/treatmentacceptancecoach",
      },
      {
        icon: "🛡️",
        name: "TensionDx™",
        badge: "DE-ESCALATE TENSION",
        badgeColor: RED,
        badgeBg: "#FBF0EF",
        body: "Detects frustration, legal threats, and trust rupture early so you can turn a difficult moment into a productive conversation.",
        href: "/modules/tensiondx",
      },
    ],
  },
  {
    phase: "AFTER TRUST BREAKS",
    description: "Repair relationships and prevent negative experiences from going public.",
    modules: [
      {
        icon: "⚠️",
        name: "Negative Review Warning™",
        badge: "PROTECT REPUTATION",
        badgeColor: "#C2410C",
        badgeBg: "#FFF7ED",
        body: "Identifies patients who may leave upset publicly so you can resolve issues privately and protect your online reputation.",
        href: "/modules/negativereviewwarning",
      },
      {
        icon: "🔄",
        name: "Lapsed Patient Reactivation™",
        badge: "REGAIN TRUST",
        badgeColor: P,
        badgeBg: PL,
        body: "Re-engages patients who disappeared without making them feel judged so they return with less shame and more trust.",
        href: "/modules/lapsedpatientreactivation",
      },
    ],
  },
];

export default function ModulesPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "grid", gridTemplateColumns: "repeat(3,4px)", gap: 2 }}>
              {Array(9).fill(0).map((_, i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />)}
            </span>
            <span style={{ display: "flex", alignItems: "baseline" }}><span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontSize: 17, fontWeight: 700, color: P }}>Diagnostix</span><sup style={{ fontSize: 9, color: P }}>&trade;</sup></span>
          </Link>
          <div className="lp-nav-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="lp-module-hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 14 }}>Modules</p>
            <h1 className="lp-module-h1" style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              Behavioral intelligence for the moments that change outcomes.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              DentalDiagnostix&trade; follows the patient relationship across the moments where trust is won, lost, or recovered so your team can lead every interaction with clarity.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: PL, border: `1px solid ${PB}`, borderRadius: 10, padding: "14px 18px" }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>🛡️</span>
              <p style={{ fontSize: 13, color: DARK, fontWeight: 500, lineHeight: 1.65 }}>
                Behavioral insight, not clinical data. Not a diagnosis. Not treatment advice.
              </p>
            </div>
          </div>

          {/* Right — Featured TensionDx card */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 40px rgba(109,40,217,0.1)" }}>
            <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>TensionDx&trade; — Sample Brief</span>
              <span style={{ background: P, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>FEATURED MODULE</span>
            </div>
            <div style={{ padding: "20px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 22 }}>🛡️</span>
                <p style={{ fontSize: 18, fontWeight: 700, color: P }}>TensionDx&trade;</p>
              </div>
              <p style={{ fontSize: 13, color: MUTED, marginBottom: 14 }}>For upset patients, legal threats, complaints, and trust rupture.</p>
              <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 16 }}>
                Identifies the emotional driver underneath complaints before your response makes things worse.
              </p>

              <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 8, padding: "12px 14px", marginBottom: 16 }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: 0.8, fontWeight: 600, marginBottom: 6 }}>Opening Approach</p>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>Personal call from the dentist. Listen first. Do not explain clinically too early.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.7, marginBottom: 6, fontWeight: 600 }}>Tension Level</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: RED, marginBottom: 6 }}>HIGH</p>
                  <div style={{ height: 5, background: "#F3F4F6", borderRadius: 3 }}>
                    <div style={{ height: "100%", width: "82%", background: `linear-gradient(to right, ${AMBER}, ${RED})`, borderRadius: 3 }} />
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: 0.7, marginBottom: 6, fontWeight: 600 }}>Key Drivers</p>
                  {[
                    "Feels ignored (prior concerns dismissed)",
                    "Trust erosion (previous negative experience)",
                    "Justice sensitivity (high need to feel heard)",
                  ].map((d) => (
                    <p key={d} style={{ fontSize: 11, color: TEXT, lineHeight: 1.6, marginBottom: 4 }}>
                      <span style={{ color: RED }}>· </span>{d}
                    </p>
                  ))}
                </div>
              </div>

              <Link href="/modules/tensiondx" style={{ display: "block", marginTop: 16, fontSize: 13, color: P, fontWeight: 600, textDecoration: "none" }}>
                View sample TensionDx&trade; report &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE GRID */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 32, fontWeight: 700, color: TEXT, textAlign: "center", lineHeight: 1.2, marginBottom: 8 }}>
            Behavioral modules across the patient journey
          </p>
          <p style={{ fontSize: 14, color: MUTED, textAlign: "center", fontWeight: 300, marginBottom: 16 }}>
            One behavioral engine. Multiple patient moments. Before, during, and after the appointment.
          </p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 4rem" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {moduleRows.map((row) => (
              <div key={row.phase} className="lp-module-row" style={{ gap: "2rem", alignItems: "start" }}>
                {/* Phase label */}
                <div style={{ paddingTop: 8 }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: P, fontWeight: 700, marginBottom: 8 }}>{row.phase}</p>
                  <p style={{ fontSize: 12, color: MUTED, fontWeight: 300, lineHeight: 1.65 }}>{row.description}</p>
                </div>

                {/* Two module cards */}
                {row.modules.map((mod) => (
                  <div key={mod.name} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 22px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 20 }}>{mod.icon}</span>
                        <p style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{mod.name}</p>
                      </div>
                      <span style={{ fontSize: 9, fontWeight: 700, color: mod.badgeColor, background: mod.badgeBg, padding: "3px 8px", borderRadius: 10, textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0 }}>
                        {mod.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7, marginBottom: 14 }}>{mod.body}</p>
                    <Link href={mod.href} style={{ fontSize: 13, color: P, fontWeight: 600, textDecoration: "none" }}>
                      Learn more &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(109,40,217,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>⚡</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>One engine. Six modules. Stronger relationships. Better results.</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>DentalDiagnostix&trade; modules work together so your team can reduce friction, increase trust, and improve case acceptance.</p>
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
