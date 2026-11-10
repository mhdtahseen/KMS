import Link from 'next/link';
import { useLocale } from 'next-intl';

type ConsultationBannerProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  button: string;
  /** Small reassurance line under the button. */
  trust?: string;
};

/** Closing call-to-action panel shared by the service, country and about pages. */
export function ConsultationBanner({ eyebrow, heading, subtext, button, trust }: ConsultationBannerProps) {
  const locale = useLocale();

  return (
    <section className="relative py-20 md:py-28" data-cta-section>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="glass-luxe relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-24 text-center">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-[640px] rounded-full bg-gold/35 blur-[140px]" />
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full border border-gold-soft/10" />
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 size-[640px] rounded-full border border-gold-soft/15" />
            <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 size-[400px] rounded-full border border-gold-soft/20" />
          </div>

          <div className="mx-auto max-w-3xl">
            {eyebrow && <p className="eyebrow eyebrow-center">{eyebrow}</p>}
            <h2 className="display-2 mt-6 text-on-background">{heading}</h2>
            {subtext && <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-on-surface-variant">{subtext}</p>}
            <Link href={`/${locale}/contact`} className="btn-gold mt-10">
              {button}
              <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
            </Link>
            {trust && <p className="mt-8 text-xs font-medium tracking-[0.08em] text-on-surface-variant/75">{trust}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
