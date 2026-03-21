import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Phase {
  company: string;
  role: string;
  period: string;
  summary: string;
  scope?: string;
  revenue?: string;
  scale?: string;
  focus?: string;
}

const phases: Phase[] = [
  {
    company: "NICE",
    period: "Sept 2021 – Current",
    role: "AI-Driven Engineering Leader",
    summary:
      "Leads global R&D for CXone WEM/WFM across 8 product lines, driving AI adoption in workforce platforms while delivering secure multi-tenant SaaS services.",
    scope: "500+ global engineering professionals",
    revenue: "$400M+ revenue influence",
    scale: "99.9x availability platform",
    focus: "AI operationalization, platform modernization",
  },
  {
    company: "Capita",
    period: "May 2016 – Sept 2021",
    role: "Head of Product Development",
    summary:
      "Led India Product Development for education platforms serving 20k+ schools, owning roadmap, delivery, and cloud transition initiatives.",
    scope: "Distributed multi-product engineering org",
    revenue: "£125M revenue impact",
    focus: "Cloud-native transition, delivery excellence",
  },
  {
    company: "IBM",
    period: "Mar 2010 – May 2016",
    role: "Product Development Leader",
    summary:
      "Scaled from single-product leadership to managing three enterprise product lines following acquisition.",
    scope: "100+ engineers across 3 products",
    revenue: "$100M contribution",
    focus: "Roadmap execution, multi-product governance",
  },
  {
    company: "Xpanxion / CoreObjects",
    period: "Dec 2005 – Apr 2010",
    role: "Technical Delivery Leadership",
    summary:
      "Led enterprise service delivery across global accounts including AMEX, FedEx, Citi, Cisco, and GE.",
    scope: "10–40 engineers across engagements",
    focus: "Enterprise delivery, customer success",
  },
  {
    company: "Power Infosys / Diaspark / Zensar",
    period: "Jan 2000 – Dec 2005",
    role: "Software Engineering Leadership",
    summary:
      "Built deep enterprise engineering capability and progressed into leadership across multiple platforms.",
    scope: "Multi-product responsibilities",
    focus: "Engineering discipline, delivery maturity",
  },
];

const Journey = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [active]);

  return (
    <section id="journey" className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-10 text-foreground">
          Executive Leadership Journey
        </h2>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">

          {/* ================= BUTTON RAIL ================= */}
          <div className="order-1 lg:order-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "min-w-[220px] lg:min-w-0 flex-shrink-0 text-left px-5 py-4 rounded-xl border transition-all duration-300",
                  i === active
                    ? "border-accent bg-accent-soft/10 shadow-md"
                    : "border-border hover:border-accent-soft"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {phase.company}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {phase.period}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* ================= CARD ================= */}
          <div
            key={active}
            className="order-2 lg:order-1 relative bg-card border border-border rounded-2xl p-6 md:p-10 transition-all duration-500 animate-fade-in"
          >
            <div className="max-w-2xl">

              <span className="text-xs tracking-[0.2em] text-accent font-medium">
                {phases[active].period}
              </span>

              <h3 className="text-xl md:text-3xl font-semibold mt-3 text-foreground">
                {phases[active].role}
              </h3>

              <p className="text-muted-foreground text-sm mt-2">
                {phases[active].company}
              </p>

              <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                {phases[active].summary}
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 text-accent font-semibold text-sm hover:text-sage-hover transition-colors"
              >
                {expanded ? "Show Less ↑" : "Read More →"}
              </button>

              {expanded && (
                <div className="mt-6 grid sm:grid-cols-2 gap-4 animate-fade-in">
                  {phases[active].scope && (
                    <div className="border border-border rounded-lg p-4">
                      <p className="text-xs text-muted-foreground">
                        Leadership Scope
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {phases[active].scope}
                      </p>
                    </div>
                  )}

                  {phases[active].revenue && (
                    <div className="border border-border rounded-lg p-4">
                      <p className="text-xs text-muted-foreground">
                        Revenue Influence
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {phases[active].revenue}
                      </p>
                    </div>
                  )}

                  {phases[active].scale && (
                    <div className="border border-border rounded-lg p-4">
                      <p className="text-xs text-muted-foreground">
                        Operational Scale
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {phases[active].scale}
                      </p>
                    </div>
                  )}

                  {phases[active].focus && (
                    <div className="border border-border rounded-lg p-4">
                      <p className="text-xs text-muted-foreground">
                        Strategic Focus
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {phases[active].focus}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.4s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Journey;