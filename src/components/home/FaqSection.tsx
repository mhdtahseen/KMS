import { useTranslations } from 'next-intl';
import { FaqJsonLd } from '@/components/seo/JsonLd';

const FAQ_KEYS = [
  'countries',
  'location',
  'services',
  'credentials',
  'trackRecord',
  'booking',
  'arabic',
  'firstStep',
] as const;

export function FaqSection() {
  const t = useTranslations('home.faq');

  const questions = FAQ_KEYS.map((key) => ({
    q: t(`items.${key}.q`),
    a: t(`items.${key}.a`),
  }));

  return (
    <section id="faq" className="py-32 container mx-auto px-8">
      <FaqJsonLd questions={questions} />

      <div className="mb-16 text-center space-y-4">
        <span className="text-primary text-xs font-bold tracking-widest uppercase block">
          {t('eyebrow')}
        </span>
        <h2 className="text-4xl md:text-5xl font-headline font-semibold">{t('heading')}</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">{t('subtext')}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_KEYS.map((key) => (
          <details key={key} className="group glass-card rounded-2xl px-6 py-5 open:pb-6">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-headline text-lg font-medium text-on-background">
              {t(`items.${key}.q`)}
              <span
                className="material-symbols-outlined text-primary shrink-0 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              >
                expand_more
              </span>
            </summary>
            <p className="mt-4 text-on-surface-variant leading-relaxed">{t(`items.${key}.a`)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
