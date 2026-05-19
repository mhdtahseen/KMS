import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { BookingForm } from '@/components/booking/BookingForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Consultation',
  description:
    'Contact KMS Consultants in Doha, Qatar. Book a free immigration consultation with our certified specialists. Call +974 4412 0578 or email info@kms-consultants.com.',
  alternates: {
    canonical: 'https://www.kms-consultants.com/en/contact',
    languages: {
      en: 'https://www.kms-consultants.com/en/contact',
      ar: 'https://www.kms-consultants.com/ar/contact',
    },
  },
  openGraph: {
    title: 'Contact KMS Consultants | Book a Free Immigration Consultation',
    description: 'Speak with a certified immigration specialist in Doha, Qatar. We handle Canada, UK, Australia, USA & Europe visas.',
    url: 'https://www.kms-consultants.com/en/contact',
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('booking');
  const ft = await getTranslations('footer');

  const contactCards = [
    {
      icon: 'call',
      label: t('callUs'),
      value: ft('phone'),
      sub: ft('phone2'),
      href: `tel:${ft('phone').replace(/\s/g, '')}`,
    },
    {
      icon: 'mail',
      label: t('mailUs'),
      value: ft('email'),
      sub: t('responseTime'),
      href: `mailto:${ft('email')}`,
    },
    {
      icon: 'location_on',
      label: t('visitUs'),
      value: ft('address'),
      sub: t('hours'),
      href: '#',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 px-8 max-w-[1280px] mx-auto">
        <span className="text-primary font-bold tracking-[0.2em] mb-4 block uppercase text-sm">
          {t('badge')}
        </span>
        <h1
          className="font-headline text-5xl md:text-6xl text-on-background mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('heading')}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl">{t('subtext')}</p>
      </section>

      {/* Help Cards */}
      <section className="pb-16 px-8 max-w-[1280px] mx-auto">
        <div className="glass-card rounded-3xl p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32" />
          <h2
            className="font-headline text-2xl text-on-background mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t('helpTitle')}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mb-10">{t('helpSubtext')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary/30 transition-colors group"
              >
                <div className="size-12 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 group-hover:bg-primary/15 transition-colors">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm text-on-surface font-medium whitespace-pre-line leading-snug">
                    {card.value}
                  </p>
                  {card.sub && (
                    <p className="text-xs text-on-surface-variant/60 mt-1">{card.sub}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="pb-32 px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Panel: Office Image */}
        <div className="lg:col-span-5 space-y-8">
          {/* Strategic Map Image */}
          <div className="h-[400px] rounded-3xl overflow-hidden glass-card relative group">
            <Image
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 scale-105 group-hover:scale-100"
              alt="KMS Office Location — Doha, Qatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSywwJQk-Omxr8qXZS2M4e55Q23DDXQg_nTpGwT3nXF_pCofdDQDfUCWUle-GevqjZ6as8JCa67Qs1vIllMUfe62Tx9TIbeDvJQZGCzX7cXU5W868LJjnFFJAMy6VWPk8hfNVlVKn4gtAwlLV8igPi3WHAyLkBYFli541cyfJZc5IS3-llky_BVUqkLJOdaEMJ9iD9bZiU-4qGWP0EM6p9fM-9Vp6yg3pwG9hBYSbYdcTEpdqAX1anKB3Uaas13Kt8EOjXIVbY7zdS"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_#ecc06f]" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                {t('liveOps')}
              </span>
            </div>
          </div>

          {/* Office details card */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16" />
            <h3
              className="font-headline text-xl text-primary mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('officeHeading')}
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1">Doha, Qatar</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">
                    {ft('address')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1">Phone</h4>
                  <p className="text-on-surface-variant text-sm">{ft('phone')}</p>
                  <p className="text-on-surface-variant text-sm">{ft('phone2')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <span className="material-symbols-outlined text-base">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1">Email</h4>
                  <p className="text-on-surface-variant text-sm">{ft('email')}</p>
                  <p className="text-on-surface-variant/60 text-xs mt-1">{t('responseTime')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Premium Form */}
        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-t border-primary/10 bg-surface-container-lowest/50">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-around items-center gap-12 opacity-30 grayscale filter">
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">
            LEGAL PARTNERS
          </span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">
            GLOBAL ALLIANCE
          </span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">
            QATAR CHAMBER
          </span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">
            ISO CERTIFIED
          </span>
        </div>
      </section>
    </main>
  );
}
