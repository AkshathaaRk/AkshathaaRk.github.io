import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshatha RK — Software Testing Engineer',
  description:
    'Portfolio of Akshatha Rajshekar — Software Testing Engineer focused on manual testing, automation testing, and API quality.',
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
