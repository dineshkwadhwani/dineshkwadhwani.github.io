import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const ProfileSection = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-16 bg-background relative overflow-hidden">
      {/* Section Number - positioned to avoid navbar overlap */}
      <span className="section-number select-none">01</span>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            {/* Available Badge with Glowing Dot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-muted rounded-full text-sm text-muted-foreground font-mono">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary glow-dot"></span>
                </span>
                <span className="glow-text">Available for mentorship</span>
              </span>
            </motion.div>

            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase"
            >
              Welcome to the journey
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-4 leading-tight"
            >
              I am Coach{" "}
              <span className="text-primary">Dinesh</span>
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-primary mb-6"
            />

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg text-foreground font-mono">
                <Sparkles className="w-5 h-5 text-primary" />
                Software Engineer Coach
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Engineering is not about writing code—it's about solving problems with precision, clarity, and discipline. My approach centers on building mental models that transcend frameworks and languages.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={scrollToExperience} className="journey-button">
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={scrollToContact} className="journey-button-outline">
                Get In Touch
                <Mail className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Right - Profile Image with Rotating Dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Corner Brackets */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-border" />
              <div className="absolute -top-8 -right-8 w-16 h-16 border-r-2 border-t-2 border-border" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-2 border-b-2 border-border" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-border" />

              {/* Outer Ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Rotating ring with dots */}
                <div className="absolute inset-0 rounded-full border-2 border-border rotating-ring">
                  {/* Clockwise rotating dot */}
                  <div className="rotating-dot-cw">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg" style={{ boxShadow: '0 0 10px hsl(var(--primary))' }} />
                  </div>
                </div>

                {/* Counter-clockwise rotating ring */}
                <div className="absolute inset-4 rounded-full border border-primary/20 rotating-ring-ccw">
                  {/* Counter-clockwise rotating dot */}
                  <div className="rotating-dot-ccw">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/70 shadow-lg" style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.7)' }} />
                  </div>
                </div>

                {/* Profile Image Container with Wave Animation */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-foreground wave-animation">
                  <img
                    src={profilePhoto}
                    alt="Coach Dinesh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Side Element */}
              <div className="absolute -right-16 top-4 w-12 h-12 border-2 border-border rounded-lg hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
