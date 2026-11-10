import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Spotlight } from '@/components/shared/Spotlight';

const CARDS = [
  { key: 'certified', icon: 'workspace_premium' },
  { key: 'candid', icon: 'balance' },
  { key: 'confidential', icon: 'lock' },
  { key: 'bilingual', icon: 'translate' },
] as const;

/** Split layout: large typographic figures on one side, reasons on the other. */
export function WhySection() {
  const t = useTranslations('home.why');
  const tTrust = useTranslations('home.trust');

  const stats = [
    { value: '1000', suffix: '+', label: tTrust('clients') },
    { value: '98', suffix: '%', label: tTrust('successRate') },
    { value: '20', suffix: '+', label: tTrust('nationalities') },
    { value: '5', suffix: '+', label: tTrust('years') },
  ];

  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-surface-container-lowest/70" />
        <div className="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-1/3 rtl:translate-x-1/3 size-[700px] rounded-full bg-gold/15 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-12 gap-16 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} accent={t('headingAccent')} subtext={t('subtext')} />

          <dl className="mt-14 grid grid-cols-2 gap-x-8">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-white/10 py-7 md:py-9">
                <dd className="numeral text-6xl md:text-[5.5rem] leading-none font-medium tracking-tight text-on-background">
                  {s.value}
                  <span className="text-gradient-gold">{s.suffix}</span>
                </dd>
                <dt className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <Spotlight className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4 lg:pt-4">
          {CARDS.map(({ key, icon }) => (
            <div key={key} className="glass-luxe is-liftable rounded-3xl p-7 md:p-8 flex items-start gap-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne">
                <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">{icon}</span>
              </span>
              <div>
                <h3 className="font-headline text-2xl md:text-[1.7rem] leading-tight font-medium text-on-background">{t(`cards.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{t(`cards.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
