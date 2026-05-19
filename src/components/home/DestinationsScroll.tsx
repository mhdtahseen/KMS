'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getPublishedCountries } from '@/data/countries';
import { CountryCard } from '@/components/shared/CountryCard';

export function DestinationsScroll() {
  const t = useTranslations('home.destinations');
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('a')?.offsetWidth ?? 400;
    el.scrollBy({ left: dir === 'next' ? cardWidth + 32 : -(cardWidth + 32), behavior: 'smooth' });
  };

  return (
    <section className="py-32">
      <div className="container mx-auto px-8 flex justify-between items-end mb-12">
        <h2 className="text-4xl font-headline font-semibold">{t('heading')}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('prev')}
            aria-label="Previous destinations"
            className="size-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('next')}
            aria-label="Next destinations"
            className="size-10 rounded-full border border-outline-variant flex items-center justify-center bg-primary/10 hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-8 md:px-[calc((100vw-1280px)/2)] hide-scrollbar snap-x snap-mandatory"
      >
        {getPublishedCountries(locale).map((country) => (
          <CountryCard key={country.slug} country={country} />
        ))}
      </div>
    </section>
  );
}

