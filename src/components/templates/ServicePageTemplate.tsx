import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Service, getPublishedServices } from '@/data/services';
import { getPublishedCountries } from '@/data/countries';
import { StickyCtaBar } from '@/components/shared/StickyCtaBar';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { SmartImage } from '@/components/shared/SmartImage';
import { Plate } from '@/components/shared/Plate';
import { FlagChip } from '@/components/shared/FlagChip';
import { Spotlight } from '@/components/shared/Spotlight';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { ConsultationBanner } from '@/components/shared/ConsultationBanner';

const iconRing =
  'grid size-14 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne';

export function ServicePageTemplate({ service }: { service: Service }) {
  const locale = useLocale();
  const t = useTranslations('services');

  const services = getPublishedServices(locale);
  const position = services.findIndex((s) => s.slug === service.slug) + 1;
  const publishedCountries = new Set(getPublishedCountries(locale).map((c) => c.slug));
  const destinationCards = service.destinationCards ?? [];

  return (
    <main className="overflow-x-clip">
      <StickyCtaBar title={service.title} ctaText={t('cta.button')} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <SmartImage src={service.heroImage} alt="" fill priority sizes="100vw" className="object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gold-soft/30 mix-blend-color" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(196,154,48,0.2),transparent_70%)]" />
          <div className="animate-drift absolute -top-[20%] start-[10%] size-[560px] rounded-full bg-gold/25 blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
        </div>

        <div className="mx-auto max-w-5xl px-6 md:px-8 pt-36 md:pt-48 pb-20 md:pb-28 text-center">
          <p
            className="rise latin numeral text-sm tracking-[0.3em] text-on-surface-variant"
            style={{ '--d': '0.05s' } as React.CSSProperties}
            dir="ltr"
            aria-hidden="true"
          >
            {String(position).padStart(2, '0')} <span className="text-gold-soft">/</span> {String(services.length).padStart(2, '0')}
          </p>
          <p className="rise eyebrow eyebrow-center mt-6" style={{ '--d': '0.12s' } as React.CSSProperties}>
            {service.tagline}
          </p>
          <h1 className="rise display-1 mt-8 text-on-background" style={{ '--d': '0.22s' } as React.CSSProperties}>
            {service.heroHeadline}
            {service.heroHeadlineAccent && (
              <>
                <br />
                <span className="italic font-normal text-gradient-gold">{service.heroHeadlineAccent}</span>
              </>
            )}
          </h1>
          <p
            className="rise mx-auto mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-on-surface-variant"
            style={{ '--d': '0.36s' } as React.CSSProperties}
          >
            {service.heroSubtext}
          </p>
          <div
            className="rise mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ '--d': '0.5s' } as React.CSSProperties}
          >
            <Link href={`/${locale}/contact`} className="btn-gold w-full sm:w-auto">
              {t('overview.cta')}
              <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
            </Link>
            <Link href="#eligibility" className="btn-ghost w-full sm:w-auto">
              {t('eligibility.heading')}
            </Link>
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* ── Overview ───────────────────────────────────── */}
      <FadeInSection>
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow">{t('overview.eyebrow')}</p>
              <h2 className="display-2 mt-6 text-on-background">{service.overviewHeading}</h2>
              <p className="mt-8 font-headline text-2xl md:text-[1.7rem] leading-snug text-on-background/90">{service.overviewBody}</p>
              {service.overviewBodySecondary && (
                <p className="mt-6 text-base leading-relaxed text-on-surface-variant">{service.overviewBodySecondary}</p>
              )}

              <dl className="mt-12 grid grid-cols-2 gap-x-8">
                {service.overviewStats.map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-7">
                    <dd className="numeral text-6xl md:text-7xl leading-none font-medium text-gradient-gold w-fit">{stat.value}</dd>
                    <dt className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative lg:col-span-5 lg:col-start-8">
              <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-gold/20 blur-[100px]" />
              <div className="glass-luxe rounded-[28px] p-3">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                  <SmartImage
                    src={service.overviewImage}
                    alt={service.overviewHeading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover grayscale transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                    fallback={<Plate mark={service.overviewStats[0]?.value} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Destinations ───────────────────────────────── */}
      {destinationCards.length > 0 && (
        <FadeInSection>
          <section className="relative py-20 md:py-28">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-container-lowest/70" />
            <div className="mx-auto max-w-7xl px-6 md:px-8">
              <div className="flex flex-wrap items-end justify-between gap-8">
                <SectionHeading eyebrow={t('destinations.eyebrow')} heading={t('destinations.heading')} subtext={t('destinations.subtext')} />
                <Link
                  href={`/${locale}#destinations`}
                  className="group inline-flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-gold-soft transition-colors duration-300 hover:text-champagne"
                >
                  {t('destinations.exploreAll')}
                  <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-14" aria-hidden="true" />
                </Link>
              </div>

              <Spotlight className="mt-14 grid gap-5 md:grid-cols-3">
                {destinationCards.map((card) => {
                  const href = publishedCountries.has(card.slug) ? `/${locale}/countries/${card.slug}` : `/${locale}/contact`;
                  return (
                    <Link key={card.slug} href={href} className="glass-luxe group flex flex-col overflow-hidden rounded-3xl">
                      <div className="relative h-60 overflow-hidden">
                        <SmartImage
                          src={card.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover grayscale transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                          fallback={<Plate />}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden="true" />
                        <FlagChip slug={card.slug} className="absolute top-4 start-4" />
                      </div>
                      <div className="flex flex-1 flex-col p-7 md:p-8">
                        <h3 className="font-headline text-3xl leading-tight font-medium capitalize text-on-background">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{card.description}</p>
                        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-soft/30 bg-gold/15 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-champagne">
                          <span className="size-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
                          {card.status}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </Spotlight>
            </div>
          </section>
        </FadeInSection>
      )}

      {/* ── Eligibility ────────────────────────────────── */}
      <FadeInSection>
        <section id="eligibility" className="relative py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading align="center" eyebrow={t('eligibility.eyebrow')} heading={t('eligibility.heading')} subtext={t('eligibility.subtext')} />

            <Spotlight className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {service.eligibilityCriteria.map((criterion) => (
                <article
                  key={criterion.title}
                  className={`glass-luxe is-liftable flex flex-col rounded-3xl p-8 md:p-9 ${criterion.featured ? 'lg:row-span-2' : 'min-h-[300px]'}`}
                >
                  {(criterion.featured || criterion.accent) && (
                    <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-[inherit] bg-[radial-gradient(90%_70%_at_0%_0%,rgba(127,94,21,0.35),transparent_70%)]" />
                  )}
                  <span className={iconRing}>
                    <span className="material-symbols-outlined icon-fine !text-[26px]" aria-hidden="true">{criterion.icon}</span>
                  </span>
                  <h3 className="mt-8 font-headline text-[1.75rem] leading-tight font-medium text-on-background">{criterion.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{criterion.description}</p>

                  {criterion.checkPoints && (
                    <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-7">
                      {criterion.checkPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-on-background/90">
                          <span className="material-symbols-outlined !text-[18px] text-gold-soft mt-px" aria-hidden="true">check_circle</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-8">
                    {criterion.pointsImportance && (
                      <div>
                        <div className="flex items-end justify-between gap-4">
                          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">{t('eligibility.weight')}</span>
                          <span className="latin numeral text-3xl leading-none text-champagne">{criterion.pointsImportance}</span>
                        </div>
                        <div className="mt-3 h-px w-full bg-white/12">
                          <div className="h-px bg-gradient-to-r rtl:bg-gradient-to-l from-gold to-champagne shadow-[0_0_12px_rgba(196,154,48,0.8)]" style={{ width: criterion.pointsImportance }} />
                        </div>
                      </div>
                    )}
                    {criterion.badge && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft/30 bg-gold/15 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-champagne">
                        <span className="size-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
                        {criterion.badge}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </Spotlight>
          </div>
        </section>
      </FadeInSection>

      {/* ── Process ────────────────────────────────────── */}
      <FadeInSection>
        <div className="relative">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-container-lowest/70" />
          <ProcessTimeline
            eyebrow={t('process.eyebrow')}
            heading={t('process.heading')}
            accent={t('process.headingAccent')}
            steps={service.processSteps}
          />
        </div>
      </FadeInSection>

      {/* ── Consultation ───────────────────────────────── */}
      <FadeInSection>
        <ConsultationBanner eyebrow={t('cta.eyebrow')} heading={service.ctaHeading} subtext={t('cta.subtext')} button={t('cta.button')} />
      </FadeInSection>

    </main>
  );
}
