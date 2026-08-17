'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getTestimonials } from '@/data/testimonials';

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');
  const locale = useLocale();
  const testimonials = getTestimonials(locale);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Show up to 2 testimonials side-by-side on desktop, 1 on mobile
  const visible = [
    testimonials[active],
    testimonials[(active + 1) % total],
  ];

  return (
    <section
      id="testimonials"
      className="py-32 bg-surface-container-lowest relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl font-headline">{t('heading')}</h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="size-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="size-10 rounded-full border border-outline-variant flex items-center justify-center bg-primary/10 hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 min-h-[340px]">
          <AnimatePresence mode="popLayout">
            {visible.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.id}-${i}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-10 rounded-[32px] space-y-8 group border-primary/10"
              >
                <div className="flex items-center gap-4">
                  <div className="relative size-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 flex items-center justify-center bg-primary/10">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={`Headshot of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <span className="font-headline font-bold text-lg text-primary" aria-hidden="true">
                        {getInitials(testimonial.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-on-surface-variant/80 italic">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '14px' }} aria-hidden="true">
                        star
                      </span>
                      <span className="text-xs text-on-surface-variant/60">{t('googleReview')}</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-2xl font-headline leading-snug">
                  {testimonial.quote}
                </blockquote>
                <div className="flex flex-wrap gap-4 items-center">
                  {testimonial.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-on-surface-variant/80">{testimonial.duration}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary ${
                i === active ? 'w-6 h-2 bg-primary' : 'size-2 bg-outline-variant hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

