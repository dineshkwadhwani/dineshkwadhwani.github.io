import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Credential {
  title: string;
  subtitle: string;
  type: "education" | "certification";
  highlight: string;
}

const credentials: Credential[] = [
  {
    title: "MBA — Systems & Marketing",
    subtitle: "Indore University, 1998",
    type: "education",
    highlight: "Strategic leadership and systems thinking for complex organisations.",
  },
  {
    title: "Bachelor of Science",
    subtitle: "Indore University, 1995",
    type: "education",
    highlight: "Analytical foundations for technology, data and decision‑making.",
  },
  {
    title: "Honors Diploma in Systems Management",
    subtitle: "NIIT, Indore, 1997",
    type: "education",
    highlight: "Specialised focus on enterprise systems and technology management.",
  },
  {
    title: "Project Management Professional (PMP)",
    subtitle: "Certified",
    type: "certification",
    highlight: "Global benchmark for leading large, cross‑functional initiatives.",
  },
  {
    title: "Certified SAFe Practitioner",
    subtitle: "Scaled Agile Framework",
    type: "certification",
    highlight: "Applying agile principles at scale across distributed teams.",
  },
  {
    title: "Certified Agile Coach & Scrum Master",
    subtitle: "Professional Certification",
    type: "certification",
    highlight: "Coaching leaders and teams through agile transformation.",
  },
  {
    title: "Sun Certified Architect",
    subtitle: "Sun Microsystems",
    type: "certification",
    highlight: "Enterprise‑grade architecture for robust, scalable systems.",
  },
  {
    title: "Sun Certified Developer",
    subtitle: "Sun Microsystems",
    type: "certification",
    highlight: "Hands‑on engineering depth in production‑ready software.",
  },
];

/* ----------------------------------------
   Hook: Reveal Section Once On Scroll
----------------------------------------- */
const useRevealOnScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const Credentials = () => {
  const { ref, visible } = useRevealOnScroll();

  const education = credentials.filter((c) => c.type === "education");
  const certifications = credentials.filter((c) => c.type === "certification");

  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const activeCert = certifications[activeCertIndex];

  return (
    <section
      ref={ref}
      id="credentials"
      className={cn(
        "py-20 md:py-28 lg:py-36 bg-gradient-soft border-y border-border transition-all duration-[800ms] ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
    >
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-3 md:mb-4 text-foreground text-center md:text-left">
          Education & Professional Distinctions
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl text-center md:text-left">
          Academic foundations and professional certifications reflecting
          long-term commitment to leadership and technical excellence.
        </p>

        <div className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {/* Education: subtle timeline on the left */}
          <div>
            <h3 className="font-display text-lg md:text-xl font-medium mb-5 text-foreground">
              Education
            </h3>

            <div className="relative pl-5">
              {/* vertical line using original border color */}
              <div
                className={cn(
                  "absolute left-2 top-1 bottom-1 w-px bg-border origin-top transition-transform duration-700",
                  visible ? "scale-y-100" : "scale-y-0"
                )}
              />

              <div className="space-y-6 md:space-y-8">
                {education.map((credential, index) => (
                  <div
                    key={credential.title + index}
                    className={cn(
                      "relative flex gap-4",
                      visible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-3",
                      "transition-all duration-500 ease-out"
                    )}
                    style={{
                      transitionDelay: visible ? `${index * 90}ms` : "0ms",
                    }}
                  >
                    {/* node */}
                    <div className="relative mt-2 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border border-border bg-gradient-soft shadow-sm" />
                    </div>

                    {/* card body, still using your neutral styles */}
                    <div className="flex-1 pb-5 md:pb-6 border-b border-border/60">
                      <h4 className="font-body text-sm md:text-base font-semibold mb-1 md:mb-1.5 text-foreground">
                        {credential.title}
                      </h4>
                      <span className="block text-muted-foreground text-sm md:text-[15px]">
                        {credential.subtitle}
                      </span>
                      <span className="block text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug">
                        {credential.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications: badge wall + detail card, same color system */}
          <div>
            <h3 className="font-display text-lg md:text-xl font-medium mb-5 text-foreground">
              Certifications
            </h3>

            {/* badge wall */}
            <div className="rounded-2xl border border-border bg-gradient-soft/40 px-4 py-3 md:px-5 md:py-4 mb-5">
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {certifications.map((cert, index) => {
                  const isActive = index === activeCertIndex;
                  return (
                    <button
                      key={cert.title + index}
                      type="button"
                      onClick={() => setActiveCertIndex(index)}
                      className={cn(
                        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-medium uppercase tracking-wide",
                        "transition-all duration-200",
                        // keep green accent idea, but reusing existing muted style
                        "border-border/70 text-foreground/80 bg-gradient-soft",
                        "hover:-translate-y-[1px] hover:shadow-sm",
                        isActive && "border-border text-foreground bg-background"
                      )}
                    >
                      {cert.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* active certification detail, styled like your original cards */}
            <div
              className={cn(
                "pb-5 md:pb-6 border-b border-border/60",
                "transition-all duration-400",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              <h4 className="font-body text-sm md:text-base font-semibold mb-1 md:mb-1.5 text-foreground">
                {activeCert.title}
              </h4>
              <span className="block text-muted-foreground text-sm md:text-[15px]">
                {activeCert.subtitle}
              </span>
              <span className="block text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug">
                {activeCert.highlight}
              </span>
            </div>

            {/* the remaining certifications can still show as simple rows if you want;
                or you can keep only the active detail to stay minimal */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
