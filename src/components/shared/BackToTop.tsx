'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 size-11 rounded-full bg-surface-container-high border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 transition-colors backdrop-blur-sm shadow-lg"
        >
          <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
