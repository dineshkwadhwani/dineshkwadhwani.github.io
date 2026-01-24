import { useState, useEffect } from 'react'

export const SECTIONS = ['home', 'about', 'projects', 'skills', 'contact'] as const
export type Section = typeof SECTIONS[number]

const ABOUT_SUBSECTIONS = ['education', 'testimonials']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    /* ---------------------------------------
     * 🔝 HOME DETECTION (scroll-based)
     * --------------------------------------- */
    const onScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    /* ---------------------------------------
     * 🧭 INTERSECTION OBSERVER (others)
     * --------------------------------------- */
    const isAboutRegionActive = () => {
      const aboutEl = document.getElementById('about')
      if (!aboutEl) return false

      const rect = aboutEl.getBoundingClientRect()
      const center = window.innerHeight / 2

      return rect.top <= center && rect.bottom >= center
    }

    const isAboutSubsectionActive = () =>
      ABOUT_SUBSECTIONS.some((id) => {
        const el = document.getElementById(id)
        if (!el) return false

        const rect = el.getBoundingClientRect()
        const center = window.innerHeight / 2

        return rect.top <= center && rect.bottom >= center
      })

    const observer = new IntersectionObserver(
      (entries) => {
        // 🔒 HOME always wins at top
        if (window.scrollY < 80) {
          setActiveSection('home')
          return
        }

        // 🔒 ABOUT logic
        if (isAboutRegionActive() || isAboutSubsectionActive()) {
          setActiveSection('about')
          return
        }

        // 🎯 Normal section resolution
        const center = window.innerHeight / 2

        const candidates = entries
          .filter(
            (e) =>
              e.isIntersecting &&
              SECTIONS.includes(e.target.id as Section)
          )
          .map((e) => {
            const rect = e.target.getBoundingClientRect()
            return {
              id: e.target.id as Section,
              distance: Math.abs(rect.top + rect.height / 2 - center),
            }
          })

        if (!candidates.length) return

        const closest = candidates.sort(
          (a, b) => a.distance - b.distance
        )[0]

        setActiveSection(closest.id)
      },
      {
        root: null,
        rootMargin: isMobile
          ? '-15% 0px -15% 0px'
          : '-120px 0px -40% 0px',
        threshold: [0.15, 0.3, 0.5],
      }
    )

    ;[...SECTIONS, ...ABOUT_SUBSECTIONS].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /* ---------------------------------------
   * 🖱 CLICK NAVIGATION (authoritative)
   * --------------------------------------- */
  const scrollToSection = (section: Section) => {
    const el = document.getElementById(section)
    if (!el) return

    setActiveSection(section)

    requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return { activeSection, scrollToSection }
}
