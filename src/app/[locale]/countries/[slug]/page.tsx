import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { getPublishedCountries } from '@/data/countries';
import { CountryPageTemplate } from '@/components/templates/CountryPageTemplate';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';

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

  const m = await getTranslations({ locale, namespace: 'meta' });
  const title = m('countryTitle', { name: country.name });
  const description = m('countryDescription', { name: country.name, tagline: country.tagline });
  const url = `https://www.kms-consultants.com/${locale}/countries/${slug}`;
  const enUrl = `https://www.kms-consultants.com/en/countries/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        ar: `https://www.kms-consultants.com/ar/countries/${slug}`,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      locale: locale === 'ar' ? 'ar_QA' : 'en_US',
      images: [{ url: country.heroImage, width: 1200, height: 630, alt: m('countryImageAlt', { name: country.name }) }],
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
      <ServiceJsonLd
        name={`${country.name} Immigration Services`}
        description={country.overviewBody}
        url={`https://www.kms-consultants.com/${locale}/countries/${slug}`}
        image={`https://www.kms-consultants.com${country.heroImage}`}
      />
      <CountryPageTemplate country={country} />
    </>
  );
}
