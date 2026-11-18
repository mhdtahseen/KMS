import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhySection } from '@/components/home/WhySection';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { DestinationsScroll } from '@/components/home/DestinationsScroll';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { CTASection } from '@/components/home/CTASection';
import { FadeInSection } from '@/components/shared/FadeInSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const title = t('homeTitle');
  const description = t('homeDescription');
  return {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: `https://www.kms-consultants.com/${locale}`,
    locale: locale === 'ar' ? 'ar_QA' : 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  alternates: {
    canonical: `https://www.kms-consultants.com/${locale}`,
    languages: {
      en: 'https://www.kms-consultants.com/en',
      ar: 'https://www.kms-consultants.com/ar',
      'x-default': 'https://www.kms-consultants.com/en',
    },
  },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FadeInSection><TrustStrip /></FadeInSection>
      <FadeInSection delay={0.05}><ServicesSection /></FadeInSection>
      <FadeInSection delay={0.05}><WhySection /></FadeInSection>
      <FadeInSection delay={0.05}><ProcessTimeline /></FadeInSection>
      <FadeInSection delay={0.05}><DestinationsScroll /></FadeInSection>
      <FadeInSection delay={0.05}><TestimonialsSection /></FadeInSection>
      <FadeInSection delay={0.05}><FaqSection /></FadeInSection>
      <FadeInSection delay={0.05}><CTASection /></FadeInSection>
    </div>
  );
}
