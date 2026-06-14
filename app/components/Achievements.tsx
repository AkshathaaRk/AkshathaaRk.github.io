'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';
import Bud from './Bud';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    type: 'Hackathon',
    title: 'Bharatiya Antariksh Hackathon 2025',
    org: 'ISRO',
    body: 'Worked on the problem statement "Generating High-Resolution Lunar Digital Elevation Models (DEMs)" — lunar imagery processing and elevation reconstruction.',
  },
  {
    type: 'Hackathon',
    title: 'NMIT HACKS 2025',
    org: 'NMIT',
    body: 'Built a Unified Chain ID framework — a single verifiable identity across applications. Explored data linking, secure auth, and workflow interoperability.',
  },
  {
    type: 'Open Source',
    title: 'Aden Hive — Contributor Invitation',
    org: 'YC-backed startup',
    body: 'Invited by Vincent Jiang to contribute to their open-source AI agent framework. Engaged with the contributor community around autonomous AI infrastructure.',
  },
  {
    type: 'Open Source',
    title: 'Potpie AI',
    org: 'Contributor',
    body: 'Submitted a voluntary PR to the Potpie AI open-source project, contributing to real-world AI infrastructure development.',
  },
];

export default function Achievements() {
  return (
    <section id="recognition" className="section">
      <div className="container-wide relative">
        <div className="absolute top-8 right-0 hidden lg:block">
          <Bud size={50} />
        </div>

        <SectionHeader
          number="05"
          label="Recognition & Open Source"
          title="Small wins,"
          italic="honest work"
        />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
          {items.map((it, i) => (
            <SectionReveal key={it.title} delay={(i % 2) * 0.1}>
              <article className="group border-t border-ink-line pt-6">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-faint">
                    {it.type}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint group-hover:text-ink transition-colors"
                  />
                </div>
                <h3 className="serif text-2xl md:text-3xl text-ink mb-1.5 leading-tight">
                  {it.title}
                </h3>
                <p className="text-ink-muted italic serif mb-4">{it.org}</p>
                <p className="text-ink-soft leading-relaxed">{it.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
