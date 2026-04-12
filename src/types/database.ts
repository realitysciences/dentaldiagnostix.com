export type AvoidanceType =
  | "Shame-based"
  | "Fear-based"
  | "Indifference"
  | "Circumstantial"
  | "Mixed";

export type ComplianceRisk = "Low" | "Moderate" | "High";
export type LegalRisk = "Low" | "Elevated" | "High";
export type HygieneRelationship =
  | "Guilt-driven"
  | "Diligent"
  | "Indifferent"
  | "Inconsistent"
  | "Avoidant";

export type PatientStatus = "pending" | "in_progress" | "complete";

export interface Practice {
  id: string;
  user_id: string;
  practice_name: string;
  dentist_name: string;
  email: string;
  created_at: string;
}

export interface Patient {
  id: string;
  practice_id: string;
  name: string;
  email: string;
  token: string;
  status: PatientStatus;
  created_at: string;
}

export interface Response {
  id: string;
  patient_id: string;
  question_id: string;
  question_text: string;
  answer: string;
  created_at: string;
}

export interface Report {
  id: string;
  patient_id: string;
  practice_id: string;
  avoidance_type: AvoidanceType;
  compliance_risk: ComplianceRisk;
  legal_risk: LegalRisk;
  hygiene_relationship: HygieneRelationship;
  terrain_summary: string;
  compliance_signal: string;
  legal_flag: string | null;
  dentist_history: string;
  dos: string[];
  donts: string[];
  full_report_json: Record<string, unknown>;
  created_at: string;
}

export interface TriggerCheckResult {
  triggers: string[];
  followUpQuestions: string[];
}
