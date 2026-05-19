import { MetadataRoute } from 'next';
import { publishedCountries } from '@/data/countries';
import { publishedServices } from '@/data/services';

const BASE_URL = 'https://www.kms-consultants.com';
const locales = ['en', 'ar'] as const;

type Locale = (typeof locales)[number];

function alternates(path: string) {
  return Object.fromEntries(
    locales.map((loc) => [loc, `${BASE_URL}/${loc}${path}`])
  ) as Record<Locale, string>;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/contact'];
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — one canonical entry per locale with hreflang alternates
  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: { languages: alternates(route) },
      });
    }
  }

  // Country pages
  for (const country of publishedCountries) {
    const path = `/countries/${country.slug}`;
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: alternates(path) },
      });
    }
  }

  // Service pages
  for (const service of publishedServices) {
    const path = `/services/${service.slug}`;
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: alternates(path) },
      });
    }
  }

  return entries;
}
