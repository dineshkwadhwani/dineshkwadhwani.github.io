import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ProfileSection from "@/components/sections/ProfileSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const sections = ["profile", "experience", "about", "contact"];

const Index = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  // Handle navigation state from subpages
  useEffect(() => {
    const state = location.state as { section?: number } | null;
    if (state?.section !== undefined) {
      setCurrentSection(state.section);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const [isHoveringButton, setIsHoveringButton] = useState(false);

  // Activity-based button visibility
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleActivity = () => {
      setShowButtons(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!isHoveringButton) {
          setShowButtons(false);
        }
      }, 400);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleActivity, true);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("touchstart", handleActivity);
    window.addEventListener("touchmove", handleActivity);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity, true);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      window.removeEventListener("touchmove", handleActivity);
    };
  }, [isHoveringButton]);

  const goToNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  const renderSection = () => {
    switch (sections[currentSection]) {
      case "profile":
        return <ProfileSection />;
      case "experience":
        return <ExperienceSection />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation bar */}
      <Navbar currentSection={currentSection} onNavigate={goToSection} />

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Section content */}
      <div className="pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.45, 
                ease: [0.22, 1, 0.36, 1],
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.92,
              transition: { 
                duration: 0.25, 
                ease: [0.4, 0, 1, 1]
              }
            }}
            className="min-h-[calc(100vh-4rem)]"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons - Left and Right sides, activity-based visibility */}
      <AnimatePresence>
        {(showButtons || isHoveringButton) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8"
          >
            {/* Back button - Left side */}
            <div
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
            >
              {currentSection > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button
                    onClick={goToPrev}
                    variant="outline"
                    className="font-mono gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-2 bg-background/90 backdrop-blur-md"
                  >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Back</span>
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Continue button - Right side */}
            <div
              onMouseEnter={() => setIsHoveringButton(true)}
              onMouseLeave={() => setIsHoveringButton(false)}
            >
              {currentSection < sections.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button
                    onClick={goToNext}
                    className="font-mono gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-xs sm:text-sm bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="hidden sm:inline">Continue</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-40 flex flex-col gap-1.5 sm:gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default Index;
