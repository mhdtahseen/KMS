'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

export function FadeInSection({ children, delay = 0, className, as = 'div' }: FadeInSectionProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const [forceVisible, setForceVisible] = useState(false);
  const MotionTag = motion[as];

  // Safety net: some mobile browsers never fire the IntersectionObserver
  // trigger reliably. Rather than let content stay invisible forever if that
  // happens, force it visible after a short delay regardless.
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y: 32 }}
      animate={inView || forceVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
