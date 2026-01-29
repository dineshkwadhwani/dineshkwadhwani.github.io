import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Server, Code, Monitor, CheckCircle, ExternalLink } from "lucide-react";
import RocketLoader from "@/components/RocketLoader";

const skillData: Record<string, {
  title: string;
  icon: any;
  description: string;
  technologies: string[];
  projects: { name: string; description: string }[];
}> = {
  "databases": {
    title: "Databases",
    icon: Database,
    description: "Deep expertise in designing, optimizing, and managing both relational and NoSQL database systems for high-performance applications.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch", "SQLite"],
    projects: [
      { name: "High-Performance Query Optimization", description: "Optimized complex queries reducing response times by 80% for enterprise applications" },
      { name: "Database Migration Strategy", description: "Led migration from legacy systems to modern cloud-native databases with zero downtime" },
      { name: "Real-time Data Sync", description: "Implemented real-time data synchronization across distributed database clusters" },
    ]
  },
  "backend": {
    title: "Backend Development",
    icon: Server,
    description: "Building robust, scalable server-side applications with focus on clean architecture, performance, and maintainability.",
    technologies: ["Node.js", "Python", "Java", "Go", "Rust", "GraphQL", "REST APIs", "gRPC", "Microservices"],
    projects: [
      { name: "LLM Microservices Architecture", description: "Designed and implemented microservices for AI/ML model serving at scale" },
      { name: "Event-Driven Systems", description: "Built event-driven architecture handling millions of events per day" },
      { name: "API Gateway Implementation", description: "Developed custom API gateway with rate limiting, caching, and authentication" },
    ]
  },
  "frontend": {
    title: "Frontend Development",
    icon: Monitor,
    description: "Creating intuitive, responsive, and performant user interfaces with modern frameworks and best practices.",
    technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux", "GraphQL Client"],
    projects: [
      { name: "Component Library Design", description: "Built reusable component library used across 20+ applications" },
      { name: "Performance Optimization", description: "Achieved 95+ Lighthouse scores through code splitting and lazy loading" },
      { name: "Responsive Dashboard", description: "Developed real-time analytics dashboard with complex data visualizations" },
    ]
  },
  "version-control": {
    title: "Version Control & DevOps",
    icon: Code,
    description: "Expert in version control strategies, CI/CD pipelines, and DevOps practices for efficient software delivery.",
    technologies: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "AWS"],
    projects: [
      { name: "CI/CD Pipeline Automation", description: "Automated deployment pipelines reducing release time from days to minutes" },
      { name: "GitOps Implementation", description: "Implemented GitOps workflow for infrastructure as code management" },
      { name: "Container Orchestration", description: "Designed Kubernetes clusters for auto-scaling production workloads" },
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 } as const,
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const SkillDetail = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const skill = skillData[skillId || ""] || skillData["databases"];
  const IconComponent = skill.icon;

  if (isLoading) {
    return <RocketLoader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-background">
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={() => navigate("/#experience")}
          variants={itemVariants}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Experience
        </motion.button>

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-mono font-bold">
              {skill.title}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {skill.description}
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-xl font-mono font-semibold mb-4 text-foreground">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {skill.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-mono card-3d cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-mono font-semibold mb-6 text-foreground">Key Projects & Achievements</h2>
          <div className="grid gap-4">
            {skill.projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 5 }}
                className="p-6 bg-card border border-border rounded-xl card-3d transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg mb-2">{project.name}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-12 p-6 bg-muted rounded-xl text-center">
          <p className="text-muted-foreground mb-4">Interested in learning more about my approach?</p>
          <motion.button
            onClick={() => navigate("/#experience")}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono transition-colors"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillDetail;