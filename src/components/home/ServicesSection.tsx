import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { getPublishedServices } from '@/data/services';

export function ServicesSection() {
  const t = useTranslations('home.services');
  const locale = useLocale();

  const publishedServices = getPublishedServices(locale);
  const featured = publishedServices.slice(0, 3);

  return (
    <section className="py-32 container mx-auto px-8">
      <div className="mb-20 text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-headline font-semibold">{t('heading')}</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">{t('subtext')}</p>
      </div>

      <div className="space-y-24">
        {featured.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const highlights = service.eligibilityCriteria.slice(0, 2).map(c => c.title);

          return (
            <div key={service.slug} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              <div className="w-full md:w-3/5 glass-card rounded-[32px] overflow-hidden aspect-[16/9] relative group">
                <Image className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={service.title} src={service.heroImage} fill sizes="(max-width: 768px) 100vw, 60vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{service.tagline}</span>
                  <h3 className="text-3xl font-headline font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <p className="text-lg text-on-surface-variant leading-relaxed">{service.heroSubtext}</p>
                <ul className="space-y-4">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">check_circle</span>
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm group"
                >
                  Learn more
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Link href={`/${locale}/services/skilled-immigration`} className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm hover:gap-4 transition-all group">
          {t('seeAll')}
        </Link>
      </div>
    </section>
  );
}
