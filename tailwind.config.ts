import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f3ecdc',
          light: '#faf5e8',
          warm: '#ede4cf',
          deep: '#e3d8be',
        },
        ink: {
          DEFAULT: '#141414',
          soft: '#2a2a2a',
          muted: '#5a554c',
          faint: '#8a8378',
          line: '#c9c1ad',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Ubuntu"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'soft-fade': 'softFade 1.4s ease-out forwards',
      },
      keyframes: {
        softFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
