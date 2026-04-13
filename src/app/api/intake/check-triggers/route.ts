import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const maxDuration = 30;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are analyzing a dental patient's intake response to determine if follow-up questions are needed. You will receive the current question, the patient's answer, and the conversation so far. Respond only with valid JSON in this exact format: { "triggers": string[], "followUpQuestions": string[] }

Analyze the answer for these 8 trigger patterns and return the matching trigger names:
- BAD_PROVIDER: mentions a negative experience with a previous dentist
- SHAME: uses shame or embarrassment language about their dental situation
- COST: deflects to cost or finances when discussing treatment decisions
- BLAME: externalizes blame onto a past provider
- VAGUE_WRONG: vague reference to something going wrong clinically
- AVOIDANCE: describes repeatedly putting off dental care
- HYGIENE_GUILT: expresses guilt about their hygiene routine
- ANXIETY: expresses fear or anxiety about dental visits

For each trigger detected, include the appropriate follow-up questions from this map:

BAD_PROVIDER:
- What was it about that experience that stayed with you?
- Did you feel like you were able to say anything at the time, or did you mostly just decide not to go back?
- Is there anything you would want a new dentist to know going in, so that does not happen again?

SHAME:
- It sounds like you might be a little hard on yourself about this. Is that fair to say?
- When you imagine sitting down with a dentist, what are you most worried they will think or say?

COST:
- When it comes to treatment decisions, how much does cost factor into what you end up doing?
- Have you ever agreed to a treatment plan and then not been able to move forward with it for financial reasons?

BLAME:
- When you look back on that, what do you think should have happened differently?
- Did you bring it up with the dentist at the time, or share your experience anywhere afterward?

VAGUE_WRONG:
- Can you tell me a bit more about what happened? Even just generally.
- Did that affect how you felt about going to the dentist afterward?

AVOIDANCE:
- When you think about why it kept getting pushed back, what was really going on?
- Is there a part of you that was relieved to have a reason not to go, or was it more just circumstances?

HYGIENE_GUILT:
- What does your routine actually look like day to day?
- When you skip things, is it usually because you forget, because it feels like a chore, or something else?

ANXIETY:
- Is it more the physical sensations, or something about the situation itself?
- Have you ever had a dentist who made it easier? What did they do differently?
- Is there anything specific that would help you feel more comfortable going in?

Rules:
- Only include follow-up questions for triggers that are clearly present, not speculative
- For mild signals include only the first follow-up question for that trigger
- For strong signals include all follow-up questions for that trigger
- Do not repeat a follow-up question that has already been asked in this session
- Maximum 3 follow-up questions inserted before the next core question
- Return empty arrays if no triggers detected`;

export async function POST(request: NextRequest) {
  const { questionId, answer, allAnswers } = await request.json();

  if (!questionId || !answer) {
    return NextResponse.json(
      { error: "questionId and answer are required" },
      { status: 400 }
    );
  }

  const conversationContext = (allAnswers || [])
    .map(
      (a: { questionText: string; answer: string }) =>
        `Q: ${a.questionText}\nA: ${a.answer}`
    )
    .join("\n\n");

  const userMessage = `Current question ID: ${questionId}
Current answer: ${answer}

Full conversation so far:
${conversationContext || "(this is the first answer)"}`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: userMessage }],
  });

  const content = response.content[0];
  if (content.type !== "text") {
    return NextResponse.json({ triggers: [], followUpQuestions: [] });
  }

  try {
    const parsed = JSON.parse(content.text);
    return NextResponse.json({
      triggers: parsed.triggers || [],
      followUpQuestions: parsed.followUpQuestions || [],
    });
  } catch {
    console.error("Failed to parse trigger response:", content.text);
    return NextResponse.json({ triggers: [], followUpQuestions: [] });
  }
}
