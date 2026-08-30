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
    <div className="glass-card p-10 lg:p-16 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10">
        <h2 className="font-headline text-3xl text-on-background mb-10">{bt('formHeading')}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
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
            <input
              id="booking-gotcha"
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('fullName')}</label>
            <input
              name="fullName"
              required
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary focus:bg-white/10 transition-all"
              placeholder={t('namePlaceholder')}
              type="text"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('email')}</label>
            <input
              name="email"
              required
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary focus:bg-white/10 transition-all"
              placeholder={t('emailPlaceholder')}
              type="email"
            />
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('phone')}</label>
            <input
              name="phone"
              required
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary focus:bg-white/10 transition-all"
              placeholder={t('phonePlaceholder')}
              type="tel"
            />
          </div>
          {/* Service */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('service')}</label>
            <select
              name="service"
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface focus:ring-0 focus:border-primary focus:bg-white/10 transition-all appearance-none cursor-pointer"
            >
              {getPublishedServices(locale).map(s => (
                <option key={s.slug} value={s.slug} className="bg-surface-container-high">{s.title}</option>
              ))}
            </select>
          </div>
          {/* Country */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('destination')}</label>
            <input
              name="destination"
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary focus:bg-white/10 transition-all"
              placeholder={t('destinationPlaceholder')}
              type="text"
            />
          </div>
          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('message')}</label>
            <textarea
              name="message"
              className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-primary focus:bg-white/10 transition-all resize-none"
              placeholder={t('messagePlaceholder')}
              rows={4}
            ></textarea>
          </div>
          <div className="md:col-span-2 pt-6">
            <button
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary/80 to-primary text-on-primary font-bold py-5 rounded-xl text-lg hover:shadow-[0_8px_24px_-4px_rgba(236,192,111,0.3)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin size-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Processing…</span>
                </>
              ) : (
                <>
                  <span>{t('submit')}</span>
                  <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
                </>
              )}
            </button>

            {/* Inline error message — preserves form data, no page refresh */}
            {submitError && (
              <div
                role="alert"
                className="mt-4 flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5" aria-hidden="true">error</span>
                <span>{submitError}</span>
              </div>
            )}

            <p className="text-center text-on-surface-variant/60 text-[11px] mt-6 italic">
              {t('privacy')}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
