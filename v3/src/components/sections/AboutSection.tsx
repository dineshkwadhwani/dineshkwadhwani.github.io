import {
  Brain,
  Cloud,
  Users,
  TrendingUp,
} from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI at Enterprise Scale',
    description:
      'Operationalising AI across workforce forecasting, quality, and productivity platforms serving global enterprises.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native SaaS',
    description:
      'Architecting secure, multi-tenant SaaS platforms on AWS and Azure with 99.9% availability.',
  },
  {
    icon: Users,
    title: 'Leadership at Scale',
    description:
      'Leading and mentoring 400+ engineers across geographies, cultures, and product lines.',
  },
  {
    icon: TrendingUp,
    title: 'Agile & Transformation',
    description:
      'Driving large-scale Agile transformation, predictability, and engineering excellence.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-28">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold">
              Engineering Leadership in{' '}
              <span className="text-primary">AI & Cloud Platforms</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Senior engineering leader with <strong>27+ years</strong> of experience
                building, scaling, and transforming enterprise software platforms
                across global markets.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently operating at VP / Senior Director scope, leading large
                multi-product organizations, influencing <strong>$400M+</strong> in
                revenue, and delivering cloud-native, AI-driven platforms with
                high availability and strong governance.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced across Customer Experience, Education, Banking &
                Finance, Media, Telecom, Analytics, and Procurement — with a strong
                focus on people leadership, execution excellence, and long-term
                impact.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">27+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>

                <div className="h-10 w-px bg-border hidden sm:block" />

                <div>
                  <div className="text-3xl font-bold text-primary">400+</div>
                  <div className="text-sm text-muted-foreground">
                    Engineers Led
                  </div>
                </div>

                <div className="h-10 w-px bg-border hidden sm:block" />

                <div>
                  <div className="text-3xl font-bold text-primary">
                    Multi-Domain
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Global Industry Exposure
                  </div>
                </div>
              </div>
            </div>

            {/* Right Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group p-5 rounded-2xl bg-card border border-border
                             hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center
                               justify-center mb-3 group-hover:bg-primary transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="font-semibold mb-1 text-sm md:text-base">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
