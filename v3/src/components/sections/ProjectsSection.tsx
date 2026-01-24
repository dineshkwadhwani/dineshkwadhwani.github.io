import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Director of Engineering',
    company: 'NICE Ltd',
    period: 'Sep 2021 – Present',
    location: 'Pune, India',
    highlights: [
      'Leading Workforce & Customer Experience engineering (~400 people)',
      'Driving delivery across 8 enterprise product lines',
      'Steering innovation, execution, and operational excellence at scale',
    ],
  },
  {
    role: 'Head of Engineering',
    company: 'Capita SIMS (India) Pvt. Ltd.',
    period: 'May 2016 – Sep 2021',
    location: 'Pune, India',
    highlights: [
      'Owned India delivery for UK education platforms',
      'Scaled engineering organization from ~100 to 1200 engineers',
      'Established strong culture of ownership and quality',
    ],
  },
  {
    role: 'Senior Manager, Engineering',
    company: 'IBM',
    period: 'Mar 2010 – May 2016',
    location: 'Pune, India',
    highlights: [
      'Led enterprise procurement-domain platforms',
      'Agile transformation leader managing ~70 engineers',
    ],
  },
  {
    role: 'Competency Head / Engineering Manager',
    company: 'Core Objects',
    period: 'Sep 2008 – Apr 2010',
    location: 'India',
    highlights: [
      'Owned UI competency across multiple products',
      'Led engineering initiatives for Avery Dennison',
    ],
  },
  {
    role: 'Senior Program Manager',
    company: 'Xpanxion',
    period: 'Dec 2005 – Aug 2008',
    location: 'India / USA',
    highlights: ['Managed strategic programs for Turner Broadcasting'],
  },
  {
    role: 'Project Manager',
    company: 'Zensar Technologies',
    period: 'Mar 2002 – Dec 2005',
    location: 'India',
    highlights: ['Owned end-to-end delivery for global enterprise clients'],
  },
  {
    role: 'Consultant',
    company: 'Ajilon North America / Diaspark Inc',
    period: 'Jan 2000 – Mar 2002',
    location: 'USA',
    highlights: ['Worked on Verizon web portal and Juniper Financials'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-28">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Leadership Across{' '}
              <span className="text-primary">Enterprise Scale</span>
            </h2>

            <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
              A career focused on building, scaling, and transforming
              engineering organizations across industries and geographies.
            </p>
          </div>

          {/* Experience Stack */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative rounded-3xl bg-card/70 backdrop-blur-xl
                           border border-border/60 p-6 md:p-8
                           transition-all duration-300 md:hover:shadow-xl"
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-primary/40" />

                <div className="pl-4 md:pl-6">
                  {/* Role */}
                  <h3 className="text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground mt-1">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="relative pl-4">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
