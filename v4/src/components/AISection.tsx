import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface Tool {
  id: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
}

const tools: Tool[] = [
  {
    id: "reflection",
    label: "Reflection Coach",
    tag: "CORE TOOL",
    title: "Executive Reflection Coach",
    description:
      "A structured conversational intelligence that helps senior leaders slow down thinking, challenge assumptions, and act with deliberate clarity.",
    points: [
      "Guided reflective questioning",
      "Cognitive bias interruption",
      "Structured executive thinking",
    ],
    cta: "Enter Reflection Environment →",
  },
  {
    id: "blindspot",
    label: "Blind-Spot Detector",
    tag: "AWARENESS",
    title: "Blind-Spot Detector",
    description:
      "Surfaces leadership patterns often invisible from inside the role — enabling earlier intervention and stronger strategic positioning.",
    points: [
      "Behavioral pattern mapping",
      "Strategic risk visibility",
      "Communication gap detection",
    ],
    cta: "Launch Detector →",
  },
  {
    id: "decision",
    label: "Decision Simulator",
    tag: "STRATEGY",
    title: "Decision Simulator",
    description:
      "Model high-stakes choices before committing with disciplined scenario thinking.",
    points: [
      "Scenario modeling",
      "Trade-off intelligence",
      "Outcome projection",
    ],
    cta: "Simulate Decision →",
  },
  {
    id: "style",
    label: "Leadership Style Analyzer",
    tag: "INFLUENCE",
    title: "Leadership Style Analyzer",
    description:
      "Understand how your leadership presence is experienced by others.",
    points: [
      "Leadership signal analysis",
      "Influence mapping",
      "Executive presence insights",
    ],
    cta: "Analyze Style →",
  },
];

const AISection = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* ================= MEASURE MAX HEIGHT ONCE ================= */

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    let highest = 0;
    const originalIndex = activeIndex;

    // Measure all tools
    tools.forEach((_, index) => {
      setActiveIndex(index);
      // Force synchronous layout
      const height = contentRef.current?.offsetHeight || 0;
      if (height > highest) highest = height;
    });

    // Restore original index
    setActiveIndex(originalIndex);
    setMaxHeight(highest);
  }, []);

  /* ================= DESKTOP DETECTION ================= */

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= MOBILE LOGIC (UNCHANGED) ================= */

  const startMobileAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
      setProgress(0);
    }, 9000);
  };

  useEffect(() => {
    if (isDesktop) return;

    startMobileAutoRotate();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1.4, 100));
    }, 120);

    return () => clearInterval(progressInterval);
  }, [activeIndex, isDesktop]);

  /* ================= MOBILE AUTO SCROLL (UNCHANGED) ================= */

  useEffect(() => {
    if (isDesktop) return;

    const container = navContainerRef.current;
    const activeButton = buttonRefs.current[activeIndex];

    if (!container || !activeButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    const offset =
      buttonRect.left -
      containerRect.left -
      containerRect.width / 2 +
      buttonRect.width / 2;

    container.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  }, [activeIndex, isDesktop]);

  /* ================= DESKTOP SEGMENTED LOGIC ================= */

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.25;

        if (next >= 100) return 0;
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const segmentSize = 100 / tools.length;
    const newIndex = Math.floor(progress / segmentSize);

    if (newIndex !== activeIndex && newIndex < tools.length) {
      setActiveIndex(newIndex);
    }
  }, [progress, isDesktop, activeIndex]);

  const handleToolClick = (index: number) => {
    setActiveIndex(index);
    if (!isDesktop) {
      setProgress(0);
      startMobileAutoRotate();
    } else {
      const segmentSize = 100 / tools.length;
      setProgress(index * segmentSize);
    }
  };

  const activeTool = tools[activeIndex];
  const positions = [12.5, 37.5, 62.5, 87.5];

  return (
    <section
      id="ai"
      className="relative scroll-mt-12 md:scroll-mt-26 lg:scroll-mt-20 py-[50px] md:py-[86px] lg:py-[110px] bg-gradient-dark text-cream overflow-hidden"
    >
      <div className="container relative z-10">

        {/* HEADER (UNCHANGED FONT SIZE) */}
        <div>
          <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-medium mb-2 text-center md:text-left">
            Executive Intelligence Platform
          </h2>

          <p className="text-beige/90 text-sm md:text-base max-w-3xl text-center md:text-left leading-snug">
            A private intelligence layer designed to sharpen judgment and support leaders.
          </p>
        </div>

        {/* MOBILE PILLS */}
        {!isDesktop && (
          <div
            ref={navContainerRef}
            className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {tools.map((tool, index) => (
              <button
                key={tool.id}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => handleToolClick(index)}
                className={cn(
                  "min-w-max whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border",
                  index === activeIndex
                    ? "bg-cream text-navy border-cream shadow-sm"
                    : "bg-transparent text-beige/70 border-cream/20"
                )}
              >
                {tool.label}
              </button>
            ))}
          </div>
        )}

        {/* DESKTOP PILLS (EXACT POSITIONS) */}
        {isDesktop && (
          <div className="relative mt-8 h-[44px]">
            {tools.map((tool, index) => (
              <button
                key={tool.id}
                onClick={() => handleToolClick(index)}
                className={cn(
                  "absolute -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                  index === activeIndex
                    ? "bg-cream text-navy border-cream shadow-sm"
                    : "bg-transparent text-beige/70 border-cream/20"
                )}
                style={{ left: `${positions[index]}%` }}
              >
                {tool.label}
              </button>
            ))}
          </div>
        )}

        {/* MOBILE PROGRESS (UNCHANGED) */}
        {!isDesktop && (
          <div className="w-full h-[2px] bg-navy-deep/50 mt-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-cream transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* DESKTOP SEGMENTED PROGRESS */}
        {isDesktop && (
          <div className="relative w-full h-[3px] bg-navy-deep/50 mt-6 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-cream transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />

            {positions.map((pos, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-[1px] bg-navy-deep/70"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>
        )}

        {/* CONTENT WITH FIXED HEIGHT */}
        <div
          className="mt-6 transition-all duration-500 ease-out"
          style={{ minHeight: maxHeight ? `${maxHeight}px` : undefined }}
        >
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            <div className="hidden md:block h-72 rounded-2xl bg-gradient-to-br from-navy-deep to-navy/80 shadow-glow" />

            <div>
              <span className="text-[10px] tracking-[0.18em] text-executive-gold font-medium">
                {activeTool.tag}
              </span>

              <h3 className="font-body text-lg md:text-xl font-semibold mt-1.5 mb-2 leading-snug">
                {activeTool.title}
              </h3>

              <p className="text-beige/95 text-m leading-snug">
                {activeTool.description}
              </p>

              <ul className="mt-3 pl-4 space-y-1">
                {activeTool.points.map((point, i) => (
                  <li key={i} className="text-cream/90 text-sm list-disc">
                    {point}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(`/tool/${activeTool.id}`)}
                className="inline-block mt-4 px-4 py-2 rounded-md border border-cream/30 text-sm font-semibold hover:bg-cream hover:text-navy transition-all"
              >
                {activeTool.cta}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
