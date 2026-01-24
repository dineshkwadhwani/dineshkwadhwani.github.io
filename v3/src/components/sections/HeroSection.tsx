import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/30 rounded-full animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '15s' }}
        />
      </div>

      <div className="container px-6 relative z-10">
        {/* Grid wrapper */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center">

          {/* Profile Image */}
          <div
            className="flex justify-center md:justify-start opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative">
              <img
                src="/dinesh.jpg"
                alt="Dinesh Wadhwani"
                className="
                  w-32 h-32 md:w-44 md:h-44
                  rounded-full object-cover
                  border-4 border-primary/30
                  shadow-2xl
                "
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 blur-sm" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">

            {/* Greeting */}
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-secondary text-sm font-mono text-muted-foreground opacity-0 animate-fade-in">
              👋 Hello, I’m
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-foreground">Coach</span>{' '}
              <span className="text-primary">Dinesh</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Engineering Leader driving AI-powered, cloud-scale platforms and
              high-performance teams
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" className="gap-2 px-8" onClick={onScrollToProjects}>
                View Work Experience
                <ArrowDown className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-8"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/dineshkwadhwani/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:contact@dineshwadhwani.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Desktop Quote */}
            <div
              className="mt-14 hidden md:block opacity-0 animate-fade-in"
              style={{ animationDelay: '1s' }}
            >
              <div className="max-w-2xl relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent blur-xl" />
                <div className="relative p-6 md:p-8 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    “Great engineering is not just about building systems —
                    it’s about <span className="text-primary">building people</span>,
                    trust, and a culture that scales.”
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground font-mono">
                    — Leadership Philosophy
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Quote */}
            <div className="mt-10 md:hidden text-center text-muted-foreground">
              <p className="text-sm italic">
                “Engineering leadership is about people first, systems second.”
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
