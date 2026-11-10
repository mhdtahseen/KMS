import { useTranslations, useLocale } from 'next-intl';
import { getPublishedCountries } from '@/data/countries';
import { CountryCard } from '@/components/shared/CountryCard';
import { ScrollRail } from '@/components/shared/ScrollRail';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function DestinationsScroll() {
  const t = useTranslations('home.destinations');
  const locale = useLocale();

  return (
    <section id="destinations" className="relative py-20 md:py-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hairline" />
      <ScrollRail
        prevLabel="Previous destinations"
        nextLabel="Next destinations"
        header={<SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} accent={t('headingAccent')} subtext={t('subtext')} />}
      >
        {getPublishedCountries(locale).map((country) => (
          <CountryCard key={country.slug} country={country} cta={t('explore')} />
        ))}
      </ScrollRail>
    </section>
  );
}
