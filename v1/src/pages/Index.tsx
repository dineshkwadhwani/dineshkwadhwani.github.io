import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/sections/ProfileSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import QuerySection from "@/components/sections/QuerySection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const sections = [
    { id: "profile", component: ProfileSection },
    { id: "experience", component: ExperienceSection },
    { id: "about", component: AboutSection },
    { id: "contact", component: ContactSection },
    { id: "query", component: QuerySection },
  ];

  const navigateToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
      const sectionElement = document.getElementById(sections[index].id);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScroll = () => {
    if (isScrolling.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop - windowHeight / 3 &&
          scrollPosition < offsetTop + offsetHeight - windowHeight / 3
        ) {
          setCurrentSection(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (direction: "up" | "down") => {
    const newIndex = direction === "up" ? currentSection - 1 : currentSection + 1;
    navigateToSection(newIndex);
  };

  return (
    <div ref={containerRef} className="relative">
      <Navbar currentSection={currentSection} onNavigate={navigateToSection} />

      {/* Progress Indicator */}
      <div className="progress-indicator hidden md:flex">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`progress-dot ${currentSection === index ? "active" : ""}`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed right-8 bottom-8 flex flex-col gap-2 z-50 hidden md:flex">
        <motion.button
          onClick={() => handleNavigate("up")}
          disabled={currentSection === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={() => handleNavigate("down")}
          disabled={currentSection === sections.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Sections */}
      <AnimatePresence mode="wait">
        <div key="profile" id="profile">
          <ProfileSection />
        </div>
        <div key="experience" id="experience">
          <ExperienceSection />
        </div>
        <div key="about" id="about">
          <AboutSection />
        </div>
        <div key="contact" id="contact">
          <ContactSection />
        </div>
        <div key="query" id="query">
          <QuerySection />
        </div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Coach Dinesh. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Built with passion for teaching and engineering excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
