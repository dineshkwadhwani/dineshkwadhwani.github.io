import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, BookOpen, ArrowRight, GraduationCap, MessageSquare, Infinity as InfinityIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const navigate = useNavigate();

  const philosophyPrinciples = [
    {
      icon: Sparkles,
      title: "Clarity Over Complexity",
      description: "The best solutions are often the simplest. We strip away unnecessary layers to reveal the elegant core of every problem.",
    },
    {
      icon: TrendingUp,
      title: "Systems Thinking",
      description: "Understanding how parts connect to form wholes. This perspective transforms how you approach architecture and design.",
    },
    {
      icon: Clock,
      title: "Sustainable Pace",
      description: "Growth happens through consistent effort, not bursts of intensity. We build habits that compound over time.",
    },
    {
      icon: BookOpen,
      title: "Reflective Practice",
      description: "Every experience teaches. We cultivate the habit of extracting lessons from both successes and failures.",
    },
  ];

  const coreValues = [
    { number: "01", text: "Understand deeply before acting" },
    { number: "02", text: "Embrace discomfort as growth" },
    { number: "03", text: "Document the journey" },
    { number: "04", text: "Share knowledge freely" },
  ];

  return (
    <section id="about" className="section-container relative pt-24">
      <span className="section-number">03</span>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Row with Title and Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase flex items-center gap-2">
              <span className="w-8 h-px bg-muted-foreground" />
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6">
              The Coaching <span className="text-primary">Philosophy</span>
            </h2>
          </motion.div>

          {/* Right - Photo and Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end"
          >
            {/* Photo with Circle Border */}
            <div className="relative mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-foreground overflow-hidden shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Coach Dinesh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative outer ring */}
              <div className="absolute -inset-3 rounded-full border border-border" />
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-card border border-border rounded-lg max-w-md card-3d"
            >
              <span className="text-3xl text-primary/30 font-serif">"</span>
              <p className="text-lg italic text-muted-foreground leading-relaxed mb-4">
                True growth comes not from shortcuts, but from understanding the systems beneath the surface.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Coach Dinesh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono font-semibold text-sm">Coach Dinesh</p>
                  <p className="text-xs text-muted-foreground">Software Engineer Coach</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Principles - 3D Cards with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {philosophyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-card border border-border rounded-lg card-3d transition-all duration-300"
            >
              <principle.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-mono font-semibold mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values and Growth Circle */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl font-semibold mb-6">Core Values</h3>
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 border-l-2 border-border hover:border-primary transition-all duration-300 card-3d"
                >
                  <span className="font-mono text-2xl text-muted-foreground/50">{value.number}</span>
                  <p className="font-medium">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Continuous Growth Circle */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Outer circle with animation */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Middle circle */}
              <motion.div 
                className="absolute inset-8 rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <InfinityIcon className="w-8 h-8 text-primary mb-2" />
                <span className="font-mono text-sm text-muted-foreground">Continuous Growth</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links - Education & Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.button
            onClick={() => navigate("/education")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group card-3d"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-mono font-semibold mb-1 group-hover:text-primary transition-colors">
                  My Education
                </h4>
                <p className="text-sm text-muted-foreground">
                  Academic journey, degrees, and professional certifications
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </motion.button>

          <motion.button
            onClick={() => navigate("/testimonials")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group card-3d"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-mono font-semibold mb-1 group-hover:text-primary transition-colors">
                  My Testimonials
                </h4>
                <p className="text-sm text-muted-foreground">
                  What colleagues and clients say about working with me
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
