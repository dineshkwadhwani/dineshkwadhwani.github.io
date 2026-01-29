import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Database, Server } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RocketLoading from "@/components/RocketLoading";
import { usePageLoading } from "@/hooks/usePageLoading";

const projectsData = {
  "hostel-booking": {
    title: "Hostel-Booking Website",
    icon: Database,
    subtitle: "Full-Stack Booking Platform",
    description1: `The Hostel-Booking Website is a comprehensive full-stack application designed to streamline the process of finding and booking hostel accommodations. Built with modern technologies including React for the frontend and Node.js with Express for the backend, this platform provides users with an intuitive interface to search, compare, and reserve hostel rooms across multiple locations. The system features real-time availability checking, secure payment integration, and a robust admin dashboard for hostel managers to manage their properties, bookings, and guest communications efficiently.`,
    description2: `Key features include advanced search filters (location, price range, amenities, ratings), interactive maps showing hostel locations, user reviews and ratings system, booking history management, and automated email notifications for booking confirmations and reminders. The application implements JWT-based authentication, responsive design for mobile users, and optimized database queries using PostgreSQL for handling high traffic loads. The project demonstrates expertise in building scalable web applications with focus on user experience, security, and performance optimization.`,
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Stripe"],
  },
  "llm-microservices": {
    title: "LLM Microservices",
    icon: Server,
    subtitle: "AI-Powered Backend Architecture",
    description1: `LLM Microservices is an innovative backend architecture project that leverages large language models to create intelligent, scalable API services. This project implements a distributed microservices pattern where each service handles specific AI-powered functionality such as text generation, sentiment analysis, document summarization, and conversational AI. Built using Python with FastAPI, the system utilizes containerization through Docker and orchestration via Kubernetes to ensure high availability and seamless scaling based on demand.`,
    description2: `The architecture incorporates advanced patterns including message queuing with RabbitMQ for asynchronous processing, Redis caching for optimized response times, and comprehensive monitoring using Prometheus and Grafana. Each microservice is designed with fault tolerance in mind, implementing circuit breakers and retry mechanisms. The project also features a unified API gateway that handles authentication, rate limiting, and request routing. This solution demonstrates deep understanding of AI integration, distributed systems design, and modern DevOps practices for deploying production-ready ML applications.`,
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Redis", "RabbitMQ"],
  },
  "portfolio-dashboard": {
    title: "Portfolio Dashboard",
    icon: Code2,
    subtitle: "Analytics & Visualization Platform",
    description1: `The Portfolio Dashboard is a sophisticated analytics and visualization platform designed to help professionals track, analyze, and showcase their work and achievements. Built with React and TypeScript, this application features interactive data visualizations using D3.js and Chart.js, providing users with insightful representations of their project metrics, skill growth, and career progression. The dashboard integrates with multiple data sources including GitHub APIs, LinkedIn data, and custom metrics to create a comprehensive view of professional development.`,
    description2: `Notable features include customizable dashboard widgets, real-time data synchronization, export functionality for reports and presentations, and a public portfolio view that can be shared with potential employers or clients. The application implements a clean, modern design system with dark/light mode support, responsive layouts for all device sizes, and accessibility compliance. Advanced filtering and date range selection allow users to drill down into specific time periods or project categories. This project showcases expertise in frontend development, data visualization, and creating user-centric applications that solve real professional needs.`,
    tech: ["React", "TypeScript", "D3.js", "Chart.js", "REST APIs", "Tailwind CSS"],
  },
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const location = useLocation();
  const fromSection = (location.state as { fromSection?: number })?.fromSection ?? 1;
  const isLoading = usePageLoading(1200);

  const handleBack = () => {
    navigate("/", { state: { section: fromSection } });
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-mono font-bold mb-4">Project not found</h1>
          <Button onClick={handleBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

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
            className="min-h-screen bg-background relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-[80px] sm:blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[100px]" />

            {/* Subtle grid pattern */}
            <div
              className="fixed inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 relative z-10">
              {/* Back button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="font-mono gap-2 text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Work Experience</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </motion.div>

              {/* Project header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold leading-tight">{project.title}</h1>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">{project.subtitle}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono bg-surface-elevated border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="p-4 sm:p-6 bg-surface-elevated border border-border">
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {project.description1}
                  </p>
                </div>

                <div className="p-4 sm:p-6 bg-surface-elevated border border-border">
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {project.description2}
                  </p>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
              >
                <Button variant="outline" className="font-mono gap-2 text-sm sm:text-base">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                <Button className="font-mono gap-2 text-sm sm:text-base">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
