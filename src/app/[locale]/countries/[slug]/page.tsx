import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getPublishedCountries } from '@/data/countries';
import { CountryPageTemplate } from '@/components/templates/CountryPageTemplate';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export function generateStaticParams() {
  return getPublishedCountries('en').flatMap((country) =>
    ['en', 'ar'].map((locale) => ({ locale, slug: country.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const country = getPublishedCountries(locale).find((c) => c.slug === slug);
  if (!country) return {};

  const title = `${country.name} Immigration & Visa Services`;
  const description = `Expert ${country.name} immigration consultants in Doha, Qatar. ${country.tagline}. KMS Consultants guides you through visas, PR, and citizenship pathways.`;
  const url = `https://www.kms-consultants.com/en/countries/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        ar: `https://www.kms-consultants.com/ar/countries/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: country.heroImage, width: 1200, height: 630, alt: `${country.name} immigration — KMS Consultants` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [country.heroImage],
    },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const country = getPublishedCountries(locale).find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `https://www.kms-consultants.com/${locale}` },
        { name: 'Countries', url: `https://www.kms-consultants.com/${locale}/countries` },
        { name: country.name, url: `https://www.kms-consultants.com/${locale}/countries/${slug}` },
      ]} />
      <CountryPageTemplate country={country} />
    </>
  );
}
