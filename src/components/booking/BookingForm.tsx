'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useBookingForm } from '@/hooks/useBookingForm';
import { getPublishedServices } from '@/data/services';

export function BookingForm() {
  const t = useTranslations('form');
  const bt = useTranslations('booking');
  const locale = useLocale();
  const { isSubmitting, submitError, submitForm } = useBookingForm(
    t('successToast'),
    t('errorToast'),
    locale
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      destination: formData.get('destination') as string,
      message: formData.get('message') as string,
      _gotcha: formData.get('_gotcha') as string,
    };
    submitForm(data);
  };

  return (
    <div className="glass-luxe relative h-full overflow-hidden rounded-[28px] p-8 md:p-12">
      <div aria-hidden="true" className="absolute -bottom-52 -end-52 size-[520px] rounded-full border border-gold-soft/15" />
      <div aria-hidden="true" className="absolute -bottom-36 -end-36 size-[360px] rounded-full border border-gold-soft/20" />
      <div aria-hidden="true" className="absolute -bottom-40 -end-40 size-[420px] rounded-full bg-gold-soft/10 blur-[110px]" />

      <div className="relative z-10">
        <h2 className="font-headline text-3xl md:text-4xl leading-tight font-medium text-on-background">{bt('formHeading')}</h2>

        <form onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Honeypot — visually hidden, off-screen; real users never fill this */}
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
            <label htmlFor="booking-gotcha">Leave this field blank</label>
            <input id="booking-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="booking-name" className="field-label">{t('fullName')}</label>
            <input id="booking-name" name="fullName" required type="text" autoComplete="name" placeholder={t('namePlaceholder')} className="field" />
          </div>
          <div>
            <label htmlFor="booking-email" className="field-label">{t('email')}</label>
            <input id="booking-email" name="email" required type="email" autoComplete="email" placeholder={t('emailPlaceholder')} className="field" dir="ltr" />
          </div>
          <div>
            <label htmlFor="booking-phone" className="field-label">{t('phone')}</label>
            <input id="booking-phone" name="phone" required type="tel" autoComplete="tel" placeholder={t('phonePlaceholder')} className="field" dir="ltr" />
          </div>
          <div>
            <label htmlFor="booking-service" className="field-label">{t('service')}</label>
            <div className="relative">
              <select id="booking-service" name="service" className="field appearance-none cursor-pointer pe-12">
                {getPublishedServices(locale).map((s) => (
                  <option key={s.slug} value={s.slug} className="bg-surface-container-high">{s.title}</option>
                ))}
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-gold-soft" aria-hidden="true">expand_more</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="booking-destination" className="field-label">{t('destination')}</label>
            <input id="booking-destination" name="destination" type="text" placeholder={t('destinationPlaceholder')} className="field" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="booking-message" className="field-label">{t('message')}</label>
            <textarea id="booking-message" name="message" rows={4} placeholder={t('messagePlaceholder')} className="field resize-none" />
          </div>

          <div className="md:col-span-2 pt-2">
            <button disabled={isSubmitting} type="submit" className="btn-gold w-full !min-h-[3.75rem]">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>{t('processing')}</span>
                </>
              ) : (
                <>
                  <span>{t('submit')}</span>
                  <span className="material-symbols-outlined !text-[18px] rtl:rotate-180" aria-hidden="true">arrow_forward</span>
                </>
              )}
            </button>

            {/* Inline error message — preserves form data, no page refresh */}
            {submitError && (
              <div role="alert" className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5" aria-hidden="true">error</span>
                <span>{submitError}</span>
              </div>
            )}

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-on-surface-variant">
              <span className="material-symbols-outlined !text-[15px] text-gold-soft" aria-hidden="true">lock</span>
              {t('privacy')}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
