import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { getPublishedServices } from '@/data/services';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Spotlight } from '@/components/shared/Spotlight';

const ICONS: Record<string, string> = {
  'skilled-immigration': 'workspace_premium',
  'study-permits': 'school',
  'business-residency': 'account_balance',
  'work-permits': 'business_center',
  'permanent-residency': 'verified_user',
  'family-sponsorship': 'diversity_1',
  'travel-visas': 'flight_takeoff',
};

// Asymmetric bento: one signature card, two supporting, then a row of compact cards.
const spanFor = (index: number, total: number) => {
  if (index === 0) return 'lg:col-span-7 lg:row-span-2';
  if (index < 3) return 'lg:col-span-5';
  return total > 6 ? 'lg:col-span-3' : 'lg:col-span-4';
};

export function ServicesSection() {
  const t = useTranslations('home.services');
  const locale = useLocale();
  const services = getPublishedServices(locale);

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} accent={t('headingAccent')} subtext={t('subtext')} />

        <Spotlight className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {services.map((service, index) => {
            const featured = index === 0;
            const number = String(index + 1).padStart(2, '0');
            const icon = ICONS[service.slug] ?? 'public';

            return (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className={`glass-luxe group flex flex-col overflow-hidden rounded-3xl ${spanFor(index, services.length)} ${
                  featured ? 'md:col-span-2 min-h-[440px] lg:min-h-[560px] p-8 md:p-11' : 'min-h-[260px] p-7 md:p-8'
                }`}
              >
                {featured && (
                  <>
                    <Image
                      src={service.heroImage}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="-z-10 object-cover opacity-55 grayscale transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 -z-10 bg-gold-soft/55 mix-blend-color" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/75 to-background/10" />
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_0%_100%,rgba(127,94,21,0.35),transparent_70%)]" />
                  </>
                )}

                <div className="flex items-start justify-between gap-6">
                  <span className="grid size-14 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne transition-colors duration-500 group-hover:border-gold-soft/80 group-hover:bg-gold/30">
                    <span className="material-symbols-outlined icon-fine !text-[26px]" aria-hidden="true">{icon}</span>
                  </span>
                  <span className="numeral text-lg text-on-surface-variant/60" aria-hidden="true">{number}</span>
                </div>

                <div className="mt-auto pt-10">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft">
                    {featured ? t('featured') : service.tagline}
                  </p>
                  <h3
                    className={`font-headline font-medium text-on-background mt-3 leading-[1.05] ${
                      featured ? 'text-4xl md:text-6xl' : 'text-[1.9rem] md:text-[2.1rem]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 text-on-surface-variant leading-relaxed ${
                      featured ? 'max-w-lg text-base md:text-lg line-clamp-3' : 'text-sm line-clamp-2'
                    }`}
                  >
                    {service.heroSubtext}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-on-background/80 transition-colors duration-500 group-hover:text-champagne">
                    {t('explore')}
                    <span className="relative h-px w-8 bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-14" aria-hidden="true" />
                    <span className="material-symbols-outlined !text-[16px] -ms-3 rtl:rotate-180" aria-hidden="true">chevron_right</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </Spotlight>
      </div>
    </section>
  );
}
