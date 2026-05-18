"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { services } from '@/data/services';

export function CTASection() {
  const t = useTranslations('home.cta');
  const tForm = useTranslations('form');
  const locale = useLocale();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit form data here.
    toast.success(tForm('successToast'));
    
    // Redirect to the thank-you page after a short delay
    setTimeout(() => {
        router.push(`/${locale}/thank-you`);
    }, 1000);
  };
  
  return (
    <section id="cta-section" className="py-32 container mx-auto px-8">
        <div className="glass-card rounded-[48px] overflow-hidden grid lg:grid-cols-2">
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
            
            <div className="bg-surface-container-low p-12 md:p-20 flex items-center justify-center relative overflow-hidden">
                {/* Decorative Rings */}
                <div className="absolute w-[800px] h-[800px] rounded-full border border-primary/5 -right-[400px] -bottom-[400px]"></div>
                <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 -right-[300px] -bottom-[300px]"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/20 -right-[200px] -bottom-[200px]"></div>

                <form onSubmit={handleSubmit} className="w-full max-w-md relative z-10 space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <input 
                                className="w-full bg-surface border border-outline-variant rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                                id="name" 
                                required
                                placeholder={tForm('fullName')} 
                                type="text"
                            />
                            <label 
                                className="absolute left-5 -top-2.5 bg-surface-container-low px-1 text-xs font-bold text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" 
                                htmlFor="name"
                            >
                                {tForm('fullName')}
                            </label>
                        </div>
                        <div className="relative">
                            <input 
                                className="w-full bg-surface border border-outline-variant rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors peer placeholder-transparent" 
                                id="email" 
                                required
                                placeholder={tForm('email')} 
                                type="email"
                            />
                            <label 
                                className="absolute left-5 -top-2.5 bg-surface-container-low px-1 text-xs font-bold text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary" 
                                htmlFor="email"
                            >
                                {tForm('email')}
                            </label>
                        </div>
                        <div className="relative">
                            <select 
                                className="w-full bg-surface border border-outline-variant rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors text-on-surface appearance-none" 
                                id="interest"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled hidden>{tForm('service')}</option>
                                {services.map((s) => (
                                    <option key={s.slug} value={s.slug}>{s.title}</option>
                                ))}
                            </select>
                            <span className="material-symbols-outlined absolute right-5 top-4 text-on-surface-variant pointer-events-none">expand_more</span>
                        </div>
                    </div>
                    <button type="submit" className="block w-full text-center bg-primary-container text-white py-4 rounded-xl font-bold tracking-wide hover:opacity-90 transition-all gold-glow">
                        {tForm('submit')}
                    </button>
                    <p className="text-xs text-center text-on-surface-variant">
                        {t('form.termsPrefix')} <a className="text-primary hover:underline" href="#">{t('form.terms')}</a> &amp; <a className="text-primary hover:underline" href="#">{t('form.privacy')}</a>.
                    </p>
                </form>
            </div>
        </div>
    </section>
  );
}
