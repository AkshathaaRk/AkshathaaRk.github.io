import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshatha RK — QA, Automation & AI/ML Engineer',
  description:
    'Portfolio of Akshatha Rajshekar — Engineer focused on QA, automation, backend systems, and reliable AI/ML pipelines.',
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
