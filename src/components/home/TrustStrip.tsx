import { useTranslations } from 'next-intl';

export function TrustStrip() {
  const t = useTranslations('home.trust');
  
  return (
    <section className="border-y border-outline-variant/30 py-16 bg-surface-container-lowest/50 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-center">
            <div className="space-y-2 group">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('clients')}</div>
            </div>
            <div className="space-y-2 group border-l border-outline-variant/20">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">5+</div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('years')}</div>
            </div>
            <div className="space-y-2 group border-l border-outline-variant/20">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('countries')}</div>
            </div>
            <div className="space-y-2 group border-l border-outline-variant/20">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('successRate')}</div>
            </div>
        </div>
      </div>
    </section>
  );
}
