import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Country } from '@/data/countries';
import { StickyCtaBar } from '@/components/shared/StickyCtaBar';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { SmartImage } from '@/components/shared/SmartImage';
import { Plate } from '@/components/shared/Plate';
import { FlagChip, countryCode } from '@/components/shared/FlagChip';
import { Spotlight } from '@/components/shared/Spotlight';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ConsultationBanner } from '@/components/shared/ConsultationBanner';
import { WorldRoutes } from '@/components/home/WorldRoutes';

const iconRing =
  'grid size-12 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne';

const WHY_FEATURES = [
  { key: 'stability', icon: 'verified_user' },
  { key: 'education', icon: 'school' },
  { key: 'prosperity', icon: 'trending_up' },
] as const;

export function CountryPageTemplate({ country }: { country: Country }) {
  const locale = useLocale();
  const t = useTranslations('countries');
  const tHero = useTranslations('home.hero');

  const code = countryCode(country.slug);
  const tags = (country.homeHighlight ?? '')
    .split('•')
    .map((s) => s.trim())
    .filter(Boolean);
  const pathwayCount = country.pathways.length;
  const pathwayCols = pathwayCount === 1 ? '' : pathwayCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <main className="overflow-x-clip">
      <StickyCtaBar title={country.name} ctaText={t('cta.button')} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <SmartImage
            src={country.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale opacity-45"
            fallback={
              // No photograph on file: show the route from Doha instead
              <div className="map-quiet absolute -end-[6%] top-[4%] w-[120%] opacity-70 sm:w-[78%] [mask-image:radial-gradient(closest-side,#000_55%,transparent)]">
                <WorldRoutes originLabel={tHero('origin')} destinations={[{ slug: country.slug, label: country.name }]} className="w-full h-auto" />
              </div>
            }
          />
          <div className="absolute inset-0 bg-gold-soft/35 mix-blend-color" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(196,154,48,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/30" />
          <div className="absolute inset-y-0 start-0 w-2/3 bg-gradient-to-r rtl:bg-gradient-to-l from-background/80 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-8 pt-40 pb-10 md:pb-14">
          <div className="rise flex flex-wrap items-center gap-4" style={{ '--d': '0.1s' } as React.CSSProperties}>
            <FlagChip slug={country.slug} />
            <p className="eyebrow">{t('hero.badge')}</p>
          </div>

          <h1
            className="rise mt-6 font-headline font-medium leading-[0.92] tracking-[-0.025em] text-on-background text-[clamp(3.5rem,11vw,10.5rem)] rtl:text-[clamp(2.75rem,8vw,6.5rem)] rtl:leading-[1.25] rtl:font-bold"
            style={{ '--d': '0.22s' } as React.CSSProperties}
          >
            {country.name}
          </h1>
          <p
            className="rise mt-5 font-headline italic text-2xl md:text-4xl text-gradient-gold w-fit"
            style={{ '--d': '0.36s' } as React.CSSProperties}
          >
            {country.tagline}
          </p>

          <div className="rise mt-10 flex flex-col sm:flex-row gap-4" style={{ '--d': '0.5s' } as React.CSSProperties}>
            <Link href={`/${locale}/contact`} className="btn-gold">
              {t('hero.ctaPrimary')}
              <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
            </Link>
            <Link href="#pathways" className="btn-ghost">
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Facts bar */}
          <div
            className="rise glass-luxe mt-14 grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-[1fr_1fr_1.3fr]"
            style={{ '--d': '0.66s' } as React.CSSProperties}
          >
            {country.overviewStats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="p-6 md:p-8 border-white/10 first:border-e lg:border-e">
                <p className="latin numeral text-4xl sm:text-5xl md:text-6xl leading-none font-medium text-on-background">{stat.value}</p>
                <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
            {tags.length > 0 && (
              <div className="p-6 md:p-8 col-span-2 lg:col-span-1 border-t lg:border-t-0 border-white/10">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">{t('pathways.badge')}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-gold-soft/30 bg-gold/15 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-champagne">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Why this country ───────────────────────────── */}
      <FadeInSection>
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow={t('whyChoose.eyebrow')} heading={t('whyChoose.prefix')} accent={country.name} />
              <p className="mt-8 font-headline text-2xl md:text-[1.7rem] leading-snug text-on-background/90">{country.overviewBody}</p>

              <ul className="mt-10">
                {WHY_FEATURES.map(({ key, icon }) => (
                  <li key={key} className="flex items-start gap-5 border-t border-white/10 py-6">
                    <span className={iconRing}>
                      <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">{icon}</span>
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl leading-tight font-medium text-on-background">{t(`whyChoose.${key}.title`)}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant">{t(`whyChoose.${key}.description`)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:col-span-5 lg:col-start-8">
              <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-gold/20 blur-[100px]" />
              <div className="glass-luxe rounded-[28px] p-3">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px]">
                  <SmartImage
                    src={country.whyChooseImages[0]}
                    alt={country.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover grayscale transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                    fallback={<Plate mark={code} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Pathways ───────────────────────────────────── */}
      <FadeInSection>
        <section id="pathways" className="relative py-20 md:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-container-lowest/70" />
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading align="center" eyebrow={t('pathways.badge')} heading={t('pathways.heading')} />

            <Spotlight className={`mt-16 grid gap-5 ${pathwayCols}`}>
              {country.pathways.map((pathway, idx) => {
                const isLarge = pathwayCount >= 3 && (idx === 0 || idx === 3);
                return (
                  <article
                    key={pathway.id}
                    className={`glass-luxe is-liftable group flex min-h-[320px] flex-col overflow-hidden rounded-3xl p-8 md:p-10 ${isLarge ? 'md:col-span-2' : ''}`}
                  >
                    {pathway.bgImage && (
                      <SmartImage src={pathway.bgImage} alt="" fill sizes="(max-width: 768px) 100vw, 800px" className="-z-10 object-cover grayscale opacity-20 transition-opacity duration-700 group-hover:opacity-30" />
                    )}
                    <div className="flex items-start justify-between gap-6">
                      <span className={iconRing}>
                        <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">{pathway.icon}</span>
                      </span>
                      <span className="latin numeral text-lg text-on-surface-variant/60" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mt-8 font-headline text-3xl md:text-[2.1rem] leading-tight font-medium text-on-background">{pathway.title}</h3>
                    <p className={`mt-3 text-sm md:text-base leading-relaxed text-on-surface-variant ${isLarge ? 'max-w-xl' : ''}`}>{pathway.description}</p>
                    <Link
                      href={pathway.link || `/${locale}/contact`}
                      className="mt-auto pt-8 inline-flex w-fit items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-on-background/80 transition-colors duration-500 hover:text-champagne group-hover:text-champagne"
                    >
                      {pathway.ctaLabel || t('pathways.consult')}
                      <span className="h-px w-8 bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-14" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </Spotlight>
          </div>
        </section>
      </FadeInSection>

      {/* ── Requirements & citizenship ─────────────────── */}
      <FadeInSection>
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-14 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow={t('requirements.eyebrow')} heading={t('requirements.heading')} />
              <dl className="mt-12 border-t border-white/10">
                {country.requirements.map((req) => (
                  <div key={req.title} className="border-b border-white/10 py-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <dt className="font-headline text-2xl md:text-[1.7rem] leading-tight font-medium text-on-background">{req.title}</dt>
                      <span className="rounded-full border border-gold-soft/30 bg-gold/15 px-3.5 py-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-champagne">{req.badge}</span>
                    </div>
                    <dd className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-on-surface-variant">{req.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-luxe rounded-3xl p-8 md:p-10 lg:sticky lg:top-28">
                <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-[inherit] bg-[radial-gradient(90%_60%_at_100%_0%,rgba(127,94,21,0.35),transparent_70%)]" />
                <div className="flex items-center gap-5">
                  <span className={iconRing}>
                    <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">policy</span>
                  </span>
                  <h3 className="font-headline text-[1.75rem] leading-tight font-medium text-on-background">{t('requirements.citizenshipHeading')}</h3>
                </div>

                <ol className="mt-10 space-y-9 border-s border-gold-soft/30 ps-8">
                  {country.citizenshipSteps.map((step) => (
                    <li key={step.step} className="relative">
                      <span aria-hidden="true" className="absolute -start-[38px] top-1.5 size-[11px] rounded-full border border-gold-soft bg-background" />
                      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft">
                        {t('requirements.step')} <span className="latin numeral text-base tracking-normal">{step.step}</span>
                      </p>
                      <p className="mt-2 font-headline text-2xl leading-tight font-medium text-on-background">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Consultation ───────────────────────────────── */}
      <FadeInSection>
        <ConsultationBanner
          eyebrow={t('cta.eyebrow')}
          heading={country.ctaHeading}
          subtext={t('cta.subtext')}
          button={t('cta.button')}
          trust={t('cta.trust')}
        />
      </FadeInSection>
    </main>
  );
}
