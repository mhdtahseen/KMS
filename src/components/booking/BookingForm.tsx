'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useBookingForm } from '@/hooks/useBookingForm';
import { getPublishedServices } from '@/data/services';

export function BookingForm() {
  const t = useTranslations('form');
  const bt = useTranslations('booking');
  const locale = useLocale();
  const services = getPublishedServices(locale);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: services[0]?.slug || '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { isSubmitting, submitError, submitForm } = useBookingForm(
    t('successToast'),
    t('errorToast'),
    locale
  );

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return t('validation.nameRequired');
        if (value.trim().length < 2) return t('validation.nameTooShort');
        if (!/^[a-zA-Z\s\u0600-\u06FF]+$/.test(value)) return t('validation.nameInvalid');
        return '';
      case 'email':
        if (!value.trim()) return t('validation.emailRequired');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return t('validation.emailInvalid');
        return '';
      case 'phone':
        if (!value.trim()) return t('validation.phoneRequired');
        const cleanPhone = value.replace(/[^\d+]/g, '');
        const digits = cleanPhone.replace(/[^\d]/g, '');
        if (digits.length < 8) return t('validation.phoneTooShort');
        if (!/^\+?[\d\s-]{8,15}$/.test(cleanPhone)) return t('validation.phoneInvalid');
        return '';
      case 'message':
        if (value.length > 1000) return t('validation.messageTooLong');
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!formData.phone) {
      setFormData((prev) => ({ ...prev, phone: '+974 ' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allFields = ['fullName', 'email', 'phone', 'service', 'destination', 'message'];
    const newTouched: Record<string, boolean> = {};
    allFields.forEach((f) => {
      newTouched[f] = true;
    });
    setTouched(newTouched);

    const newErrors: Record<string, string> = {};
    allFields.forEach((f) => {
      const err = validateField(f, formData[f as keyof typeof formData]);
      if (err) {
        newErrors[f] = err;
      }
    });
    setErrors(newErrors);

    const firstInvalidField = Object.keys(newErrors)[0];
    if (firstInvalidField) {
      const element = document.getElementsByName(firstInvalidField)[0];
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const gotcha = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement)?.value || '';
    submitForm({
      ...formData,
      _gotcha: gotcha,
    });
  };

  const getInputClassName = (fieldName: string) => {
    const baseClass =
      'bg-white/5 border-0 border-b-2 py-3 px-1 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:bg-white/10 transition-all w-full';
    const isTouched = touched[fieldName];
    const error = errors[fieldName];
    const value = formData[fieldName as keyof typeof formData];

    if (isTouched && error) {
      return `${baseClass} border-red-500 focus:border-red-500`;
    }
    if (isTouched && value && !error) {
      return `${baseClass} border-green-500/50 focus:border-green-500`;
    }
    return `${baseClass} border-outline-variant/30 focus:border-primary`;
  };

  return (
    <div className="glass-card p-10 lg:p-16 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10">
        <h2 className="font-headline text-3xl text-on-background mb-10">{bt('formHeading')}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" noValidate>
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
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center">
              <span>{t('fullName')}</span>
              <span className="text-[#ecc06f] ms-1">*</span>
            </label>
            <input
              name="fullName"
              className={getInputClassName('fullName')}
              placeholder={t('namePlaceholder')}
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.fullName && errors.fullName && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                <span className="material-symbols-outlined text-[14px]">error</span>
                <span>{errors.fullName}</span>
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center">
              <span>{t('email')}</span>
              <span className="text-[#ecc06f] ms-1">*</span>
            </label>
            <input
              name="email"
              className={getInputClassName('email')}
              placeholder={t('emailPlaceholder')}
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                <span className="material-symbols-outlined text-[14px]">error</span>
                <span>{errors.email}</span>
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center">
              <span>{t('phone')}</span>
              <span className="text-[#ecc06f] ms-1">*</span>
            </label>
            <input
              name="phone"
              className={getInputClassName('phone')}
              placeholder={t('phonePlaceholder')}
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handlePhoneFocus}
            />
            {touched.phone && errors.phone && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                <span className="material-symbols-outlined text-[14px]">error</span>
                <span>{errors.phone}</span>
              </span>
            )}
          </div>

          {/* Service */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('service')}</label>
            <div className="relative">
              <select
                name="service"
                className="bg-white/5 border-0 border-b-2 border-outline-variant/30 py-3 px-1 text-on-surface focus:ring-0 focus:border-primary focus:bg-white/10 transition-all appearance-none cursor-pointer w-full"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {services.map(s => (
                  <option key={s.slug} value={s.slug} className="bg-surface-container-high">{s.title}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-1 top-3 text-on-surface-variant pointer-events-none text-base">expand_more</span>
            </div>
          </div>

          {/* Country */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('destination')}</label>
            <input
              name="destination"
              className={getInputClassName('destination')}
              placeholder={t('destinationPlaceholder')}
              type="text"
              value={formData.destination}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-primary uppercase tracking-widest">{t('message')}</label>
              <span className="text-[10px] text-on-surface-variant/40">
                {formData.message.length} / 1000
              </span>
            </div>
            <textarea
              name="message"
              className={getInputClassName('message')}
              placeholder={t('messagePlaceholder')}
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touched.message && errors.message && (
              <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                <span className="material-symbols-outlined text-[14px]">error</span>
                <span>{errors.message}</span>
              </span>
            )}
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

