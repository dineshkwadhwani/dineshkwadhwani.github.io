import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RocketLoading from "@/components/RocketLoading";
import { usePageLoading } from "@/hooks/usePageLoading";

const educationData = [
  {
    degree: "Master of Computer Applications",
    institution: "XYZ University",
    year: "2020 - 2022",
    description: "Specialized in Software Engineering and Distributed Systems. Completed thesis on microservices architecture patterns.",
    achievements: ["First Class with Distinction", "Best Project Award", "Published Research Paper"],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "ABC College",
    year: "2017 - 2020",
    description: "Strong foundation in programming, data structures, algorithms, and database management systems.",
    achievements: ["Dean's List", "Coding Competition Winner", "Technical Club Lead"],
  },
];

const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "Professional Scrum Master", issuer: "Scrum.org", year: "2022" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2022" },
];

const Education = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromSection = (location.state as { fromSection?: number })?.fromSection ?? 2;
  const isLoading = usePageLoading(1200);

  const handleBack = () => {
    navigate("/", { state: { section: fromSection } });
  };

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
                  <span className="hidden sm:inline">Back to About Me</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </motion.div>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold leading-tight">My Education</h1>
                    <p className="text-sm sm:text-base text-muted-foreground font-mono">Academic Journey & Certifications</p>
                  </div>
                </div>
              </motion.div>

              {/* Education Timeline */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="p-4 sm:p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                          <span className="text-xs sm:text-sm font-mono text-muted-foreground">{edu.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-mono font-bold mb-1 leading-tight">{edu.degree}</h3>
                        <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-3">{edu.institution}</p>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="px-2 sm:px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <h2 className="text-lg sm:text-xl font-mono font-bold">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="p-3 sm:p-4 bg-surface-elevated border border-border hover:border-primary/50 transition-all text-center"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <h4 className="font-mono font-semibold text-xs sm:text-sm mb-1 leading-tight">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-primary font-mono mt-1">{cert.year}</p>
                    </motion.div>
                  ))}
                </div>
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

export default Education;
