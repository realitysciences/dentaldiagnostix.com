import Link from "next/link";
import ContactForm from "./ContactForm";

export default function SignupPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F5F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#0E6B5E", marginBottom: "8px" }}>
              DentalDiagnostix
            </p>
          </Link>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "26px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 10px" }}>
            Request access
          </h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: 0, lineHeight: 1.65 }}>
            DentalDiagnostix is currently in early access. We&apos;ll be in touch within one business day.
          </p>
        </div>
        <ContactForm />
        <p style={{ textAlign: "center", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>Sign in</Link>
        </p>
      </div>
    </main>
  );
}
