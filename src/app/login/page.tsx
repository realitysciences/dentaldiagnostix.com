import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
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
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
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
          </Link>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#1A2B3C",
              margin: 0,
            }}
          >
            Sign in to your practice
          </h1>
        </div>
        <LoginForm />
        <p
          style={{
            textAlign: "center",
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "13px",
            color: "#4A5568",
            marginTop: "20px",
          }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            style={{ color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}
          >
            Create one
          </a>
        </p>
      </div>
    </main>
  );
}
