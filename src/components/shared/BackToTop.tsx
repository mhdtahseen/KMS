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
          className="nav-dropdown fixed bottom-4 end-4 z-50 grid size-12 place-items-center rounded-full text-gold-soft transition-colors duration-300 hover:border-gold-soft/70 hover:text-champagne"
        >
          <span className="material-symbols-outlined !text-[20px]" aria-hidden="true">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
