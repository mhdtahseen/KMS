import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Country } from '@/data/countries';
import { FlagChip, countryCode } from '@/components/shared/FlagChip';

export function CountryCard({ country, cta }: { country: Country; cta?: string }) {
  const locale = useLocale();
  const tags = (country.homeHighlight || country.pathways.slice(0, 2).map((p) => p.title).join(' • '))
    .split('•')
    .map((s) => s.trim())
    .filter(Boolean);
  const href = country.isPublished ? `/${locale}/countries/${country.slug}` : `/${locale}/contact`;
  const code = countryCode(country.slug);

  return (
    <Link
      href={href}
      className="group relative isolate block w-[82vw] max-w-[340px] md:max-w-none md:w-[400px] shrink-0 snap-start aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold-soft/50 hover:shadow-[0_40px_80px_-40px_rgba(196,154,48,0.45)]"
    >
      {country.homeImage ? (
        <Image
          src={country.homeImage}
          alt=""
          fill
          sizes="(max-width: 768px) 82vw, 400px"
          className="-z-20 object-cover grayscale scale-105 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:grayscale-0"
        />
      ) : (
        // No photograph on file: a composed plate instead of an empty frame
        <div className="absolute inset-0 -z-20 bg-surface-container-low" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_15%,rgba(196,154,48,0.28),transparent_70%)]" />
          <span className="numeral absolute inset-x-0 top-[16%] text-center text-[11rem] leading-none font-light text-transparent [-webkit-text-stroke:1px_rgba(196,154,48,0.5)]">
            {code}
          </span>
        </div>
      )}

      {/* warm tint + legibility gradient */}
      <div className="absolute inset-0 -z-10 bg-gold/20 mix-blend-soft-light" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/35 to-transparent" aria-hidden="true" />

      <FlagChip slug={country.slug} className="absolute top-5 start-5" />

      {/* glass caption */}
      <div className="absolute inset-x-3 bottom-3 rounded-[20px] border border-white/12 bg-white/[0.07] p-5 md:p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-headline text-3xl md:text-[2.1rem] leading-none font-medium text-on-background">{country.name}</h3>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-on-background transition-all duration-500 group-hover:border-gold-soft group-hover:bg-gold group-hover:text-on-primary-container" aria-label={cta}>
            <span className="material-symbols-outlined !text-[18px] rtl:-scale-x-100 transition-transform duration-500 group-hover:rotate-45 rtl:group-hover:-rotate-45" aria-hidden="true">north_east</span>
          </span>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-gold-soft/30 bg-gold/15 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-champagne">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
