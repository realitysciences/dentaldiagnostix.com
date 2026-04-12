import SignupForm from "./SignupForm";

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
      <div style={{ width: "100%", maxWidth: 460 }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#0E6B5E",
              marginBottom: "8px",
            }}
          >
            DentalDiagnostix
          </p>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#1A2B3C",
              margin: 0,
            }}
          >
            Create your practice account
          </h1>
        </div>
        <SignupForm />
        <p
          style={{
            textAlign: "center",
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "13px",
            color: "#4A5568",
            marginTop: "20px",
          }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}
          >
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}
