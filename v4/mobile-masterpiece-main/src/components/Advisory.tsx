import { useState } from "react";
import { cn } from "@/lib/utils";

interface AdvisoryPanel {
  tag: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
}

interface AdvisoryGroup {
  groupTitle: string;
  groupDescription: string;
  panels: AdvisoryPanel[];
}

/* ----------------------------------------
   GROUPED DATA
----------------------------------------- */
const advisoryGroups: AdvisoryGroup[] = [
  {
    groupTitle: "Individual Leadership",
    groupDescription:
      "Confidential partnerships that strengthen judgment and executive effectiveness.",
    panels: [
      {
        tag: "PRIVATE ENGAGEMENT",
        title: "1:1 Executive Coaching",
        description:
          "A confidential partnership focused on strengthening executive judgment, leadership presence, and decision clarity.",
        points: [
          "High-stakes decision support",
          "Executive presence refinement",
          "Strategic thinking discipline",
        ],
        cta: "Request a Private Conversation →",
      },
    ],
  },
  {
    groupTitle: "Team Leadership",
    groupDescription:
      "Interventions that improve alignment, trust, and execution discipline.",
    panels: [
      {
        tag: "COLLECTIVE LEADERSHIP",
        title: "Group Coaching",
        description:
          "Peer-based leadership development with structured dialogue.",
        points: [
          "Peer-driven growth",
          "Leadership dialogue",
          "Collaborative problem solving",
        ],
        cta: "Explore Group Formats →",
      },
      {
        tag: "EXECUTIVE IMMERSION",
        title: "Offsites & Leadership Alignment",
        description:
          "High-impact offsite engagements enabling clarity and execution.",
        points: [
          "Executive alignment",
          "Strategic reset",
          "Trust building",
        ],
        cta: "Plan an Offsite →",
      },
    ],
  },
  {
    groupTitle: "Organizational Strategy",
    groupDescription:
      "Enterprise initiatives enabling scale, capability, and performance.",
    panels: [
      {
        tag: "ORGANIZATIONAL EXCELLENCE",
        title: "Leadership Capability Building",
        description:
          "Programs that strengthen pipelines and long-term readiness.",
        points: [
          "Competency frameworks",
          "Succession readiness",
          "Performance culture",
        ],
        cta: "Design a Capability Program →",
      },
    ],
  },
];

/* ----------------------------------------
   Component
----------------------------------------- */
const Advisory = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="advisory" className="py-20 md:py-28 lg:py-36">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-medium mb-4 text-foreground">
          Executive Advisory
        </h2>

        <p className="text-muted-foreground max-w-3xl">
          High-impact engagements for leaders operating at scale.
        </p>

        <div className="mt-14 space-y-6">
          {advisoryGroups.map((group, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-foreground">
                    {group.groupTitle}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {group.groupDescription}
                  </p>
                </div>

                <span
                  className={cn(
                    "text-accent transition-transform duration-300",
                    openIndex === index ? "rotate-45" : ""
                  )}
                >
                  +
                </span>
              </button>

              {/* Expand */}
              <div
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  openIndex === index
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                )}
              >
                <div className="px-6 md:px-8 pb-8 space-y-8">
                  {group.panels.map((panel, i) => (
                    <div
                      key={i}
                      className="border-t border-border pt-6 grid md:grid-cols-2 gap-8"
                    >
                      <div className="bg-gradient-card rounded-lg min-h-[180px]" />

                      <div>
                        <span className="text-xs tracking-wider text-accent font-medium">
                          {panel.tag}
                        </span>

                        <h4 className="text-lg font-semibold mt-2 text-foreground">
                          {panel.title}
                        </h4>

                        <p className="text-muted-foreground text-sm mt-2">
                          {panel.description}
                        </p>

                        <ul className="mt-3 pl-4 space-y-1 list-disc text-muted-foreground text-sm">
                          {panel.points.map((p, k) => (
                            <li key={k}>{p}</li>
                          ))}
                        </ul>

                        <a
                          href="#contact"
                          className="inline-block mt-4 text-accent font-semibold text-sm hover:text-sage-hover"
                        >
                          {panel.cta}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisory;
