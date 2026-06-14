'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface BudProps {
  size?: number;
  className?: string;
}

function Petal({ angle, spread, scale }: { angle: number; spread: MotionValue<number>; scale: MotionValue<number> }) {
  const rotate = useTransform(spread, [0, 1], [0, angle]);
  const translateY = useTransform(spread, [0, 1], [0, -4]);
  return (
    <motion.g style={{ rotate, y: translateY, transformOrigin: '50px 45px' }}>
      <motion.ellipse
        cx="50"
        cy="32"
        rx="9"
        ry="14"
        fill="#f3ecdc"
        stroke="#2a2a2a"
        strokeWidth="1.1"
        style={{ scale, transformOrigin: '50px 45px' }}
      />
    </motion.g>
  );
}

export default function Bud({ size = 80, className = '' }: BudProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'end 0.2'],
  });

  const bloom = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const petalScale = useTransform(bloom, [0, 1], [0.25, 1]);
  const petalSpread = useTransform(bloom, [0, 1], [0, 1]);
  const stemSway = useTransform(bloom, [0, 0.5, 1], [0, -2, 1]);
  const centerScale = useTransform(bloom, [0, 1], [0.4, 1]);
  const leafRotate = useTransform(bloom, [0, 1], [-15, 0]);

  const petalAngles = [-72, -36, 0, 36, 72];

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size * 1.25 }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 100 125"
        className="w-full h-full overflow-visible"
        style={{ rotate: stemSway }}
      >
        <line
          x1="50"
          y1="125"
          x2="50"
          y2="55"
          stroke="#5a554c"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <motion.path
          d="M50,95 Q35,88 30,75 Q42,80 50,95 Z"
          fill="none"
          stroke="#5a554c"
          strokeWidth="1"
          strokeLinejoin="round"
          style={{ rotate: leafRotate, transformOrigin: '50px 95px' }}
        />

        <g style={{ transformOrigin: '50px 45px' }}>
          {petalAngles.map((angle, i) => (
            <Petal key={i} angle={angle} spread={petalSpread} scale={petalScale} />
          ))}
        </g>

        <motion.circle
          cx="50"
          cy="45"
          r="4"
          fill="#141414"
          style={{ scale: centerScale, transformOrigin: '50px 45px' }}
        />
        <motion.circle
          cx="50"
          cy="45"
          r="1.6"
          fill="#f3ecdc"
          style={{ scale: centerScale, transformOrigin: '50px 45px' }}
        />
      </motion.svg>
    </div>
  );
}
