'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface Props {
  text: string;
  startDelay?: number;
  scrambleDuration?: number;
  className?: string;
  loop?: boolean;
  loopInterval?: number;
  /**
   * 'reveal': start blank, scramble the text in (subsequent loops glitch from text)
   * 'glitch': always show text; scramble briefly then resolve back
   */
  mode?: 'reveal' | 'glitch';
}

export default function ScrambleText({
  text,
  startDelay = 0,
  scrambleDuration = 50,
  className = '',
  loop = false,
  loopInterval = 6000,
  mode = 'reveal',
}: Props) {
  const initial = mode === 'glitch' ? text : text.replace(/[^ ]/g, ' ');
  const [output, setOutput] = useState(initial);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    let firstRun = true;

    const runScramble = () => {
      if (cancelled) return;

      const useBlank = mode === 'reveal' && firstRun;
      firstRun = false;

      const queue = text.split('').map((c) => ({
        from: useBlank && c !== ' ' ? ' ' : c,
        to: c,
        start: Math.floor(Math.random() * 30),
        end: 30 + Math.floor(Math.random() * scrambleDuration),
        char: undefined as string | undefined,
      }));

      let frame = 0;

      const update = () => {
        let result = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          const item = queue[i];
          if (frame >= item.end) {
            complete++;
            result += item.to;
          } else if (frame >= item.start) {
            if (item.to === ' ') {
              result += ' ';
              continue;
            }
            if (!item.char || Math.random() < 0.3) {
              item.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            result += item.char;
          } else {
            result += item.from;
          }
        }

        setOutput(result);

        if (complete < queue.length) {
          frame++;
          rafRef.current = requestAnimationFrame(update);
        } else if (loop) {
          timerRef.current = setTimeout(runScramble, loopInterval);
        }
      };

      rafRef.current = requestAnimationFrame(update);
    };

    timerRef.current = setTimeout(runScramble, startDelay);

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, startDelay, scrambleDuration, loop, loopInterval, mode]);

  return (
    <span className={className} aria-label={text}>
      {output}
    </span>
  );
}
