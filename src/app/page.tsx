import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#F7F5F0", borderBottom: "0.5px solid #E2DDD5",
      }}>
        <div className="lp-nav-inner" style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "0 2rem",
          height: 56,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#1A2B3C" }}>Dental</span>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#0E6B5E" }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: "#0E6B5E", verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </a>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div className="lp-nav-links">
              <a href="#how-it-works" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none" }}>How it works</a>
              <a href="#sample-report" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none" }}>Sample report</a>
              <a href="#pricing" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none" }}>Pricing</a>
              <div className="lp-tools-dropdown" style={{ cursor: "default" }}>
                <span style={{ fontSize: 13, color: "#4A5568", display: "flex", alignItems: "center", gap: 4 }}>
                  Tools <span style={{ fontSize: 9, opacity: 0.5 }}>▾</span>
                </span>
                <div className="lp-tools-menu">
                  <div className="lp-tools-menu-label">Add-on modules</div>
                  <a href="#tensiondx">TensionDx — Conflict triage</a>
                  <a href="#noshowpredictor">No-Show Predictor</a>
                  <a href="#treatmentcoach">Treatment Acceptance Coach</a>
                  <a href="#lapsedpatients">Lapsed Patient Reactivation</a>
                  <a href="#reviewwarning">Negative Review Warning</a>
                  <a href="#electivecases">Elective Case Identifier</a>
                </div>
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                background: "#E4F2F0", color: "#0E6B5E",
                fontSize: 11, padding: "4px 10px", borderRadius: 20,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0E6B5E", display: "inline-block" }} />
                Built by a licensed dentist
              </span>
              <a href="/login" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none" }}>Sign in</a>
            </div>
            <a href="/signup" style={{
              background: "#0E6B5E", color: "#fff",
              fontSize: 13, padding: "8px 20px", borderRadius: 6,
              textDecoration: "none", whiteSpace: "nowrap",
            }}>Request access</a>
          </div>
        </div>
      </nav>

      {/* DIFFERENTIATOR BAR */}
      <div style={{
        background: "#1A2B3C", textAlign: "center",
        padding: "11px 1.25rem", fontSize: 13,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap",
      }}>
        <span style={{ color: "#fff", fontWeight: 600 }}>This is not a digital intake form.</span>
        <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0 }} />
        <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
          DentalDiagnostix maps the psychology behind a patient&apos;s relationship with their mouth and delivers it to your chair before they arrive.
        </span>
      </div>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "5rem 1.25rem 3rem", maxWidth: 860, margin: "0 auto" }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#0E6B5E", marginBottom: 20, fontWeight: 500 }}>
          Behavioral terrain mapping for dental practices
        </p>
        <h1 className="lp-hero-h1" style={{
          fontFamily: "Lora, Georgia, serif", fontSize: 50, fontWeight: 400,
          color: "#1A2B3C", lineHeight: 1.15, marginBottom: 24,
        }}>
          Know who you&apos;re treating<br />
          before they <em style={{ color: "#0E6B5E" }}>sit down.</em>
        </h1>
        <p style={{
          fontSize: 16, color: "#4A5568", fontWeight: 300,
          maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.75,
        }}>
          Your intake form asks what&apos;s wrong with their teeth. Ours asks why they stopped coming in and tells you exactly how to open the appointment.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#sample-report" style={{
            background: "#0E6B5E", color: "#fff",
            padding: "12px 28px", borderRadius: 8,
            textDecoration: "none", fontSize: 15, fontWeight: 500,
          }}>See a sample report</a>
          <a href="/signup" style={{
            color: "#4A5568", fontSize: 15, fontWeight: 400,
            textDecoration: "none", borderBottom: "1px solid #4A5568",
            padding: "12px 4px",
          }}>Request access</a>
        </div>
      </section>

      {/* SAMPLE REPORT CARD */}
      <div id="sample-report" className="lp-report-card" style={{
        maxWidth: 860, margin: "0 auto 5rem",
        background: "#fff", border: "0.5px solid #E2DDD5",
        borderRadius: 16, overflow: "hidden",
        boxShadow: "0 4px 40px rgba(26,43,60,0.09)",
      }}>
        <div style={{
          background: "#1A2B3C", padding: "14px 28px",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
        }}>
          <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>
            DentalDiagnostix &mdash; Patient Behavioral Report
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#7DD4C4" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7DD4C4", display: "inline-block", flexShrink: 0 }} />
            Report ready &middot; Generated 2 hours before appointment
          </span>
        </div>

        <div className="lp-report-body" style={{ padding: "2rem 2.5rem" }}>
          <div className="lp-report-patient" style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            borderBottom: "0.5px solid #E2DDD5", paddingBottom: "1.5rem", marginBottom: "1.75rem", gap: 16,
          }}>
            <div>
              <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#1A2B3C" }}>Sarah M., 38</p>
              <p style={{ fontSize: 12, color: "#4A5568", marginTop: 4 }}>New patient &middot; Self-referred &middot; Last dental visit: 3+ years ago</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1A2B3C" }}>Thursday, Apr 17 &middot; 2:00 PM</p>
              <p style={{ fontSize: 12, color: "#4A5568", marginTop: 4 }}>Chief complaint: &ldquo;overdue checkup, I know&rdquo;</p>
            </div>
          </div>

          {/* Signal cards */}
          <div className="lp-four-col" style={{ gap: 10, marginBottom: "1.75rem" }}>
            {[
              { label: "Avoidance type", value: "Shame-based", color: "#0E6B5E" },
              { label: "Compliance risk", value: "Moderate", color: "#B07D2E" },
              { label: "Legal risk", value: "Elevated", color: "#9B3B3B" },
              { label: "Hygiene relationship", value: "Guilt-driven", color: "#1A2B3C" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#F7F5F0", borderRadius: 8, padding: "14px" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 5 }}>{s.label}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Blocks row 1 */}
          <div className="lp-two-col" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#E4F2F0", borderLeft: "2px solid #0E6B5E", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Terrain summary</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C", }}>She stopped coming in because a dentist made her feel like a bad patient, not because she was afraid of the chair. She already knows her situation is not ideal and she is braced for you to say so. Do not. Walk in without any commentary on the gap or the state of her teeth and this appointment will go well.</p>
            </div>
            <div style={{ background: "#FDF4E3", borderLeft: "2px solid #B07D2E", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Compliance signal</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C", }}>History of agreeing to treatment plans and quietly defaulting on scheduling. Likely driven by cost and shame intersecting. Confirm the financial pathway before presenting the plan. She will not raise it herself.</p>
            </div>
          </div>

          {/* Blocks row 2 */}
          <div className="lp-two-col" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#FBF0EF", borderLeft: "2px solid #9B3B3B", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Legal risk flag</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C", }}>References a prior provider as having done something wrong. Has considered leaving a public review. Document all recommendations carefully. Obtain verbal and written acknowledgment at key decision points in the visit.</p>
            </div>
            <div style={{ background: "#E4F2F0", borderLeft: "2px solid #0E6B5E", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Dentist history</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C", }}>Two prior dentists. Primary negative experience: told her teeth were a mess and felt lectured, then abandoned treatment mid-plan. Emergency visit 2 years ago with no follow-up on restorative recommendation. No current dental home.</p>
            </div>
          </div>

          {/* Dos and Donts */}
          <div>
            <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 10, fontWeight: 500 }}>Dentist do&apos;s and don&apos;ts</p>
            <div className="lp-two-col" style={{ gap: "1rem" }}>
              <div style={{ background: "#EAF5F0", borderRadius: 6, padding: "10px 13px" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", fontWeight: 500, letterSpacing: "0.8px", marginBottom: 10 }}>DO</p>
                {[
                  "Open with curiosity, not assessment. Let her set the pace of disclosure.",
                  "Normalize long gaps between visits without making it a teaching moment.",
                  "Present the financial pathway before the treatment plan.",
                ].map((t, i) => (
                  <p key={i} style={{ fontSize: 12.5, color: "#1A2B3C", lineHeight: 1.6, marginBottom: i < 2 ? 8 : 0, paddingLeft: 12, borderLeft: "2px solid #0E6B5E", }}>{t}</p>
                ))}
              </div>
              <div style={{ background: "#FBF0EF", borderRadius: 6, padding: "10px 13px" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", fontWeight: 500, letterSpacing: "0.8px", marginBottom: 10 }}>DON&apos;T</p>
                {[
                  "Ask why she has not been in, or comment on the state of her teeth.",
                  "Reference what she should have done or use language that assigns blame.",
                  "Skip documentation or rely on verbal-only consent for any recommendation.",
                ].map((t, i) => (
                  <p key={i} style={{ fontSize: 12.5, color: "#1A2B3C", lineHeight: 1.6, marginBottom: i < 2 ? 8 : 0, paddingLeft: 12, borderLeft: "2px solid #9B3B3B", }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT THE PATIENT EXPERIENCES */}
      <section className="lp-section" style={{ padding: "5rem 3rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="lp-two-col lp-intake-gap" style={{ gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>What the patient experiences</p>
            <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.25 }}>A conversation, not a form.</h2>
            <p style={{ fontSize: 14, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, marginBottom: 24 }}>
              The intake takes about 8 minutes and arrives alongside your existing appointment confirmation. It does not ask about flossing frequency or last cleaning date. It listens for what&apos;s actually underneath — the real relationship a patient has with their mouth and with dentistry.
            </p>
            <p style={{ fontSize: 14, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              Patients respond by voice or by typing, in their own words, without checkboxes or clinical framing. Nothing about it feels like a medical intake. That is intentional.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: 24 }}>
              {[
                { label: "Covers", value: "Avoidance history · Past provider relationships · Treatment decision patterns · Emotional context" },
                { label: "Format", value: "Voice or text · Any device · No login required · One question at a time" },
                { label: "Time", value: "Approx. 8 minutes · Completion rate above 70% for new patients" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "1px", color: "#0E6B5E", fontWeight: 500, width: 60, flexShrink: 0, paddingTop: 2 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.65 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: "3px solid #0E6B5E", paddingLeft: 16, marginTop: 8 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 5 }}>Patients never see the DentalDiagnostix name.</p>
              <p style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.7, margin: 0 }}>
                The intake arrives under your practice name and branding. To your patients, it is simply part of their appointment preparation — sent by you, on behalf of your practice. You get the credit for knowing them before they sit down.
              </p>
            </div>
          </div>

          {/* Interface mockup — conveys the experience without revealing question content */}
          <div style={{ background: "#fff", border: "0.5px solid #E2DDD5", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(26,43,60,0.07)" }}>
            {/* Browser chrome */}
            <div style={{ background: "#F7F5F0", padding: "10px 16px", borderBottom: "0.5px solid #E2DDD5", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2DDD5", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2DDD5", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2DDD5", display: "inline-block" }} />
              <span style={{ flex: 1, background: "#E2DDD5", borderRadius: 4, height: 18, marginLeft: 8, opacity: 0.5 }} />
            </div>

            {/* Practice header */}
            <div style={{ background: "#1A2B3C", padding: "14px 20px" }}>
              <p style={{ margin: 0, fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color: "#7DD4C4" }}>Dr. Kim&apos;s Family Dental</p>
              <p style={{ margin: "3px 0 0", fontFamily: "Lora, Georgia, serif", fontSize: 14, color: "#fff", fontWeight: 400 }}>Pre-visit check-in &middot; Before your appointment</p>
            </div>

            {/* Progress bar */}
            <div style={{ padding: "16px 20px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: "#0E6B5E", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 500 }}>Question 5 of 8</span>
                <span style={{ fontSize: 10, color: "#A0B0C0" }}>About 4 minutes left</span>
              </div>
              <div style={{ height: 4, background: "#F0EFEC", borderRadius: 2 }}>
                <div style={{ height: "100%", width: "62%", background: "#0E6B5E", borderRadius: 2 }} />
              </div>
            </div>

            {/* Question area — text replaced with decorative bars */}
            <div style={{ padding: "20px 20px 16px" }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ height: 13, background: "#1A2B3C", borderRadius: 3, width: "88%", marginBottom: 8, opacity: 0.12 }} />
                <div style={{ height: 13, background: "#1A2B3C", borderRadius: 3, width: "72%", opacity: 0.12 }} />
              </div>

              {/* Audio wave response area */}
              <div style={{ background: "#F7F5F0", borderRadius: 10, padding: "16px 18px", border: "0.5px solid #E2DDD5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#0E6B5E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 12 }}>♪</span>
                  </div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}>
                    {[14, 22, 18, 28, 16, 24, 20, 32, 18, 26, 14, 20, 28, 16, 22].map((h, i) => (
                      <div key={i} style={{ width: 3, height: h, background: i < 9 ? "#0E6B5E" : "#E2DDD5", borderRadius: 2, opacity: i < 9 ? 0.7 : 0.4 }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: "#4A5568", flexShrink: 0 }}>0:23</span>
                </div>
                <div style={{ height: 10, background: "#E2DDD5", borderRadius: 2, width: "90%", marginBottom: 6, opacity: 0.5 }} />
                <div style={{ height: 10, background: "#E2DDD5", borderRadius: 2, width: "65%", opacity: 0.5 }} />
              </div>
            </div>

            {/* Controls */}
            <div style={{ padding: "0 20px 20px", display: "flex", gap: 8 }}>
              <div style={{ flex: 1, padding: "10px", background: "#F7F5F0", borderRadius: 8, border: "0.5px solid #E2DDD5", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#9B3B3B", display: "inline-block" }} />
                <span style={{ fontSize: 12, color: "#4A5568" }}>Tap to speak</span>
              </div>
              <div style={{ flex: 1, padding: "10px", background: "#0E6B5E", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>Next →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "#fff", borderTop: "0.5px solid #E2DDD5", borderBottom: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>How it works</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 14 }}>Three steps. Nothing changes in your workflow.</h2>
          <p style={{ fontSize: 14, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 520, marginBottom: "4rem" }}>
            DentalDiagnostix plugs into your existing appointment confirmation process. No new software for your front desk. No new steps for your team.
          </p>
          <div className="lp-three-col" style={{ gap: "3rem" }}>
            {[
              { n: "01", title: "Patient completes the intake", body: "A link goes out alongside your existing appointment confirmation. The intake takes about 8 minutes. It asks about the relationship they have with their mouth, their past providers, and the patterns underneath their avoidance." },
              { n: "02", title: "Terrain is mapped", body: "Responses are analyzed using a behavioral methodology built on a decade of psychological terrain work, developed by a dentist who spent years wondering why the same patients kept failing treatment no matter what was clinically done." },
              { n: "03", title: "Report arrives before the appointment", body: "You receive a one-page behavioral briefing: avoidance pattern, compliance risk, legal flags, dentist history, and specific dos and donts. Two minutes of reading. A completely different appointment." },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 52, color: "#E2DDD5", lineHeight: 1, marginBottom: 14 }}>{s.n}</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: "#1A2B3C", marginBottom: 10 }}>{s.title}</p>
                <p style={{ fontSize: 14, color: "#4A5568", fontWeight: 300, lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT BY A DENTIST */}
      <section className="lp-section" style={{ padding: "5rem 3rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="lp-two-col lp-built-col" style={{ gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 18, fontWeight: 500 }}>Built by a dentist</p>
            <blockquote style={{ fontFamily: "Lora, Georgia, serif", fontSize: 21, fontStyle: "italic", color: "#1A2B3C", lineHeight: 1.6, marginBottom: 20 }}>
              &ldquo;I spent years wondering why the same patients kept failing treatment. Not clinically, but behaviorally. The answer was never in their chart. It was in who they were.&rdquo;
            </blockquote>
            <p style={{ fontSize: 13, color: "#4A5568" }}>
              <strong style={{ color: "#1A2B3C" }}>David Benson, DDS</strong>
              {" "}&middot; Licensed dentist, CA and AZ &middot; Founder, DentalDiagnostix
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { title: "Not a tech company guessing at dentistry", body: "DentalDiagnostix was built by someone who has sat in the operatory, managed treatment resistance, and navigated difficult patients without any of this information." },
              { title: "The methodology exists outside dentistry", body: "The underlying behavioral terrain framework has been applied across hundreds of psychology sessions. DentalDiagnostix is a purpose-built vertical application of that methodology." },
              { title: "Not a clinical tool", body: "Behavioral intake only. No diagnoses, no treatment recommendations, no clinical liability. Just the context you never had before the patient sat down." },
              { title: "Your name. Your brand. Your credit.", body: "Patients never see DentalDiagnostix. The intake arrives under your practice name. The insight lands as yours. You are the dentist who knew them before they sat down — because you are." },
            ].map((f) => (
              <div key={f.title} style={{ borderLeft: "2px solid #0E6B5E", paddingLeft: "1rem" }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{f.title}</p>
                <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#fff", borderTop: "0.5px solid #E2DDD5", borderBottom: "0.5px solid #E2DDD5", padding: "4rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Early feedback</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: "2.5rem" }}>From dentists who saw the sample report</h2>
          <div className="lp-two-col" style={{ gap: "1.25rem" }}>
            {[
              { quote: "The shame versus fear distinction alone would have changed how I opened at least three appointments last month. I would have walked in and said all the wrong things.", name: "Dr. R.A.", title: "General dentist, 14 years practice" },
              { quote: "I have used intake forms my whole career. I have never had one tell me a patient might leave a review before I have even met them. That is a different category of tool.", name: "Dr. K.L.", title: "Prosthodontist, group practice" },
            ].map((t) => (
              <div key={t.name} style={{ background: "#F7F5F0", border: "0.5px solid #E2DDD5", borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 14, fontStyle: "italic", color: "#1A2B3C", lineHeight: 1.75, marginBottom: 16 }}>&ldquo;{t.quote}&rdquo;</p>
                <p style={{ fontSize: 11, color: "#4A5568" }}><strong style={{ color: "#1A2B3C" }}>{t.name}</strong> &middot; {t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "#1A2B3C", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#8EC5B8", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Pricing</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#fff", marginBottom: 12 }}>Simple, flat pricing.</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: "3rem" }}>Flat monthly rate. Unlimited new patient intakes. No setup fees, no per-report charges.</p>
          <div className="lp-pricing-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", maxWidth: 660 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", marginBottom: 16 }}>Solo practice</p>
              <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 38, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>$000<span style={{ fontSize: 12 }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: 24 }}>One provider. Unlimited new patient behavioral reports.</p>
              {["Full terrain report with dos and donts", "Legal risk flag system", "Dentist history summary", "PDF export for patient record"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: "#0E6B5E", fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="mailto:davidbensondds@gmail.com" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 14 }}>Contact for pricing</a>
            </div>
            <div style={{ background: "#0E6B5E", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", letterSpacing: "1px", marginBottom: 16 }}>Group practice</p>
              <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 38, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>$000<span style={{ fontSize: 12 }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 300, marginBottom: 24 }}>Up to 5 providers. Practice dashboard and compliance trend tracking.</p>
              {["Everything in Solo", "Multi-provider dashboard", "Compliance trend analytics", "Priority support"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="mailto:davidbensondds@gmail.com" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", background: "#fff", borderRadius: 8, color: "#0E6B5E", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Contact for pricing</a>
            </div>
          </div>

          {/* Add-on modules */}
          <div style={{ maxWidth: 900, marginTop: "3rem" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px", marginBottom: 16, fontWeight: 500 }}>Add-on modules</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
              {[
                { id: "tensiondx", name: "TensionDx", desc: "Upset patient triage and de-escalation scripts" },
                { id: "noshowpredictor", name: "No-Show Predictor", desc: "Behavioral risk flag before the appointment" },
                { id: "treatmentcoach", name: "Treatment Coach", desc: "Case presentation language by behavioral profile" },
                { id: "lapsedpatients", name: "Lapsed Reactivation", desc: "Personalized outreach from behavioral history" },
                { id: "reviewwarning", name: "Review Warning", desc: "Flag patients likely to post publicly" },
                { id: "electivecases", name: "Elective Identifier", desc: "Surface patients primed for elective treatment" },
              ].map((m) => (
                <a key={m.id} href={`#${m.id}`} style={{ display: "block", background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 16px", textDecoration: "none" }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#D4924A", marginBottom: 4 }}>{m.name}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1.5 }}>{m.desc}</p>
                </a>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(180,130,80,0.4)", borderRadius: 12, padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, textTransform: "uppercase", color: "#D4924A", letterSpacing: "1px", marginBottom: 8 }}>Full Suite Bundle</p>
                <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 28, color: "#fff", marginBottom: 4, filter: "blur(6px)", userSelect: "none" }}>+$000<span style={{ fontSize: 12 }}>/month</span></p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>All six modules added to your base plan. Contact for bundle pricing.</p>
              </div>
              <a href="mailto:davidbensondds@gmail.com" style={{ flexShrink: 0, padding: "10px 22px", background: "#D4924A", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>Contact for pricing</a>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Pricing is set during early access. Email <a href="mailto:davidbensondds@gmail.com" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>davidbensondds@gmail.com</a> to discuss.</p>
        </div>
      </section>

      {/* TENSIONDX */}
      <section id="tensiondx" style={{ background: "#fff", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>TensionDx — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 620 }}>When a patient mentions a lawyer, you have about 48 hours.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            This is not conflict resolution advice. It is a psychological read of what your patient actually needs to hear, and the specific language to say it. One prevented lawsuit covers years of subscription cost.
          </p>

          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start", marginBottom: "3.5rem" }}>
            {/* Sample output card */}
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample output</p>
              <div style={{ background: "#F7F5F0", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>TensionDx &mdash; Upset Patient Triage</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#D4924A" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4924A", display: "inline-block" }} />
                    Moderate risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>Patricia H., 58</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>Post-op complaint &middot; Crown prep &middot; Day 3 &middot; Mentioned &ldquo;lawyer&rdquo; to front desk</p>
                  </div>
                  {[
                    { label: "Primary driver", value: "Control loss injury — not clinical failure", color: "#1A2B3C" },
                    { label: "Risk level", value: "Moderate — no carrier contact required yet", color: "#B07D2E" },
                    { label: "Triage", value: "Likely containable with direct outreach today", color: "#0E6B5E" },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 4, fontWeight: 500 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color, fontWeight: 500 }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: "#FDF4E3", border: "0.5px solid #E8C87A", borderRadius: 8, padding: "12px 14px", marginTop: 16 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Recommended first move</p>
                    <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.65, marginBottom: 8 }}>Personal call from dentist today, not staff. Do not open with a clinical explanation.</p>
                    <p style={{ fontSize: 12, color: "#4A5568", fontStyle: "italic", lineHeight: 1.65, filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Patricia, I wanted to call you myself. I heard you&apos;ve been uncomfortable and I want to understand what&apos;s going on from your perspective before anything else.&rdquo;
                    </p>
                    <p style={{ fontSize: 10, color: "#B07D2E", marginTop: 6 }}>Suggested opening line — full script delivered in report</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Describe the situation", body: "What happened clinically, what the patient said, how they said it, and any relevant history with your practice. Takes about two minutes." },
                  { n: "02", title: "TensionDx maps the terrain", body: "The psychological driver behind the complaint is identified — control loss, unmet expectation, shame, fear of cost, or genuine clinical concern. Each requires a different response." },
                  { n: "03", title: "De-escalation script delivered immediately", body: "A triage assessment, recommended first move, and specific opening language — calibrated to what this patient actually needs to feel heard." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F7F5F0", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}>
                  <strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a>
                </p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access to TensionDx →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NO-SHOW PREDICTOR */}
      <section id="noshowpredictor" style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>No-Show Predictor — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 620 }}>Your 2pm no-show was predictable. Next time it will be predicted.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            One prevented no-show per week at an average appointment value of $300 is $15,000 recovered annually. The predictor runs automatically from the intake — no extra steps.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample flag</p>
              <div style={{ background: "#fff", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>No-Show Risk Flag</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#E07070" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E07070", display: "inline-block" }} />
                    High risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>James R., 44</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>New patient &middot; Thursday 2:00 PM</p>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Signals</p>
                    {["Rescheduled twice during intake window", "Vague on reason for gap from prior dentist", "Non-committal language throughout responses"].map((s) => (
                      <p key={s} style={{ fontSize: 13, color: "#4A5568", marginBottom: 5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "#E07070", flexShrink: 0 }}>·</span>{s}
                      </p>
                    ))}
                  </div>
                  <div style={{ background: "#FBF0EF", border: "0.5px solid #E8BFBF", borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Recommended action</p>
                    <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.65 }}>Same-day confirmation call from staff. Consider holding the slot until confirmed. Specific call script provided.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Intake runs as normal", body: "The patient completes their standard behavioral intake before the appointment. No extra questions, no extra steps." },
                  { n: "02", title: "Risk signals are scored automatically", body: "Language patterns, rescheduling behavior, and commitment markers are scored against no-show indicators from the behavioral profile." },
                  { n: "03", title: "Flag arrives with the report", body: "High-risk appointments are flagged before they happen with a specific recommended action — call, confirm, or hold the slot." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT ACCEPTANCE COACH */}
      <section id="treatmentcoach" style={{ background: "#fff", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Treatment Acceptance Coach — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 620 }}>They said yes in the chair. They never called to schedule.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            The behavioral profile already knows who is cost-avoidant, shame-driven, or decision-paralyzed. The coach surfaces that at the moment of case presentation with language that closes the plan.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample coaching card</p>
              <div style={{ background: "#F7F5F0", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Treatment Acceptance Coach</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#D4924A" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4924A", display: "inline-block" }} />
                    Moderate-high risk
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>Maria S., 52</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>$4,200 restorative plan to be presented</p>
                  </div>
                  {[
                    { label: "Acceptance risk", value: "Moderate-high", color: "#B07D2E" },
                    { label: "Driver", value: "Cost anxiety intersecting with shame. Will not raise money herself.", color: "#1A2B3C" },
                    { label: "Recommended approach", value: "Present the financial pathway before the clinical plan.", color: "#0E6B5E" },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 4, fontWeight: 500 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color, fontWeight: 500 }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: "#FDF4E3", border: "0.5px solid #E8C87A", borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Suggested framing</p>
                    <p style={{ fontSize: 12, color: "#4A5568", fontStyle: "italic", lineHeight: 1.65, filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Before I show you what I&apos;m seeing, I want to walk you through how most patients handle the financial side — because that usually makes the clinical conversation easier.&rdquo;
                    </p>
                    <p style={{ fontSize: 10, color: "#B07D2E", marginTop: 6 }}>Opening line — full script in report</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Behavioral profile identifies the obstacle", body: "Cost anxiety, shame, decision paralysis, trust deficit — each leaves a distinct pattern in the intake. The coach identifies which one applies before you walk in." },
                  { n: "02", title: "Presentation sequence is reordered", body: "For cost-avoidant patients, financial pathway first. For shame-driven patients, normalization first. The clinical information is the same. The order changes everything." },
                  { n: "03", title: "Specific language delivered before the appointment", body: "Not talking points. A specific opening sentence, calibrated to this patient, to use at the moment the plan is presented." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F7F5F0", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAPSED PATIENT REACTIVATION */}
      <section id="lapsedpatients" style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Lapsed Patient Reactivation — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 620 }}>The cheapest revenue in your practice is already in your system.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            Reactivating five lapsed patients per month at an average annual value of $500 each is $30,000 in recovered revenue. The message is generated from their original behavioral profile — not a generic blast.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample reactivation card</p>
              <div style={{ background: "#fff", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Lapsed Patient Reactivation</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>Donna K., 61</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>Last visit 28 months ago</p>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 4, fontWeight: 500 }}>Lapse driver</p>
                    <p style={{ fontSize: 13, color: "#1A2B3C" }}>Felt judged after treatment was not completed. Embarrassed to return.</p>
                  </div>
                  <div style={{ background: "#E4F2F0", border: "0.5px solid #A8D5CC", borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "0.8px", marginBottom: 8, fontWeight: 500 }}>Generated outreach (SMS/email)</p>
                    <p style={{ fontSize: 12.5, color: "#1A2B3C", fontStyle: "italic", lineHeight: 1.75, filter: "blur(3.5px)", userSelect: "none" }}>
                      Hi Donna — this is Dr. Chen&apos;s office. We have been thinking about you and wanted to reach out with no pressure at all. We know life gets busy and sometimes it is hard to get back in. We would love to see you when you are ready — just reply here and we will take care of the rest.
                    </p>
                    <p style={{ fontSize: 10, color: "#0E6B5E", marginTop: 8 }}>Message generated from original behavioral profile — not a template</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "System identifies lapsed patients", body: "Patients who have not returned within a configured window are surfaced, ranked by reactivation likelihood based on their behavioral profile." },
                  { n: "02", title: "Lapse driver is identified", body: "Why they stopped coming is not always obvious. The original intake reveals whether it was shame, cost, a bad experience, or simply drift — each requires different language." },
                  { n: "03", title: "Message generated and ready to send", body: "A personalized SMS or email is generated for each patient, written to the specific barrier identified in their profile. Not a merge-tag template. A real message." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEGATIVE REVIEW WARNING */}
      <section id="reviewwarning" style={{ background: "#fff", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Negative Review Warning — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 620 }}>One bad Google review costs you ten new patients.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            The behavioral profile flags review risk the same way it flags legal risk. The window to change the outcome closes when they walk out the door.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample warning</p>
              <div style={{ background: "#F7F5F0", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Review Risk Flag</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#E07070" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E07070", display: "inline-block" }} />
                    Elevated
                  </span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>Robert T., 47</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>End of appointment &middot; Checkout in 8 minutes</p>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Signals</p>
                    {["Referenced prior negative provider experience in intake", "Language suggesting unmet expectations throughout visit", "Non-verbal disengagement noted at checkout"].map((s) => (
                      <p key={s} style={{ fontSize: 13, color: "#4A5568", marginBottom: 5, display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "#E07070", flexShrink: 0 }}>·</span>{s}
                      </p>
                    ))}
                  </div>
                  <div style={{ background: "#FBF0EF", border: "0.5px solid #E8BFBF", borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Recommended action</p>
                    <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.65 }}>Doctor returns to operatory before patient leaves. Specific language for closing the visit differently is provided.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Profile flags review-prone patterns", body: "Prior negative provider experience, unmet expectation language, and low trust markers are scored at intake — before the patient arrives." },
                  { n: "02", title: "In-appointment alert surfaces at checkout", body: "When a high-risk patient is approaching the end of their appointment, the front desk receives an alert with a specific closing action." },
                  { n: "03", title: "Doctor closes the visit differently", body: "A 90-second conversation, scripted to the specific risk pattern, before the patient reaches the parking lot. That is the window." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#F7F5F0", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELECTIVE CASE IDENTIFIER */}
      <section id="electivecases" style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>Elective Case Identifier — Add-on module</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.3, maxWidth: 680 }}>Someone in your existing patient base is ready to say yes to veneers. You just do not know who.</h2>
          <p style={{ fontSize: 15, color: "#4A5568", fontWeight: 300, lineHeight: 1.75, maxWidth: 640, marginBottom: "3rem" }}>
            You are not blasting your patient list with a whitening promotion. You are calling three people who are already thinking about it. That is a different conversation with a different close rate.
          </p>
          <div className="lp-two-col" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 14, fontWeight: 500 }}>Sample identifier card</p>
              <div style={{ background: "#fff", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ background: "#1A2B3C", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.5)" }}>Elective Case Identifier</span>
                  <span style={{ fontSize: 11, color: "#7DD4C4" }}>3 flagged this month</span>
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "0.5px solid #E2DDD5" }}>
                    <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 18, color: "#1A2B3C", marginBottom: 3 }}>Susan M., 34</p>
                    <p style={{ fontSize: 12, color: "#4A5568" }}>Patient since 2022 &middot; Next hygiene visit: May 8</p>
                  </div>
                  {[
                    { label: "Elective readiness", value: "High", color: "#0E6B5E" },
                    { label: "Signals", value: "Mentioned appearance in intake, high compliance history, no unresolved financial friction", color: "#1A2B3C" },
                  ].map((row) => (
                    <div key={row.label} style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: 10, textTransform: "uppercase", color: "#4A5568", letterSpacing: "0.8px", marginBottom: 4, fontWeight: 500 }}>{row.label}</p>
                      <p style={{ fontSize: 13, color: row.color }}>{row.value}</p>
                    </div>
                  ))}
                  <div style={{ background: "#E4F2F0", border: "0.5px solid #A8D5CC", borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
                    <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "0.8px", marginBottom: 6, fontWeight: 500 }}>Suggested outreach</p>
                    <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.65, marginBottom: 6 }}>Soft mention of cosmetic consultation at next hygiene visit. Specific conversation opener provided.</p>
                    <p style={{ fontSize: 12, color: "#4A5568", fontStyle: "italic", filter: "blur(3.5px)", userSelect: "none" }}>
                      &ldquo;Susan, I noticed something at your last visit that I think you might find interesting — when you have a moment I would love to show you what I&apos;m seeing.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "#4A5568", letterSpacing: "1px", marginBottom: 20, fontWeight: 500 }}>How it works</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { n: "01", title: "Behavioral profile scores elective readiness", body: "Appearance mentions, compliance patterns, financial friction, and trust markers from the original intake are scored for elective case likelihood." },
                  { n: "02", title: "Patients are surfaced monthly", body: "A short list of existing patients who are behaviorally primed for elective conversation arrives each month — not a ranked export of your entire base." },
                  { n: "03", title: "Outreach language is provided", body: "A specific conversation opener for each flagged patient, written to how they communicate and what they mentioned. Not a script. A sentence." },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 22, color: "#E2DDD5", lineHeight: 1, flexShrink: 0, width: 36 }}>{step.n}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 5 }}>{step.title}</p>
                      <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.7 }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", padding: "16px 20px", background: "#fff", borderRadius: 8, border: "0.5px solid #E2DDD5" }}>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.7, marginBottom: 8 }}><strong style={{ filter: "blur(5px)", userSelect: "none" }}>$99/month</strong> add-on. <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Contact for pricing</a></p>
                <a href="/signup" style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Request access →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F7F5F0", padding: "5rem 0" }}>
        <div className="lp-section" style={{ maxWidth: 900, margin: "0 auto", paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>FAQ</p>
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: "3rem" }}>Things dentists ask us first</h2>
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
                <p style={{ fontSize: 14, fontWeight: 500, color: "#1A2B3C", marginBottom: 8 }}>{f.q}</p>
                <p style={{ fontSize: 13, color: "#4A5568", fontWeight: 300, lineHeight: 1.75 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#0E6B5E", padding: "5rem 1.25rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 36, fontWeight: 400, color: "#fff", marginBottom: 16, lineHeight: 1.25 }}>See your first report before you commit.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.75 }}>
          Request a demo and we will walk you through a real sample report, built from an actual intake response. No slides. No pitch deck. Just the artifact.
        </p>
        <a href="/signup" style={{ display: "inline-block", background: "#fff", color: "#0E6B5E", padding: "13px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Request access</a>
        <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
          Or email directly: <a href="mailto:davidbensondds@gmail.com" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}>davidbensondds@gmail.com</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "2rem 0" }}>
        <div className="lp-section lp-footer" style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 0, paddingBottom: 0 }}>
          <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 14, color: "#4A5568" }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: "#4A5568", display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/privacy" style={{ color: "#4A5568", textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral intake only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
