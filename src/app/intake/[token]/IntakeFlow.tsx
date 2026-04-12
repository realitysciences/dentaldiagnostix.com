"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CORE_QUESTIONS = [
  {
    id: "q1",
    text: "When you think about going to the dentist in general, what comes up for you?",
  },
  {
    id: "q2",
    text: "How long has it been since your last visit, and what has been going on in that time?",
  },
  { id: "q3", text: "What made you decide to come in now?" },
  {
    id: "q4",
    text: "Have you ever stopped going to a dentist and then had to find a new one? If so, what happened?",
  },
  {
    id: "q5",
    text: "When you think about your teeth and your mouth, how do you feel about them?",
  },
  {
    id: "q6",
    text: "How would you describe your day-to-day relationship with taking care of your teeth?",
  },
  {
    id: "q7",
    text: "Is there anything that makes you nervous or uncomfortable about dental visits?",
  },
  {
    id: "q8",
    text: "If a dentist recommended something you were not expecting, how would you typically handle that?",
  },
  {
    id: "q9",
    text: "Have you ever started a course of dental treatment and not finished it? What happened?",
  },
  {
    id: "q10",
    text: "How do you usually handle situations where you are not sure you agree with what a professional is recommending?",
  },
  {
    id: "q11",
    text: "Is there anything you would want us to know about you before you come in, so we can take better care of you?",
  },
  {
    id: "q12",
    text: "Is there anything specific you are hoping to get out of this appointment, or anything you are worried about?",
  },
];

type AnswerRecord = { questionText: string; answer: string; questionId: string };

interface Question {
  id: string;
  text: string;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
  }
}

