import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress service slugs → new Next.js routes
      { source: '/skilled-immigration', destination: '/en/services/skilled-immigration', permanent: true },
      { source: '/skilled-immigration/', destination: '/en/services/skilled-immigration', permanent: true },
      { source: '/citizenship-by-investment', destination: '/en/services/business-residency', permanent: true },
      { source: '/citizenship-by-investment/', destination: '/en/services/business-residency', permanent: true },
      { source: '/work-visa', destination: '/en/services/work-permits', permanent: true },
      { source: '/work-visa/', destination: '/en/services/work-permits', permanent: true },
      { source: '/study-abroad', destination: '/en/services/study-permits', permanent: true },
      { source: '/study-abroad/', destination: '/en/services/study-permits', permanent: true },
      { source: '/family-sponsorship', destination: '/en/services/family-sponsorship', permanent: true },
      { source: '/family-sponsorship/', destination: '/en/services/family-sponsorship', permanent: true },
      // Old WordPress country slugs → new Next.js routes
      { source: '/canada', destination: '/en/countries/canada', permanent: true },
      { source: '/canada/', destination: '/en/countries/canada', permanent: true },
      { source: '/usa', destination: '/en/countries/usa', permanent: true },
      { source: '/usa/', destination: '/en/countries/usa', permanent: true },
      { source: '/australia', destination: '/en/countries/australia', permanent: true },
      { source: '/australia/', destination: '/en/countries/australia', permanent: true },
      { source: '/service-uk', destination: '/en/countries/united-kingdom', permanent: true },
      { source: '/service-uk/', destination: '/en/countries/united-kingdom', permanent: true },
      { source: '/service-europe', destination: '/en/countries/european-union', permanent: true },
      { source: '/service-europe/', destination: '/en/countries/european-union', permanent: true },
      // Old WordPress page slugs
      { source: '/about-us', destination: '/en/about', permanent: true },
      { source: '/about-us/', destination: '/en/about', permanent: true },
      { source: '/contact-us', destination: '/en/contact', permanent: true },
      { source: '/contact-us/', destination: '/en/contact', permanent: true },
      // /book → /contact
      { source: '/:locale/book', destination: '/:locale/contact', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.google.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
