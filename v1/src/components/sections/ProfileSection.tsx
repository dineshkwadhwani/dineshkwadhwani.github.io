import { motion } from "framer-motion";
import { Brain, Target, Compass, Code2, Lightbulb, Sparkles } from "lucide-react";
import coachProfile from "@/assets/coach-profile.png";

const ProfileSection = () => {
  const principles = [
    { icon: Brain, title: "Systematic Thinking", desc: "Breaking complex problems into manageable patterns" },
    { icon: Target, title: "Focused Execution", desc: "Clarity in purpose drives meaningful outcomes" },
    { icon: Compass, title: "Guided Growth", desc: "Every step is intentional, every lesson builds" },
    { icon: Lightbulb, title: "First Principles", desc: "Understanding the 'why' before the 'how'" },
  ];

  const traits = [
    { label: "Patience", value: 95 },
    { label: "Technical Depth", value: 90 },
    { label: "Communication", value: 88 },
    { label: "Problem Solving", value: 92 },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated border border-border rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-mono text-muted-foreground">
              Available for mentorship
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
            >
              Welcome to the journey
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold leading-[1.1]"
            >
              I am{" "}
              <span className="text-gradient relative">
                Coach Dinesh
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-primary/50"
                />
              </span>
            </motion.h1>
          </div>

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-3 bg-primary/10 border border-primary/30"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-lg font-mono font-medium text-primary">
              Software Engineer Coach
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Engineering is not about writing code—it's about solving problems
            with precision, clarity, and discipline. My approach centers on
            building mental models that transcend frameworks and languages.
          </motion.p>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-4 pt-4"
          >
            {traits.map((trait, index) => (
              <div key={trait.label} className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-muted-foreground">{trait.label}</span>
                  <span className="text-primary">{trait.value}%</span>
                </div>
                <div className="h-1 bg-surface-elevated overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${trait.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-mono font-bold text-gradient">20+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-mono font-bold text-gradient">150+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Engineers Mentored</p>
            </div>
            <div className="w-px bg-border hidden sm:block" />
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-mono font-bold text-gradient">100%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Commitment</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right content - Profile Image & Principles */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative"
        >
          {/* Profile Image */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Floating decorative elements - hidden on small screens */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-16 sm:w-20 h-16 sm:h-20 border border-primary/30 rounded-lg rotate-12 hidden sm:block"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full blur-sm hidden sm:block"
            />

            {/* Rotating ring - smaller on mobile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[230px] sm:w-[290px] md:w-[340px] h-[230px] sm:h-[290px] md:h-[340px] border border-primary/10 rounded-full border-dashed"
            />

            {/* Image container */}
            <div className="relative">
              {/* Soft glow behind image */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
              />

              {/* Image frame with gentle hover animation */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/20"
              >
                <img
                  src={coachProfile}
                  alt="Coach Dinesh W"
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-primary/60" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-primary/60" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-primary/60" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-primary/60" />
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
                className="p-3 sm:p-4 bg-surface-elevated border border-border transition-all duration-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="font-mono font-semibold text-xs sm:text-sm mb-1 text-foreground">{principle.title}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 p-4 bg-surface border-l-2 border-primary"
          >
            <Code2 className="w-5 h-5 text-primary mb-2" />
            <p className="text-sm font-mono text-muted-foreground italic">
              "The best code is written by those who understand the problem deeply,
              not by those who type the fastest."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
