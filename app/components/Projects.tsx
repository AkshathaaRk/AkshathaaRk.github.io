'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';
import Bud from './Bud';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    n: '01',
    name: 'MedSearchXR',
    tagline: 'AI-powered medical X-ray search engine',
    description:
      'End-to-end medical imaging retrieval — image-based and text-based search across an 848-image, 5-category X-ray dataset. ResNet50 embeddings, TF-IDF text pipeline with linguistic variation handled via preprocessing and normalization.',
    stack: ['Python', 'PyTorch', 'ResNet50', 'Scikit-learn', 'TF-IDF', 'Streamlit'],
    metrics: [
      { v: '0.91–1.00', l: 'cosine similarity (in-category) — validated via systematic similarity testing across categories' },
      { v: '<3s', l: 'avg query time' },
      { v: '5×', l: 'category boost on TF-IDF' },
    ],
  },
  {
    n: '02',
    name: 'SAHAAYAK',
    tagline: 'Multilingual AI tutor',
    description:
      'React + TypeScript frontend with real-time chat and voice via Web Speech API + Gemini streaming. MCP-based conversational memory backed by Redis. Language fallback handles mixed Indian-lang inputs; language fallback was tested against mixed-input edge cases to ensure graceful degradation.',
    stack: ['Flask', 'React', 'TypeScript', 'Gemini API', 'Redis', 'MCP'],
    metrics: [
      { v: 'Multi', l: 'Indian languages' },
      { v: 'MCP', l: 'memory protocol' },
      { v: 'Voice', l: 'first-class input' },
    ],
  },
  {
    n: '03',
    name: 'GalaxyEye',
    tagline: 'Multi-agent AI automation system',
    description:
      'An n8n workflow that classifies user intent and routes to 5 specialised agents (Chat, Coding, Task, File, LLM Reasoning). Gemini API for reasoning. Containerised with Docker and exposed via Cloudflare — workflow routing was validated against misclassification scenarios to ensure safe fallbacks.',
    stack: ['Python', 'n8n', 'Docker', 'Gemini API', 'LangChain', 'Cloudflare'],
    metrics: [
      { v: '5', l: 'specialised agents' },
      { v: '$0', l: 'cloud cost' },
      { v: 'Cross', l: 'device access' },
    ],
  },
  {
    n: '04',
    name: 'Functional Test Design — Registration Module',
    tagline: 'Comprehensive test-scenario suite for user registration',
    description:
      'Designed a thorough functional test suite for a registration flow covering positive, negative, and edge-case scenarios. Produced reusable test cases, acceptance criteria, and example automation hooks to accelerate QA integration.',
    stack: ['Test Plans', 'Postman', 'Selenium', 'TestNG', 'JIRA'],
    metrics: [
      { v: '120+', l: 'test scenarios written' },
      { v: '16', l: 'fields covered' },
      { v: 'Security · Accessibility · Unicode · Edge-case', l: 'categories' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container-wide">
        <SectionHeader
          number="03"
          label="Selected Work"
          title="Things I&rsquo;ve"
          italic="built"
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <SectionReveal key={p.name}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 group relative">
                {i === 1 && (
                  <div className="absolute -top-12 right-0 hidden lg:block">
                    <Bud size={55} />
                  </div>
                )}

                <div className="md:col-span-4">
                  <div className="mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                    Project · {p.n}
                  </div>
                  <h3 className="serif text-4xl md:text-5xl text-ink leading-tight font-medium mb-3 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="serif italic text-lg text-ink-muted leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                <div className="md:col-span-8 md:pl-10 md:border-l border-ink-line">
                  <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-8">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-ink-line">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="serif text-xl md:text-2xl text-ink font-medium leading-tight">
                          {m.v}
                        </div>
                        <div className="mono text-[10px] uppercase tracking-widest text-ink-faint mt-1.5 leading-snug">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="mono text-[11px] uppercase tracking-widest text-ink-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="mono text-xs uppercase tracking-widest text-ink hover:text-ink-soft flex items-center gap-1.5 underline-link"
                    >
                      View case <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
