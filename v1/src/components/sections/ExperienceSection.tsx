import { motion } from "framer-motion";
import { ArrowRight, Code, RefreshCw, Layers, Zap, FolderOpen, Building2, GitBranch, Database, Server, CodeXml } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExperienceSection = () => {
  const navigate = useNavigate();

  const phases = [
    {
      id: "foundation",
      number: "Phase 01",
      title: "Foundation",
      icon: Code,
      description: "Building core systems from first principles. Understanding architecture patterns that scale...",
    },
    {
      id: "iteration",
      number: "Phase 02",
      title: "Iteration",
      icon: RefreshCw,
      description: "Continuous refinement through structured feedback loops. Each cycle brings clarity, each...",
    },
    {
      id: "integration",
      number: "Phase 03",
      title: "Integration",
      icon: Layers,
      description: "Connecting disparate systems into cohesive solutions. The art of making complex simple,...",
    },
    {
      id: "acceleration",
      number: "Phase 04",
      title: "Acceleration",
      icon: Zap,
      description: "Optimizing for impact. Knowing when to build, when to leverage, and when to step back and...",
    },
  ];

  // const projects = [
  //   {
  //     id: "hostel-booking",
  //     title: "Hostel-Booking Website",
  //     description: "Full-stack booking platform",
  //     icon: FolderOpen,
  //   },
  //   {
  //     id: "llm-microservices",
  //     title: "LLM Microservices",
  //     description: "AI-powered backend services",
  //     icon: FolderOpen,
  //   },
  //   {
  //     id: "portfolio-dashboard",
  //     title: "Portfolio Dashboard",
  //     description: "Analytics & visualization tool",
  //     icon: CodeXml,
  //   },
  // ];

  const companies = [
    {
      id: "nice",
      name: "NICE Ltd",
      logo: "NICE",
      roles: ["Senior Director of Engineering"],
      badge: "Career Growth",
    },
    {
      id: "capita",
      name: "Capita SIMS (India) Pvt. Ltd.",
      logo: "Capita",
      roles: ["Head of Engineering"],
      badge: "Career Growth",
    },
    {
      id: "ibm",
      name: "IBM",
      logo: "IBM",
      roles: ["Senior Manager, Engineering"],
      badge: "Career Growth",
    },
    {
      id: "core-objects",
      name: "Core Objects",
      logo: "CO",
      roles: ["Competency Head", "Engineering Manager"],
      badge: "Career Growth",
    },
    {
      id: "xpanxion",
      name: "Xpanxion",
      logo: "X",
      roles: ["Senior Program Manager"],
      badge: "Career Growth",
    },
    {
      id: "zensar",
      name: "Zensar Technologies",
      logo: "Z",
      roles: ["Project Manager"],
      badge: "Career Growth",
    },
    {
      id: "ajilon",
      name: "Ajilon North America / Diaspark Inc",
      logo: "A",
      roles: ["Consultant"],
      badge: "Career Growth",
    },
  ];

  // const skills = [
  //   { icon: GitBranch, label: "Version Control", id: "version-control" },
  //   { icon: Database, label: "Databases", id: "databases" },
  //   { icon: Server, label: "Backend", id: "backend" },
  //   { icon: CodeXml, label: "Frontend", id: "frontend" },
  // ];

  return (
    <section id="experience" className="section-container-alt relative">
      <span className="section-number">02</span>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase flex items-center gap-2">
            <span className="w-8 h-px bg-muted-foreground" />
            WORK EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold">
            Execution Through <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Phases - 3D Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => navigate(`/phase/${phase.id}`)}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all cursor-pointer group card-3d"
            >
              <span className="inline-block px-3 py-1 bg-muted text-xs font-mono text-muted-foreground rounded mb-4">
                {phase.number}
              </span>
              <div className="flex items-center gap-2 mb-2">
                <phase.icon className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-semibold">{phase.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {phase.description}
              </p>
              <ArrowRight className="w-4 h-4 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Projects - 3D Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-mono text-xl font-semibold mb-6 flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            My Projects (Dinesh)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all cursor-pointer group flex items-center justify-between card-3d"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-mono font-medium">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Companies - 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-mono text-xl font-semibold mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Companies I Have Worked With
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {companies.slice(0, 5).map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-background border border-border rounded-lg card-3d"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-foreground text-background rounded flex items-center justify-center font-mono font-bold text-xs">
                    {company.logo}
                  </div>
                  <h4 className="font-mono font-medium text-sm leading-tight">{company.name}</h4>
                </div>
                {company.roles.map((role, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {role}
                  </p>
                ))}
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <span>↗</span> {company.badge}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {companies.slice(5).map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 5) * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 bg-background border border-border rounded-lg card-3d"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-foreground text-background rounded flex items-center justify-center font-mono font-bold text-xs">
                    {company.logo}
                  </div>
                  <h4 className="font-mono font-medium text-sm leading-tight">{company.name}</h4>
                </div>
                {company.roles.map((role, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {role}
                  </p>
                ))}
                <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                  <span>↗</span> {company.badge}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills - 3D Cards with navigation */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                onClick={() => navigate(`/skill/${skill.id}`)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center card-3d group-hover:border-primary/50 transition-colors">
                  <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-mono text-muted-foreground text-center group-hover:text-primary transition-colors">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;
