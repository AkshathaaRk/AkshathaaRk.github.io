'use client';

import SectionReveal from './SectionReveal';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-wide">
        <SectionReveal>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3">
              <div className="mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
                06 · Education
              </div>
              <p className="mono text-xs uppercase tracking-widest text-ink-muted">
                2023 — 2026
              </p>
            </div>

            <div className="md:col-span-9 md:pl-10 md:border-l border-ink-line">
              <h3 className="serif text-3xl md:text-4xl text-ink leading-tight mb-2">
                Bachelor of Computer Applications
              </h3>
              <p className="text-ink-muted text-lg mb-4">
                Community Institute of Commerce and Management Studies, Bangalore
              </p>
              <p className="text-ink-soft mb-6">
                Majors: Computer Science · Artificial Intelligence & Machine Learning
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-ink-line">
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-ink-faint mb-1">
                    CGPA
                  </div>
                  <div className="serif text-xl text-ink">8.75 (up to 5th sem)</div>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-ink-faint mb-1">
                    Status
                  </div>
                  <div className="serif text-xl text-ink">
                    Degree completed · awaiting results
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