export default function IntakeFlow({
  token,
  patientName,
  patientId,
  practiceName,
}: {
  token: string;
  patientName: string;
  patientId: string;
  practiceName: string;
}) {
  const [phase, setPhase] = useState<"opening" | "questions" | "done">(
    "opening"
  );
  const [questionQueue, setQuestionQueue] = useState<Question[]>([
    ...CORE_QUESTIONS,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [inputText, setInputText] = useState("");
  const [inputMode, setInputMode] = useState<"speak" | "type">("speak");
  const [isRecording, setIsRecording] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioSkipped, setAudioSkipped] = useState(false);
  const [shortAnswerNote, setShortAnswerNote] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [askedFollowUps, setAskedFollowUps] = useState<Set<string>>(new Set());

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const currentQuestion = questionQueue[currentIndex];
  const totalQuestions = questionQueue.length;
  const progress = totalQuestions > 0 ? currentIndex / totalQuestions : 0;

  // Fade in on question change
  useEffect(() => {
    if (phase !== "questions") return;
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [currentIndex, phase]);

  // Auto-play TTS when question appears
  useEffect(() => {
    if (phase !== "questions" || !currentQuestion) return;
    setAudioPlaying(false);
    setAudioSkipped(false);

    const t = setTimeout(() => {
      playTTS(currentQuestion.text);
    }, 500);
    return () => {
      clearTimeout(t);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, phase]);

  const playTTS = async (text: string) => {
    try {
      setAudioPlaying(true);
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        setAudioPlaying(false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        setAudioPlaying(false);
        URL.revokeObjectURL(url);
      };
      audio.onerror = () => {
        setAudioPlaying(false);
        URL.revokeObjectURL(url);
      };
      await audio.play();
    } catch {
      setAudioPlaying(false);
    }
  };

  const skipAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setAudioPlaying(false);
    setAudioSkipped(true);
  };

  const startRecording = useCallback(() => {
    const SR =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setInputMode("type");
      return;
    }
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognitionRef.current = recognition;

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      let transcript = "";
      for (let i = 0; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      setInputText(transcript);
    };
    recognition.onerror = () => {
      setIsRecording(false);
    };
    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
    setIsRecording(true);
  }, []);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsRecording(false);
  }, []);

  const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
  const canSubmit = wordCount >= 3 && !submitting;

  const handleNext = async () => {
    if (!canSubmit || !currentQuestion) return;

    if (wordCount < 15 && !dismissed) {
      setShortAnswerNote(true);
      return;
    }

    setSubmitting(true);
    if (isRecording) stopRecording();

    const answer = inputText.trim();

    // Save response
    await fetch("/api/intake/save-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId,
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        answer,
      }),
    });

    const newAnswers: AnswerRecord[] = [
      ...answers,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        answer,
      },
    ];
    setAnswers(newAnswers);

    // Check triggers (only for core questions)
    let insertFollowUps: Question[] = [];
    if (currentQuestion.id.startsWith("q")) {
      try {
        const res = await fetch("/api/intake/check-triggers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            questionId: currentQuestion.id,
            answer,
            allAnswers: newAnswers,
          }),
        });
        const data = await res.json();
        const newFollowUps = (data.followUpQuestions as string[])
          .filter((q: string) => !askedFollowUps.has(q))
          .slice(0, 3);

        if (newFollowUps.length > 0) {
          setAskedFollowUps((prev) => {
            const next = new Set(prev);
            newFollowUps.forEach((q) => next.add(q));
            return next;
          });
          insertFollowUps = newFollowUps.map((text, i) => ({
            id: `follow-${Date.now()}-${i}`,
            text,
          }));
        }
      } catch {
        // continue without follow-ups
      }
    }

    // Build new queue with follow-ups inserted after current position
    const nextQueue = [...questionQueue];
    nextQueue.splice(currentIndex + 1, 0, ...insertFollowUps);
    setQuestionQueue(nextQueue);

    const nextIndex = currentIndex + 1;

    // Reset state
    setInputText("");
    setShortAnswerNote(false);
    setDismissed(false);
    setSubmitting(false);

    if (nextIndex >= nextQueue.length) {
      // All questions done - complete intake
      setPhase("done");
      await fetch("/api/intake/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleDismissShortNote = () => {
    setDismissed(true);
    setShortAnswerNote(false);
  };

  // Opening screen
  if (phase === "opening") {
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
        <div style={{ maxWidth: 540, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "clamp(24px, 5vw, 34px)",
              fontWeight: 400,
              color: "#1A2B3C",
              marginBottom: "20px",
              lineHeight: 1.3,
            }}
          >
            Before your appointment
          </h1>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "16px",
              color: "#4A5568",
              lineHeight: 1.8,
              marginBottom: "36px",
              fontWeight: 300,
            }}
          >
            This is a short conversation, usually 10-15 minutes. There are no
            right or wrong answers. We&apos;re not asking about your last
            cleaning or how often you floss. We just want to understand a little
            about your relationship with dental care before you come in.
          </p>
          <button
            onClick={() => {
              setPhase("questions");
            }}
            style={{
              background: "#0E6B5E",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "14px 36px",
              fontSize: "15px",
              fontFamily: "DM Sans, Arial, sans-serif",
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
          >
            Let&apos;s begin
          </button>
        </div>
      </main>
    );
  }

  // Done screen
  if (phase === "done") {
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
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#1A2B3C",
              marginBottom: "16px",
            }}
          >
            Thank you.
          </h1>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "16px",
              color: "#4A5568",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Your dentist will review this before your appointment. There is
            nothing else you need to do.
          </p>
        </div>
      </main>
    );
  }

  // Question screen
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F5F0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 24px 40px",
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: "3px",
          background: "#E2DDD5",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#0E6B5E",
            width: `${progress * 100}%`,
            transition: "width 0.5s ease",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 600,
          width: "100%",
          marginTop: "80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Question */}
        <h2
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "clamp(20px, 4vw, 26px)",
            fontWeight: 400,
            color: "#1A2B3C",
            lineHeight: 1.5,
            marginBottom: "12px",
          }}
        >
          {currentQuestion?.text}
        </h2>

        {/* Audio controls */}
        {(audioPlaying || !audioSkipped) && (
          <div style={{ marginBottom: "24px" }}>
            {audioPlaying ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Waveform />
                <button
                  onClick={skipAudio}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#4A5568",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: "DM Sans, Arial, sans-serif",
                    padding: 0,
                    textDecoration: "underline",
                  }}
                >
                  skip audio
                </button>
              </div>
            ) : null}
          </div>
        )}

        {/* Short answer note */}
        {shortAnswerNote && (
          <div
            style={{
              background: "#E4F2F0",
              border: "1px solid #0E6B5E44",
              borderRadius: "8px",
              padding: "12px 16px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "14px",
                color: "#0E6B5E",
              }}
            >
              Feel free to say as much or as little as you&apos;d like.
            </p>
            <button
              onClick={handleDismissShortNote}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#0E6B5E",
                fontSize: "18px",
                lineHeight: 1,
                padding: "0 4px",
              }}
            >
              x
            </button>
          </div>
        )}

        {/* Mode toggle */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          {(["speak", "type"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                if (mode === "speak" && isRecording) stopRecording();
                setInputMode(mode);
              }}
              style={{
                padding: "6px 16px",
                borderRadius: "20px",
                border: "1px solid",
                borderColor:
                  inputMode === mode ? "#0E6B5E" : "#E2DDD5",
                background: inputMode === mode ? "#E4F2F0" : "transparent",
                color: inputMode === mode ? "#0E6B5E" : "#4A5568",
                fontSize: "13px",
                fontFamily: "DM Sans, Arial, sans-serif",
                cursor: "pointer",
                fontWeight: inputMode === mode ? 500 : 400,
              }}
            >
              {mode === "speak" ? "Speak" : "Type"}
            </button>
          ))}
        </div>

        {/* Input area */}
        {inputMode === "speak" ? (
          <div style={{ textAlign: "center" }}>
            {/* Transcript display */}
            {inputText && (
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #E2DDD5",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "20px",
                  minHeight: "80px",
                  textAlign: "left",
                  fontFamily: "DM Sans, Arial, sans-serif",
                  fontSize: "15px",
                  color: "#1A2B3C",
                  lineHeight: 1.7,
                }}
              >
                {inputText}
              </div>
            )}
            {/* Record button */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: "none",
                background: isRecording ? "#9B3B3B" : "#0E6B5E",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isRecording
                  ? "0 0 0 8px rgba(155,59,59,0.15)"
                  : "none",
                transition: "all 0.2s ease",
              }}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
              {isRecording ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <rect x="4" y="4" width="12" height="12" rx="2" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="white"
                >
                  <rect x="6" y="0" width="8" height="14" rx="4" />
                  <path
                    d="M2 11c0 4.4 3.6 8 8 8s8-3.6 8-8"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <line
                    x1="10"
                    y1="19"
                    x2="10"
                    y2="23"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
            {isRecording && (
              <p
                style={{
                  marginTop: "12px",
                  fontFamily: "DM Sans, Arial, sans-serif",
                  fontSize: "13px",
                  color: "#9B3B3B",
                }}
              >
                Listening...
              </p>
            )}
          </div>
        ) : (
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your answer here..."
            style={{
              width: "100%",
              minHeight: "140px",
              padding: "14px 16px",
              borderRadius: "8px",
              border: "1px solid #E2DDD5",
              background: "#fff",
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "15px",
              color: "#1A2B3C",
              lineHeight: 1.7,
              resize: "vertical",
              outline: "none",
            }}
          />
        )}

        {/* Next button */}
        <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px" }}>
          {!canSubmit && inputText.trim().length > 0 && (
            <p style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "13px",
              color: "#4A5568",
              margin: 0,
            }}>
              Say a little more to continue
            </p>
          )}
          <button
            onClick={handleNext}
            disabled={!canSubmit}
            style={{
              background: canSubmit ? "#0E6B5E" : "#E2DDD5",
              color: canSubmit ? "#fff" : "#4A5568",
              border: "none",
              borderRadius: "8px",
              padding: "12px 32px",
              fontSize: "15px",
              fontFamily: "DM Sans, Arial, sans-serif",
              fontWeight: 500,
              cursor: canSubmit ? "pointer" : "not-allowed",
              transition: "background 0.2s ease",
            }}
          >
            {submitting ? "Saving..." : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}

function Waveform() {
  return (
    <div
      style={{ display: "flex", gap: "3px", alignItems: "center", height: "20px" }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            display: "block",
            width: "3px",
            background: "#0E6B5E",
            borderRadius: "2px",
            animation: `waveBar 0.8s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.12}s`,
            height: `${8 + i * 3}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes waveBar {
          from { opacity: 0.4; transform: scaleY(0.6); }
          to { opacity: 1; transform: scaleY(1.3); }
        }
      `}</style>
    </div>
  );
}
