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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fd.get('fullName'),
          email: fd.get('email'),
          destination: fd.get('destination'),
          message: fd.get('message'),
        }),
      });
      if (!res.ok) throw new Error();
      toast.success(tForm('successToast'));
      setTimeout(() => router.push(`/${locale}/thank-you`), 1000);
    } catch {
      toast.error(tForm('errorToast'));
    } finally {
      setIsSubmitting(false);
    }
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

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tForm('fullName')}
                </label>
                <input
                  name="fullName"
                  required
                  type="text"
                  placeholder={tForm('namePlaceholder')}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {tForm('email')}
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder={tForm('emailPlaceholder')}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {tForm('destination')}
              </label>
              <div className="relative">
                <select
                  name="destination"
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled hidden>{tForm('destinationPlaceholder')}</option>
                  {getPublishedCountries(locale).map((c) => (
                    <option key={c.slug} value={c.name} className="bg-surface-container-high">
                      {c.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {tForm('message')}
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={tForm('messagePlaceholder')}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-gradient text-on-primary py-5 rounded-xl font-bold text-lg gold-glow transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Sending…</span>
                </>
              ) : tForm('submit')}
            </button>
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

