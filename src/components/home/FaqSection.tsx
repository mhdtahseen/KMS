import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import { SectionHeading } from '@/components/shared/SectionHeading';

const FAQ_KEYS = [
  'countries',
  'location',
  'services',
  'credentials',
  'trackRecord',
  'booking',
  'arabic',
  'firstStep',
] as const;

export function FaqSection() {
  const t = useTranslations('home.faq');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const questions = FAQ_KEYS.map((key) => ({
    q: t(`items.${key}.q`),
    a: t(`items.${key}.a`),
  }));

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <FaqJsonLd questions={questions} />

      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} accent={t('headingAccent')} subtext={t('subtext')} />
            <Link href={`/${locale}/contact`} className="btn-ghost mt-10">
              {tNav('cta')}
              <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 border-t border-white/10">
          {questions.map(({ q, a }, index) => (
            <details key={FAQ_KEYS[index]} className="group border-b border-white/10 transition-colors duration-500 open:border-gold-soft/40">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-7 md:py-8 [&::-webkit-details-marker]:hidden">
                <span className="numeral pt-1 text-base text-gold-soft/80 w-7 shrink-0" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-headline text-[1.45rem] md:text-[1.7rem] leading-snug font-medium text-on-background transition-colors duration-300 group-hover:text-champagne">
                  {q}
                </span>
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-white/12 text-gold-soft transition-all duration-500 group-open:rotate-45 group-open:border-gold-soft/60 group-open:bg-gold/25" aria-hidden="true">
                  <span className="material-symbols-outlined !text-[18px]">add</span>
                </span>
              </summary>
              <p className="pb-8 ps-12 pe-14 text-[0.9375rem] leading-relaxed text-on-surface-variant max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
