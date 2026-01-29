import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Briefcase, GraduationCap } from "lucide-react";
import RocketLoader from "@/components/RocketLoader";

const phasesData: Record<string, {
  number: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  skills: string[];
  achievements: string[];
  roles: { title: string; company: string; period: string }[];
}> = {
  foundation: {
    number: "01",
    title: "Foundation",
    period: "2004-2010",
    description: "Building core programming skills and understanding system fundamentals",
    longDescription: "The foundation years were all about building a rock-solid understanding of computer science fundamentals. From algorithms to system design basics, this phase laid the groundwork for everything that followed.",
    skills: ["C/C++", "Java", "Data Structures", "Algorithms", "Database Design", "Linux"],
    achievements: [
      "Mastered core programming languages",
      "Built first production application",
      "Completed computer science fundamentals",
      "Started mentoring junior developers",
    ],
    roles: [
      { title: "Software Developer", company: "Infosys", period: "2004-2008" },
      { title: "Senior Developer", company: "TCS", period: "2008-2010" },
    ],
  },
  iteration: {
    number: "02",
    title: "Iteration",
    period: "2010-2015",
    description: "Expanding into enterprise systems and team leadership",
    longDescription: "The iteration phase focused on expanding technical breadth while developing leadership skills. Managing teams and delivering enterprise-scale projects became the new normal.",
    skills: ["Python", "Cloud Computing", "Team Leadership", "Agile", "CI/CD", "Architecture"],
    achievements: [
      "Led first 10+ person team",
      "Delivered enterprise-scale projects",
      "Adopted cloud-native development",
      "Implemented agile methodologies",
    ],
    roles: [
      { title: "Team Lead", company: "TCS", period: "2010-2012" },
      { title: "Senior Consultant", company: "Zensar Technologies", period: "2012-2015" },
    ],
  },
  integration: {
    number: "03",
    title: "Integration",
    period: "2015-2020",
    description: "Architecting large-scale distributed systems",
    longDescription: "Integration was about connecting the dots - building systems that could scale, maintaining them effectively, and teaching others to do the same. This phase solidified the transition from individual contributor to technical leader.",
    skills: ["Microservices", "DevOps", "System Design", "Mentoring", "Kubernetes", "AWS"],
    achievements: [
      "Architected distributed systems serving millions",
      "Established mentorship programs",
      "Published technical articles",
      "Spoke at industry conferences",
    ],
    roles: [
      { title: "Technical Architect", company: "IBM", period: "2015-2018" },
      { title: "Principal Engineer", company: "NICE Ltd", period: "2018-2020" },
    ],
  },
  acceleration: {
    number: "04",
    title: "Acceleration",
    period: "2020-Present",
    description: "AI/ML integration and next-generation coaching",
    longDescription: "The acceleration phase marks a pivot towards AI-powered development and dedicated coaching. Combining decades of experience with cutting-edge technology to create the next generation of software engineers.",
    skills: ["AI/ML", "LLMs", "Full-Time Coaching", "Full-Stack", "React", "TypeScript"],
    achievements: [
      "Launched dedicated coaching practice",
      "Integrated AI into teaching methodology",
      "Mentored 50+ engineers",
      "Built AI-powered learning tools",
    ],
    roles: [
      { title: "Software Engineer Coach", company: "Independent", period: "2020-Present" },
    ],
  },
};

const PhaseDetail = () => {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const phase = phaseId ? phasesData[phaseId] : null;

  if (isLoading) {
    return <RocketLoader onComplete={() => setIsLoading(false)} />;
  }

  if (!phase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-mono text-2xl font-bold mb-4">Phase Not Found</h1>
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
          <div className="flex items-start gap-6 mb-8">
            <span className="font-mono text-6xl md:text-8xl font-bold text-muted/30">
              {phase.number}
            </span>
            <div>
              <h1 className="text-3xl md:text-5xl font-mono font-bold mb-2">
                {phase.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span className="font-mono">{phase.period}</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {phase.longDescription}
          </p>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-semibold mb-4">Skills Developed</h2>
            <div className="flex flex-wrap gap-3">
              {phase.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Key Achievements
            </h2>
            <div className="space-y-3">
              {phase.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p>{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div>
            <h2 className="font-mono text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Roles & Companies
            </h2>
            <div className="space-y-4">
              {phase.roles.map((role, index) => (
                <motion.div
                  key={role.title + role.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-lg"
                >
                  <h3 className="font-mono font-semibold text-lg">{role.title}</h3>
                  <p className="text-primary">{role.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{role.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhaseDetail;
