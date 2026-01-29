import { motion } from "framer-motion";
import { Quote, Sparkles, TrendingUp, Shield, Clock, GraduationCap, MessageSquareQuote, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coachProfile from "@/assets/coach-profile.png";

const AboutSection = () => {
  const navigate = useNavigate();

  const philosophyPoints = [
    {
      icon: Sparkles,
      title: "Clarity Over Complexity",
      desc: "The best solutions are often the simplest. We strip away unnecessary layers to reveal the elegant core of every problem.",
    },
    {
      icon: TrendingUp,
      title: "Systems Thinking",
      desc: "Understanding how parts connect to form wholes. This perspective transforms how you approach architecture and design.",
    },
    {
      icon: Clock,
      title: "Sustainable Pace",
      desc: "Growth happens through consistent effort, not bursts of intensity. We build habits that compound over time.",
    },
    {
      icon: Shield,
      title: "Reflective Practice",
      desc: "Every experience teaches. We cultivate the habit of extracting lessons from both successes and failures.",
    },
  ];

  const values = [
    { number: "01", text: "Understand deeply before acting" },
    { number: "02", text: "Embrace discomfort as growth" },
    { number: "03", text: "Document the journey" },
    { number: "04", text: "Share knowledge freely" },
  ];

  const additionalSections = [
    {
      id: "education",
      title: "My Education",
      description: "Academic journey, degrees, and professional certifications",
      icon: GraduationCap,
    },
    {
      id: "testimonials",
      title: "My Testimonials",
      description: "What colleagues and clients say about working with me",
      icon: MessageSquareQuote,
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 md:left-12 top-20 font-mono text-[12rem] md:text-[16rem] font-bold text-foreground leading-none select-none"
      >
        03
      </motion.span>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header with quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight"
            >
              The Coaching
              <br />
              <span className="text-gradient">Philosophy</span>
            </motion.h2>
          </div>

          {/* Profile image and Quote block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-xl shadow-primary/20">
                <img
                  src={coachProfile}
                  alt="Coach Dinesh W"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            <div className="relative p-8 bg-surface-elevated border border-border">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary bg-background p-1" />
              <p className="text-xl md:text-2xl font-light italic text-foreground/90 leading-relaxed">
                "True growth comes not from shortcuts, but from understanding
                the systems beneath the surface."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                  <img
                    src={coachProfile}
                    alt="Coach Dinesh W"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="font-mono text-sm font-medium">Coach Dinesh</p>
                  <p className="text-xs text-muted-foreground">Software Engineer Coach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-semibold mb-3 text-primary">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-lg text-muted-foreground mb-6">Core Values</h3>
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-surface border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <span className="font-mono text-2xl font-bold text-primary/30">{value.number}</span>
                <span className="text-foreground">{value.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="relative"
          >
            {/* Abstract decorative element */}
            <div className="relative p-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-primary/40 rounded-full"
              />

              <div className="relative z-10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono text-6xl font-bold text-gradient mb-2">∞</p>
                  <p className="text-sm text-muted-foreground font-mono">Continuous Growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalSections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => navigate(`/${section.id}`, { state: { fromSection: 2 } })}
                className="text-left p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                    {section.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
