'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { StickyCtaBar } from '@/components/shared/StickyCtaBar';

export function ServicePageTemplate({ service }: { service: Service }) {
  const locale = useLocale();
  const t = useTranslations('services');

  const destinationCards = service.destinationCards ?? [];

  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden">
      <StickyCtaBar title={service.title} ctaText={t('cta.button')} />
      <section className="relative min-h-[819px] flex items-center justify-center pt-24 pb-section-padding px-6 md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image className="w-full h-full object-cover opacity-30" src={service.heroImage} alt={service.title} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-label-caps text-primary uppercase tracking-[0.3em] mb-6 block">
            {service.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-[64px] text-on-background mb-8 leading-tight"
          >
            {service.heroHeadline}
            {service.heroHeadlineAccent ? (
              <>
                {' '}
                <br />
                <span className="text-primary italic">{service.heroHeadlineAccent}</span>
              </>
            ) : null}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
          >
            {service.heroSubtext}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href={`/${locale}/contact`} className="px-10 py-5 bg-primary-container text-on-primary-container font-label-caps uppercase tracking-widest rounded-none hover:bg-primary transition-all">
              {t('overview.cta')}
            </Link>
            <Link href={`/${locale}/contact`} className="px-10 py-5 glass-card text-on-background font-label-caps uppercase tracking-widest rounded-none hover:bg-white/10 transition-all">
              {t('overview.download')}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-section-padding p-6 md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-h2 text-on-background mb-8">{service.overviewHeading}</h2>
            <p className="font-body-lg text-on-surface-variant mb-6">{service.overviewBody}</p>
            {service.overviewBodySecondary ? <p className="font-body-md text-on-surface-variant/80 mb-10 leading-relaxed">{service.overviewBodySecondary}</p> : null}
            <div className="grid grid-cols-2 gap-8">
              {service.overviewStats.map((stat) => (
                <div key={stat.label} className="border-l border-primary/40 pl-6">
                  <span className="block text-4xl md:text-h3 font-headline text-primary mb-1">{stat.value}</span>
                  <span className="text-label-caps text-on-surface-variant uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gold-halo rounded-full opacity-50 blur-3xl"></div>
            <div className="glass-card p-4">
              <Image src={service.overviewImage} alt={service.overviewHeading} width={800} height={1000} className="w-full aspect-[4/5] object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {destinationCards.length > 0 && (
        <section className="py-section-padding p-6 md:px-margin-desktop bg-background">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-h2 text-on-background mb-4">{t('destinations.heading')}</h2>
                <p className="font-body-md text-on-surface-variant">{t('destinations.subtext')}</p>
              </div>
              <Link href={`/${locale}/countries/canada`} className="text-primary font-label-caps uppercase flex items-center gap-2 hover:gap-4 transition-all group">
                Explore All Countries <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {destinationCards.map((card) => (
                <div key={card.slug} className="glass-card group overflow-hidden">
                  <div className="h-64 overflow-hidden relative">
                    <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-headline text-2xl md:text-h3 text-on-background mb-4 capitalize">{card.title}</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">{card.description}</p>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> {card.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-section-padding p-6 md:px-margin-desktop bg-surface-container-low" id="eligibility">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-h2 text-on-background mb-4">{t('eligibility.heading')}</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">{t('eligibility.subtext')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {service.eligibilityCriteria.map((criterion) => {
              if (criterion.featured) {
                return (
                  <div key={criterion.title} className="glass-card p-10 bg-primary/5 border-primary/30 flex flex-col justify-between md:row-span-2">
                    <div>
                      <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">{criterion.icon}</span>
                      <h4 className="font-headline text-2xl md:text-h3 mb-4">{criterion.title}</h4>
                      <p className="font-body-md text-on-surface-variant mb-6">{criterion.description}</p>
                      {criterion.checkPoints ? (
                        <ul className="space-y-4">
                          {criterion.checkPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-primary text-xl mt-1" aria-hidden="true">check_circle</span>
                              <span className="font-body-md">{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    {criterion.pointsImportance ? (
                      <div className="mt-12">
                        <div className="h-1 bg-white/10 w-full mb-4">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: criterion.pointsImportance }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="h-full bg-primary"></motion.div>
                        </div>
                        <p className="text-xs font-label-caps text-on-surface-variant uppercase tracking-widest">Weighted Score Importance: {criterion.pointsImportance}</p>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <div key={criterion.title} className={`glass-card p-10 flex flex-col justify-between min-h-[320px] ${criterion.accent ? 'bg-[#7F5E15]/20' : ''}`}>
                  <div>
                    <span className="material-symbols-outlined text-primary text-4xl mb-6" aria-hidden="true">{criterion.icon}</span>
                    <h4 className="font-headline text-2xl md:text-h3 mb-4">{criterion.title}</h4>
                    <p className="font-body-md text-on-surface-variant">{criterion.description}</p>
                  </div>
                  {criterion.badge ? (
                    <div className="mt-6 flex items-center text-primary gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-xs font-label-caps uppercase tracking-tighter">{criterion.badge}</span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-section-padding p-6 md:px-margin-desktop bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8 lg:gap-0 relative isolate">
            {/* Horizontal Line (Commented out for easy reversion)
            <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
            */}
            {service.processSteps.map((step, index) => (
              <div key={step.title} className="w-full lg:w-1/5 max-w-[280px] relative z-10 px-6 py-12 text-center group">
                <div className="w-20 h-20 mx-auto glass-card flex items-center justify-center mb-8 border-primary/10 group-hover:!border-primary/10 group-hover:!shadow-[0_0_20px_#ecc06f80] transition-all duration-500">
                  {isNaN(Number(step.icon)) ? (
                    <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                      {step.icon}
                    </span>
                  ) : (
                    <span className="font-headline text-2xl text-primary">
                      {step.icon}
                    </span>
                  )}
                </div>
                <h5 className="font-label-caps text-on-background mb-4 uppercase tracking-widest">{step.title}</h5>
                <p className="text-sm text-on-surface-variant/70">{step.description}</p>
                {index < service.processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[5.5rem] right-0 transform translate-x-1/2 -translate-y-1/2 items-center justify-center text-primary/30 pointer-events-none">
                    <span className="material-symbols-outlined text-3xl">chevron_right</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding p-6 md:px-margin-desktop bg-surface-container-lowest" data-cta-section>
        <div className="max-w-container-max mx-auto">
          <div className="glass-card p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 gold-halo opacity-30 -mr-48 -mt-48 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-4xl md:text-[42px] mb-8 leading-tight">{service.ctaHeading}</h2>
              <p className="font-body-lg text-on-surface-variant/80 mb-0">{t('cta.subtext')}</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link href={`/${locale}/contact`} className="inline-block bg-gold-gradient text-on-primary px-12 py-6 font-label-caps uppercase tracking-[0.2em] shadow-2xl gold-glow hover:scale-[1.02] transition-transform rounded-xl">
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
