import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SetupPracticeForm from "./SetupPracticeForm";

export default async function SetupPracticePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Already has a practice, go to dashboard
  const { data: practice } = await supabase
    .from("dd_practices")
    .select("id")
    .eq("user_id", user.id)
    .single();

  if (practice) redirect("/dashboard");

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: 460 }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#0E6B5E", marginBottom: "8px" }}>
            DentalDiagnostix
          </p>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "26px", fontWeight: 400, color: "#1A2B3C", margin: 0 }}>
            Set up your practice
          </h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568", marginTop: "8px" }}>
            Logged in as {user.email}
          </p>
        </div>
        <SetupPracticeForm userId={user.id} email={user.email!} />
      </div>
    </main>
  );
}
