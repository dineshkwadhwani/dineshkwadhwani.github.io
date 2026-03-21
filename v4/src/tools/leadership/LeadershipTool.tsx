import { useEffect, useRef, useState } from "react";
import TraitRadar from "@/tools/leadership/TraitRadar";

type Message = {
  role: "ai" | "user";
  content: string;
};

const API = "http://127.0.0.1:5000";

const LeadershipTool = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [traits, setTraits] = useState<Record<string, number> | null>(null);
  const [finished, setFinished] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // ---------------------------------------------------
  // Start session
  // ---------------------------------------------------
  useEffect(() => {
    const startSession = async () => {
      try {
        const res = await fetch(`${API}/start`, {
          method: "POST",
        });

        const data = await res.json();
        setSessionId(data.session_id);

        if (data.question?.text) {
          setMessages([{ role: "ai", content: data.question.text }]);
        }
      } catch (err) {
        console.error("Failed to start session:", err);
      }
    };

    startSession();
  }, []);

  // ---------------------------------------------------
  // Auto scroll
  // ---------------------------------------------------
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------------------------------------------------
  // Send answer
  // ---------------------------------------------------
  const send = async () => {
    if (!input.trim() || !sessionId || finished) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    try {
      const res = await fetch(`${API}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          answer: userMessage,
        }),
      });

      const data = await res.json();

      // ---------------------------------------------------
      // FINISHED
      // ---------------------------------------------------
      if (data.done) {
        setFinished(true);
        setTraits(data.traits);
        
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: "Assessment complete." },
          { role: "ai", content: data.report.summary },
          
        ]
      );
        return;
      }

      if (data.reflection) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.reflection },
        ]);
      }

      if (data.next_question?.text) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.next_question.text },
        ]);
      }
    } catch (err) {
      console.error("Answer submission failed:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Title */}
      <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
        Leadership Assessment
      </h1>

      {/* --------------------------------------------------- */}
      {/* RESULTS MODE LAYOUT */}
      {/* --------------------------------------------------- */}
      <div
        className={`grid gap-8 ${
          finished ? "lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {/* Chat */}
        <div
          className={`bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-6 overflow-y-auto transition-all ${
            finished ? "h-[360px]" : "h-[460px]"
          }`}
        >
          <div className="space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-olive text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* --------------------------------------------------- */}
        {/* Radar appears AFTER finish */}
        {/* --------------------------------------------------- */}
        {finished && traits && (
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-border p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Leadership Trait Profile
            </h2>

            <TraitRadar traits={traits} />
          </div>
        )}
      </div>

      {/* --------------------------------------------------- */}
      {/* Input hidden after finish */}
      {/* --------------------------------------------------- */}
      {!finished && (
        <div className="flex gap-3 mt-5">
          <input
            className="flex-1 px-4 py-3 rounded-xl border border-border bg-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button
            onClick={send}
            className="px-6 py-3 rounded-xl bg-olive text-white font-medium hover:opacity-90 transition"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default LeadershipTool;
