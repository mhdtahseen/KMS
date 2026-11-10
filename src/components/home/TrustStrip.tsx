import { useTranslations } from 'next-intl';

const ITEMS = ['mara', 'ircc', 'google', 'clients', 'nationalities', 'bilingual', 'est'] as const;

/** Slow credentials ribbon beneath the hero. Pauses on hover. */
export function TrustStrip() {
  const t = useTranslations('home.marquee');

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((key) => (
        <li key={key} className="flex items-center">
          <span className="font-headline italic text-xl md:text-2xl text-on-background/80 whitespace-nowrap px-8 md:px-12">
            {t(key)}
          </span>
          <span className="size-1.5 rotate-45 bg-gold-soft/80" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Credentials" className="relative">
      <div className="gold-rule" />
      <div className="marquee overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
      <div className="gold-rule" />
    </section>
  );
}
