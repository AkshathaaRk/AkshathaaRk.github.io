'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '99.47%', label: 'Classification accuracy — validated across held-out folds to prevent overfitting' },
  { value: '44k+', label: 'X-ray images trained on' },
  { value: '5 mo', label: 'Internship duration' },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <SectionHeader
          number="02"
          label="Experience"
          title="Currently"
          italic="growing here"
        />

        <SectionReveal>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <div className="mono text-xs uppercase tracking-widest text-ink-faint mb-3">
                Jan 2026 — May 2026
              </div>
              <h3 className="serif text-3xl md:text-4xl text-ink leading-tight mb-2">
                Software Testing Engineer Intern
              </h3>
              <p className="text-ink-muted text-lg">AI4SEES Pvt. Ltd.</p>
              <p className="text-ink-faint">Bangalore, India</p>
            </div>

            <div className="md:col-span-7 space-y-5">
              <p className="text-lg text-ink-soft leading-relaxed font-light">
                Building image classification and object detection models for a
                computer vision pipeline that ships into real-world AI
                solutions. Owning the data side — EDA, cleaning, preprocessing
                — before anything gets near a model.
              </p>

              <ul className="space-y-3 text-lg text-ink-soft font-light">
                <li className="leading-relaxed flex gap-3">
                  <span className="text-ink-faint shrink-0 select-none">—</span>
                  <span>
                    Designed and ran validation strategies (held-out fold testing) to systematically catch overfitting before models shipped — QA discipline applied to ML.
                  </span>
                </li>
                <li className="leading-relaxed flex gap-3">
                  <span className="text-ink-faint shrink-0 select-none">—</span>
                  <span>
                    Built reproducible evaluation pipelines across multiple anatomical regions, treating every model version as something that needed to be re-verified, not just re-trained.
                  </span>
                </li>
                <li className="leading-relaxed flex gap-3">
                  <span className="text-ink-faint shrink-0 select-none">—</span>
                  <span>
                    Owned data quality end-to-end (EDA, cleaning, preprocessing) — the same rigor as test-data validation in a QA workflow.
                  </span>
                </li>
                <li className="leading-relaxed flex gap-3">
                  <span className="text-ink-faint shrink-0 select-none">—</span>
                  <span>
                    Documented decisions, edge cases, and trade-offs so the next person could pick up the work cold — reproducibility as a first-class concern.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-20 md:mt-28 border-t border-ink-line pt-12 grid grid-cols-3 gap-6 md:gap-12">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.08}>
              <div className="serif text-3xl md:text-5xl lg:text-6xl text-ink leading-none font-medium mb-3">
                {s.value}
              </div>
              <div className="mono text-[10px] md:text-xs uppercase tracking-widest text-ink-muted">
                {s.label}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
