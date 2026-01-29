import { motion } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin, Send, MapPin, Calendar } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", handle: "@coach-dinesh" },
    { icon: Linkedin, label: "LinkedIn", handle: "/in/coach-dinesh" },
    { icon: MessageSquare, label: "Twitter", handle: "@coach_dinesh" },
  ];

  const contactMethods = [
    { icon: Mail, label: "Email", value: "coach@dineshw.dev", primary: true },
    { icon: MapPin, label: "Location", value: "Remote / Worldwide", primary: false },
    { icon: Calendar, label: "Availability", value: "Open for mentorship", primary: false },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-6 md:right-12 top-20 font-mono text-[12rem] md:text-[16rem] font-bold text-foreground leading-none select-none"
      >
        04
      </motion.span>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2"
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Contact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight"
          >
            Begin Your
            <br />
            <span className="text-gradient">Journey</span>
          </motion.h2>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Ready to transform your engineering mindset? Let's start a conversation
            about where you are and where you want to be. Every great engineer
            started somewhere—your next step could change everything.
          </motion.p>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className={`flex items-center gap-4 p-4 bg-surface-elevated border transition-all duration-300 ${
                  method.primary
                    ? 'border-primary hover:bg-primary/10 cursor-pointer'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center ${
                  method.primary ? 'bg-primary text-primary-foreground' : 'bg-surface border border-border'
                }`}>
                  <method.icon className={`w-5 h-5 ${method.primary ? '' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono uppercase">{method.label}</p>
                  <p className={`font-mono ${method.primary ? 'text-primary' : 'text-foreground'}`}>
                    {method.value}
                  </p>
                </div>
                {method.primary && <Send className="w-5 h-5 text-primary" />}
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="w-12 h-12 bg-surface-elevated border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right content - Get in touch */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          {/* Decorative circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border border-primary/20 rounded-full"
          />

          {/* Main card */}
          <div className="p-8 bg-surface-elevated border border-border relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

            <div className="relative z-10">
              {/* Ready badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-mono text-primary">Ready to Connect</span>
              </motion.div>

              {/* Terminal-style message */}
              <div className="font-mono text-sm space-y-3 mb-8">
                <div className="text-muted-foreground">
                  <span className="text-primary">$ </span>
                  echo "Let's build something great together"
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-foreground pl-4"
                >
                  Let's build something great together
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-muted-foreground"
                >
                  <span className="text-primary">$ </span>
                  coach.start(yourJourney)
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-green-400 pl-4"
                >
                  → Ready to transform...
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-mono font-bold text-gradient">4</p>
                  <p className="text-xs text-muted-foreground">Sections</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-mono font-bold text-gradient">1</p>
                  <p className="text-xs text-muted-foreground">Journey</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-mono font-bold text-gradient">∞</p>
                  <p className="text-xs text-muted-foreground">Potential</p>
                </div>
              </div>

              {/* CTA button */}
              <motion.a
                href="mailto:coach@dineshw.dev"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="journey-button group w-full justify-center"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
            </div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-6 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
