import { useTranslations } from 'next-intl';
import { countries } from '@/data/countries';
import { CountryCard } from '@/components/shared/CountryCard';

export function DestinationsScroll() {
  const t = useTranslations('home.destinations');
  
  return (
    <section className="py-32">
        <div className="container mx-auto px-8 flex justify-between items-end mb-12">
            <h2 className="text-4xl font-headline font-semibold">{t('heading')}</h2>
            <div className="flex gap-2">
                <button className="size-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>
                <button className="size-10 rounded-full border border-outline-variant flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
        
        <div className="flex overflow-x-auto gap-8 px-8 md:px-[calc((100vw-1280px)/2)] hide-scrollbar snap-x">
            {countries.map((country) => (
                <CountryCard key={country.slug} country={country} />
            ))}
        </div>
    </section>
  );
}
