import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessTimeline } from '@/components/shared/ProcessTimeline';
import { DestinationsScroll } from '@/components/home/DestinationsScroll';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProcessTimeline />
      <DestinationsScroll />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
