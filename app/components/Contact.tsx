'use client';

import SectionReveal from './SectionReveal';
import Bud from './Bud';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Email', value: 'akshatharajshekar078@gmail.com', href: 'mailto:akshatharajshekar078@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/akshatha-rk', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', value: 'github.com/akshatha-rk', href: 'https://github.com/' },
  { label: 'Phone', value: '+91 79752 30083', href: 'tel:+917975230083' },
];

export default function Contact() {
  return (
    <section id="contact" className="section pb-32">
      <div className="container-wide relative">
        <div className="absolute -top-8 left-0 hidden md:block">
          <Bud size={75} />
        </div>

        <SectionReveal>
          <div className="flex items-center gap-3 eyebrow mb-8 justify-end">
            <span>07</span>
            <span className="w-10 h-px bg-ink-muted" />
            <span>Contact</span>
          </div>

          <h2 className="serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[1] font-medium tracking-tight mb-12 md:mb-16 max-w-5xl">
            Let&apos;s build
            <br />
            <em className="font-light italic">something honest</em>
            <span className="text-ink-faint">.</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          <SectionReveal delay={0.1} className="md:col-span-5">
            <p className="text-lg text-ink-soft leading-relaxed max-w-md">
              I&apos;m open to AI/ML roles, collaborations, and thoughtful
              conversations about agentic systems and the messy reality of
              shipping ML. Reach out anywhere — I read everything.
            </p>
          </SectionReveal>

          <div className="md:col-span-7 md:pl-10 md:border-l border-ink-line">
            <ul className="divide-y divide-ink-line">
              {links.map((l, i) => (
                <SectionReveal key={l.label} delay={0.15 + i * 0.06}>
                  <li>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-5 hover:px-2 transition-all"
                    >
                      <div>
                        <div className="mono text-[10px] uppercase tracking-widest text-ink-faint mb-1.5">
                          {l.label}
                        </div>
                        <div className="serif text-xl md:text-2xl text-ink group-hover:italic transition-all">
                          {l.value}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={22}
                        className="text-ink-faint group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      />
                    </a>
                  </li>
                </SectionReveal>
              ))}
            </ul>
          </div>
        </div>

        <SectionReveal delay={0.5}>
          <div className="mt-24 pt-8 border-t border-ink-line flex flex-wrap items-center justify-between gap-3">
            <p className="mono text-[10px] uppercase tracking-widest text-ink-faint">
              © 2026 Akshatha Rajshekar · Bangalore
            </p>
            <p className="mono text-[10px] uppercase tracking-widest text-ink-faint">
              Designed & built with intent
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
