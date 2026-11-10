'use client';

import { useRef } from 'react';

type SpotlightProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

/**
 * Tracks the pointer and exposes its position as --mx / --my on every
 * `.glass-luxe` descendant, which uses it to place a soft gold light.
 * One listener for a whole grid instead of one per card.
 */
export function Spotlight({ children, ...rest }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      ref.current?.querySelectorAll<HTMLElement>('.glass-luxe').forEach((card) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${clientX - r.left}px`);
        card.style.setProperty('--my', `${clientY - r.top}px`);
      });
    });
  };

  return (
    <div ref={ref} onPointerMove={onPointerMove} {...rest}>
      {children}
    </div>
  );
}
