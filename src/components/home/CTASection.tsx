"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { getPublishedCountries } from '@/data/countries';

export function CTASection() {
  const t = useTranslations('home.cta');
  const tForm = useTranslations('form');
  const locale = useLocale();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitError(null);
    setIsSubmitting(true);

    // Honeypot check on the client side as a first pass
    const gotcha = fd.get('_gotcha') as string;
    if (gotcha) {
      // Silently succeed for bots
      setIsSubmitting(false);
      toast.success(tForm('successToast'));
      setTimeout(() => router.push(`/${locale}/thank-you`), 1000);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fd.get('fullName'),
          email: fd.get('email'),
          destination: fd.get('destination'),
          message: fd.get('message'),
          _gotcha: gotcha,
          locale,
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const errorMsg =
          (json as { error?: string }).error ?? tForm('errorToast');
        setSubmitError(errorMsg);
        toast.error(errorMsg);
        return;
      }

      toast.success(tForm('successToast'));
      setTimeout(() => router.push(`/${locale}/thank-you`), 1000);
    } catch {
      const errorMsg = tForm('errorToast');
      setSubmitError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tFooter = useTranslations('footer');
  const phone = tFooter('phone');
  const whatsapp = tFooter('whatsapp');

  const features = [
    { icon: 'verified_user', title: t('features.confidential.title'), description: t('features.confidential.description') },
    { icon: 'schedule', title: t('features.response.title'), description: t('features.response.description') },
  ];

  return (
    <section id="cta-section" data-cta-section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative isolate grid overflow-hidden rounded-[32px] border border-white/10 lg:grid-cols-2 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.9)]">
          {/* Left: dark information panel */}
          <div className="relative overflow-hidden bg-surface-container-lowest p-8 md:p-14 lg:p-16">
            <div aria-hidden="true" className="absolute -top-32 -start-32 size-[420px] rounded-full bg-gold/30 blur-[120px]" />
            <div className="relative">
              <p className="eyebrow">{t('eyebrow')}</p>
              <h2 className="display-2 mt-6 text-on-background">
                {t('heading')} <span className="italic font-normal text-gradient-gold">{t('headingAccent')}</span>
              </h2>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-on-surface-variant">{t('description')}</p>

              <ul className="mt-10 space-y-6">
                {features.map((f) => (
                  <li key={f.title} className="flex items-start gap-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold-soft/35 bg-gold/15 text-champagne">
                      <span className="material-symbols-outlined icon-fine !text-[24px]" aria-hidden="true">{f.icon}</span>
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl leading-tight font-medium text-on-background">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-on-surface-variant">{t('direct')}</p>
                <div className="latin mt-4 flex flex-wrap gap-x-10 gap-y-3" dir="ltr">
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="numeral text-2xl md:text-3xl text-on-background transition-colors duration-300 hover:text-champagne">
                    {phone}
                  </a>
                  <a
                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors duration-300 hover:text-champagne"
                  >
                    WhatsApp
                    <span className="material-symbols-outlined !text-[16px]" aria-hidden="true">north_east</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: glass form */}
          <div className="relative overflow-hidden border-t border-white/10 bg-white/[0.06] p-8 md:p-14 lg:border-t-0 lg:border-s lg:p-16 backdrop-blur-2xl">
            <div aria-hidden="true" className="absolute -bottom-52 -end-52 size-[520px] rounded-full border border-gold-soft/15" />
            <div aria-hidden="true" className="absolute -bottom-36 -end-36 size-[360px] rounded-full border border-gold-soft/20" />
            <div aria-hidden="true" className="absolute -bottom-40 -end-40 size-[420px] rounded-full bg-gold-soft/10 blur-[110px]" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Honeypot — off-screen, invisible to real users */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  top: '-9999px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                  opacity: 0,
                  pointerEvents: 'none',
                }}
              >
                <label htmlFor="cta-gotcha">Leave this field blank</label>
                <input id="cta-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="cta-name" className="field-label">{tForm('fullName')}</label>
                  <input id="cta-name" name="fullName" required type="text" autoComplete="name" placeholder={tForm('namePlaceholder')} className="field" />
                </div>
                <div>
                  <label htmlFor="cta-email" className="field-label">{tForm('email')}</label>
                  <input id="cta-email" name="email" required type="email" autoComplete="email" placeholder={tForm('emailPlaceholder')} className="field" dir="ltr" />
                </div>
              </div>

              <div>
                <label htmlFor="cta-destination" className="field-label">{tForm('destination')}</label>
                <div className="relative">
                  <select id="cta-destination" name="destination" className="field appearance-none cursor-pointer pe-12" defaultValue="">
                    <option value="" disabled hidden>{tForm('destinationPlaceholder')}</option>
                    {getPublishedCountries(locale).map((c) => (
                      <option key={c.slug} value={c.name} className="bg-surface-container-high">
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-gold-soft" aria-hidden="true">expand_more</span>
                </div>
              </div>

              <div>
                <label htmlFor="cta-message" className="field-label">{tForm('message')}</label>
                <textarea id="cta-message" name="message" rows={4} placeholder={tForm('messagePlaceholder')} className="field resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-gold w-full !min-h-[3.75rem]">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>{t('sending')}</span>
                  </>
                ) : (
                  <>
                    {tForm('submit')}
                    <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
                  </>
                )}
              </button>

              {/* Inline error — user's form data preserved, no page redirect on failure */}
              {submitError && (
                <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <span className="material-symbols-outlined text-base shrink-0 mt-0.5" aria-hidden="true">error</span>
                  <span>{submitError}</span>
                </div>
              )}

              <p className="flex items-center justify-center gap-2 text-center text-xs text-on-surface-variant">
                <span className="material-symbols-outlined !text-[15px] text-gold-soft" aria-hidden="true">lock</span>
                <span>
                  {t('form.termsPrefix')}{' '}
                  <Link className="text-champagne underline-offset-4 hover:underline" href={`/${locale}/privacy`}>{t('form.privacy')}</Link>.
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
