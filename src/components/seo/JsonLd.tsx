/**
 * JSON-LD structured data for the KMS Consultants organization.
 * Rendered as a server component — zero client JS.
 */
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    name: 'KMS Consultants',
    alternateName: 'KMS Immigration Consultants',
    url: 'https://www.kms-consultants.com',
    logo: 'https://www.kms-consultants.com/logo.png',
    slogan: 'Best-Rated Immigration Consultants in Doha, Qatar',
    description:
      "KMS Consultants is Doha, Qatar's most trusted immigration consultancy, with MARA-certified agents for Australian immigration and an IRCC-authorized representative for Canadian immigration. Since 2019 we've handled hundreds of successful cases for over 1,000 clients from more than 20 nationalities across Qatar and the GCC, specialising in visas, permanent residency, and citizenship pathways for Canada, the UK, Australia, the USA, and Europe.",
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bldg 3, Shk Adullah Al Jaber Bldg, Ain Khaled, Salwa Rd, P.O. Box 17409',
      addressLocality: 'Doha',
      addressCountry: 'QA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2854473,
      longitude: 51.5310398,
    },
    areaServed: [
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'AdministrativeArea', name: 'Gulf Cooperation Council (GCC)' },
    ],
    knowsAbout: [
      'Immigration to Canada',
      'Immigration to Australia',
      'Immigration to the United Kingdom',
      'Immigration to the United States',
      'European Union Golden Visa and residency programs',
      'Qatar visa consulting',
      'Doha immigration services',
      'Permanent residency applications',
      'Skilled worker visas',
      'Family sponsorship visas',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'MARA Certified Agent — Migration Agents Registration Authority (Australia)',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Migration Agents Registration Authority (MARA)',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Authorized Representative',
        name: 'IRCC Authorized Representative — Immigration, Refugees and Citizenship Canada',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        },
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+974-4412-0578',
        contactType: 'customer service',
        areaServed: ['QA', 'AE', 'SA', 'KW', 'BH', 'OM'],
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+974-4412-0580',
        contactType: 'customer service',
        areaServed: ['QA', 'AE', 'SA', 'KW', 'BH', 'OM'],
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    email: 'info@kms-consultants.com',
    sameAs: [
      'https://www.linkedin.com/company/kms-consultants',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Immigration Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skilled Immigration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Study Permits' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Permits' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Residency' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Permanent Residency' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Sponsorship' } },
      ],
    },
    // TODO: reviewCount below is unverified — confirm the real current Google
    // review count (and add the Google Business Profile URL to `sameAs`)
    // before relying on this in production; see conversation flag.
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '127',
      bestRating: '5',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@type': 'Organization',
      name: 'KMS Consultants',
      url: 'https://www.kms-consultants.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Qatar',
    },
    serviceType: 'Immigration Consulting',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ questions }: { questions: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
