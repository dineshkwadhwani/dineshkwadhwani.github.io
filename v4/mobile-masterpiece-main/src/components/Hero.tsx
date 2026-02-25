import { useEffect, useLayoutEffect, useRef, useState } from "react";
import profileImage from "@/assets/sir1.png";

/* ----------------------------------------
   Metric
----------------------------------------- */
interface MetricProps {
  value: string;
  label: string;
  delay?: number;
}

const Metric = ({ value, label, delay = 0 }: MetricProps) => {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep += 1;
        const progress = 1 - Math.pow(1 - currentStep / steps, 3);
        setDisplay(Math.round(numeric * progress));

        if (currentStep >= steps) {
          setDisplay(numeric);
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [numeric, delay]);

  return (
    <div className="text-olive text-sm font-medium">
      <span className="text-foreground font-semibold">
        {display}
        {suffix}
      </span>{" "}
      {label}
    </div>
  );
};

/* ----------------------------------------
   Slides
----------------------------------------- */
const heroSlides = [
  {
    headline: "Hello — I am Coach Dinesh.",
    description:
      "Technology and product executive with 27+ years leading global organizations, scaling engineering functions, and guiding enterprises through transformation.",
  },
  {
    headline: "Lead With Clarity. Execute With Confidence.",
    description:
      "I coach ambitious professionals and emerging leaders to think strategically, communicate decisively, and unlock their next level of performance.",
  },
  {
    headline: "From Potential to Executive Presence.",
    description:
      "I partner with high-performing professionals to sharpen decision-making, elevate leadership impact, and accelerate career progression.",
  },
  {
    headline: "Think Like a Leader. Act Like an Owner.",
    description:
      "Through structured, high-impact coaching, I help professionals develop strategic clarity, influence without authority, and deliver measurable business outcomes.",
  },
  {
    headline: "Clarity. Confidence. Career Acceleration.",
    description:
      "I coach professionals navigating complex workplaces to lead with conviction, manage stakeholders effectively, and build long-term influence.",
  },
  {
    headline: "Executive Insight. Personal Transformation.",
    description:
      "I now dedicate my 3 decades of expertise to coaching professionals who aspire to lead at higher levels with sharper thinking, stronger influence, and greater impact.",
  },
];

/* ----------------------------------------
   Hero Component
----------------------------------------- */
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  const measureRef = useRef<HTMLDivElement>(null);

  /* -------- Auto Rotate -------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* -------- Measure Tallest Slide -------- */
  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const children = Array.from(measureRef.current.children);
    const heights = children.map(
      (child) => (child as HTMLElement).offsetHeight
    );

    const tallest = Math.max(...heights);
    setMaxHeight(tallest);
  }, []);

  return (
    <section className="hero-radial py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          {/* TEXT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Invisible measurement container */}
            <div
              ref={measureRef}
              className="absolute invisible pointer-events-none h-auto"
            >
              {heroSlides.map((slide, index) => (
                <div key={index} className="max-w-xl">
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] mb-4">
                    {slide.headline}
                  </h1>
                  <p className="text-base md:text-lg">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Visible slide wrapper with locked height */}
            <div
              style={{ height: maxHeight ?? "auto" }}
              className="relative transition-all duration-700"
            >
              <div key={activeIndex} className="animate-fade-in">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.15] mb-4 text-foreground">
                  {heroSlides[activeIndex].headline}
                </h1>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {heroSlides[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <Metric value="27+" label="Years" delay={240} />
              <Metric value="2000+" label="People Influenced" delay={360} />
              <Metric value="100+" label="Workshops" delay={480} />
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[420px] max-w-md">
              <img
                src={profileImage}
                alt="Coach Dinesh"
                className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.28)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;