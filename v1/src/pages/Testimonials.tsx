import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageSquareQuote, Star, Quote } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RocketLoading from "@/components/RocketLoading";
import { usePageLoading } from "@/hooks/usePageLoading";
import coachProfile from "@/assets/coach-profile.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Engineering Manager",
    company: "TechCorp Inc.",
    content: "Dinesh is an exceptional engineer who brings both technical excellence and leadership qualities to every project. His ability to architect complex systems while mentoring junior developers is truly remarkable. He consistently delivers high-quality solutions on time.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    company: "StartupXYZ",
    content: "Working with Dinesh was a game-changer for our team. His deep understanding of distributed systems and microservices architecture helped us scale our platform to handle 10x more traffic. He's patient, articulate, and always willing to share knowledge.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Dinesh has an incredible ability to translate complex technical concepts into business value. His coaching approach helped our entire team level up their skills. He doesn't just solve problems—he teaches you how to think about problems differently.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO",
    company: "GrowthTech",
    content: "I've worked with many engineers, but Dinesh stands out for his holistic approach to software development. He considers scalability, maintainability, and team dynamics in every decision. His contributions have had lasting positive impact on our engineering culture.",
    rating: 5,
  },
];

const Testimonials = () => {
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

              {/* Header with Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8 sm:mb-12"
              >
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-xl shadow-primary/20">
                    <img
                      src={coachProfile}
                      alt="Coach Dinesh W"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquareQuote className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold leading-tight">My Testimonials</h1>
                    <p className="text-sm sm:text-base text-muted-foreground font-mono">What Others Say About Working With Me</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="p-4 sm:p-6 bg-surface-elevated border border-border hover:border-primary/50 transition-all relative"
                  >
                    {/* Quote icon */}
                    <Quote className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/10" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-border pt-3 sm:pt-4">
                      <h4 className="font-mono font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;
