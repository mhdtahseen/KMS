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
          className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-between gap-4 px-6 py-3 bg-background/85 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.5)]"
        >
          <p className="text-sm font-medium text-on-surface-variant hidden sm:block truncate">{title}</p>
          <Link
            href={`/${locale}/contact`}
            className="bg-gold-gradient text-on-primary px-7 py-2.5 rounded-xl font-bold text-sm gold-glow hover:scale-[1.03] transition-transform shrink-0 ml-auto"
          >
            {ctaText}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
