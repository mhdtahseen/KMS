import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Country } from '@/data/countries';

export function CountryCard({ country }: { country: Country }) {
  const locale = useLocale();
  const highlight = country.homeHighlight || country.pathways.slice(0, 2).map((p) => p.title).join(' • ');
  const href = country.isPublished ? `/${locale}/countries/${country.slug}` : `/${locale}/book`;
  return (
    <Link 
      href={href}
      className="min-w-[300px] md:min-w-[400px] snap-start relative group rounded-3xl overflow-hidden aspect-[3/4] block"
    >
      <Image 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
          alt={country.heroSubtext} 
          src={country.homeImage || country.heroImage}
          fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8">
          <h4 className="text-2xl font-bold mb-2">{country.name}</h4>
          <p className="text-sm text-primary font-bold uppercase tracking-widest line-clamp-2">
              {highlight}
          </p>
      </div>
    </Link>
  );
}
