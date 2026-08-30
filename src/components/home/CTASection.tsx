"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getPublishedCountries } from '@/data/countries';

export function CTASection() {
  const t = useTranslations('home.cta');
  const tForm = useTranslations('form');
  const locale = useLocale();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return tForm('validation.nameRequired');
        if (value.trim().length < 2) return tForm('validation.nameTooShort');
        if (!/^[a-zA-Z\s\u0600-\u06FF]+$/.test(value)) return tForm('validation.nameInvalid');
        return '';
      case 'email':
        if (!value.trim()) return tForm('validation.emailRequired');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return tForm('validation.emailInvalid');
        return '';
      case 'phone':
        if (!value.trim()) return tForm('validation.phoneRequired');
        const cleanPhone = value.replace(/[^\d+]/g, '');
        const digits = cleanPhone.replace(/[^\d]/g, '');
        if (digits.length < 8) return tForm('validation.phoneTooShort');
        if (!/^\+?[\d\s-]{8,15}$/.test(cleanPhone)) return tForm('validation.phoneInvalid');
        return '';
      case 'destination':
        if (!value) return tForm('validation.destinationRequired');
        return '';
      case 'message':
        if (value.length > 1000) return tForm('validation.messageTooLong');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allFields = ['fullName', 'email', 'phone', 'destination', 'message'];
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

    setSubmitError(null);
    setIsSubmitting(true);

    const gotcha = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement)?.value || '';
    if (gotcha) {
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
          ...formData,
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

  const getInputClassName = (fieldName: string) => {
    const baseClass =
      'w-full bg-background/50 border rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary transition-all outline-none';
    const isTouched = touched[fieldName];
    const error = errors[fieldName];
    const value = formData[fieldName as keyof typeof formData];

    if (isTouched && error) {
      return `${baseClass} border-red-500/80 focus:border-red-500`;
    }
    if (isTouched && value && !error) {
      return `${baseClass} border-green-500/50 focus:border-green-500`;
    }
    return `${baseClass} border-white/10 focus:border-primary`;
  };

  return (
    <section id="cta-section" className="py-32 container mx-auto px-8">
      <div className="glass-card rounded-[48px] overflow-hidden grid lg:grid-cols-2">
        {/* Left: trust info */}
        <div className="p-12 md:p-20 space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">{t('heading')}</h2>
          <p className="text-on-surface-variant text-lg">{t('description')}</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('features.confidential.title')}</h4>
                <p className="text-sm text-on-surface-variant">{t('features.confidential.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">{t('features.response.title')}</h4>
                <p className="text-sm text-on-surface-variant">{t('features.response.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-surface-container-high/50 p-12 md:p-20 border-l border-white/5 relative overflow-hidden">
          {/* Decorative Rings */}
          <div className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 -right-[400px] -bottom-[400px]"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 -right-[300px] -bottom-[300px]"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 -right-[200px] -bottom-[200px]"></div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6" noValidate>
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
              <input
                id="cta-gotcha"
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                  <span>{tForm('fullName')}</span>
                  <span className="text-[#ecc06f] ms-1">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  placeholder={tForm('namePlaceholder')}
                  className={getInputClassName('fullName')}
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
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                  <span>{tForm('email')}</span>
                  <span className="text-[#ecc06f] ms-1">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder={tForm('emailPlaceholder')}
                  className={getInputClassName('email')}
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                  <span>{tForm('phone')}</span>
                  <span className="text-[#ecc06f] ms-1">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder={tForm('phonePlaceholder')}
                  className={getInputClassName('phone')}
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

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center">
                  <span>{tForm('destination')}</span>
                  <span className="text-[#ecc06f] ms-1">*</span>
                </label>
                <div className="relative">
                  <select
                    name="destination"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none appearance-none cursor-pointer"
                    value={formData.destination}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled className="text-on-surface-variant/40">
                      {tForm('destinationPlaceholder')}
                    </option>
                    {getPublishedCountries(locale).map((c) => (
                      <option key={c.slug} value={c.name} className="bg-surface-container-high">
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant pointer-events-none text-base">expand_more</span>
                </div>
                {touched.destination && errors.destination && (
                  <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    <span>{errors.destination}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tForm('message')}
                </label>
                <span className="text-[10px] text-on-surface-variant/40">
                  {formData.message.length} / 1000
                </span>
              </div>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder={tForm('messagePlaceholder')}
                className={getInputClassName('message')}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.message && errors.message && (
                <span className="text-red-400 text-xs mt-1 flex items-center gap-1 animate-fadeIn">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  <span>{errors.message}</span>
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-gradient text-on-primary py-5 rounded-xl font-bold text-lg gold-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin size-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Sending…</span>
                </>
              ) : tForm('submit')}
            </button>

            {/* Inline error — user's form data preserved, no page redirect on failure */}
            {submitError && (
              <div
                role="alert"
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5" aria-hidden="true">error</span>
                <span>{submitError}</span>
              </div>
            )}

            <p className="text-xs text-center text-on-surface-variant">
              {t('form.termsPrefix')}{' '}
              <a className="text-primary hover:underline" href="#">{t('form.terms')}</a>
              {' '}&amp;{' '}
              <a className="text-primary hover:underline" href="#">{t('form.privacy')}</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
