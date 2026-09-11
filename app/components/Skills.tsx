'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';

const groups = [
  {
    title: 'TECHNICAL SKILLS',
    items: [
      'Manual Testing: SDLC & STLC, test plans, test cases & scenarios, functional, regression, exploratory, compatibility, adhoc, performance testing, defect life cycle, agile methodology, Scrum.',
      'Defect Tracking: Bugzilla, Jira',
      'SQL: RDBMS concepts (tables, constraints, normalization), DQL, DDL, DML TCL, DCL, joins, subqueries & co-related subqueries, query writing',
      'Java: OOP fundamentals - static/non-static, overloading & overriding, inheritance, polymorphism, abstraction, encapsulation, collections & exception handling',
      'Automation & API Testing: Selenium, XPath, TestNG, POM, Postman, REST APIs, CRUD, JSON',
      'Languages & Tools: Java, HTML, CSS, Git/GitHub, Docker, Linux, JMeter/Loadrunner',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {groups.map((g, i) => (
            <SectionReveal key={g.title} delay={i * 0.08}>
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-ink-line">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-faint">
                    0{i + 1}
                  </span>
                  <h3 className="serif text-xl text-ink">{g.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-soft text-base hover:text-ink transition-colors cursor-default"
                    >
                      {item}
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
