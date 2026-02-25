import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Quote, Star, X } from "lucide-react";
import RocketLoader from "@/components/RocketLoader";
import profilePhoto from "@/assets/profile-photo.png";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer at Google",
      content: "Coach Dinesh transformed my understanding of system design. His systematic approach to problem-solving helped me crack interviews at top tech companies. The mentorship was exactly what I needed to level up my career.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Full Stack Developer at Microsoft",
      content: "The way Coach Dinesh explains complex concepts makes learning enjoyable. His real-world experience adds invaluable context to every lesson. I went from struggling with algorithms to confidently tackling any problem.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Tech Lead at Flipkart",
      content: "Working with Coach Dinesh was a game-changer. His mentorship helped me transition from individual contributor to technical leadership. The lessons I learned continue to guide my decisions today.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Backend Engineer at Amazon",
      content: "Coach Dinesh has an incredible ability to identify gaps in understanding and address them effectively. His patient approach and deep technical knowledge make him an exceptional mentor.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Startup Founder",
      content: "Beyond technical skills, Coach Dinesh taught me how to think like an engineer. His guidance during my early career laid the foundation for everything I've built since.",
      rating: 5,
    },
    {
      name: "Ananya Gupta",
      role: "Data Engineer at Netflix",
      content: "I came to Coach Dinesh with scattered knowledge and left with a structured understanding of software engineering. His coaching methodology is truly world-class.",
      rating: 5,
    },
  ];

  if (isLoading) {
    return <RocketLoader onComplete={() => setIsLoading(false)} />;
  }

  // Triple the testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.button
          onClick={() => navigate("/#about")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to About Me
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            What My <span className="text-primary">Mentees</span> Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from engineers who've transformed their careers through dedicated mentorship and continuous learning.
          </p>
        </motion.div>

        {/* 3D Floating Cards Marquee */}
        <div className="relative overflow-hidden py-12" style={{ perspective: "1000px" }}>
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background to-transparent z-10 pointer-events-none" />
          
          {/* 3D Marquee track */}
          <div 
            className="flex gap-8 animate-marquee-3d hover:pause"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="flex-shrink-0 w-[320px] md:w-[380px] cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  z: 50,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div 
                  className="p-6 bg-card border border-border rounded-xl shadow-lg testimonial-card-3d h-full"
                  style={{
                    transform: `rotateY(${(index % 6) * 2 - 5}deg) rotateX(${(index % 3) * 2 - 3}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none">
                    "{truncateText(testimonial.content, window.innerWidth < 768 ? 100 : 200)}"
                  </p>
                  {testimonial.content.length > (window.innerWidth < 768 ? 100 : 200) && (
                    <span className="text-primary text-sm font-medium cursor-pointer hover:underline">
                      more...
                    </span>
                  )}
                  <div className="flex items-center gap-1 mb-4 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted shadow-md">
                      <img
                        src={profilePhoto}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-mono font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setSelectedTestimonial(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-card border border-border rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
                style={{ transformStyle: "preserve-3d" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  "{selectedTestimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted shadow-lg">
                    <img
                      src={profilePhoto}
                      alt={selectedTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-lg">{selectedTestimonial.name}</p>
                    <p className="text-muted-foreground">{selectedTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
