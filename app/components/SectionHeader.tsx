'use client';

import SectionReveal from './SectionReveal';

interface Props {
  number: string;
  label: string;
  title: string;
  italic?: string;
}

export default function SectionHeader({ number, label, title, italic }: Props) {
  return (
    <SectionReveal>
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 eyebrow mb-6">
          <span>{number}</span>
          <span className="w-10 h-px bg-ink-muted" />
          <span>{label}</span>
        </div>
        <h2 className="serif text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.05] font-medium max-w-4xl tracking-tight">
          {title}
          {italic && <em className="font-light italic"> {italic}</em>}
          <span className="text-ink-faint">.</span>
        </h2>
      </div>
    </SectionReveal>
  );
}
