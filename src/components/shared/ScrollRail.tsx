'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type ScrollRailProps = {
  /** Rendered beside the arrows (usually the section heading). */
  header: React.ReactNode;
  children: React.ReactNode;
  prevLabel: string;
  nextLabel: string;
};

/**
 * Horizontal, snap-scrolling rail whose first card lines up with the page
 * container and whose last card can scroll fully into view. Works with
 * touch, trackpad, keyboard and the arrow buttons, in LTR and RTL.
 */
export function ScrollRail({ header, children, prevLabel, nextLabel }: ScrollRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const pos = Math.abs(el.scrollLeft); // negative in RTL
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(pos < 8);
    setAtEnd(pos > max - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? 380) + 24;
    const rtl = getComputedStyle(el).direction === 'rtl';
    el.scrollBy({ left: dir * step * (rtl ? -1 : 1), behavior: 'smooth' });
  };

  const arrowClass =
    'grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-on-background backdrop-blur transition-all duration-500 hover:border-gold-soft/70 hover:text-champagne disabled:opacity-30 disabled:hover:border-white/12 disabled:hover:text-on-background';

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-wrap items-end justify-between gap-8">
        {header}
        <div className="flex gap-3">
          <button type="button" onClick={() => scroll(-1)} disabled={atStart} aria-label={prevLabel} className={arrowClass}>
            <span className="material-symbols-outlined !text-[20px] rtl:rotate-180" aria-hidden="true">arrow_back</span>
          </button>
          <button type="button" onClick={() => scroll(1)} disabled={atEnd} aria-label={nextLabel} className={arrowClass}>
            <span className="material-symbols-outlined !text-[20px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        onScroll={update}
        tabIndex={0}
        className="hide-scrollbar mt-14 md:mt-16 flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-[max(2rem,calc((100vw-80rem)/2+2rem))] px-6 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))] py-6 -my-6"
      >
        {children}
      </div>
    </>
  );
}
