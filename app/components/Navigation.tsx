'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-paper/85 backdrop-blur-md border-b border-ink-line/40' : 'py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="serif text-lg font-medium tracking-tight text-ink">
            Akshatha RK
          </span>
          <span className="mono text-[10px] uppercase tracking-widest text-ink-faint hidden sm:inline">
            /portfolio
          </span>
        </a>

        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-[11px] uppercase tracking-widest text-ink-muted hover:text-ink transition-colors px-2.5 md:px-3.5 py-2"
            >
              <span className="text-ink-faint mr-1.5">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
