import React from 'react';
import { CompassSVG } from './CompassSVG';
import { Section } from '@/hooks/useActiveSection';

interface DesktopCompassProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

// Desktop: Quarter circle, angles from 0° (right/horizontal) to 90° (down/vertical)
// 5 sections distributed across the quarter arc
const SECTION_CONFIG: { id: Section; label: string; angle: number }[] = [
  { id: 'home', label: 'Home', angle: 0 },
  { id: 'about', label: 'About', angle: 22.5 },
  { id: 'projects', label: 'Work Exp.', angle: 45 },
  { id: 'skills', label: 'Skills', angle: 67.5 },
  { id: 'contact', label: 'Contact', angle: 90 },
];

const SECTION_ANGLES: Record<Section, number> = {
  home: 0,
  about: 22.5,
  projects: 45,
  skills: 67.5,
  contact: 90,
};

export function DesktopCompass({ activeSection, onNavigate }: DesktopCompassProps) {
  const needleAngle = SECTION_ANGLES[activeSection];

  return (
    <div className="fixed top-0 left-0 z-50 hidden md:block">
      {/* Frosted glass quarter-circle panel - reduced by 40px */}
      <div 
        className="relative w-[260px] h-[260px] backdrop-blur-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, hsl(var(--card) / 0.92), hsl(var(--card) / 0.78))',
          borderRight: '1px solid hsl(var(--compass-ring) / 0.25)',
          borderBottom: '1px solid hsl(var(--compass-ring) / 0.25)',
          borderBottomRightRadius: '100%',
          boxShadow: '4px 4px 30px rgba(0,0,0,0.12), inset 0 0 40px rgba(255,255,255,0.03)',
        }}
      >
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 0% 0%, hsl(var(--compass-needle) / 0.06), transparent 50%)',
            borderBottomRightRadius: '100%',
          }}
        />
        
        {/* Compass SVG container - reduced */}
        <div className="absolute top-3 left-3 w-[220px] h-[220px]">
          <CompassSVG
            type="quarter"
            needleAngle={needleAngle}
            activeSection={activeSection}
            sections={SECTION_CONFIG}
            onSectionClick={(id) => onNavigate(id as Section)}
          />
        </div>
      </div>
    </div>
  );
}
