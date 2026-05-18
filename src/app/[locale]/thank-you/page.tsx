import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('thankYou');
  
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 px-8 relative overflow-hidden bg-background">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-2xl w-full text-center space-y-12 relative z-10 glass-card p-12 md:p-20 rounded-[48px]">
        <div className="size-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl">task_alt</span>
        </div>
        
        <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-headline font-bold leading-tight">{t('heading')}</h1>
            <p className="text-lg text-on-surface-variant max-w-lg mx-auto">{t('subtext')}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href={`/${locale}`} className="px-8 py-4 rounded-xl bg-primary-container text-white font-bold tracking-wide hover:opacity-90 transition-all gold-glow w-full sm:w-auto">
                {t('returnHome')}
            </Link>
            <Link href={`/${locale}/services/skilled-immigration`} className="px-8 py-4 rounded-xl border border-outline-variant font-bold tracking-wide hover:bg-surface-container-low transition-colors w-full sm:w-auto">
                {t('exploreServices')}
            </Link>
        </div>
      </div>
    </main>
  );
}
