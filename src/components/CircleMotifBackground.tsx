/**
 * Motif de cercles (contours blancs) sur fond sombre, couvrant toute la page.
 * Animation : ouvrante, fermante, bougeante.
 */
import { useMemo } from 'react';

interface CircleDef {
  id: number;
  left: number;
  top: number;
  size: number;
  strokeWidth: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

function generateCircles(count: number): CircleDef[] {
  const circles: CircleDef[] = [];
  for (let i = 0; i < count; i++) {
    circles.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 24 + Math.random() * 180,
      strokeWidth: 0.8 + Math.random() * 2.5,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      moveX: (Math.random() - 0.5) * 60,
      moveY: (Math.random() - 0.5) * 60,
    });
  }
  return circles;
}

const CIRCLE_COUNT = 55;

function CircleShape({ def }: { def: CircleDef }) {
  const style = useMemo(
    () => ({
      left: `${def.left}%`,
      top: `${def.top}%`,
      width: def.size,
      height: def.size,
      borderWidth: def.strokeWidth,
      animation: `circle-open-close ${def.duration}s ease-in-out ${def.delay}s infinite`,
      ['--circle-move-x' as string]: `${def.moveX}px`,
      ['--circle-move-y' as string]: `${def.moveY}px`,
    }),
    [def]
  );

  return (
    <div
      className="circle-motif-item"
      style={style}
      aria-hidden
    />
  );
}

export default function CircleMotifBackground() {
  const circles = useMemo(() => generateCircles(CIRCLE_COUNT), []);

  return (
    <div
      className="circle-motif-layer"
      aria-hidden
    >
      {circles.map((def) => (
        <CircleShape key={def.id} def={def} />
      ))}
    </div>
  );
}
