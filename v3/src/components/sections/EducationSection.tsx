import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: 'Devi Ahilya Vishwavidyalaya',
    degree: 'MBA, Systems and Marketing',
    period: '1992 – 1998',
  },
  {
    institution: 'Choithram School, Indore, India',
    degree: 'Higher Secondary Education',
    period: '1978 – 1992',
  },
]

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    year: 'Issued Jun 2021',
  },
  {
    title: 'CSM – Certified ScrumMaster',
    issuer: 'Scrum Alliance',
    year: 'Issued Dec 2013',
  },
  {
    title: 'PMP – Project Management Professional',
    issuer: 'Project Management Institute',
    year: 'Issued Jun 2013',
  },
  {
    title: 'Sun Certified Web Component Developer',
    issuer: 'Sun Microsystems',
    year: 'Issued Mar 2002',
  },
  {
    title: 'Sun Certified Java Programmer',
    issuer: 'Sun Microsystems',
    year: 'Issued Dec 1999',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-28">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
              Education
            </span>
            <h3 className="text-3xl md:text-4xl font-bold">
              Academic Background
            </h3>
          </div>

          {/* Education List */}
          <div className="space-y-6 mb-16">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="flex gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">{edu.institution}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="text-xl font-semibold">
                Licenses & Certifications
              </h4>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-xl border border-border bg-card
                             flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <div className="font-medium">{cert.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground font-mono">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
