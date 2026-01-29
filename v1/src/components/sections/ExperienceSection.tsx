import { motion } from "framer-motion";
import { Code2, Layers, RefreshCw, Zap, GitBranch, Database, Server, FolderOpen, Building2, ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExperienceSection = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: "foundation",
      phase: "Foundation",
      icon: Code2,
      year: "Phase 01",
      description: "Building core systems from first principles. Understanding architecture patterns that scale beyond immediate requirements.",
      tech: ["System Design", "Core Concepts", "Fundamentals"],
    },
    {
      id: "iteration",
      phase: "Iteration",
      icon: RefreshCw,
      year: "Phase 02",
      description: "Continuous refinement through structured feedback loops. Each cycle brings clarity, each review surfaces hidden complexity.",
      tech: ["Code Review", "Refactoring", "Best Practices"],
    },
    {
      id: "integration",
      phase: "Integration",
      icon: Layers,
      year: "Phase 03",
      description: "Connecting disparate systems into cohesive solutions. The art of making complex simple, and simple elegant.",
      tech: ["Architecture", "APIs", "Microservices"],
    },
    {
      id: "acceleration",
      phase: "Acceleration",
      icon: Zap,
      year: "Phase 04",
      description: "Optimizing for impact. Knowing when to build, when to leverage, and when to step back and think differently.",
      tech: ["Performance", "Scale", "Leadership"],
    },
  ];

  const projects = [
    {
      id: "hostel-booking",
      title: "Hostel-Booking Website",
      description: "Full-stack booking platform",
      icon: Database,
    },
    {
      id: "llm-microservices",
      title: "LLM Microservices",
      description: "AI-powered backend services",
      icon: Server,
    },
    {
      id: "portfolio-dashboard",
      title: "Portfolio Dashboard",
      description: "Analytics & visualization tool",
      icon: Code2,
    },
  ];

  const companies = [
    {
      name: "Google",
      logo: "G",
      color: "bg-blue-500/10 text-blue-500",
      roles: ["Software Engineer", "Senior Engineer", "Staff Engineer"]
    },
    {
      name: "Microsoft",
      logo: "M",
      color: "bg-cyan-500/10 text-cyan-500",
      roles: ["Engineer II", "Senior Engineer", "Principal Engineer"]
    },
    {
      name: "Amazon",
      logo: "A",
      color: "bg-orange-500/10 text-orange-500",
      roles: ["SDE I", "SDE II", "Principal SDE"]
    },
    {
      name: "Meta",
      logo: "M",
      color: "bg-indigo-500/10 text-indigo-500",
      roles: ["Software Engineer", "Senior Engineer", "Tech Lead"]
    },
    {
      name: "Apple",
      logo: "A",
      color: "bg-gray-500/10 text-gray-400",
      roles: ["ICT2", "ICT4", "Engineering Coach"]
    },
  ];

  const techStack = [
    { id: "version-control", icon: GitBranch, label: "Version Control" },
    { id: "databases", icon: Database, label: "Databases" },
    { id: "backend", icon: Server, label: "Backend" },
    { id: "frontend", icon: Code2, label: "Frontend" },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-start px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-6 md:right-12 top-20 font-mono text-[12rem] md:text-[16rem] font-bold text-foreground leading-none select-none"
      >
        02
      </motion.span>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Work Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight"
          >
            Execution Through <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        {/* Experience phases - clickable */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {experiences.map((exp, index) => (
            <motion.button
              key={exp.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/phase/${exp.id}`, { state: { fromSection: 1 } })}
              className="relative p-4 bg-surface-elevated border border-border hover:border-primary/50 transition-all duration-300 group text-left cursor-pointer"
            >
              <div className="absolute -top-2 left-4 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-mono">
                {exp.year}
              </div>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-2">
                  <exp.icon className="w-5 h-5 text-primary" />
                  <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-mono font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{exp.phase}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{exp.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* My Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FolderOpen className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-mono font-bold">My Projects (Dinesh)</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/project/${project.id}`, { state: { fromSection: 1 } })}
                className="text-left p-5 bg-surface-elevated border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="font-mono font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Companies I Have Worked With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-mono font-bold">Companies I Have Worked With</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="p-4 bg-surface-elevated border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${company.color} flex items-center justify-center mb-3 font-mono font-bold text-lg`}>
                  {company.logo}
                </div>
                <h4 className="font-mono font-semibold text-sm mb-3">{company.name}</h4>

                {/* Career Progression */}
                <div className="space-y-1">
                  {company.roles.map((role, roleIndex) => (
                    <div key={role} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${roleIndex === company.roles.length - 1 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                      <span className={`text-xs ${roleIndex === company.roles.length - 1 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                        {role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progression Arrow */}
                <div className="mt-3 flex items-center gap-1 text-primary/60">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-[10px] font-mono">Career Growth</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack - clickable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.button
              key={tech.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/skill/${tech.id}`, { state: { fromSection: 1 } })}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-surface-elevated border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{tech.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
