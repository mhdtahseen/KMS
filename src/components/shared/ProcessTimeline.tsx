import { useTranslations } from 'next-intl';
import { SectionHeading } from '@/components/shared/SectionHeading';

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

interface ProcessTimelineProps {
  eyebrow?: string;
  heading?: string;
  /** Italic gold phrase after the heading. */
  accent?: string;
  steps?: ProcessStep[];
}

const DEFAULT_STEPS = ['audit', 'strategy', 'execution', 'onboarding'] as const;

export function ProcessTimeline({ eyebrow, heading, accent, steps }: ProcessTimelineProps) {
  const t = useTranslations('home.process');

  const displaySteps: Omit<ProcessStep, 'icon'>[] =
    steps ??
    DEFAULT_STEPS.map((key) => ({
      title: t(`steps.${key}.title`),
      description: t(`steps.${key}.description`),
    }));

  const gridClassByCount: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
  };
  const gridClass = gridClassByCount[displaySteps.length] || 'lg:grid-cols-4';

  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          align="center"
          eyebrow={eyebrow ?? t('eyebrow')}
          heading={heading ?? t('heading')}
          accent={heading ? accent : t('headingAccent')}
        />

        <ol className={`mt-20 md:mt-24 grid sm:grid-cols-2 ${gridClass} gap-x-8 gap-y-14`}>
          {displaySteps.map((step, index) => (
            <li key={index} className="group relative">
              {/* rail + node */}
              <div className="relative h-px bg-white/10" aria-hidden="true">
                <span className="absolute inset-y-0 start-0 w-0 bg-gradient-to-r rtl:bg-gradient-to-l from-gold-soft to-gold-soft/0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                <span className="absolute -top-[5px] start-0 size-[11px] rounded-full border border-gold-soft bg-background transition-colors duration-500 group-hover:bg-gold-soft" />
              </div>

              <p className="numeral mt-8 text-7xl md:text-[5.5rem] leading-none font-light text-transparent [-webkit-text-stroke:1px_rgba(196,154,48,0.55)] transition-all duration-700 group-hover:[-webkit-text-stroke:1px_rgba(234,217,168,0.95)]" aria-hidden="true">
                {(index + 1).toString().padStart(2, '0')}
              </p>
              <h3 className="mt-6 font-headline text-[1.75rem] leading-tight font-medium text-on-background">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant max-w-[30ch]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
