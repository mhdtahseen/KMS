import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { FadeInSection } from '@/components/shared/FadeInSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Spotlight } from '@/components/shared/Spotlight';
import { ConsultationBanner } from '@/components/shared/ConsultationBanner';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
  title: 'About KMS Consultants | Elite Immigration & Visa Services — Doha, Qatar',
  description:
    'KMS Consultants — MARA-certified & IRCC-authorized immigration consultancy in Doha, Qatar. 1,000+ clients from 20+ nationalities, 98% success rate, 5-star rated on Google.',
  alternates: {
    canonical: `https://www.kms-consultants.com/${locale}/about`,
    languages: {
      en: 'https://www.kms-consultants.com/en/about',
      ar: 'https://www.kms-consultants.com/ar/about',
    },
  },
  openGraph: {
    title: 'About KMS Consultants | Elite Immigration & Visa Services — Doha, Qatar',
    description: 'MARA-certified & IRCC-authorized. 1,000+ successful cases, 20+ nationalities served, 98% success rate. The trusted immigration partner for Qatar and the GCC.',
    url: `https://www.kms-consultants.com/${locale}/about`,
  },
  };
}

const VALUE_ICONS: Record<string, string> = {
  certified: 'workspace_premium',
  personalized: 'person_check',
  transparent: 'visibility',
  track: 'emoji_events',
  support: 'support_agent',
};

// 3 + 2 arrangement on wide screens
const VALUE_SPANS = ['lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-3'];

const iconRing =
  'grid size-14 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const ft = await getTranslations('footer');
  const bt = await getTranslations('booking');
  const tt = await getTranslations('home.trust');

  const valueKeys = ['certified', 'personalized', 'transparent', 'track', 'support'] as const;

  const stats = [
    { value: '1000', suffix: '+', label: tt('clients') },
    { value: '20', suffix: '+', label: tt('nationalities') },
    { value: '5', suffix: '+', label: tt('years') },
    { value: '15', suffix: '+', label: tt('countries') },
    { value: '98', suffix: '%', label: tt('successRate') },
  ];

  const phone = ft('phone');
  const contact = [
    { icon: 'call', label: bt('callUs'), value: phone, href: `tel:${phone.replace(/\s/g, '')}`, ltr: true },
    { icon: 'mail', label: bt('mailUs'), value: ft('email'), href: `mailto:${ft('email')}`, ltr: true },
    { icon: 'location_on', label: bt('visitUs'), value: ft('address'), href: `/${locale}/contact`, ltr: false },
  ];

  return (
    <main className="overflow-x-clip">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(196,154,48,0.16),transparent_70%)]" />
          <div className="animate-drift absolute -top-[25%] end-[5%] size-[620px] rounded-full bg-gold/25 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-8 pt-40 md:pt-52 pb-20 md:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-5">
            <p className="rise eyebrow" style={{ '--d': '0.1s' } as React.CSSProperties}>{t('badge')}</p>
            <h1 className="rise display-1 mt-8 text-on-background" style={{ '--d': '0.22s' } as React.CSSProperties}>
              {t('heading')}
            </h1>
          </div>
          <p
            className="rise lg:col-span-7 font-headline text-2xl md:text-[1.8rem] leading-snug text-on-background/90"
            style={{ '--d': '0.38s' } as React.CSSProperties}
          >
            {t('intro')}
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      {/* ── Figures ────────────────────────────────────── */}
      <FadeInSection>
        <section className="py-16 md:py-20">
          <dl className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-white/10 pt-7">
                <dd className="latin numeral text-6xl md:text-7xl leading-none font-medium text-on-background">
                  {s.value}
                  <span className="text-gradient-gold">{s.suffix}</span>
                </dd>
                <dt className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      </FadeInSection>

      {/* ── Mission & Vision ───────────────────────────── */}
      <FadeInSection delay={0.05}>
        <section className="relative py-20 md:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-container-lowest/70" />
          <Spotlight className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-5">
            {[
              { label: t('missionLabel'), body: t('mission'), icon: 'flag', number: '01' },
              { label: t('visionLabel'), body: t('vision'), icon: 'visibility', number: '02' },
            ].map((item) => (
              <article key={item.label} className="glass-luxe is-liftable rounded-3xl p-8 md:p-12">
                <div className="flex items-center justify-between gap-6">
                  <span className={iconRing}>
                    <span className="material-symbols-outlined icon-fine !text-[26px]" aria-hidden="true">{item.icon}</span>
                  </span>
                  <span className="latin numeral text-lg text-on-surface-variant/60" aria-hidden="true">{item.number}</span>
                </div>
                <h2 className="mt-10 text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-gold-soft">{item.label}</h2>
                <p className="mt-5 font-headline text-[1.75rem] md:text-[2.1rem] leading-[1.25] text-on-background">{item.body}</p>
              </article>
            ))}
          </Spotlight>
        </section>
      </FadeInSection>

      {/* ── Why choose us ──────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <SectionHeading align="center" eyebrow={t('valuesEyebrow')} heading={t('whyTitle')} subtext={t('whySubtext')} />

            <Spotlight className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {valueKeys.map((key, i) => (
                <article key={key} className={`glass-luxe is-liftable rounded-3xl p-8 md:p-9 ${VALUE_SPANS[i]} ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <span className={iconRing}>
                    <span className="material-symbols-outlined icon-fine !text-[26px]" aria-hidden="true">{VALUE_ICONS[key]}</span>
                  </span>
                  <h3 className="mt-8 font-headline text-[1.75rem] leading-tight font-medium text-on-background">{t(`values.${key}.title`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{t(`values.${key}.description`)}</p>
                </article>
              ))}
            </Spotlight>
          </div>
        </section>
      </FadeInSection>

      {/* ── Find us ────────────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <section className="relative py-20 md:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface-container-lowest/70" />
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <p className="eyebrow">{t('contactEyebrow')}</p>
            <div className="mt-10 grid md:grid-cols-3 border-t border-white/10">
              {contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-5 border-b border-white/10 py-8 md:border-b-0 md:px-8 md:first:ps-0 md:last:pe-0 md:[&:not(:last-child)]:border-e"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne transition-colors duration-500 group-hover:bg-gold/35">
                    <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">{item.icon}</span>
                  </span>
                  <span>
                    <span className="block text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft">{item.label}</span>
                    <span
                      className={`mt-2 block whitespace-pre-line text-on-background transition-colors duration-300 group-hover:text-champagne ${
                        item.ltr ? 'latin numeral text-2xl' : 'text-sm leading-relaxed text-on-surface-variant'
                      }`}
                      dir={item.ltr ? 'ltr' : undefined}
                    >
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Consultation ───────────────────────────────── */}
      <FadeInSection delay={0.05}>
        <ConsultationBanner heading={t('cta.heading')} subtext={t('cta.subtext')} button={t('cta.button')} />
      </FadeInSection>
    </main>
  );
}
