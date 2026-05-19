'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Country } from '@/data/countries';
import { StickyCtaBar } from '@/components/shared/StickyCtaBar';

export function CountryPageTemplate({ country }: { country: Country }) {
  const locale = useLocale();
  const t = useTranslations('countries');

  return (
    <main className="bg-background text-on-background font-sans overflow-x-hidden">
      <StickyCtaBar title={`${country.name} Immigration`} ctaText={t('cta.button')} />
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            alt={country.name}
            className="w-full h-full object-cover grayscale opacity-40" 
            src={country.heroImage}
            fill
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-sans text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4 block"
          >
            {t('hero.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-serif text-[84px] leading-tight text-on-background mb-6"
          >
            {country.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-serif text-2xl text-on-surface-variant font-light mb-12"
          >
            {country.tagline}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href={`/${locale}/contact`} className="bg-gold-gradient text-on-primary px-10 py-5 rounded-lg font-bold text-lg shadow-lg gold-glow hover:scale-[1.02] transition-transform">
              {t('hero.ctaPrimary')}
            </Link>
            <Link href={`/${locale}/countries/${country.slug}#pathways`} className="glass-card px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
              {t('hero.ctaSecondary')}
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-[120px] px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gold-glow -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-[36px] font-semibold text-on-background mb-8">
                Why Global Leaders <span className="text-primary">Choose {country.name}</span>
              </h2>
              <p className="font-sans text-lg text-on-surface-variant mb-12 leading-relaxed">
                {country.overviewBody}
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container/20 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-2">Social Security & Stability</h4>
                    <p className="text-on-surface-variant font-sans">Access to world-class universal healthcare and a robust social safety net for you and your family.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container/20 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">school</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-2">Elite Education</h4>
                    <p className="text-on-surface-variant font-sans">Home to some of the world&apos;s most prestigious universities and high-standard primary education systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container/20 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-2">Economic Prosperity</h4>
                    <p className="text-on-surface-variant font-sans">A G7 economy with diverse industries and significant opportunities for entrepreneurs and innovators.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-6 h-fit"
            >
              <div className="space-y-6 pt-12">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                  <Image alt={country.name} className="w-full h-full object-cover" src={country.whyChooseImages[0]} fill sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <span className="text-primary font-serif text-[48px] font-semibold block mb-2">{country.overviewStats[0].value}</span>
                  <p className="font-sans text-xs font-bold tracking-widest uppercase opacity-70">{country.overviewStats[0].label}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl">
                  <span className="text-primary font-serif text-[48px] font-semibold block mb-2">{country.overviewStats[1].value}</span>
                  <p className="font-sans text-xs font-bold tracking-widest uppercase opacity-70">{country.overviewStats[1].label}</p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                  <Image alt="Nature" className="w-full h-full object-cover" src={country.whyChooseImages[1]} fill sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visa Pathways Bento Grid */}
      <section id="pathways" className="py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-sans text-xs font-bold text-primary tracking-widest mb-4 block uppercase">{t('pathways.badge')}</span>
            <h2 className="font-serif text-[36px] font-semibold text-on-background">{t('pathways.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {country.pathways.map((pathway, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <motion.div 
                  key={pathway.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${isLarge ? "md:col-span-2" : "col-span-1"} glass-card rounded-3xl overflow-hidden group relative flex flex-col h-full min-h-[300px]`}
                >
                  {pathway.bgImage && (
                    <div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover:opacity-30">
                      <Image 
                        src={pathway.bgImage} 
                        alt={pathway.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="relative z-10 p-10 flex flex-col h-full">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">
                      {pathway.icon}
                    </span>
                    <h3 className="font-serif text-[28px] font-medium mb-4">{pathway.title}</h3>
                    <p className={`text-on-surface-variant font-sans text-lg mb-8 ${isLarge ? "max-w-lg" : ""}`}>
                      {pathway.description}
                    </p>
                    <div className="mt-auto">
                      <Link className="inline-flex items-center gap-2 text-primary font-semibold hover:underline" href={pathway.link || `/${locale}/contact`}>
                        {pathway.ctaLabel || (isLarge ? "Explore Pathway" : "Consult")} <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Residency Requirements */}
      <section className="py-[120px] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-[36px] font-semibold mb-12">{t('requirements.heading')}</h2>
              <div className="space-y-6">
                {country.requirements.map((req, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-serif text-xl font-medium">{req.title}</h4>
                      <span className="bg-secondary-container/20 text-secondary px-4 py-1 rounded-full text-sm font-bold">{req.badge}</span>
                    </div>
                    <p className="text-on-surface-variant font-sans">{req.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="glass-card p-12 rounded-[40px] relative w-full">
                <div className="absolute -top-6 -right-6 bg-primary-container p-6 rounded-2xl shadow-xl">
                  <span className="material-symbols-outlined text-on-primary text-4xl" aria-hidden="true">policy</span>
                </div>
                <h3 className="font-serif text-2xl font-medium mb-8">{t('requirements.citizenshipHeading')}</h3>
                <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
                  {country.citizenshipSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full ${idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-primary/50' : 'bg-primary/30'} ring-8 ring-background`}></div>
                      <p className="font-bold text-primary mb-1">Step {step.step}</p>
                      <p className="font-serif text-lg font-medium mb-2">{step.title}</p>
                      <p className="text-sm text-on-surface-variant font-sans">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="py-[120px] px-8" data-cta-section>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 gold-glow opacity-30 -z-10"></div>
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="font-serif text-[48px] font-semibold mb-8">{country.ctaHeading}</h2>
              <p className="font-sans text-lg text-on-surface-variant mb-12">{t('cta.subtext')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`} className="bg-gold-gradient text-on-primary px-12 py-5 rounded-xl font-bold text-lg gold-glow hover:scale-[1.02] transition-transform shadow-xl">
                  {t('cta.button')}
                </Link>
              </div>
              <p className="mt-8 text-sm text-on-surface-variant/60 font-medium font-sans">{t('cta.trust')}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
