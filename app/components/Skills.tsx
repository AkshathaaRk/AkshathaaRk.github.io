'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';

const groups = [
  {
    title: 'TECHNICAL SKILLS',
    items: [
      {
        label: 'Manual Testing',
        details:
          'SDLC & STLC, test plans, test cases & scenarios, functional, regression, exploratory, compatibility, adhoc, performance testing, defect life cycle, agile methodology, Scrum.',
      },
      { label: 'Defect Tracking', details: 'Bugzilla, Jira' },
      {
        label: 'SQL',
        details:
          'RDBMS concepts (tables, constraints, normalization), DQL, DDL, DML TCL, DCL, joins, subqueries & co-related subqueries, query writing',
      },
      {
        label: 'Java',
        details:
          'OOP fundamentals - static/non-static, overloading & overriding, inheritance, polymorphism, abstraction, encapsulation, collections & exception handling',
      },
      {
        label: 'Automation & API Testing',
        details: 'Selenium, XPath, TestNG, POM, Postman, REST APIs, CRUD, JSON',
      },
      {
        label: 'Languages & Tools',
        details: 'Java, HTML, CSS, Git/GitHub, Docker, Linux, JMeter/Loadrunner',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <SectionHeader
          number="04"
          label="Toolkit"
          title="What I"
          italic="work with"
        />

        <div className="max-w-5xl">
          {groups.map((g, i) => (
            <SectionReveal key={g.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-ink-line p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-ink-line">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-faint">
                    0{i + 1}
                  </span>
                  <h3 className="serif text-xl text-ink">{g.title}</h3>
                </div>
                <ul className="space-y-4">
                  {g.items.map((item) => (
                    <li
                      key={item.label}
                      className="text-ink-soft text-base md:text-lg leading-relaxed hover:text-ink transition-colors cursor-default"
                    >
                      <strong className="font-semibold text-ink">{item.label}:</strong>{' '}
                      {item.details}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
