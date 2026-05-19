import Link from "next/link";

const P = "#6D28D9";   // primary purple
const PL = "#EDE9FE";  // light purple bg
const PB = "#DDD6FE";  // purple border
const DARK = "#1E1B4B"; // dark navy
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";
const AMBER = "#B07D2E";
const RED = "#9B3B3B";

export default function LandingPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div className="lp-nav-inner" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 18, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 18, fontWeight: 700, color: P }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P, verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </a>
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none", whiteSpace: "nowrap" }}>
              Request Early Access &rarr;
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "5rem 0 3rem" }}>
        <div className="lp-section lp-hero-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <h1 className="lp-hero-h1" style={{ fontSize: 58, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 8 }}>
              Know who you&apos;re treating before they sit down.
            </h1>
            <div style={{ width: 48, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 16, color: P, fontWeight: 600, marginBottom: 10 }}>This is not a digital intake form.</p>
            <p style={{ fontSize: 16, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
              It&apos;s a behavioral briefing that tells you how to open the appointment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {[
                { icon: "👤", title: "Understand the person behind the chart.", body: "See what drives their decisions, concerns, and behavior." },
                { icon: "💬", title: "Anticipate needs and concerns.", body: "Walk in prepared. Build trust faster." },
                { icon: "🎯", title: "Start the appointment the right way.", body: "Say the right thing. From the first hello." },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 36, height: 36, background: PL, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, marginBottom: 2 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.6 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#sample-report" style={{ background: P, color: "#fff", padding: "13px 28px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>See a sample report</a>
              <a href="/signup" style={{ color: P, fontSize: 15, fontWeight: 500, textDecoration: "none", border: `1.5px solid ${PB}`, padding: "13px 24px", borderRadius: 8 }}>Request Early Access</a>
            </div>
          </div>

          {/* Right — report card preview */}
          <div id="sample-report" className="lp-report-card" style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 48px rgba(109,40,217,0.12)" }}>
            <div style={{ background: DARK, padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "1px", color: "rgba(255,255,255,0.5)" }}>Patient Behavioral Brief</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#A78BFA" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", display: "inline-block" }} />
                Generated 2 hours before appointment
              </span>
            </div>

            <div className="lp-report-body" style={{ padding: "1.5rem 2rem" }}>
              <div className="lp-report-patient" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", marginBottom: "1.25rem", gap: 16 }}>
                <div>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 22, fontWeight: 700, color: TEXT }}>Sarah M., 38</p>
                  <p style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>New patient &middot; Last dental visit: 3+ years ago</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>Thursday, Apr 17 &middot; 2:00 PM</p>
                  <p style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>Chief complaint: &ldquo;overdue checkup, I know&rdquo;</p>
                </div>
              </div>

              <div className="lp-four-col" style={{ gap: 8, marginBottom: "1.25rem" }}>
                {[
                  { label: "Avoidance type", value: "Shame-based", color: P },
                  { label: "Compliance risk", value: "Moderate", color: AMBER },
                  { label: "Legal risk", value: "Elevated", color: RED },
                  { label: "Hygiene rel.", value: "Guilt-driven", color: TEXT },
                ].map((s) => (
                  <div key={s.label} style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 8, padding: 12 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.7px", marginBottom: 5 }}>{s.label}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: s.color }}>{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="lp-two-col" style={{ gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ background: PL, borderLeft: `2px solid ${P}`, borderRadius: "0 6px 6px 0", padding: "11px 13px" }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Terrain summary</p>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: TEXT, filter: "blur(4px)", userSelect: "none" }}>She stopped coming in because a dentist made her feel like a bad patient. Walk in without any commentary on the gap or the state of her teeth.</p>
                </div>
                <div style={{ background: "#FDF4E3", borderLeft: `2px solid ${AMBER}`, borderRadius: "0 6px 6px 0", padding: "11px 13px" }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: AMBER, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Compliance signal</p>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: TEXT, filter: "blur(4px)", userSelect: "none" }}>History of agreeing to treatment plans and quietly defaulting on scheduling. Confirm the financial pathway before presenting the plan.</p>
                </div>
              </div>

              <div className="lp-two-col" style={{ gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ background: "#FBF0EF", borderLeft: `2px solid ${RED}`, borderRadius: "0 6px 6px 0", padding: "11px 13px" }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: RED, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Legal risk flag</p>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: TEXT, filter: "blur(4px)", userSelect: "none" }}>References a prior provider as having done something wrong. Has considered leaving a public review. Document all recommendations carefully.</p>
                </div>
                <div style={{ background: PL, borderLeft: `2px solid ${P}`, borderRadius: "0 6px 6px 0", padding: "11px 13px" }}>
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Dentist history</p>
                  <p style={{ fontSize: 12, lineHeight: 1.65, color: TEXT, filter: "blur(4px)", userSelect: "none" }}>Two prior dentists. Primary negative experience: told her teeth were a mess and felt lectured, then abandoned treatment mid-plan.</p>
                </div>
              </div>

              <div>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 10, fontWeight: 600 }}>Dentist do&apos;s and don&apos;ts</p>
                <div className="lp-two-col" style={{ gap: "1rem" }}>
                  <div style={{ background: "#F0FDF4", borderRadius: 6, padding: "10px 13px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#15803D", fontWeight: 600, letterSpacing: "0.8px", marginBottom: 8 }}>DO</p>
                    {["Open with curiosity, not assessment.", "Normalize long gaps between visits.", "Present the financial pathway first."].map((t, i) => (
                      <p key={i} style={{ fontSize: 12, color: TEXT, lineHeight: 1.6, marginBottom: i < 2 ? 7 : 0, paddingLeft: 10, borderLeft: "2px solid #15803D", filter: "blur(3.5px)", userSelect: "none" }}>{t}</p>
                    ))}
                  </div>
                  <div style={{ background: "#FBF0EF", borderRadius: 6, padding: "10px 13px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: RED, fontWeight: 600, letterSpacing: "0.8px", marginBottom: 8 }}>DON&apos;T</p>
                    {["Comment on the state of her teeth.", "Reference what she should have done.", "Skip documentation on any recommendation."].map((t, i) => (
                      <p key={i} style={{ fontSize: 12, color: TEXT, lineHeight: 1.6, marginBottom: i < 2 ? 7 : 0, paddingLeft: 10, borderLeft: `2px solid ${RED}`, filter: "blur(3.5px)", userSelect: "none" }}>{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VS SECTION */}
      <section style={{ background: DARK, padding: "4rem 0" }}>
        <div className="lp-section lp-vs-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", marginBottom: 14, fontWeight: 500 }}>Their chart</span>
            <p style={{ fontSize: 28, fontWeight: 700, color: "rgba(255,255,255,0.55)", lineHeight: 1.3 }}>Tells you what&apos;s wrong.</p>
          </div>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>VS.</span>
          </div>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#A78BFA", marginBottom: 14, fontWeight: 500 }}>DentalDiagnostix</span>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>Tells you what they&apos;re carrying in.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY GRID */}
      <section style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, padding: "4rem 0" }}>
        <div className="lp-section lp-cred-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }}>
          {[
            { icon: "🦷", title: "Built by a Dentist", body: "David Benson, DDS. Licensed dentist, CA and AZ. Founder, DentalDiagnostix." },
            { icon: "🔍", title: "Behavioral Insight, Not Clinical Data", body: "This is not a diagnosis. Not a treatment plan. It is how you connect." },
            { icon: "🏷️", title: "White-Labeled for Your Practice", body: "Your brand. Your patients. We work behind the scenes." },
            { icon: "⚡", title: "No Workflow Change", body: "Works with your existing new-patient process. Easy to implement." },
          ].map((f) => (
            <div key={f.title}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
              <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{f.title}</p>
              <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT THE PATIENT EXPERIENCES */}
      <section className="lp-section" style={{ padding: "5rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
        <div className="lp-two-col lp-intake-gap" style={{ gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>What the patient experiences</p>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2 }}>A conversation, not a form.</h2>
            <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 24 }}>
              The intake takes about 8 minutes and arrives alongside your existing appointment confirmation. It does not ask about flossing frequency or last cleaning date. It listens for what is actually underneath.
            </p>
            <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              Patients respond by voice or by typing, in their own words, without checkboxes or clinical framing. Nothing about it feels like a medical intake. That is intentional.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: 24 }}>
              {[
                { label: "Covers", value: "Avoidance history · Past provider relationships · Treatment decision patterns · Emotional context" },
                { label: "Format", value: "Voice or text · Any device · No login required · One question at a time" },
                { label: "Time", value: "Approx. 8 minutes · Completion rate above 70% for new patients" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1px", color: P, fontWeight: 600, width: 60, flexShrink: 0, paddingTop: 2 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: `3px solid ${P}`, paddingLeft: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 5 }}>Patients never see the DentalDiagnostix name.</p>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                The intake arrives under your practice name and branding. You get the credit for knowing them before they sit down.
              </p>
            </div>
          </div>

          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(109,40,217,0.08)" }}>
            <div style={{ background: "#F9FAFB", padding: "10px 16px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: BORDER, display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: BORDER, display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: BORDER, display: "inline-block" }} />
              <span style={{ flex: 1, background: BORDER, borderRadius: 4, height: 18, marginLeft: 8, opacity: 0.5 }} />
            </div>
            <div style={{ background: DARK, padding: "14px 20px" }}>
              <p style={{ margin: 0, fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color: "#A78BFA" }}>Dr. Kim&apos;s Family Dental</p>
              <p style={{ margin: "3px 0 0", fontSize: 14, color: "#fff", fontWeight: 500 }}>Pre-visit check-in &middot; Before your appointment</p>
            </div>
            <div style={{ padding: "16px 20px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: P, textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Question 5 of 8</span>
                <span style={{ fontSize: 10, color: "#A0B0C0" }}>About 4 minutes left</span>
              </div>
              <div style={{ height: 4, background: "#F3F4F6", borderRadius: 2 }}>
                <div style={{ height: "100%", width: "62%", background: P, borderRadius: 2 }} />
              </div>
            </div>
            <div style={{ padding: "20px 20px 16px" }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ height: 13, background: TEXT, borderRadius: 3, width: "88%", marginBottom: 8, opacity: 0.1 }} />
                <div style={{ height: 13, background: TEXT, borderRadius: 3, width: "72%", opacity: 0.1 }} />
              </div>
              <div style={{ background: "#F9FAFB", borderRadius: 10, padding: "16px 18px", border: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 12 }}>♪</span>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
                    {[14, 22, 18, 28, 16, 24, 20, 32, 18, 26, 14, 20, 28, 16, 22].map((h, i) => (
                      <div key={i} style={{ width: 3, height: h, background: i < 9 ? P : BORDER, borderRadius: 2, opacity: i < 9 ? 0.7 : 0.4 }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>0:23</span>
                </div>
                <div style={{ height: 10, background: BORDER, borderRadius: 2, width: "90%", marginBottom: 6, opacity: 0.5 }} />
                <div style={{ height: 10, background: BORDER, borderRadius: 2, width: "65%", opacity: 0.5 }} />
              </div>
            </div>
            <div style={{ padding: "0 20px 20px", display: "flex", gap: 8 }}>
              <div style={{ flex: 1, padding: "10px", background: "#F9FAFB", borderRadius: 8, border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: RED, display: "inline-block" }} />
                <span style={{ fontSize: 12, color: MUTED }}>Tap to speak</span>
              </div>
              <div style={{ flex: 1, padding: "10px", background: P, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>Next →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>How it works</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 14 }}>Three steps. Nothing changes in your workflow.</h2>
          <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 520, marginBottom: "4rem" }}>
            DentalDiagnostix plugs into your existing appointment confirmation process. No new software for your front desk. No new steps for your team.
          </p>
          <div className="lp-three-col" style={{ gap: "3rem" }}>
            {[
              { n: "01", title: "Patient completes the intake", body: "A link goes out alongside your existing appointment confirmation. The intake takes about 8 minutes and asks about the relationship they have with their mouth, their past providers, and the patterns underneath their avoidance." },
              { n: "02", title: "Terrain is mapped", body: "Responses are analyzed using a behavioral methodology built on a decade of psychological terrain work, developed by a dentist who spent years wondering why the same patients kept failing treatment no matter what was clinically done." },
              { n: "03", title: "Report arrives before the appointment", body: "You receive a one-page behavioral briefing: avoidance pattern, compliance risk, legal flags, dentist history, and specific dos and donts. Two minutes of reading. A completely different appointment." },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontSize: 52, fontWeight: 700, color: PB, lineHeight: 1, marginBottom: 14 }}>{s.n}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{s.title}</p>
                <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT BY A DENTIST */}
      <section className="lp-section" style={{ padding: "5rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
        <div className="lp-two-col lp-built-col" style={{ gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 18, fontWeight: 600 }}>Built by a dentist</p>
            <blockquote style={{ fontFamily: "Lora, Georgia, serif", fontSize: 21, fontStyle: "italic", color: TEXT, lineHeight: 1.6, marginBottom: 20 }}>
              &ldquo;I spent years wondering why the same patients kept failing treatment. Not clinically, but behaviorally. The answer was never in their chart. It was in who they were.&rdquo;
            </blockquote>
            <p style={{ fontSize: 13, color: MUTED }}>
              <strong style={{ color: TEXT }}>David Benson, DDS</strong>
              {" "}&middot; Licensed dentist, CA and AZ &middot; Founder, DentalDiagnostix
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { title: "Not a tech company guessing at dentistry", body: "DentalDiagnostix was built by someone who has sat in the operatory, managed treatment resistance, and navigated difficult patients without any of this information." },
              { title: "The methodology exists outside dentistry", body: "The underlying behavioral terrain framework has been applied across hundreds of psychology sessions. DentalDiagnostix is a purpose-built vertical application of that methodology." },
              { title: "Not a clinical tool", body: "Behavioral intake only. No diagnoses, no treatment recommendations, no clinical liability. Just the context you never had before the patient sat down." },
              { title: "Your name. Your brand. Your credit.", body: "Patients never see DentalDiagnostix. The intake arrives under your practice name. The insight lands as yours." },
            ].map((f) => (
              <div key={f.title} style={{ borderLeft: `2px solid ${P}`, paddingLeft: "1rem" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{f.title}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Early feedback</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: "2.5rem" }}>From dentists who saw the sample report</h2>
          <div className="lp-two-col" style={{ gap: "1.25rem" }}>
            {[
              { quote: "The shame versus fear distinction alone would have changed how I opened at least three appointments last month. I would have walked in and said all the wrong things.", name: "Dr. R.A.", title: "General dentist, 14 years practice" },
              { quote: "I have used intake forms my whole career. I have never had one tell me a patient might leave a review before I have even met them. That is a different category of tool.", name: "Dr. K.L.", title: "Prosthodontist, group practice" },
            ].map((t) => (
              <div key={t.name} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 14, fontStyle: "italic", color: TEXT, lineHeight: 1.75, marginBottom: 16 }}>&ldquo;{t.quote}&rdquo;</p>
                <p style={{ fontSize: 11, color: MUTED }}><strong style={{ color: TEXT }}>{t.name}</strong> &middot; {t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: DARK, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#A78BFA", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Pricing</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Simple, flat pricing.</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: "3rem" }}>Flat monthly rate. Unlimited new patient intakes. No setup fees, no per-report charges.</p>
          <div className="lp-pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", maxWidth: 660 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", marginBottom: 16 }}>Solo practice</p>
              <p style={{ fontSize: 38, fontWeight: 700, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>$000<span style={{ fontSize: 12 }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: 24 }}>One provider. Unlimited new patient behavioral reports.</p>
              {["Full terrain report with dos and donts", "Legal risk flag system", "Dentist history summary", "PDF export for patient record"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: "#A78BFA", fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="/signup" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 14 }}>Contact for pricing</a>
            </div>
            <div style={{ background: P, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", letterSpacing: "1px", marginBottom: 16 }}>Group practice</p>
              <p style={{ fontSize: 38, fontWeight: 700, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>$000<span style={{ fontSize: 12 }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 300, marginBottom: 24 }}>Up to 5 providers. Practice dashboard and compliance trend tracking.</p>
              {["Everything in Solo", "Multi-provider dashboard", "Compliance trend analytics", "Priority support"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="/signup" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", background: "#fff", borderRadius: 8, color: P, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Contact for pricing</a>
            </div>
          </div>

          <div style={{ maxWidth: 1100, marginTop: "3rem" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px", marginBottom: 16, fontWeight: 600 }}>Add-on modules</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
              {[
                { id: "tensiondx", name: "TensionDx", desc: "Upset patient triage and de-escalation scripts" },
                { id: "noshowpredictor", name: "No-Show Predictor", desc: "Behavioral risk flag before the appointment" },
                { id: "treatmentcoach", name: "Treatment Coach", desc: "Case presentation language by behavioral profile" },
                { id: "lapsedpatients", name: "Lapsed Reactivation", desc: "Personalized outreach from behavioral history" },
                { id: "reviewwarning", name: "Review Warning", desc: "Flag patients likely to post publicly" },
                { id: "electivecases", name: "Elective Identifier", desc: "Surface patients primed for elective treatment" },
              ].map((m) => (
                <a key={m.id} href={`#${m.id}`} style={{ display: "block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 16px", textDecoration: "none" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#C4B5FD", marginBottom: 4 }}>{m.name}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1.5 }}>{m.desc}</p>
                </a>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: 12, padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, textTransform: "uppercase", color: "#C4B5FD", letterSpacing: "1px", marginBottom: 8 }}>Full Suite Bundle</p>
                <p style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>+$000<span style={{ fontSize: 12 }}>/month</span></p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>All six modules added to your base plan. Contact for bundle pricing.</p>
              </div>
              <a href="/signup" style={{ flexShrink: 0, padding: "10px 22px", background: P, borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 600 }}>Contact for pricing</a>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Pricing is set during early access. <a href="/signup" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Request access to discuss.</a></p>
        </div>
      </section>

      {/* TENSIONDX */}
      <section id="tensiondx" style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>TensionDx — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 620 }}>When a patient mentions a lawyer, you have about 48 hours.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            This is not conflict resolution advice. It is a psychological read of what your patient actually needs to hear, and the specific language to say it. One prevented lawsuit covers years of subscription cost.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start", marginBottom: "3.5rem" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample output</p>
              <div style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>TensionDx &mdash; Upset Patient Triage</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#C4B5FD" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4B5FD", display: "inline-block" }} />
                    Moderate risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Patricia H., 58</p>
                    <p style={{ fontSize: 12, color: MUTED }}>Post-op complaint &middot; Crown prep &middot; Day 3 &middot; Mentioned &ldquo;lawyer&rdquo; to front desk</p>
                  </div>
                  {[
                    { label: "Primary driver", value: "Control loss injury — not clinical failure", color: TEXT },
                    { label: "Risk level", value: "Moderate — no carrier contact required yet", color: AMBER },
                    { label: "Triage", value: "Likely containable with direct outreach today", color: P },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 4, fontWeight: 600 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color, fontWeight: 600, filter: "blur(4px)", userSelect: "none" }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: "#FDF4E3", border: `1px solid #E8C87A`, borderRadius: 8, padding: "12px 14px", marginTop: 16 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: AMBER, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Recommended first move</p>
                    <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65, marginBottom: 8 }}>Personal call from dentist today, not staff. Do not open with a clinical explanation.</p>
                    <p style={{ fontSize: 12, color: MUTED, fontStyle: "italic", lineHeight: 1.65, filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Patricia, I wanted to call you myself. I heard you&apos;ve been uncomfortable and I want to understand what&apos;s going on from your perspective before anything else.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Describe the situation", body: "What happened clinically, what the patient said, how they said it, and any relevant history with your practice. Takes about two minutes." },
                  { n: "02", title: "TensionDx maps the terrain", body: "The psychological driver behind the complaint is identified — control loss, unmet expectation, shame, fear of cost, or genuine clinical concern. Each requires a different response." },
                  { n: "03", title: "De-escalation script delivered immediately", body: "A triage assessment, recommended first move, and specific opening language — calibrated to what this patient actually needs to feel heard." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F9FAFB", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}>
                  <strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a>
                </p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access to TensionDx →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NO-SHOW PREDICTOR */}
      <section id="noshowpredictor" style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>No-Show Predictor — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 620 }}>Your 2pm no-show was predictable. Next time it will be predicted.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            One prevented no-show per week at an average appointment value of $300 is $15,000 recovered annually. The predictor runs automatically from the intake — no extra steps.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample flag</p>
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>No-Show Risk Flag</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#E07070" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E07070", display: "inline-block" }} />
                    High risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>James R., 44</p>
                    <p style={{ fontSize: 12, color: MUTED }}>New patient &middot; Thursday 2:00 PM</p>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Signals</p>
                    {["Rescheduled twice during intake window", "Vague on reason for gap from prior dentist", "Non-committal language throughout responses"].map((s) => (
                      <p key={s} style={{ fontSize: 13, color: MUTED, marginBottom: 5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "#E07070", flexShrink: 0 }}>·</span><span style={{ filter: "blur(3.5px)", userSelect: "none" }}>{s}</span>
                      </p>
                    ))}
                  </div>
                  <div style={{ background: "#FBF0EF", border: "1px solid #E8BFBF", borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: RED, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Recommended action</p>
                    <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>Same-day confirmation call from staff. Consider holding the slot until confirmed. Specific call script provided.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Intake runs as normal", body: "The patient completes their standard behavioral intake before the appointment. No extra questions, no extra steps." },
                  { n: "02", title: "Risk signals are scored automatically", body: "Language patterns, rescheduling behavior, and commitment markers are scored against no-show indicators from the behavioral profile." },
                  { n: "03", title: "Flag arrives with the report", body: "High-risk appointments are flagged before they happen with a specific recommended action — call, confirm, or hold the slot." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT ACCEPTANCE COACH */}
      <section id="treatmentcoach" style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Treatment Acceptance Coach — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 620 }}>They said yes in the chair. They never called to schedule.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            The behavioral profile already knows who is cost-avoidant, shame-driven, or decision-paralyzed. The coach surfaces that at the moment of case presentation with language that closes the plan.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample coaching card</p>
              <div style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Treatment Acceptance Coach</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#C4B5FD" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C4B5FD", display: "inline-block" }} />
                    Moderate-high risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Maria S., 52</p>
                    <p style={{ fontSize: 12, color: MUTED }}>$4,200 restorative plan to be presented</p>
                  </div>
                  {[
                    { label: "Acceptance risk", value: "Moderate-high", color: AMBER, blur: false },
                    { label: "Driver", value: "Cost anxiety intersecting with shame. Will not raise money herself.", color: TEXT, blur: true },
                    { label: "Recommended approach", value: "Present the financial pathway before the clinical plan.", color: P, blur: true },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 4, fontWeight: 600 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color, fontWeight: 600, ...(row.blur ? { filter: "blur(4px)", userSelect: "none" } : {}) }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: "#FDF4E3", border: "1px solid #E8C87A", borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: AMBER, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Suggested framing</p>
                    <p style={{ fontSize: 12, color: MUTED, fontStyle: "italic", lineHeight: 1.65, filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Before I show you what I&apos;m seeing, I want to walk you through how most patients handle the financial side — because that usually makes the clinical conversation easier.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Behavioral profile identifies the obstacle", body: "Cost anxiety, shame, decision paralysis, trust deficit — each leaves a distinct pattern in the intake. The coach identifies which one applies before you walk in." },
                  { n: "02", title: "Presentation sequence is reordered", body: "For cost-avoidant patients, financial pathway first. For shame-driven patients, normalization first. The clinical information is the same. The order changes everything." },
                  { n: "03", title: "Specific language delivered before the appointment", body: "Not talking points. A specific opening sentence, calibrated to this patient, to use at the moment the plan is presented." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F9FAFB", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAPSED PATIENT REACTIVATION */}
      <section id="lapsedpatients" style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Lapsed Patient Reactivation — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 620 }}>The cheapest revenue in your practice is already in your system.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            Reactivating five lapsed patients per month at an average annual value of $500 each is $30,000 in recovered revenue. The message is generated from their original behavioral profile — not a generic blast.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample reactivation card</p>
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Lapsed Patient Reactivation</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Donna K., 61</p>
                    <p style={{ fontSize: 12, color: MUTED }}>Last visit 28 months ago</p>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 4, fontWeight: 600 }}>Lapse driver</p>
                    <p style={{ fontSize: 13, color: TEXT, filter: "blur(4px)", userSelect: "none" }}>Felt judged after treatment was not completed. Embarrassed to return.</p>
                  </div>
                  <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: "0.8px", marginBottom: 8, fontWeight: 600 }}>Generated outreach (SMS/email)</p>
                    <p style={{ fontSize: 12.5, color: TEXT, fontStyle: "italic", lineHeight: 1.75, filter: "blur(3.5px)", userSelect: "none" }}>
                      Hi Donna — this is Dr. Chen&apos;s office. We have been thinking about you and wanted to reach out with no pressure at all. We would love to see you when you are ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "System identifies lapsed patients", body: "Patients who have not returned within a configured window are surfaced, ranked by reactivation likelihood based on their behavioral profile." },
                  { n: "02", title: "Lapse driver is identified", body: "Why they stopped coming is not always obvious. The original intake reveals whether it was shame, cost, a bad experience, or simply drift — each requires different language." },
                  { n: "03", title: "Message generated and ready to send", body: "A personalized SMS or email is generated for each patient, written to the specific barrier identified in their profile. Not a merge-tag template. A real message." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEGATIVE REVIEW WARNING */}
      <section id="reviewwarning" style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Negative Review Warning — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 620 }}>One bad Google review costs you ten new patients.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            The behavioral profile flags review risk the same way it flags legal risk. The window to change the outcome closes when they walk out the door.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample warning</p>
              <div style={{ background: "#F9FAFB", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Review Risk Flag</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#E07070" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E07070", display: "inline-block" }} />
                    Elevated
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Robert T., 47</p>
                    <p style={{ fontSize: 12, color: MUTED }}>End of appointment &middot; Checkout in 8 minutes</p>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Signals</p>
                    {["Referenced prior negative provider experience in intake", "Language suggesting unmet expectations throughout visit", "Non-verbal disengagement noted at checkout"].map((s) => (
                      <p key={s} style={{ fontSize: 13, color: MUTED, marginBottom: 5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "#E07070", flexShrink: 0 }}>·</span><span style={{ filter: "blur(3.5px)", userSelect: "none" }}>{s}</span>
                      </p>
                    ))}
                  </div>
                  <div style={{ background: "#FBF0EF", border: "1px solid #E8BFBF", borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: RED, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Recommended action</p>
                    <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.65 }}>Doctor returns to operatory before patient leaves. Specific language for closing the visit differently is provided.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Profile flags review-prone patterns", body: "Prior negative provider experience, unmet expectation language, and low trust markers are scored at intake — before the patient arrives." },
                  { n: "02", title: "In-appointment alert surfaces at checkout", body: "When a high-risk patient is approaching the end of their appointment, the front desk receives an alert with a specific closing action." },
                  { n: "03", title: "Doctor closes the visit differently", body: "A 90-second conversation, scripted to the specific risk pattern, before the patient reaches the parking lot. That is the window." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F9FAFB", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELECTIVE CASE IDENTIFIER */}
      <section id="electivecases" style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: AMBER, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>Elective Case Identifier — Add-on module</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: 18, lineHeight: 1.2, maxWidth: 680 }}>Someone in your existing patient base is ready to say yes to veneers. You just do not know who.</h2>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            You are not blasting your patient list with a whitening promotion. You are calling three people who are already thinking about it. That is a different conversation with a different close rate.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 14, fontWeight: 600 }}>Sample identifier card</p>
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: DARK, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Elective Case Identifier</span>
                  <span style={{ fontSize: 11, color: "#A78BFA" }}>3 flagged this month</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                    <p style={{ fontSize: 18, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Susan M., 34</p>
                    <p style={{ fontSize: 12, color: MUTED }}>Patient since 2022 &middot; Next hygiene visit: May 8</p>
                  </div>
                  {[
                    { label: "Elective readiness", value: "High", color: P, blur: false },
                    { label: "Signals", value: "Mentioned appearance in intake, high compliance history, no unresolved financial friction", color: TEXT, blur: true },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: MUTED, letterSpacing: "0.8px", marginBottom: 4, fontWeight: 600 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color, ...(row.blur ? { filter: "blur(4px)", userSelect: "none" } : {}) }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: P, letterSpacing: "0.8px", marginBottom: 6, fontWeight: 600 }}>Suggested outreach</p>
                    <p style={{ fontSize: 12, color: TEXT, fontStyle: "italic", filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Susan, I noticed something at your last visit that I think you might find interesting.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: MUTED, letterSpacing: "1px", marginBottom: 20, fontWeight: 600 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Behavioral profile scores elective readiness", body: "Appearance mentions, compliance patterns, financial friction, and trust markers from the original intake are scored for elective case likelihood." },
                  { n: "02", title: "Patients are surfaced monthly", body: "A short list of existing patients who are behaviorally primed for elective conversation arrives each month — not a ranked export of your entire base." },
                  { n: "03", title: "Outreach language is provided", body: "A specific conversation opener for each flagged patient, written to how they communicate and what they mentioned. Not a script. A sentence." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: PB, lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="/signup" style={{ color: P, textDecoration: "none", fontWeight: 600 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>FAQ</p>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, marginBottom: "3rem" }}>Things dentists ask us first</h2>
          <div className="lp-faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem 4rem" }}>
            {[
              { q: "Does this connect to my practice management software?", a: "Not through a direct integration at launch. The report arrives as a PDF you can attach to the patient record in any PMS. Direct integrations with Dentrix, Eaglesoft, and Open Dental are on the roadmap for later this year." },
              { q: "What if my patient does not complete the intake?", a: "You get a notification that no report is available and the appointment proceeds normally. Completion rates in early testing are around 74 percent for new patients when the link arrives with the confirmation text." },
              { q: "Is this meant to replace my existing intake forms?", a: "No. Your existing forms handle medical history, insurance, and consent. DentalDiagnostix runs alongside them and handles the one thing they were never designed to do: understand the person behind the patient." },
              { q: "Who sees the patient's responses?", a: "Only the report is delivered to the practice, not the raw intake text. The report is what the analysis produced, not a transcript of what the patient said. This is an important distinction for patient comfort and practice-side workflow." },
              { q: "How do I know the reports are accurate?", a: "The methodology was developed over a decade of applied behavioral terrain work across hundreds of sessions. Dentists in early access have consistently described the reports as recognizable when measured against patients they later met in the chair." },
              { q: "Is this only for new patients?", a: "Primarily yes. New patient appointments are where the information gap is largest. A version for returning patients who have lapsed or shown compliance issues is in development." },
            ].map((f) => (
              <div key={f.q}>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{f.q}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: P, letterSpacing: "1.5px", marginBottom: 14, fontWeight: 600 }}>From the practice</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: TEXT, margin: 0 }}>Behavioral insights for dentists.</h2>
            <a href="/blog" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>All posts →</a>
          </div>
          <div className="lp-blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.75rem" }}>
            {[
              { slug: "first-60-seconds-patient-bad-dentist-history", date: "May 15, 2026", readTime: "5 min", title: "What to Do in the First 60 Seconds With a Patient Who Has a Bad Dentist History", excerpt: "The patient with a bad dentist history is not waiting to see how good you are. They decided before they arrived whether this appointment is going to be different." },
              { slug: "patient-says-yes-and-disappears", date: "May 15, 2026", readTime: "5 min", title: "The Patient Who Says Yes and Disappears", excerpt: "They nodded through the whole treatment presentation. They took the printed plan. They said they would call to schedule. And then nothing." },
              { slug: "what-patients-mean-fine-with-needles", date: "May 15, 2026", readTime: "4 min", title: "What Patients Mean When They Say They Are Fine With Needles", excerpt: "Patients who are actually fine with needles do not think to mention it. The ones who mention it are doing something else entirely." },
            ].map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{post.date} &middot; {post.readTime} read</p>
                <p style={{ fontSize: 17, fontWeight: 700, color: TEXT, lineHeight: 1.35, margin: 0 }}>{post.title}</p>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{post.excerpt}</p>
                <span style={{ fontSize: 13, color: P, fontWeight: 600, marginTop: 4 }}>Read →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: DARK, padding: "5rem 1.25rem", textAlign: "center" }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#A78BFA", marginBottom: 16, fontWeight: 600 }}>Early access</p>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2, maxWidth: 560, margin: "0 auto 16px" }}>
          See what your next new-patient visit would look like with a <span style={{ color: "#A78BFA" }}>behavioral brief.</span>
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.75, fontWeight: 300 }}>
          Better conversations. Stronger relationships. Better outcomes.
        </p>
        <a href="/signup" style={{ display: "inline-block", background: P, color: "#fff", padding: "14px 36px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
          Request Early Access →
        </a>
        <p style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>No obligation. Limited early access.</p>
        <div style={{ marginTop: 48, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          ★★★★★ &nbsp; Trusted by dentists who want better conversations and better outcomes.
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "2rem 0" }}>
        <div className="lp-section lp-footer" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 0, paddingBottom: 0 }}>
          <span style={{ fontSize: 14, color: MUTED, fontWeight: 500 }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: MUTED, display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/privacy" style={{ color: MUTED, textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral intake only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
