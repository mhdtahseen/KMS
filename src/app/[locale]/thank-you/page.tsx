import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — Inquiry Received',
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('thankYou');
  
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[820px] rounded-full bg-gold/25 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full border border-gold-soft/10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px] rounded-full border border-gold-soft/[0.06]" />
      </div>

      <div className="rise glass-luxe w-full max-w-2xl rounded-[32px] px-8 py-14 md:px-16 md:py-20 text-center">
        <div className="mx-auto grid size-20 place-items-center rounded-full border border-gold-soft/40 bg-gold/20 text-champagne shadow-[0_0_50px_-8px_rgba(196,154,48,0.6)]">
          <span className="material-symbols-outlined icon-fine !text-[36px]" aria-hidden="true">check</span>
        </div>

        <h1 className="display-2 mt-10 text-on-background">{t('heading')}</h1>
        <p className="mx-auto mt-6 max-w-md text-base md:text-lg leading-relaxed text-on-surface-variant">{t('subtext')}</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={`/${locale}`} className="btn-gold w-full sm:w-auto">
            {t('returnHome')}
          </Link>
          <Link href={`/${locale}#services`} className="btn-ghost w-full sm:w-auto">
            {t('exploreServices')}
          </Link>
        </div>
      </div>
    </main>
  );
}
