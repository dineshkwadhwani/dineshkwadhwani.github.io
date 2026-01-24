import React from 'react';

interface CompassSVGProps {
  type: 'quarter' | 'semicircle' | 'semicircle-lower';
  needleAngle: number;
  activeSection: string;
  sections: { id: string; label: string; angle: number }[];
  onSectionClick: (sectionId: string) => void;
  onNeedleMouseDown?: (e: React.MouseEvent | React.TouchEvent) => void;
  isDragging?: boolean;
}

export function CompassSVG({
  type,
  needleAngle,
  activeSection,
  sections,
  onSectionClick,
  onNeedleMouseDown,
  isDragging,
}: CompassSVGProps) {
  const isQuarter = type === 'quarter';
  const isLowerSemicircle = type === 'semicircle-lower';

  // Pivot points
  const pivot = isQuarter
    ? { x: 12, y: 12 }
    : isLowerSemicircle
    ? { x: 100, y: 10 }
    : { x: 100, y: 90 };

  const arcRadius = isQuarter ? 62 : 65;
  const innerArcRadius = isQuarter ? 50 : 53;
  const outerGuideRadius = isQuarter ? 74 : 77;
  const dotRadius = isQuarter ? 56 : 58;
  const labelOffset = isQuarter ? 24 : 18;
  const needleLength = isQuarter ? 48 : 42;

  const getPositions = (angle: number) => {
    const rad = isQuarter
      ? (angle * Math.PI) / 180
      : isLowerSemicircle
      ? ((angle + 90) * Math.PI) / 180
      : ((angle - 90) * Math.PI) / 180;

    const cx = pivot.x + Math.cos(rad) * dotRadius;
    const cy = pivot.y + Math.sin(rad) * dotRadius;
    const lx = pivot.x + Math.cos(rad) * (dotRadius + labelOffset);
    const ly = pivot.y + Math.sin(rad) * (dotRadius + labelOffset);

    return { cx, cy, lx, ly };
  };

  const getArcPath = (radius: number) => {
    if (isQuarter) {
      return `M ${pivot.x + radius},${pivot.y} A ${radius} ${radius} 0 0 1 ${pivot.x},${pivot.y + radius}`;
    }
    if (isLowerSemicircle) {
      return `M ${pivot.x - radius},${pivot.y} A ${radius} ${radius} 0 0 0 ${pivot.x + radius},${pivot.y}`;
    }
    return `M ${pivot.x - radius},${pivot.y} A ${radius} ${radius} 0 0 1 ${pivot.x + radius},${pivot.y}`;
  };

  const viewBox = isQuarter ? '0 0 125 125' : '0 0 200 100';

  const needleTransform = isQuarter
    ? `translate(${pivot.x}, ${pivot.y}) rotate(${needleAngle})`
    : isLowerSemicircle
    ? `translate(${pivot.x}, ${pivot.y}) rotate(${needleAngle + 90})`
    : `translate(${pivot.x}, ${pivot.y}) rotate(${needleAngle - 90})`;

  return (
    <svg viewBox={viewBox} className="w-full h-full">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="needleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--compass-needle))" />
          <stop offset="100%" stopColor="hsl(var(--compass-needle) / 0.7)" />
        </linearGradient>
      </defs>

      {/* Arcs */}
      <path
        d={getArcPath(outerGuideRadius)}
        fill="none"
        stroke="hsl(var(--compass-ring) / 0.15)"
        strokeWidth="0.8"
        strokeDasharray="4,6"
      />
      <path
        d={getArcPath(arcRadius)}
        fill="none"
        stroke="hsl(var(--compass-ring))"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <path
        d={getArcPath(innerArcRadius)}
        fill="none"
        stroke="hsl(var(--compass-ring) / 0.4)"
        strokeWidth="1.2"
      />

      {/* Labels */}
      {sections.map((section) => {
        const { cx, cy, lx, ly } = getPositions(section.angle);
        const isActive = activeSection === section.id;

        // Desktop-only label nudges
        const labelOffsetDesktop = isQuarter
          ? {
              dx:
                section.id === 'contact'
                  ? -12
                  : section.id === 'skills'
                  ? -6
                  : section.id === 'about'
                  ? 15
                  : section.id === 'projects'
                  ? 15
                  : 0,
              dy:
                section.id === 'projects'
                  ? 5
                  : section.id === 'about'
                  ? 2
                  : section.id === 'skills'
                  ? 5
                  : section.id === 'contact'
                  ? 10
                  : 0,
            }
          : { dx: section.id==='projects'?-34:section.id==='contact'?-5:0, dy: section.id==='skills'?1:0 };

        return (
          <g key={section.id} onClick={() => onSectionClick(section.id)}>
            <line
              x1={cx}
              y1={cy}
              x2={
    !isQuarter && section.id === 'contact'
      ? lx - (6 * Math.cos(((section.angle + 90) * Math.PI) / 180))
      : lx
  }
  y2={
    !isQuarter && section.id === 'contact'
      ? ly - (5 * Math.sin(((section.angle + 90) * Math.PI) / 180))
      : 
      !isQuarter && section.id === 'projects'
      ? ly - (6 * Math.sin(((section.angle + 90) * Math.PI) / 180))
      : ly
  }
              stroke={isActive ? 'hsl(var(--compass-needle))' : 'hsl(var(--compass-ring) / 0.3)'}
              strokeWidth={isActive ? 1.2 : 0.6}
              opacity={isActive ? 1 : 0.6}
            />

            <circle
              cx={cx}
              cy={cy}
              r={isActive ? 4 : 2.5}
              fill={isActive ? 'hsl(var(--compass-needle))' : 'hsl(var(--compass) / 0.5)'}
            />

            <text
              x={lx}
              y={ly}
              dx={labelOffsetDesktop.dx}
              dy={labelOffsetDesktop.dy}
              fill={isActive ? 'hsl(var(--compass-needle))' : 'hsl(var(--compass))'}
              fontSize={isQuarter ? 10 : 9}
              fontWeight={isActive ? 600 : 400}
              dominantBaseline="middle"
              textAnchor={
                isQuarter
                  ? section.angle < 15
                    ? 'start'
                    : section.angle > 60
                    ? 'start'
                    : 'middle'
                  : section.angle < -20
                  ? 'start'
                  : section.angle > 20
                  ? 'end'
                  : 'start'
              }
              style={{ letterSpacing: '0.01em' }}
            >
              {section.label}
            </text>
          </g>
        );
      })}

      {/* Needle */}
      <g
        transform={needleTransform}
        style={{
          transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseDown={onNeedleMouseDown}
        onTouchStart={onNeedleMouseDown}
      >
       <polygon
  points={`0,0 ${needleLength},-2.5 ${needleLength + 4},0 ${needleLength},2.5`}
  fill="linearGradient(rgb(226, 119, 26), rgb(235, 123, 25))"
  stroke="rgba(0,0,0,0.35)"
  strokeWidth="0.8"
  filter="url(#glow)"
/>
        <circle cx="0" cy="0" r="4.5" fill="hsl(var(--compass-needle))" />
      </g>
    </svg>
  );
}
