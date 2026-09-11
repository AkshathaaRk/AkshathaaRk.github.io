'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Bud from './Bud';
import ScrambleText from './ScrambleText';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-end pb-32 md:pb-44 px-6 md:px-16 pt-32"
    >
      <div className="container-wide w-full relative">
        <div className="absolute -top-10 right-0 md:right-8 hidden sm:block">
          <Bud size={70} />
        </div>

        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="eyebrow mb-10 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-ink-muted" />
            Portfolio · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="serif text-[clamp(4rem,13vw,11rem)] leading-[0.92] font-medium text-ink tracking-tight mb-10 whitespace-nowrap"
          >
            <ScrambleText
              text="Akshatha RK"
              startDelay={700}
              scrambleDuration={32}
              loop
              loopInterval={6000}
              mode="reveal"
            />
            <span className="text-ink-faint">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-8 max-w-5xl"
          >
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl font-light">
              <ScrambleText
                text="Software Testing Engineer based in Bangalore. I focus on manual and automation testing, API testing, and quality engineering — quietly, carefully, with intent."
                startDelay={700}
                scrambleDuration={42}
                loop
                loopInterval={6000}
                mode="glitch"
              />
            </p>

            <div className="mono text-xs uppercase tracking-widest text-ink-muted shrink-0">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" />
                Open to roles
              </div>
              <div className="mt-1 text-ink-faint normal-case tracking-normal font-sans">
                bangalore, india
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute -bottom-16 md:-bottom-20 left-0 flex items-center gap-3"
        >
          <span className="mono text-[10px] uppercase tracking-widest text-ink-faint">
            scroll
          </span>
          <span className="w-16 h-px bg-ink-faint" />
        </motion.div>
      </div>
    </section>
  );
}
