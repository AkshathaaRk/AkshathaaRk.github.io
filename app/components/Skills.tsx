'use client';

import SectionReveal from './SectionReveal';
import SectionHeader from './SectionHeader';

const groups = [
  {
    title: 'AI / ML',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'NLP',
      'Prompt Engineering',
      'LLM',
      'RAG',
      'Agentic AI',
      'Multi-Agent Systems',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Keras',
      'LangChain',
      'LangGraph',
      'MCP',
      'FastAPI',
      'Streamlit',
      'OpenAI GPT',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    title: 'Programming',
    items: ['Python', 'Java', 'C (basics)'],
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'Docker', 'n8n', 'Linux', 'HuggingFace', 'VSCode', 'Jupyter', 'VM'],
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
