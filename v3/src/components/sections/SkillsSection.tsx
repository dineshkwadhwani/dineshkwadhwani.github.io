import {
  Brain,
  Cloud,
  Database,
  BarChart3,
  Settings,
  Users,
} from 'lucide-react'

const skills = [
  {
    icon: Brain,
    title: 'Applied AI & Intelligent Systems',
    items: [
      'AI-enabled Platform Architecture',
      'Operationalising ML in Enterprise Products',
      'Forecasting, Quality & Productivity Systems',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & SaaS Platforms',
    items: [
      'AWS & Azure-based Architectures',
      'Enterprise Multi-tenant SaaS',
      'Scalability, Availability & Cost Optimisation',
    ],
  },
  {
    icon: Database,
    title: 'Data, Analytics & Observability',
    items: [
      'Decision-support & Analytics Platforms',
      'Data Pipelines & Platform Telemetry',
      'Governance, Reliability & Compliance',
    ],
  },
  {
    icon: Settings,
    title: 'Engineering Excellence',
    items: [
      'Large-scale System Design',
      'Platform Reliability & Performance',
      'Quality-first Engineering Practices',
    ],
  },
  {
    icon: Users,
    title: 'Leadership & Org Design',
    items: [
      'Multi-layer Engineering Leadership',
      'Mentorship, Coaching & Talent Growth',
      'Organisation Design & Execution',
    ],
  },
  {
    icon: BarChart3,
    title: 'Delivery & Transformation',
    items: [
      'Enterprise Agile at Scale',
      'Execution Predictability & Governance',
      'Continuous Improvement & Transformation',
    ],
  },
]
export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-28">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              Skills
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Technical & Leadership{' '}
              <span className="text-primary">Expertise</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="p-6 rounded-2xl bg-card border border-border
                           hover:border-primary/50 hover:shadow-lg
                           transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-semibold mb-3 text-base break-words">
                  {skill.title}
                </h3>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed break-words"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
