import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Clock,
  Terminal,
  Infinity as InfinityIcon,
} from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@coachdinesh",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Coach Dinesh",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      username: "@coachdinesh",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "coach@dinesh.dev",
      href: "mailto:coach@dinesh.dev",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Open for Mentorship",
    },
  ];

  return (
    <section id="contact" className="section-container-alt relative">
      <span className="section-number">04</span>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-muted-foreground mb-4 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6">
            Begin Your <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to transform your career? Let’s connect and discuss how I can
            help you achieve your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Social */}
          <div>
            <h3 className="font-mono text-xl font-semibold mb-6">
              Connect Online
            </h3>
            <div className="grid gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg card-3d"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {link.username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xl font-semibold mb-6">
              Contact Details
            </h3>
            <div className="grid gap-4">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg card-3d"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono font-medium">{method.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Symbol */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <InfinityIcon className="w-12 h-12 text-primary opacity-80" />
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-foreground/5 border border-border rounded-lg card-3d"
        >
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              coach@dinesh:~$
            </span>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            echo "Let’s build something meaningful together."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
