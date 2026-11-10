import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { getPublishedCountries } from '@/data/countries';
import { WorldRoutes } from './WorldRoutes';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const tTrust = useTranslations('home.trust');
  const locale = useLocale();

  const destinations = getPublishedCountries(locale).map((c) => ({ slug: c.slug, label: c.name }));

  const stats = [
    { value: '1000', suffix: '+', label: tTrust('clients'), position: 'lg:start-[1%] lg:top-[56%]', delay: '0s' },
    { value: '5', suffix: '+', label: tTrust('years'), position: 'lg:start-[39%] lg:top-[80%]', delay: '-2.4s' },
    { value: '15', suffix: '+', label: tTrust('countries'), position: 'lg:end-[0%] lg:top-[20%]', delay: '-4.6s' },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      {/* ── Atmosphere ─────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(196,154,48,0.16),transparent_70%)]" />
        <div className="animate-drift absolute -top-[18%] start-[8%] size-[620px] rounded-full bg-gold/25 blur-[140px]" />
        <div
          className="animate-drift absolute top-[30%] end-[2%] size-[520px] rounded-full bg-gold-soft/10 blur-[150px]"
          style={{ animationDelay: '-9s' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-32 md:pt-40">
        {/* ── Statement ────────────────────────────────── */}
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="rise eyebrow eyebrow-center" style={{ '--d': '0.1s' } as React.CSSProperties}>
            {t('badge')}
          </p>

          <h1 className="rise display-1 mt-8 text-on-background" style={{ '--d': '0.22s' } as React.CSSProperties}>
            {t('headline')}
            <br />
            <span className="italic font-normal text-gradient-gold">{t('headlineAccent')}</span>
          </h1>

          <p
            className="rise mx-auto mt-8 max-w-xl text-base md:text-lg leading-relaxed text-on-surface-variant"
            style={{ '--d': '0.38s' } as React.CSSProperties}
          >
            {t('subtext')}
          </p>

          <div
            className="rise mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ '--d': '0.52s' } as React.CSSProperties}
          >
            <Link href={`/${locale}/contact`} className="btn-gold w-full sm:w-auto">
              {t('ctaPrimary')}
              <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
            </Link>
            <Link href={`/${locale}#testimonials`} className="btn-ghost w-full sm:w-auto">
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        {/* ── Routes from Doha ─────────────────────────── */}
        <div className="rise relative mx-auto mt-2 md:-mt-14 max-w-[1080px]" style={{ '--d': '0.7s' } as React.CSSProperties}>
          <div className="[mask-image:linear-gradient(to_bottom,transparent_0%,#000_20%,#000_82%,transparent_100%)]">
            <WorldRoutes
              originLabel={t('origin')}
              destinations={destinations}
              className="w-full h-auto [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
            />
          </div>

          {/* Floating figures */}
          <dl className="relative z-10 -mt-4 grid grid-cols-3 gap-3 pb-16 lg:static lg:mt-0 lg:block lg:pb-0">
            {stats.map((s) => (
              <div key={s.label} className={`lg:absolute ${s.position}`}>
                <div
                  className="animate-float glass-luxe rounded-2xl px-4 py-4 md:px-6 md:py-5 text-center lg:text-start"
                  style={{ animationDelay: s.delay }}
                >
                  <dd className="numeral text-3xl md:text-[2.6rem] leading-none font-medium text-on-background">
                    {s.value}
                    <span className="text-gold-soft">{s.suffix}</span>
                  </dd>
                  <dt className="mt-2 text-[0.625rem] md:text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    {s.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
