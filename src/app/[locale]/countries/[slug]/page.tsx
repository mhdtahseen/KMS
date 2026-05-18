import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { publishedCountries } from '@/data/countries';
import { CountryPageTemplate } from '@/components/templates/CountryPageTemplate';

export function generateStaticParams() {
  return publishedCountries.map((country) => ({
    slug: country.slug,
  }));
}

export default async function CountryPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const country = publishedCountries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return <CountryPageTemplate country={country} />;
}
