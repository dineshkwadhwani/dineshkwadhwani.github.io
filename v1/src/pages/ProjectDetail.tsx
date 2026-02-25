import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from "lucide-react";
import RocketLoader from "@/components/RocketLoader";

const projectsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  role: string;
  team: string;
  duration: string;
  github?: string;
  live?: string;
}> = {
  "hostel-booking": {
    title: "Hostel-Booking Website",
    description: "Full-stack booking platform with real-time availability",
    longDescription: "A comprehensive hostel booking platform designed for students and travelers. Features real-time room availability, secure payments, and an admin dashboard for property management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "Redis"],
    features: [
      "Real-time room availability updates",
      "Secure payment processing with Stripe",
      "User authentication and profile management",
      "Admin dashboard for property owners",
      "Review and rating system",
      "Email notifications for bookings",
    ],
    role: "Full Stack Developer & Architect",
    team: "5 developers",
    duration: "6 months",
    github: "https://github.com",
    live: "https://example.com",
  },
  "llm-microservices": {
    title: "LLM Microservices",
    description: "Scalable AI service architecture for enterprise applications",
    longDescription: "A production-ready microservices architecture for deploying and scaling Large Language Model applications. Designed for high throughput and low latency inference.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    features: [
      "Auto-scaling based on request load",
      "Request queuing and rate limiting",
      "Model versioning and A/B testing",
      "Comprehensive logging and monitoring",
      "API key management",
      "Cost optimization algorithms",
    ],
    role: "Technical Lead & System Architect",
    team: "8 developers",
    duration: "12 months",
    github: "https://github.com",
  },
  "portfolio-dashboard": {
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking mentee progress",
    longDescription: "An internal tool for tracking mentee progress, managing sessions, and analyzing learning patterns. Features comprehensive analytics and progress visualization.",
    tech: ["React", "TypeScript", "Chart.js", "Supabase", "Tailwind CSS"],
    features: [
      "Interactive progress charts",
      "Session scheduling and management",
      "Skill assessment tracking",
      "Goal setting and milestone tracking",
      "Report generation",
      "Notification system",
    ],
    role: "Solo Developer",
    team: "1 developer",
    duration: "3 months",
    live: "https://example.com",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const project = projectId ? projectsData[projectId] : null;

  if (isLoading) {
    return <RocketLoader onComplete={() => setIsLoading(false)} />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-mono text-2xl font-bold mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/#experience")} className="journey-button-outline">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate("/#experience")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Experience
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {project.longDescription}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="p-4 bg-card border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Role</p>
              <p className="font-mono font-medium">{project.role}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Users className="w-4 h-4" />
                Team
              </div>
              <p className="font-mono font-medium">{project.team}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                Duration
              </div>
              <p className="font-mono font-medium">{project.duration}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="journey-button-outline"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="journey-button"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
