import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Dankh",
    role: "Infra Architect",
    quote:
      "Dinesh is one of those rare managers who naturally serves as an inspiring mentor for the whole staff. He exhibits strong interpersonal skills and a unique capacity for empathy, motivating teams to care deeply about project success while becoming the go-to person for conflict resolution and complex problem solving.",
  },
  {
    name: "Rommel Sharma",
    role: "Digital Transformation Leader",
    quote:
      "Technically very sound and always willing to share his knowledge, Dinesh creates an environment that is light, positive, and highly productive. With his technical expertise and good nature, he consistently contributes toward both project and team success.",
  },
  {
    name: "Seema Kamble Nadkarni",
    role: "Flutter Developer",
    quote:
      "Dinesh is a very supportive manager who encourages team members to give their best while exploring different technologies and modules. He appreciates good work and fosters a culture where people genuinely enjoy what they do.",
  },
  {
    name: "Sandeep Garud",
    role: "CEO",
    quote:
      "A sincere and meticulous planner, Dinesh sets clear goals and inspires confidence across the team. Broad-minded and encouraging, he demonstrates calm judgment under pressure and strong people management skills.",
  },
  {
    name: "Anand Mitragotri",
    role: "Program Manager",
    quote:
      "An intelligent and motivated leader, Dinesh has the ability to guide multi-layered teams across client and corporate environments. He consistently provides solutions to complex problems from both technical and cultural perspectives while maintaining excellent communication.",
  },
  {
    name: "Manisha Bathia",
    role: "Project Manager",
    quote:
      "A disciplined and enthusiastic manager, Dinesh drives projects exceptionally well while remaining cooperative and supportive. He creates a welcoming team culture and is someone people genuinely enjoy working with.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Disable background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-muted relative">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-10 text-foreground text-center md:text-left">
          Trusted by Senior Leaders
        </h2>

        {/* Stable Card */}
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm min-h-[300px] flex flex-col justify-between">

            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-card flex items-center justify-center text-foreground font-semibold text-lg">
                {active.name.charAt(0)}
              </div>
              <div>
                <strong className="text-foreground text-base md:text-lg block">
                  {active.name}
                </strong>
                <span className="text-muted-foreground text-sm md:text-[15px]">
                  {active.role}
                </span>
              </div>
            </div>

            {/* Clamped Quote */}
            <blockquote className="font-display text-lg sm:text-xl md:text-[26px] leading-[1.5] text-foreground line-clamp-4">
              “{active.quote}”
            </blockquote>

            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 text-accent font-semibold text-sm hover:text-sage-hover transition-colors"
            >
              View Full →
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-8 justify-center md:justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === activeIndex
                    ? "bg-accent"
                    : "bg-border hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-xl relative">

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-card flex items-center justify-center text-foreground font-semibold text-lg">
                {active.name.charAt(0)}
              </div>
              <div>
                <strong className="text-foreground text-lg block">
                  {active.name}
                </strong>
                <span className="text-muted-foreground text-sm">
                  {active.role}
                </span>
              </div>
            </div>

            <blockquote className="font-display text-lg md:text-xl leading-[1.6] text-foreground">
              “{active.quote}”
            </blockquote>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;