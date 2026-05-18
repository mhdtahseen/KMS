'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';

export function ServicePageTemplate({ service }: { service: Service }) {
  const locale = useLocale();

  const destinationCards = service.destinationCards ?? [];

  return (
    <main className="bg-background text-on-background font-body-md overflow-x-hidden">
      <section className="relative min-h-[819px] flex items-center justify-center pt-24 pb-section-padding px-6 md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image className="w-full h-full object-cover opacity-30" src={service.heroImage} alt={service.title} fill priority />
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
            <Link href={`/${locale}/book`} className="px-10 py-5 bg-primary-container text-on-primary-container font-label-caps uppercase tracking-widest rounded-none hover:bg-primary transition-all">
              Start Assessment
            </Link>
            <Link href={`/${locale}/book`} className="px-10 py-5 glass-card text-on-background font-label-caps uppercase tracking-widest rounded-none hover:bg-white/10 transition-all">
              Download Brochure
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-section-padding px-6 md:px-margin-desktop bg-surface-container-lowest">
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
        <section className="py-section-padding px-6 md:px-margin-desktop bg-background">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-h2 text-on-background mb-4">Strategic Destinations</h2>
                <p className="font-body-md text-on-surface-variant">Selected jurisdictions offering high-priority processing for skilled professionals from the GCC region.</p>
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

      <section className="py-section-padding px-6 md:px-margin-desktop bg-surface-container-low" id="eligibility">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-h2 text-on-background mb-4">Eligibility Matrix</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Assess your standing against international standards of professional excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {service.eligibilityCriteria.map((criterion) => {
              if (criterion.featured) {
                return (
                  <div key={criterion.title} className="glass-card p-10 bg-primary/5 border-primary/30 flex flex-col justify-between md:row-span-2">
                    <div>
                      <span className="material-symbols-outlined text-primary text-4xl mb-6">{criterion.icon}</span>
                      <h4 className="font-headline text-2xl md:text-h3 mb-4">{criterion.title}</h4>
                      <p className="font-body-md text-on-surface-variant mb-6">{criterion.description}</p>
                      {criterion.checkPoints ? (
                        <ul className="space-y-4">
                          {criterion.checkPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-primary text-xl mt-1">check_circle</span>
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
                    <span className="material-symbols-outlined text-primary text-4xl mb-6">{criterion.icon}</span>
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

      <section className="py-section-padding px-6 md:px-margin-desktop bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative">
            <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>
            {service.processSteps.map((step) => (
              <div key={step.title} className="relative z-10 px-6 py-12 text-center group">
                <div className="w-20 h-20 mx-auto glass-card flex items-center justify-center mb-8 border-primary/40 group-hover:bg-primary transition-all duration-500">
                  <span className="font-headline text-2xl text-primary group-hover:text-background">{step.icon}</span>
                </div>
                <h5 className="font-label-caps text-on-background mb-4 uppercase tracking-widest">{step.title}</h5>
                <p className="text-sm text-on-surface-variant/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding px-6 md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="glass-card p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-96 h-96 gold-halo opacity-30 -mr-48 -mt-48 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline text-4xl md:text-[42px] mb-8 leading-tight">{service.ctaHeading}</h2>
              <p className="font-body-lg text-on-surface-variant/80 mb-0">Your journey from Doha to global leadership begins with a single, confidential consultation. Let our experts chart your path.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link href={`/${locale}/book`} className="inline-block bg-primary text-on-primary px-12 py-6 font-label-caps uppercase tracking-[0.2em] shadow-2xl hover:bg-secondary transition-all">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
