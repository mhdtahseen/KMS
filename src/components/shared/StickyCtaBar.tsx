'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyCtaBarProps {
  /** Shown on the left on wider screens */
  title: string;
  /** Button label */
  ctaText: string;
  /** data attribute on the bottom CTA section to hide the bar when it's visible */
  sentinelSelector?: string;
}

export function StickyCtaBar({ title, ctaText, sentinelSelector = '[data-cta-section]' }: StickyCtaBarProps) {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide when the bottom CTA section scrolls into view
  useEffect(() => {
    const sentinel = document.querySelector(sentinelSelector);
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(false); },
      { threshold: 0.1 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [sentinelSelector]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="nav-dropdown fixed bottom-4 z-40 flex items-center justify-between gap-4 rounded-full py-2 ps-6 pe-2 start-4 end-20 md:start-1/2 md:end-auto md:w-[min(560px,calc(100vw-12rem))] md:-translate-x-1/2 rtl:md:translate-x-1/2"
        >
          <p className="hidden sm:block truncate font-headline text-xl text-on-background">{title}</p>
          <Link href={`/${locale}/contact`} className="btn-gold btn-sm ms-auto shrink-0">
            {ctaText}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
