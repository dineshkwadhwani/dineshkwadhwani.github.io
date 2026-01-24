import React, { useRef, useState, useCallback, useEffect } from 'react'
import { CompassSVG } from './CompassSVG'
import { Section, SECTIONS } from '@/hooks/useActiveSection'

interface MobileCompassProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

const SECTION_CONFIG = [
  { id: 'contact', label: 'Contact', angle: -72 },
  { id: 'skills', label: 'Skills', angle: -36 },
  { id: 'projects', label: 'Work Experience', angle: 0 },
  { id: 'about', label: 'About', angle: 36 },
  { id: 'home', label: 'Home', angle: 72 },
] as const

const SECTION_ANGLES: Record<Section, number> = {
  contact: -72,
  skills: -36,
  projects: 0,
  about: 36,
  home: 72,
}

export function MobileCompass({
  activeSection,
  onNavigate,
}: MobileCompassProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragAngle, setDragAngle] = useState<number | null>(null)

  const needleAngle =
    isDragging && dragAngle !== null
      ? dragAngle
      : SECTION_ANGLES[activeSection]

  const calculateAngle = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return 0

    const rect = containerRef.current.getBoundingClientRect()
    const pivotX = rect.left + rect.width / 2
    const pivotY = rect.top + 12

    const dx = clientX - pivotX
    const dy = clientY - pivotY

    let angle = Math.atan2(-dx, dy) * (180 / Math.PI)
    return Math.max(-80, Math.min(80, angle))
  }, [])

  const findClosestSection = useCallback((angle: number): Section => {
    return SECTIONS.reduce((closest, section) => {
      const diff =
        Math.abs(angle - SECTION_ANGLES[section]) <
        Math.abs(angle - SECTION_ANGLES[closest])
          ? section
          : closest
      return diff
    }, 'projects' as Section)
  }, [])

  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)

      const point =
        'touches' in e ? e.touches[0] : e

      setDragAngle(calculateAngle(point.clientX, point.clientY))
    },
    [calculateAngle]
  )

  useEffect(() => {
    if (!isDragging) return

    const move = (e: MouseEvent | TouchEvent) => {
      const point =
        'touches' in e ? e.touches[0] : e
      setDragAngle(calculateAngle(point.clientX, point.clientY))
    }

    const end = () => {
      if (dragAngle !== null) {
        onNavigate(findClosestSection(dragAngle))
      }
      setIsDragging(false)
      setDragAngle(null)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', end)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('touchend', end)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', end)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', end)
    }
  }, [isDragging, dragAngle, calculateAngle, findClosestSection, onNavigate])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex justify-center">
      <div
        ref={containerRef}
        className="relative w-[290px] h-[140px] pointer-events-auto"
      >
        {/* 🔥 FOCUS MASK — CORRECTLY ANCHORED */}
        <div
          className="
            absolute
            top-[0px]
            left-1/2
            -translate-x-1/2
            w-[140vw]
            h-[125px]
            z-0
            bg-gradient-to-b
            from-background/100
            via-background/90
            to-background/60
            backdrop-blur-md
            pointer-events-none
          "
        />

        {/* 🧭 GLASS BOWL */}
        <div
          className="absolute inset-x-0 top-0 h-[120px] z-10"
          style={{
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            borderBottom: '2px solid hsl(var(--compass-ring) / 0.4)',
            borderBottomLeftRadius: '100% 200%',
            borderBottomRightRadius: '100% 200%',
            boxShadow:
              '0 6px 30px rgba(0,0,0,0.12), inset 0 -4px 20px rgba(255,255,255,0.05)',
          }}
        />

        {/* 🧭 COMPASS SVG */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[270px] h-[125px] z-20">
          <CompassSVG
            type="semicircle-lower"
            needleAngle={needleAngle}
            activeSection={activeSection}
            sections={SECTION_CONFIG}
            onSectionClick={(id) => onNavigate(id as Section)}
            onNeedleMouseDown={handleDragStart}
            isDragging={isDragging}
          />
        </div>
      </div>
    </div>
  )
}
