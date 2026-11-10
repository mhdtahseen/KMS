import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { getTestimonials } from '@/data/testimonials';
import { ScrollRail } from '@/components/shared/ScrollRail';
import { SectionHeading } from '@/components/shared/SectionHeading';

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** The quotation marks are drawn by the card, so drop the ones stored in the copy. */
const stripQuotes = (text: string) => text.replace(/^["“”«»\s]+|["“”«»\s]+$/g, '');

const Stars = ({ label }: { label: string }) => (
  <span className="flex gap-0.5 text-gold-soft" role="img" aria-label={label}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="material-symbols-outlined icon-filled !text-[16px]" aria-hidden="true">star</span>
    ))}
  </span>
);

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');
  const locale = useLocale();
  const testimonials = getTestimonials(locale);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-surface-container-lowest/70" />
        <div className="absolute -top-40 end-0 translate-x-1/3 rtl:-translate-x-1/3 size-[640px] rounded-full bg-gold/15 blur-[160px]" />
      </div>

      <ScrollRail
        prevLabel="Previous testimonial"
        nextLabel="Next testimonial"
        header={
          <div>
            <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} accent={t('headingAccent')} />
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 backdrop-blur">
              <Stars label={t('rating')} />
              <span className="text-xs font-semibold tracking-[0.08em] text-on-background/85">{t('rating')}</span>
            </div>
          </div>
        }
      >
        {testimonials.map((item) => (
          <figure
            key={item.id}
            className="glass-luxe is-liftable flex w-[86vw] max-w-[380px] md:max-w-none md:w-[480px] shrink-0 snap-start flex-col rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center justify-between">
              <Stars label={t('rating')} />
              <span className="numeral text-[7.5rem] leading-[0.5] text-gold-soft/45 translate-y-6" aria-hidden="true">”</span>
            </div>

            <blockquote className="mt-7 font-headline text-[1.45rem] md:text-[1.6rem] leading-[1.35] text-on-background/95">
              {stripQuotes(item.quote)}
            </blockquote>

            <p className="mt-6 flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-gold-soft">
              <span className="material-symbols-outlined !text-[16px]" aria-hidden="true">verified</span>
              {item.duration}
            </p>

            <figcaption className="mt-auto pt-8">
              <div className="hairline mb-7" />
              <div className="flex items-center gap-4">
                <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-gold-soft/40 to-gold/20 ring-1 ring-gold-soft/50 ring-offset-2 ring-offset-background">
                  {item.image ? (
                    <Image src={item.image} alt="" fill className="object-cover" sizes="56px" />
                  ) : (
                    <span className="latin numeral text-xl font-semibold text-champagne" aria-hidden="true">{getInitials(item.name)}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-on-background truncate">{item.name}</p>
                  <p className="text-sm text-on-surface-variant truncate">{item.role}</p>
                </div>
                <span className="ms-auto hidden sm:block text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant/70 whitespace-nowrap">
                  {t('googleReview')}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </ScrollRail>
    </section>
  );
}
