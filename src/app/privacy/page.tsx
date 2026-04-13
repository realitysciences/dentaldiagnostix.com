import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <header style={{ background: "#1A2B3C", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: "18px", color: "#fff", letterSpacing: "0.3px" }}>DentalDiagnostix</span>
        </Link>
      </header>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#0E6B5E", fontWeight: 500, marginBottom: 12 }}>Legal</p>
        <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 36, fontWeight: 400, color: "#1A2B3C", marginBottom: 10, lineHeight: 1.2 }}>Privacy Policy</h1>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 13, color: "#4A5568", marginBottom: 48 }}>Last updated: April 12, 2026</p>

        <div style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 15, color: "#1A2B3C", lineHeight: 1.8 }}>

          <Section title="Who we are">
            <P>DentalDiagnostix is a product of Spheronaut LLC. We provide a behavioral intake and reporting platform for dental practices. Our service helps dentists understand the psychological and behavioral context of their patients before appointments through a structured intake process followed by an AI-generated terrain report.</P>
            <P>Contact: <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E" }}>davidbensondds@gmail.com</a></P>
          </Section>

          <Section title="What we collect and why">
            <Subsection title="Practice accounts">
              <P>When a dentist creates an account, we collect their email address, name, and practice name. This information is used to authenticate their account, identify their practice within the platform, and send them notifications about patient intake completions and reports.</P>
            </Subsection>

            <Subsection title="Patient intake data">
              <P>Patients are invited to complete an intake by their dental practice. During the intake, patients respond to a series of open-ended questions about their dental history, prior provider relationships, avoidance patterns, and emotional context around dental care. Responses may be submitted by text or voice.</P>
              <P>We collect: patient name, email address, appointment date (if provided by the practice), and the full text of their intake responses.</P>
              <P>This data is used solely to generate the behavioral terrain report delivered to the referring dental practice.</P>
            </Subsection>

            <Subsection title="AI-generated reports">
              <P>Patient intake responses are processed by an AI language model (Anthropic Claude) to produce a structured behavioral report. The report includes fields such as avoidance type, compliance risk, legal risk classification, terrain summary, dentist-specific guidance, and historical context. The generated report is stored and made accessible to the dental practice that requested the intake.</P>
            </Subsection>

            <Subsection title="Outcome and clinical notes">
              <P>Dental practices may optionally log post-appointment outcomes and add private notes to a patient record. This information is stored on the practice's account and is not shared externally.</P>
            </Subsection>
          </Section>

          <Section title="How we store your data">
            <P>All data is stored in a Supabase-hosted PostgreSQL database with row-level security policies. Patient data is scoped to the practice that created the record — no practice can access another practice's patients or reports.</P>
            <P>Authentication is handled by Supabase Auth. Passwords are never stored in plain text.</P>
          </Section>

          <Section title="Who sees patient data">
            <P>Patient intake responses and generated reports are visible only to the dental practice that sent the intake invitation. DentalDiagnostix staff may access data for the purposes of debugging, support, or improving the service.</P>
            <P>Practices may generate a shareable read-only link for a specific report. These links contain a randomly generated token and can be shared by the practice at their discretion. We do not publish or index these links.</P>
            <P>We do not sell patient data. We do not share patient data with third parties for marketing or advertising purposes.</P>
          </Section>

          <Section title="AI processing">
            <P>Patient intake responses are sent to Anthropic's API for processing as part of report generation. This means response data passes through Anthropic's infrastructure. Anthropic's privacy policy governs how they handle API inputs. We do not use patient data to train AI models.</P>
          </Section>

          <Section title="Email communications">
            <P>We use Resend to deliver transactional emails. This includes intake invitations sent to patients, intake completion alerts sent to dentists, and reminder emails. We do not send marketing emails to patients. Dentists may receive product updates at the email address on their account.</P>
          </Section>

          <Section title="Patient rights">
            <P>Patients who have completed a DentalDiagnostix intake may request access to, correction of, or deletion of their data by emailing <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E" }}>davidbensondds@gmail.com</a> with their name and the name of the dental practice that invited them.</P>
            <P>Dental practices may delete a patient record from their dashboard, which removes the patient's data from our system.</P>
          </Section>

          <Section title="Cookies and tracking">
            <P>We use session cookies for authentication. We do not use third-party tracking cookies, advertising pixels, or analytics tools that share data with external parties.</P>
          </Section>

          <Section title="Data retention">
            <P>Patient data is retained as long as the associated dental practice maintains an active account on DentalDiagnostix. If a practice account is deleted, associated patient and report data is deleted within 30 days.</P>
          </Section>

          <Section title="Changes to this policy">
            <P>We may update this policy as the product evolves. Material changes will be communicated to dentists at the email address on their account. Continued use of the platform after changes constitutes acceptance of the updated policy.</P>
          </Section>

          <Section title="Contact">
            <P>Questions about this policy or data requests: <a href="mailto:davidbensondds@gmail.com" style={{ color: "#0E6B5E" }}>davidbensondds@gmail.com</a></P>
          </Section>

        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #E2DDD5" }}>
          <Link href="/" style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 13, color: "#4A5568", textDecoration: "none" }}>← Back to home</Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: 20, fontWeight: 400, color: "#1A2B3C", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #E2DDD5" }}>{title}</h2>
      {children}
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A2B3C", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 10 }}>{title}</h3>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ marginBottom: 14, color: "#4A5568", lineHeight: 1.8 }}>{children}</p>
  );
}
