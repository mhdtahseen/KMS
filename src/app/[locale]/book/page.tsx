import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { BookingForm } from '@/components/booking/BookingForm';

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('booking');
  const ft = await getTranslations('footer');

  return (
    <main className="min-h-screen">
      {/* Hero Section / Header */}
      <section className="pt-40 pb-20 px-8 max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-[0.2em] mb-4 block uppercase text-sm">{t('badge')}</span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-background mb-6">{t('heading')}</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            {t('subtext')}
          </p>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="pb-32 px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Panel: Trust Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16"></div>
            <h3 className="font-headline text-2xl text-primary mb-8">{t('officeHeading')}</h3>
            
            <div className="space-y-10 relative z-10">
              <div className="flex items-start gap-6">
                <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Doha, Qatar</h4>
                  <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                    {ft('address')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Private Line</h4>
                  <p className="text-on-surface-variant leading-relaxed">{ft('phone')}</p>
                  <p className="text-on-surface-variant/60 text-xs mt-1">Available 09:00 - 18:00 AST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="size-12 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Digital Correspondence</h4>
                  <p className="text-on-surface-variant leading-relaxed">{ft('email')}</p>
                  <p className="text-on-surface-variant/60 text-xs mt-1">Expected response within 4 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Map Image */}
          <div className="h-[300px] rounded-3xl overflow-hidden glass-card relative group">
            <Image 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700 scale-105 group-hover:scale-100" 
              alt="KMS Office Location"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSywwJQk-Omxr8qXZS2M4e55Q23DDXQg_nTpGwT3nXF_pCofdDQDfUCWUle-GevqjZ6as8JCa67Qs1vIllMUfe62Tx9TIbeDvJQZGCzX7cXU5W868LJjnFFJAMy6VWPk8hfNVlVKn4gtAwlLV8igPi3WHAyLkBYFli541cyfJZc5IS3-llky_BVUqkLJOdaEMJ9iD9bZiU-4qGWP0EM6p9fM-9Vp6yg3pwG9hBYSbYdcTEpdqAX1anKB3Uaas13Kt8EOjXIVbY7zdS"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_#ecc06f]"></span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">{t('liveOps')}</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Premium Form */}
        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-24 border-t border-primary/10 bg-surface-container-lowest/50">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-around items-center gap-12 opacity-30 grayscale filter">
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">LEGAL PARTNERS</span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">GLOBAL ALLIANCE</span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">QATAR CHAMBER</span>
          <span className="font-headline text-2xl font-bold tracking-[0.2em] text-on-surface">ISO CERTIFIED</span>
        </div>
      </section>
    </main>
  );
}
