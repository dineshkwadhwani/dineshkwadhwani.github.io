import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navbar = ({ currentSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Profile", index: 0 },
    { label: "Work Experience", index: 1 },
    { label: "About Me", index: 2 },
    { label: "Contact", index: 3 },
    { label: "Mentorship", index: 4 },
  ];

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate(0)}
            className="font-mono font-bold text-xl text-gradient"
          >
            Coach Dinesh
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.index)}
                className={`relative font-mono text-sm transition-all duration-300 py-2 px-3 rounded-md ${
                  currentSection === item.index
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {/* Active glow background */}
                {currentSection === item.index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/15 rounded-md shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border bg-background"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigate(item.index)}
                className={`relative block w-full text-left font-mono text-sm transition-all py-3 px-4 rounded-md ${
                  currentSection === item.index
                    ? "text-primary font-medium bg-primary/15 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
