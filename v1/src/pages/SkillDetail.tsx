import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, GitBranch, Database, Server, Code2, Award, CheckCircle, ExternalLink } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RocketLoading from "@/components/RocketLoading";
import { usePageLoading } from "@/hooks/usePageLoading";

const skillData: Record<string, {
  title: string;
  icon: typeof GitBranch;
  description: string;
  certificates: {
    name: string;
    issuer: string;
    year: string;
    credentialId?: string;
  }[];
  skills: string[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}> = {
  "version-control": {
    title: "Version Control",
    icon: GitBranch,
    description: "Expertise in version control systems, branching strategies, and collaborative development workflows. Proficient in managing complex codebases with multiple contributors.",
    certificates: [
      {
        name: "Git & GitHub Mastery",
        issuer: "Coursera",
        year: "2022",
        credentialId: "GH-2022-XYZ"
      },
      {
        name: "Advanced Git Workflows",
        issuer: "LinkedIn Learning",
        year: "2023",
        credentialId: "LI-AG-2023"
      },
      {
        name: "GitLab CI/CD Professional",
        issuer: "GitLab",
        year: "2023",
        credentialId: "GL-CICD-PRO"
      }
    ],
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow", "Trunk-Based Development", "Code Review", "Pull Requests", "Merge Strategies", "Rebasing"],
    projects: [
      {
        name: "Multi-Repository Management System",
        description: "Built a tool for managing 50+ repositories with automated syncing, branch protection, and release automation.",
        technologies: ["Git", "GitHub Actions", "Node.js"]
      },
      {
        name: "Git Hooks Framework",
        description: "Created a reusable framework for pre-commit and pre-push hooks ensuring code quality across teams.",
        technologies: ["Git Hooks", "Shell", "Python"]
      }
    ]
  },
  databases: {
    title: "Databases",
    icon: Database,
    description: "Comprehensive experience with relational and NoSQL databases, query optimization, data modeling, and database administration for high-performance applications.",
    certificates: [
      {
        name: "PostgreSQL Administration",
        issuer: "PostgreSQL Global Development Group",
        year: "2022",
        credentialId: "PG-ADM-2022"
      },
      {
        name: "MongoDB Developer Certification",
        issuer: "MongoDB University",
        year: "2023",
        credentialId: "MDB-DEV-2023"
      },
      {
        name: "AWS Database Specialty",
        issuer: "Amazon Web Services",
        year: "2023",
        credentialId: "AWS-DB-SPEC"
      }
    ],
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Query Optimization", "Indexing", "Data Modeling", "Replication", "Sharding"],
    projects: [
      {
        name: "Real-time Analytics Database",
        description: "Designed a hybrid database architecture combining PostgreSQL for transactional data and Elasticsearch for analytics.",
        technologies: ["PostgreSQL", "Elasticsearch", "Redis"]
      },
      {
        name: "Database Migration Tool",
        description: "Built an automated migration tool for seamless schema changes across distributed database clusters.",
        technologies: ["Node.js", "PostgreSQL", "Docker"]
      }
    ]
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    description: "Strong backend development skills with expertise in building scalable APIs, microservices, and server-side applications with focus on performance and reliability.",
    certificates: [
      {
        name: "Node.js Developer Certification",
        issuer: "OpenJS Foundation",
        year: "2022",
        credentialId: "NJS-DEV-2022"
      },
      {
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        credentialId: "AWS-SA-2023"
      },
      {
        name: "Docker Certified Associate",
        issuer: "Docker Inc.",
        year: "2023",
        credentialId: "DCA-2023"
      },
      {
        name: "Kubernetes Administrator",
        issuer: "CNCF",
        year: "2024",
        credentialId: "CKA-2024"
      }
    ],
    skills: ["Node.js", "Python", "Go", "REST APIs", "GraphQL", "Microservices", "Docker", "Kubernetes", "AWS", "Message Queues"],
    projects: [
      {
        name: "E-commerce Microservices Platform",
        description: "Architected and built a distributed e-commerce platform handling 100K+ daily transactions.",
        technologies: ["Node.js", "Docker", "Kubernetes", "RabbitMQ"]
      },
      {
        name: "Real-time Notification Service",
        description: "Developed a scalable notification service supporting email, SMS, and push notifications.",
        technologies: ["Go", "Redis", "WebSockets", "AWS SNS"]
      }
    ]
  },
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    description: "Expert frontend development with modern frameworks, focusing on building responsive, accessible, and performant user interfaces with excellent developer experience.",
    certificates: [
      {
        name: "React Developer Certification",
        issuer: "Meta",
        year: "2023",
        credentialId: "META-REACT-2023"
      },
      {
        name: "TypeScript Professional",
        issuer: "Microsoft",
        year: "2023",
        credentialId: "MS-TS-PRO"
      },
      {
        name: "Web Accessibility Specialist",
        issuer: "IAAP",
        year: "2024",
        credentialId: "WAS-2024"
      }
    ],
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Testing Library", "Webpack", "Vite", "Responsive Design"],
    projects: [
      {
        name: "Component Design System",
        description: "Created a comprehensive design system with 50+ reusable components used across 10+ projects.",
        technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"]
      },
      {
        name: "Performance Dashboard",
        description: "Built a real-time analytics dashboard with complex data visualizations and live updates.",
        technologies: ["React", "D3.js", "WebSockets", "Framer Motion"]
      }
    ]
  }
};

const SkillDetail = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const fromSection = (location.state as { fromSection?: number })?.fromSection ?? 1;
  const isLoading = usePageLoading(1200);

  const handleBack = () => {
    navigate("/", { state: { section: fromSection } });
  };

  const skill = skillData[skillId || ""];

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-mono font-bold mb-4">Skill not found</h1>
          <Button onClick={handleBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  const IconComponent = skill.icon;

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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold leading-tight">{skill.title}</h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>

              {/* Certificates Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Certificates & Credentials
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {skill.certificates.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="p-4 sm:p-5 bg-surface-elevated border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-mono font-semibold text-sm sm:text-base text-primary group-hover:text-primary/80">
                          {cert.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-1">
                        <span className="text-foreground/70">Year: {cert.year}</span>
                        {cert.credentialId && (
                          <span className="font-mono text-primary/60">ID: {cert.credentialId}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 sm:mb-12"
              >
                <h2 className="text-lg sm:text-xl font-mono font-bold mb-3 sm:mb-4">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary font-mono text-xs sm:text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Related Projects
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  {skill.projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="p-4 sm:p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-colors"
                    >
                      <h3 className="font-mono font-semibold text-base sm:text-lg mb-2">{project.name}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-surface text-xs font-mono text-muted-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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

export default SkillDetail;
