import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { BookingForm } from '@/components/booking/BookingForm';
import { TrustStrip } from '@/components/home/TrustStrip';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
  title: 'Contact Us — Book a Free Consultation',
  description:
    'Contact KMS Consultants in Doha, Qatar. Book a free immigration consultation with our certified specialists. Call +974 4002 5533 or email info@kms-consultants.com.',
  alternates: {
    canonical: `https://www.kms-consultants.com/${locale}/contact`,
    languages: {
      en: 'https://www.kms-consultants.com/en/contact',
      ar: 'https://www.kms-consultants.com/ar/contact',
      'x-default': 'https://www.kms-consultants.com/en/contact',
    },
  },
  openGraph: {
    title: 'Contact KMS Consultants | Book a Free Immigration Consultation',
    description: 'Speak with a certified immigration specialist in Doha, Qatar. We handle Canada, UK, Australia, USA & Europe visas.',
    url: `https://www.kms-consultants.com/${locale}/contact`,
  },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('booking');
  const ft = await getTranslations('footer');

  const phone = ft('phone');
  const whatsapp = ft('whatsapp');
  const email = ft('email');

  const rowClass = 'flex items-start gap-5 border-t border-white/10 py-7';
  const ring =
    'grid size-12 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne';
  const labelClass = 'text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft';

  return (
    <main className="overflow-x-clip">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_0%,rgba(196,154,48,0.16),transparent_70%)]" />
          <div className="animate-drift absolute -top-[30%] start-[5%] size-[620px] rounded-full bg-gold/25 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-8 pt-36 md:pt-44 pb-12 md:pb-14">
          <p className="rise eyebrow" style={{ '--d': '0.1s' } as React.CSSProperties}>{t('badge')}</p>
          <h1 className="rise display-1 mt-8 max-w-4xl text-on-background" style={{ '--d': '0.22s' } as React.CSSProperties}>
            {t('heading')}
          </h1>
          <p className="rise mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-on-surface-variant" style={{ '--d': '0.36s' } as React.CSSProperties}>
            {t('subtext')}
          </p>
        </div>
      </section>

      {/* ── Details + form ─────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="rise mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-6" style={{ '--d': '0.5s' } as React.CSSProperties}>
          {/* Left: dark information panel */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-surface-container-lowest p-8 md:p-10">
              <div aria-hidden="true" className="absolute -top-32 -start-32 size-[420px] rounded-full bg-gold/30 blur-[120px]" />
              <div className="relative">
                <h2 className="font-headline text-3xl md:text-4xl leading-tight font-medium text-on-background">{t('helpTitle')}</h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-on-surface-variant">{t('helpSubtext')}</p>

                <div className="mt-10">
                  <div className={rowClass}>
                    <span className={ring}><span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">call</span></span>
                    <div>
                      <p className={labelClass}>{t('callUs')}</p>
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="latin numeral mt-2 block text-3xl text-on-background transition-colors duration-300 hover:text-champagne" dir="ltr">
                        {phone}
                      </a>
                      <a
                        href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="latin mt-2 inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant transition-colors duration-300 hover:text-champagne"
                        dir="ltr"
                      >
                        WhatsApp {whatsapp}
                        <span className="material-symbols-outlined !text-[15px] text-gold-soft" aria-hidden="true">north_east</span>
                      </a>
                    </div>
                  </div>

                  <div className={rowClass}>
                    <span className={ring}><span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">mail</span></span>
                    <div>
                      <p className={labelClass}>{t('mailUs')}</p>
                      <a href={`mailto:${email}`} className="mt-2 block break-all text-base font-medium text-on-background transition-colors duration-300 hover:text-champagne" dir="ltr">
                        {email}
                      </a>
                      <p className="mt-1.5 text-xs text-on-surface-variant/75">{t('responseTime')}</p>
                    </div>
                  </div>

                  <div className={rowClass}>
                    <span className={ring}><span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">location_on</span></span>
                    <div>
                      <p className={labelClass}>{t('visitUs')}</p>
                      <address className="mt-2 not-italic whitespace-pre-line text-sm leading-relaxed text-on-background/90">{ft('address')}</address>
                      <a
                        href="https://maps.app.goo.gl/HQ5oCW8D9E2eCh6r7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors duration-300 hover:text-champagne"
                      >
                        {t('openMap')}
                        <span className="material-symbols-outlined !text-[16px]" aria-hidden="true">north_east</span>
                      </a>
                      <p className="mt-2 flex items-center gap-2 text-xs text-on-surface-variant/75">
                        <span className="material-symbols-outlined !text-[15px] text-gold-soft" aria-hidden="true">schedule</span>
                        {t('hours')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: glass form */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <TrustStrip />
    </main>
  );
}
