import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ExecutiveChat = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<
    { text: string; isUser: boolean }[]
  >([
    {
      text: "Welcome. Share your leadership context, and I will guide the conversation toward clarity.",
      isUser: false,
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you. What outcome would make this situation successful for you?",
          isUser: false,
        },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!open && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setOpen(true)}
                className="h-14 w-14 rounded-full bg-accent text-cream shadow-executive hover:scale-105 transition-all flex items-center justify-center"
              >
                <MessageCircle size={22} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">Chat With Dinesh</TooltipContent>
          </Tooltip>
        )}

        {open && (
          <div
            className="
              fixed
              bottom-4 right-4
              w-[80vw] max-w-[380px]
              h-[65dvh]
              sm:relative sm:bottom-auto sm:right-auto sm:w-[380px] sm:h-[480px]
              bg-card border border-border
              rounded-2xl
              shadow-2xl
              flex flex-col
              overflow-hidden
              animate-chat
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Chat with Dinesh
                </p>
                <p className="text-xs text-muted-foreground">
                  Executive advisory assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "px-3 py-2 rounded-lg max-w-[80%]",
                    m.isUser
                      ? "bg-accent text-cream self-end"
                      : "bg-muted text-foreground"
                  )}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2 flex-shrink-0 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="
      flex-1 min-w-0
      px-3 py-2
      rounded-lg
      border border-border
      bg-transparent
      text-sm
      focus:outline-none
    "
              />

              <button
                onClick={handleSend}
                className="
      flex-shrink-0
      flex items-center justify-center
      rounded-lg
      bg-accent text-cream font-semibold
      hover:scale-105 transition
      w-10 h-10 sm:w-auto sm:h-auto
      px-0 sm:px-4
    "
              >
                <span className="sm:hidden text-base">➤</span>
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          .animate-chat {
            animation: slideUp 0.25s ease-out;
          }

          @keyframes slideUp {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default ExecutiveChat;