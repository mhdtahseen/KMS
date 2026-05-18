import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { publishedServices } from '@/data/services';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';

export function generateStaticParams() {
  return publishedServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const service = publishedServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
