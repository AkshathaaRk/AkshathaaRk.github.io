import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshatha RK — AI/ML Engineer',
  description:
    'Portfolio of Akshatha Rajshekar — AI/ML Engineer building agentic AI systems, RAG pipelines, and LLM-powered applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
