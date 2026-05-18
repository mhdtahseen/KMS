import { useTranslations } from 'next-intl';
import Image from 'next/image';

type HomeServiceCard = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: [string, string];
};

const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    title: 'Study Visas',
    tagline: 'Academic Excellence',
    description:
      'Admission and visa assistance for top-tier universities across the globe. We manage the complexity of scholarships and compliance.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCz-thz0QwBg3xZcddohq2JvnrIttxQdyHLDPe1dVmiavCCfozRv_uVUbALNW9MUBUoRJ3kMlXmrqzNB9sP0sQdeQITLIsqNW4r5BkH_-Q6Qm9C6GsFEJRxr7ZpgrvvO--JSaKpj3xCGKLqXDad5oZ6xfWimkUv1DnxrRRfprkxCmUDCWDMzMShs2ZR_6Fmo60JGWAHbqwa0D3EFvYtdh_sSBqOsycolll-X9hSlaX4K7X9C42cUx-xLh4tCUxc0cgTiCQ4gcl9st1V',
    highlights: ['Ivy League & Russell Group Expertise', 'Post-Study Work Permit Strategy'],
  },
  {
    title: 'Work Permits',
    tagline: 'Corporate Mobility',
    description:
      "For high-achieving professionals and intra-company transfers. Secure your right to work in the world's most vibrant economies.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE1FRaIQs21rmCUN7UjjQjsNVTHDpsBcibEb0oHBz6A52UJHqDudCb1DwjoOy_L4Sdn1-0mkg0dICnStOUj2SglpE9F-wC02ej1EY_dm8kru7aj6_ncHAAAC9BqZ4iUpK7wLlnwnbjNpbuZkEgOmCDXYmcRGv1iag4ZWsrNff7efj8H0O71tAjfJJDR3ssZuIF1XTV8-QbAP58iZm_9GN3tlURaWl5DeA-HiVfj77azBtu8iARy2qpJAGvK9J2Dc_rCSzw-qmNIej6',
    highlights: ['Critical Skills Occupations', 'Executive & Specialized Talent Visas'],
  },
  {
    title: 'Permanent Residency',
    tagline: 'Foundational Security',
    description:
      'The ultimate goal: permanent status. We specialize in point-based systems and investment-based residency pathways.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCBfCcKovXSmnVeIS3BTdnuugjkFxMgnx-8Bwv_NrX3CfnE3P2fay_t9GmgnPaFykmW70x1hYysDJguHPH4Zz9DtTWCmm1Mqtwa__DzQ-U5qziH4kE2hfsNKm-kXsM8PbdLrmjOEcEEcyn3BUHJFv3KAfweCu6g2_JRuXPcznJVNrGTcIIVglHmQxktlVEO28N8anD5B7GY74OPrhBK08kvbH0soCTOT3IJ4nM6F98U3r2HWTwiS2aW5sfnq6R--xkeOG38R27hMhW',
    highlights: ['Express Entry & State Sponsorship', 'High Net Worth Individual (HNWI) Residency'],
  },
];

export function ServicesSection() {
  const t = useTranslations('home.services');

  return (
    <section className="py-32 container mx-auto px-8">
      <div className="mb-20 text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-headline font-semibold">{t('heading')}</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">{t('subtext')}</p>
      </div>

      <div className="space-y-24">
        {HOME_SERVICE_CARDS.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div key={card.title} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              <div className="w-full md:w-3/5 glass-card rounded-[32px] overflow-hidden aspect-[16/9] relative group">
                <Image className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={card.title} src={card.image} fill />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className={`absolute bottom-8 left-8 right-8 ${isReversed ? 'text-left' : ''}`}>
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{card.tagline}</span>
                  <h3 className="text-3xl font-headline font-bold">{card.title}</h3>
                </div>
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <p className="text-lg text-on-surface-variant leading-relaxed">{card.description}</p>
                <ul className="space-y-4">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
