import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FadeInSection } from '@/components/shared/FadeInSection';

export const metadata: Metadata = {
  title: 'About KMS Consultants — Best-Rated Immigration Consultants in Qatar',
  description:
    'KMS Consultants — MARA-certified & IRCC-authorized immigration consultancy in Doha, Qatar. 1,000+ clients from 20+ nationalities, 98% success rate, 5-star rated on Google.',
  alternates: {
    canonical: 'https://www.kms-consultants.com/en/about',
    languages: {
      en: 'https://www.kms-consultants.com/en/about',
      ar: 'https://www.kms-consultants.com/ar/about',
    },
  },
  openGraph: {
    title: 'About KMS Consultants | Best-Rated Immigration Consultants, Doha Qatar',
    description: 'MARA-certified & IRCC-authorized. 1,000+ successful cases, 20+ nationalities served, 98% success rate. The trusted immigration partner for Qatar and the GCC.',
    url: 'https://www.kms-consultants.com/en/about',
  },
};

const VALUE_ICONS: Record<string, string> = {
  certified: 'verified',
  personalized: 'person_check',
  transparent: 'visibility',
  track: 'emoji_events',
  support: 'support_agent',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const ft = await getTranslations('footer');

  const valueKeys = ['certified', 'personalized', 'transparent', 'track', 'support'] as const;

  return (
    <main className="min-h-screen">
      {/* Ambient glow */}
      <div className="fixed pointer-events-none inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 max-w-[1280px] mx-auto">
        <span className="text-primary font-bold tracking-[0.2em] mb-4 block uppercase text-sm">
          {t('badge')}
        </span>
        <h1
          className="font-headline text-5xl md:text-6xl text-on-background mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('heading')}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          {t('intro')}
        </p>
      </section>

      {/* Mission & Vision */}
      <FadeInSection>
      <section className="py-20 px-8 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl -mr-20 -mt-20" />
          <span className="material-symbols-outlined text-primary text-4xl mb-4 block" aria-hidden="true">
            flag
          </span>
          <h2
            className="font-headline text-2xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('missionLabel')}
          </h2>
          <p className="text-on-surface-variant leading-relaxed">{t('mission')}</p>
        </div>

        <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl -mr-20 -mt-20" />
          <span className="material-symbols-outlined text-primary text-4xl mb-4 block" aria-hidden="true">
            visibility
          </span>
          <h2
            className="font-headline text-2xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('visionLabel')}
          </h2>
          <p className="text-on-surface-variant leading-relaxed">{t('vision')}</p>
        </div>
      </section>
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection delay={0.05}>
      <section className="py-20 px-8 max-w-[1280px] mx-auto">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl md:text-5xl font-headline font-semibold mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('whyTitle')}
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">{t('whySubtext')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueKeys.map((key) => (
            <div key={key} className="glass-card p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-2xl" />
              <div className="size-14 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6 relative">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: '24px' }}
                  aria-hidden="true"
                >
                  {VALUE_ICONS[key]}
                </span>
              </div>
              <h3 className="font-bold text-on-surface text-lg mb-3 relative">
                {t(`values.${key}.title`)}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed relative">
                {t(`values.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* Stats strip */}
      <FadeInSection delay={0.05}>
      <section
        className="py-16 px-8 border-y"
        style={{ borderColor: 'rgba(127,94,21,0.2)', background: 'rgba(22,19,13,0.8)' }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {[
            { value: '1,000+', label: 'Happy Clients' },
            { value: '20+', label: 'Nationalities Served' },
            { value: '5+', label: 'Years Experience' },
            { value: '15+', label: 'Countries Served' },
            { value: '98%', label: 'Success Rate' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl font-bold mb-2"
                style={{ color: '#ecc06f', fontFamily: 'var(--font-serif)' }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* Contact info cards */}
      <FadeInSection delay={0.05}>
      <section className="py-20 px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: 'call',
              label: 'Call Us',
              value: ft('phone'),
              href: `tel:${ft('phone').replace(/\s/g, '')}`,
            },
            {
              icon: 'mail',
              label: 'Mail Us',
              value: ft('email'),
              href: `mailto:${ft('email')}`,
            },
            {
              icon: 'location_on',
              label: 'Visit Us',
              value: ft('address'),
              href: '#',
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="glass-card p-8 rounded-2xl flex flex-col gap-4 hover:border-primary/40 transition-colors group"
            >
              <div className="size-12 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/15 transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-on-surface-variant whitespace-pre-line">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection delay={0.05}>
      <section className="py-24 px-8">
        <div className="max-w-2xl mx-auto text-center glass-card rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 gold-halo opacity-30" />
          <h2
            className="text-3xl md:text-4xl font-headline font-bold mb-4 relative"
            style={{ fontFamily: 'var(--font-serif)', color: '#eae1d8' }}
          >
            {t('cta.heading')}
          </h2>
          <p className="text-on-surface-variant mb-10 relative">{t('cta.subtext')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-4 rounded-xl font-bold tracking-wide bg-gold-gradient text-on-primary gold-glow hover:scale-[1.02] transition-transform relative"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
      </FadeInSection>
    </main>
  );
}
