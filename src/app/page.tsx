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
          <a href="#" style={{
            color: "#4A5568", fontSize: 15, fontWeight: 400,
            textDecoration: "none", borderBottom: "1px solid #4A5568",
            padding: "12px 4px",
          }}>Request a demo</a>
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
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C" }}>She stopped coming in because a dentist made her feel like a bad patient, not because she was afraid of the chair. She already knows her situation is not ideal and she is braced for you to say so. Do not. Walk in without any commentary on the gap or the state of her teeth and this appointment will go well.</p>
            </div>
            <div style={{ background: "#FDF4E3", borderLeft: "2px solid #B07D2E", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#B07D2E", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Compliance signal</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C" }}>History of agreeing to treatment plans and quietly defaulting on scheduling. Likely driven by cost and shame intersecting. Confirm the financial pathway before presenting the plan. She will not raise it herself.</p>
            </div>
          </div>

          {/* Blocks row 2 */}
          <div className="lp-two-col" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#FBF0EF", borderLeft: "2px solid #9B3B3B", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Legal risk flag</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C" }}>References a prior provider as having done something wrong. Has considered leaving a public review. Document all recommendations carefully. Obtain verbal and written acknowledgment at key decision points in the visit.</p>
            </div>
            <div style={{ background: "#E4F2F0", borderLeft: "2px solid #0E6B5E", borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "0.8px", marginBottom: 7, fontWeight: 500 }}>Dentist history</p>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "#1A2B3C" }}>Two prior dentists. Primary negative experience: told her teeth were a mess and felt lectured, then abandoned treatment mid-plan. Emergency visit 2 years ago with no follow-up on restorative recommendation. No current dental home.</p>
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
                  <p key={i} style={{ fontSize: 12.5, color: "#1A2B3C", lineHeight: 1.6, marginBottom: i < 2 ? 8 : 0, paddingLeft: 12, borderLeft: "2px solid #0E6B5E" }}>{t}</p>
                ))}
              </div>
              <div style={{ background: "#FBF0EF", borderRadius: 6, padding: "10px 13px" }}>
                <p style={{ fontSize: 10, textTransform: "uppercase", color: "#9B3B3B", fontWeight: 500, letterSpacing: "0.8px", marginBottom: 10 }}>DON&apos;T</p>
                {[
                  "Ask why haven't you been in or comment on the state of her teeth.",
                  "Reference what she should have done or use language that assigns blame.",
                  "Skip documentation or rely on verbal-only consent for any recommendation.",
                ].map((t, i) => (
                  <p key={i} style={{ fontSize: 12.5, color: "#1A2B3C", lineHeight: 1.6, marginBottom: i < 2 ? 8 : 0, paddingLeft: 12, borderLeft: "2px solid #9B3B3B" }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PATIENT INTAKE PREVIEW */}
      <section className="lp-section" style={{ padding: "5rem 3rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="lp-two-col lp-intake-gap" style={{ gap: "5rem", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, textTransform: "uppercase", color: "#0E6B5E", letterSpacing: "1.5px", marginBottom: 14, fontWeight: 500 }}>What the patient experiences</p>
            <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 34, fontWeight: 400, color: "#1A2B3C", marginBottom: 18, lineHeight: 1.25 }}>8 questions. No checkboxes. Plain language.</h2>
            <p style={{ fontSize: 14, color: "#4A5568", fontWeight: 300, lineHeight: 1.75 }}>
              The intake takes about 8 minutes and arrives alongside your existing appointment confirmation. It does not ask about flossing frequency or last cleaning date. It asks about the real relationship a patient has with their mouth and listens to how they answer. Patients complete it at their own pace, on any device. Nothing about it feels clinical. That is the point.
            </p>
          </div>
          <div style={{ background: "#fff", border: "0.5px solid #E2DDD5", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: "#F7F5F0", padding: "1rem 1.25rem", borderBottom: "0.5px solid #E2DDD5" }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1A2B3C" }}>New patient intake &middot; Dr. Kim&apos;s practice</p>
              <p style={{ fontSize: 11, color: "#4A5568", marginTop: 3 }}>Takes about 8 minutes &middot; No right or wrong answers</p>
            </div>
            {[
              { num: "Question 3 of 8", q: "When you think about the last time you went to the dentist, what comes up for you?", a: "Honestly, embarrassment. It had been too long and I just kept putting it off. I felt like they were going to judge me." },
              { num: "Question 5 of 8", q: "Is there anything you would want a dentist to know about you before you come in?", a: "Just that I am not someone who does not care. Life got in the way. I do care." },
              { num: "Question 7 of 8", q: "If a dentist recommended treatment you were not expecting, how would you typically handle that?", a: "I would probably say yes and then need to think about the cost. I do not love bringing money up in the moment." },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "1rem 1.25rem", borderBottom: i < arr.length - 1 ? "0.5px solid #E2DDD5" : "none" }}>
                <p style={{ fontSize: 10, color: "#0E6B5E", fontWeight: 500, marginBottom: 5 }}>{item.num}</p>
                <p style={{ fontSize: 13, color: "#1A2B3C", lineHeight: 1.5 }}>{item.q}</p>
                <p style={{ fontSize: 12, color: "#4A5568", fontStyle: "italic", lineHeight: 1.6, marginTop: 8, paddingTop: 8, borderTop: "0.5px solid #E2DDD5" }}>{item.a}</p>
              </div>
            ))}
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
              <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 38, color: "#fff", marginBottom: 4 }}>$249<span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: 24 }}>One provider. Unlimited new patient behavioral reports.</p>
              {["Full terrain report with dos and donts", "Legal risk flag system", "Dentist history summary", "PDF export for patient record"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: "#0E6B5E", fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="#" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, color: "#fff", textDecoration: "none", fontSize: 14 }}>Get started</a>
            </div>
            <div style={{ background: "#0E6B5E", border: "0.5px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "2rem" }}>
              <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", letterSpacing: "1px", marginBottom: 16 }}>Group practice</p>
              <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 38, color: "#fff", marginBottom: 4 }}>$549<span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>/month</span></p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 300, marginBottom: 24 }}>Up to 5 providers. Practice dashboard and compliance trend tracking.</p>
              {["Everything in Solo", "Multi-provider dashboard", "Compliance trend analytics", "Priority support"].map((f) => (
                <p key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ fontSize: 16, lineHeight: "20px", flexShrink: 0 }}>·</span>{f}
                </p>
              ))}
              <a href="/signup" style={{ display: "block", marginTop: 24, padding: "11px", textAlign: "center", background: "#fff", borderRadius: 8, color: "#0E6B5E", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Request access</a>
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
        <a href="#" style={{ display: "inline-block", background: "#fff", color: "#0E6B5E", padding: "13px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Request a demo</a>
        <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
          Or email directly: <a href="mailto:david@dentaldiagnostix.com" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}>david@dentaldiagnostix.com</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "2rem 0" }}>
        <div className="lp-section lp-footer" style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 0, paddingBottom: 0 }}>
          <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 14, color: "#4A5568" }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: "#4A5568" }}>Behavioral intake only. Not a clinical tool. &copy; 2026</span>
        </div>
      </footer>
    </>
  );
}
