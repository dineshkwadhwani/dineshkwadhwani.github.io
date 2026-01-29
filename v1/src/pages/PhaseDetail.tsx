import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Code2, RefreshCw, Layers, Zap, CheckCircle } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RocketLoading from "@/components/RocketLoading";
import { usePageLoading } from "@/hooks/usePageLoading";

const phaseData: Record<string, {
  phase: string;
  year: string;
  icon: typeof Code2;
  description: string;
  detailedDescription: string;
  realWork: {
    title: string;
    description: string;
    outcome: string;
  }[];
  skills: string[];
}> = {
  foundation: {
    phase: "Foundation",
    year: "Phase 01",
    icon: Code2,
    description: "Building core systems from first principles",
    detailedDescription: "This phase focused on mastering fundamental programming concepts, data structures, algorithms, and understanding how computer systems work at a deep level. Built the strong foundation that enables tackling complex problems with confidence.",
    realWork: [
      {
        title: "Built Custom Data Structures Library",
        description: "Implemented a comprehensive library of data structures from scratch including linked lists, trees, graphs, and hash maps with optimized algorithms.",
        outcome: "Reduced lookup time by 40% in production applications"
      },
      {
        title: "Developed Algorithm Optimization Framework",
        description: "Created a framework for analyzing and optimizing algorithm complexity, used in code reviews across the team.",
        outcome: "Improved team's average algorithm efficiency by 35%"
      },
      {
        title: "System Architecture Documentation",
        description: "Authored comprehensive documentation on system design patterns and architectural decisions for microservices.",
        outcome: "Reduced onboarding time for new developers by 50%"
      }
    ],
    skills: ["Data Structures", "Algorithms", "System Design", "Clean Code", "SOLID Principles"]
  },
  iteration: {
    phase: "Iteration",
    year: "Phase 02",
    icon: RefreshCw,
    description: "Continuous refinement through structured feedback loops",
    detailedDescription: "Focused on continuous improvement through code reviews, refactoring legacy systems, and implementing best practices. Each cycle brought clarity and helped surface hidden complexity that needed addressing.",
    realWork: [
      {
        title: "Legacy System Refactoring",
        description: "Led the refactoring of a 5-year-old monolithic application into a modular, testable codebase with 90% test coverage.",
        outcome: "Reduced bug reports by 60% and deployment time by 75%"
      },
      {
        title: "Code Review Process Implementation",
        description: "Established a structured code review process with automated checks, style guides, and mentorship pairing.",
        outcome: "Improved code quality scores by 45%"
      },
      {
        title: "Automated Testing Pipeline",
        description: "Built comprehensive CI/CD pipelines with unit, integration, and e2e tests for multiple projects.",
        outcome: "Achieved 95% test coverage across critical systems"
      }
    ],
    skills: ["Refactoring", "Code Review", "TDD", "CI/CD", "Automated Testing"]
  },
  integration: {
    phase: "Integration",
    year: "Phase 03",
    icon: Layers,
    description: "Connecting disparate systems into cohesive solutions",
    detailedDescription: "Specialized in connecting different systems, APIs, and services into seamless, cohesive solutions. Mastered the art of making complex integrations simple and elegant while maintaining reliability.",
    realWork: [
      {
        title: "Multi-Service Integration Platform",
        description: "Designed and built a platform integrating 15+ third-party APIs including payment gateways, CRMs, and analytics tools.",
        outcome: "Processed over 1M transactions monthly with 99.9% uptime"
      },
      {
        title: "Event-Driven Architecture Implementation",
        description: "Migrated synchronous services to event-driven architecture using message queues and pub/sub patterns.",
        outcome: "Improved system responsiveness by 80%"
      },
      {
        title: "API Gateway Development",
        description: "Created a unified API gateway handling authentication, rate limiting, and request routing for microservices.",
        outcome: "Simplified client integration and reduced API complexity by 60%"
      }
    ],
    skills: ["API Design", "Microservices", "Event-Driven Architecture", "Message Queues", "System Integration"]
  },
  acceleration: {
    phase: "Acceleration",
    year: "Phase 04",
    icon: Zap,
    description: "Optimizing for impact and leadership",
    detailedDescription: "Focused on maximizing impact through performance optimization, scaling strategies, and technical leadership. Learned when to build, when to leverage existing solutions, and when to step back and think differently.",
    realWork: [
      {
        title: "Performance Optimization Initiative",
        description: "Led a company-wide initiative to optimize application performance, implementing caching strategies and database optimizations.",
        outcome: "Reduced average response time from 2s to 200ms"
      },
      {
        title: "Technical Mentorship Program",
        description: "Created and ran a mentorship program for junior developers, covering code quality, system design, and career growth.",
        outcome: "Mentored 20+ developers, with 80% receiving promotions"
      },
      {
        title: "Scalability Architecture Design",
        description: "Designed architecture for handling 10x traffic growth including horizontal scaling, load balancing, and auto-scaling.",
        outcome: "System successfully handled 500% traffic spike during peak events"
      }
    ],
    skills: ["Performance Optimization", "Team Leadership", "Scalability", "Strategic Thinking", "Mentorship"]
  }
};

const PhaseDetail = () => {
  const { phaseId } = useParams<{ phaseId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const fromSection = (location.state as { fromSection?: number })?.fromSection ?? 1;
  const isLoading = usePageLoading(1200);

  const handleBack = () => {
    navigate("/", { state: { section: fromSection } });
  };

  const phase = phaseData[phaseId || ""];

  if (!phase) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-mono font-bold mb-4">Phase not found</h1>
          <Button onClick={handleBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  const IconComponent = phase.icon;

  return (
    <>
      <AnimatePresence>
        {isLoading && <RocketLoading />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen bg-background px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Back button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="mb-6 sm:mb-8 gap-2 hover:bg-primary/10 text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Work Experience</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </motion.div>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-mono text-xs sm:text-sm">{phase.year}</span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight">{phase.phase}</h1>
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {phase.detailedDescription}
                </p>
              </motion.div>

              {/* Real Work Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Real Work Done
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {phase.realWork.map((work, index) => (
                    <motion.div
                      key={work.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="p-4 sm:p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-colors"
                    >
                      <h3 className="font-mono font-semibold text-base sm:text-lg mb-2 text-primary">
                        {work.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{work.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                        <span className="font-mono text-primary">Outcome:</span>
                        <span className="text-foreground font-medium">{work.outcome}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4">Skills Developed</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {phase.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-mono text-xs sm:text-sm border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhaseDetail;
