'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Decorative plane that rolls along the lower edge of the hero statement,
 * lifts off and climbs out over the headline, then (after a pause) flies back
 * in a high arc above the text. Each pass leaves a fading gold trail. Loops
 * with a pause between passes; hidden entirely under prefers-reduced-motion.
 *
 * The flight path is built in real pixels from the measured box so the plane
 * keeps its proportions and banks to the true slope at every screen width.
 */
export function TakeoffPlane({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  let out = '';
  let back = '';
  if (box) {
    const { w, h } = box;
    const r = (n: number) => Math.round(n);
    const y0 = h * 0.7; // runway height
    // Outbound: roll, lift off, climb out across the headline
    out =
      `M ${-80} ${r(y0)} ` +
      `L ${r(w * 0.14)} ${r(y0)} ` +
      `C ${r(w * 0.42)} ${r(y0)}, ${r(w * 0.66)} ${r(h * 0.46)}, ${r(w + 90)} ${r(h * 0.1)}`;
    // Return: one high arc back, clearing the top of the text
    back = `M ${r(w + 90)} ${r(h * 0.36)} Q ${r(w / 2)} ${r(h * -0.08)}, ${-90} ${r(h * 0.36)}`;
  }

  const plane = (d: string, extra: string) => (
    <div className={`takeoff-plane ${extra} absolute left-0 top-0 size-8 md:size-11`} style={{ offsetPath: `path('${d}')` }}>
      <svg viewBox="0 0 24 24" className="size-full rotate-90 fill-champagne drop-shadow-[0_0_14px_rgba(196,154,48,0.75)]">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    </div>
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`takeoff pointer-events-none absolute inset-x-0 top-0 rtl:-scale-x-100 ${className}`}
    >
      {box && (
        <>
          <svg width={box.w} height={box.h} className="absolute inset-0 overflow-visible" fill="none">
            <defs>
              {/* each trail is faint at its tail and bright behind the plane */}
              <linearGradient id="takeoff-trail-out" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={box.w} y2="0">
                <stop offset="0" stopColor="#c49a30" stopOpacity="0" />
                <stop offset="0.35" stopColor="#c49a30" stopOpacity="0.35" />
                <stop offset="1" stopColor="#ead9a8" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="takeoff-trail-back" gradientUnits="userSpaceOnUse" x1={box.w} y1="0" x2="0" y2="0">
                <stop offset="0" stopColor="#c49a30" stopOpacity="0" />
                <stop offset="0.35" stopColor="#c49a30" stopOpacity="0.35" />
                <stop offset="1" stopColor="#ead9a8" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d={out} pathLength={1} className="takeoff-trail" stroke="url(#takeoff-trail-out)" strokeWidth="1.5" strokeLinecap="round" />
            <path d={back} pathLength={1} className="takeoff-trail takeoff-return" stroke="url(#takeoff-trail-back)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {plane(out, '')}
          {plane(back, 'takeoff-return')}
        </>
      )}
    </div>
  );
}
