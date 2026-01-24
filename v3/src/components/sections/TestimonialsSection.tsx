import { useState } from 'react'
import { Quote, X } from 'lucide-react'
import clsx from 'clsx'

const testimonials = [
  {
    name: 'Rajesh Dankh',
    role: 'Infra Architect · Reported to Dinesh directly',
    content:
      'I worked with Dinesh for more than 3 years during my tenure at Xpanxion International. Dinesh is one of those rare managers who also naturally serves as an inspiring mentor for the whole staff. He exhibits strong interpersonal skills and a unique capacity for empathy. He is the go-to person for conflict resolution and problem solving.',
  },
  {
    name: 'Rommel Sharma',
    role: 'Digital Transformation Leader · Reported to Dinesh directly',
    content:
      'It was great to work with Dinesh at Zensar Technologies for the Cisco ODC account. He is technically very sound, always willing to share his knowledge, and creates a positive environment that improves productivity and team morale.',
  },
  {
    name: 'Seema Kamble Nadkarni',
    role: 'Flutter Developer · Reported to Dinesh directly',
    content:
      'Dinesh is a very cool manager. He encourages team members to give their 100% and helps them work on different technologies and modules. He appreciates good work and makes the team enjoy their work to the fullest.',
  },
  {
    name: 'Sandeep Garud',
    role: 'CEO · Reported to Dinesh directly',
    content:
      'Dinesh is sincere and a meticulous planner. He sets clear goals, inspires confidence, treats people fairly, and remains calm under pressure. He is broad-minded, encourages opinions, and has strong people management skills.',
  },
  {
    name: 'Anand Mitragotri',
    role: 'Program Manager · Reported to Dinesh directly',
    content:
      'Dinesh is an intelligent and motivated leader who can lead multi-layered teams across client and corporate environments. He provides solutions to complex problems from both technical and cultural perspectives.',
  },
  {
    name: 'Manisha Bathia',
    role: 'Project Manager · Reported to Dinesh directly',
    content:
      'Dinesh is a disciplined and enthusiastic manager. He drove projects very well and always made people feel comfortable around him. Given an opportunity, I would love to work with him again.',
  },
]

// 🔹 Breakpoint-aware truncation
const truncateWords = (text: string, limit: number) => {
  const words = text.split(' ')
  const isTruncated = words.length > limit

  return {
    text: isTruncated ? words.slice(0, limit).join(' ') + '…' : text,
    isTruncated,
  }
}

export function TestimonialsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] =
    useState<(typeof testimonials)[number] | null>(null)

  return (
    <>
      <section id="testimonials" className="py-24 md:py-28 overflow-hidden">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              What People Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-2">
              Feedback from colleagues and leaders who have worked closely with me.
            </p>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative" onMouseLeave={() => setHovered(null)}>
          <div
            className={clsx(
              'flex gap-6 w-max px-6',
              hovered === null
                ? 'animate-marquee'
                : 'animate-marquee paused'
            )}
          >
            {[...testimonials, ...testimonials].map((t, i) => {
              const isHovered = hovered === i
              const isDimmed = hovered !== null && !isHovered

              // 🔑 Mobile vs Desktop limits
              const mobile = truncateWords(t.content, 24)
              const desktop = truncateWords(t.content, 60)

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  className={clsx(
                    'w-[224px] sm:w-[340px] md:w-[360px] lg:w-[400px]',
                    'h-[320px] sm:h-[380px]',
                    'flex transition-transform duration-300 transform-gpu'
                  )}
                  style={{
                    transform: isHovered
                      ? 'scale(1.1)'
                      : isDimmed
                        ? 'scale(0.91)'
                        : 'scale(1)',
                  }}
                >
                  <div className="flex flex-col h-full w-full rounded-2xl border bg-card p-6 shadow-sm">
                    <Quote className="w-6 h-6 text-primary/20 mb-3 shrink-0" />

                    {/* TEXT */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="block md:hidden">
                        {mobile.text}
                      </span>
                      <span className="hidden md:block">
                        {desktop.text}
                      </span>
                    </p>

                    {/* READ MORE */}
                    {/* READ MORE – MOBILE ONLY */}
                    {mobile.isTruncated && (
                      <button
                        className="mt-2 text-xs font-medium text-primary self-start md:hidden"
                        onClick={() => setActiveTestimonial(t)}
                      >
                        Read more
                      </button>
                    )}

                    {/* READ MORE – DESKTOP ONLY */}
                    {desktop.isTruncated && (
                      <button
                        className="mt-2 text-xs font-medium text-primary self-start hidden md:block"
                        onClick={() => setActiveTestimonial(t)}
                      >
                        Read more
                      </button>
                    )}


                    <div className="border-t pt-4 mt-auto">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-background rounded-2xl max-w-lg w-full p-6 relative max-h-[85vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={() => setActiveTestimonial(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {activeTestimonial.content}
            </p>

            <div className="border-t pt-4">
              <div className="font-semibold">
                {activeTestimonial.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {activeTestimonial.role}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
