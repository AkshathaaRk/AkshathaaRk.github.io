'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';
import Bud from './Bud';

const quickFacts = [
  { k: 'Based in', v: 'Bangalore, India' },
  { k: 'Role', v: 'AI Engineer Intern, AI4SEES' },
  { k: 'Studying', v: 'BCA · CS-AIML · CGPA 8.75' },
  { k: 'Focus', v: 'Agentic AI · RAG · CV' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide">
        <SectionHeader
          number="01"
          label="About"
          title="A quiet love for"
          italic="intelligent systems"
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-7 space-y-5">
            <SectionReveal>
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-light">
                I&apos;m an AI/ML Engineer building agentic AI systems, RAG
                pipelines, and LLM-powered applications.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-light">
                I&apos;ve developed multi-agent workflows, multilingual NLP
                systems, and production-grade computer vision pipelines using
                Python, LangChain, Gemini API, n8n, and PyTorch. I care about
                the small details — the prompt that actually works, the
                pipeline that doesn&apos;t fall over at 2 a.m., the model that
                generalises.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.18}>
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-light">
                Open-source contributor with a track record of applying deep
                learning and generative AI to real-world problems — and
                honestly, just getting started.
              </p>
            </SectionReveal>
          </div>

          <div className="md:col-span-5 md:pl-8 md:border-l border-ink-line relative">
            <div className="absolute -top-6 -right-2 hidden md:block">
              <Bud size={60} />
            </div>
            <SectionReveal delay={0.15}>
              <p className="eyebrow mb-6">At a glance</p>
              <dl className="space-y-5">
                {quickFacts.map((f) => (
                  <div key={f.k} className="grid grid-cols-3 gap-4">
                    <dt className="mono text-[11px] uppercase tracking-widest text-ink-faint pt-1">
                      {f.k}
                    </dt>
                    <dd className="col-span-2 text-ink text-base md:text-lg">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
