import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getPublishedServices } from '@/data/services';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';

export function generateStaticParams() {
  const publishedServices = getPublishedServices('en');
  return publishedServices.flatMap((service) =>
    ['en', 'ar'].map((locale) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const publishedServices = getPublishedServices(locale);
  const service = publishedServices.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} | Visa & Immigration Services`;
  const description = `${service.tagline} — ${service.heroSubtext.slice(0, 140)}. KMS Consultants, Doha Qatar.`;
  const url = `https://www.kms-consultants.com/en/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        ar: `https://www.kms-consultants.com/ar/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: `${service.title} — KMS Consultants` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const publishedServices = getPublishedServices(locale);
  const service = publishedServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: `https://www.kms-consultants.com/${locale}` },
        { name: 'Services', url: `https://www.kms-consultants.com/${locale}/services` },
        { name: service.title, url: `https://www.kms-consultants.com/${locale}/services/${slug}` },
      ]} />
      <ServiceJsonLd
        name={service.title}
        description={service.heroSubtext}
        url={`https://www.kms-consultants.com/${locale}/services/${slug}`}
        image={service.heroImage}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
