import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-8 md:px-16 grid lg:grid-cols-2 items-center gap-16 relative z-10">
            <div className="space-y-10 max-w-2xl">
                <div className="space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                        {t('badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] text-on-background">
                        {t('headline')} <br/>
                        <span className="italic text-primary font-normal">{t('headlineAccent')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
                        {t('subtext')}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/${locale}/book`} className="bg-gold-gradient text-on-primary px-8 py-5 rounded-2xl font-bold text-lg tracking-tight hover:scale-105 transition-transform gold-glow text-center">
                        {t('ctaPrimary')}
                    </Link>
                    <Link href={`/${locale}#testimonials`} className="glass-card px-8 py-5 rounded-2xl font-bold text-lg border-white/10 hover:bg-white/10 transition-colors text-center">
                        {t('ctaSecondary')}
                    </Link>
                </div>
            </div>
            
            <div className="relative hidden lg:block">
                <div className="relative z-10 glass-card rounded-[40px] p-4 overflow-hidden border-white/5 rotate-3 hover:rotate-0 transition-transform duration-700">
                    <Image 
                        className="rounded-[32px] w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 opacity-80" 
                        alt="stylized elegant gold and black world map on a textured wall" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLxrTPy0eOjHnux7EMHeuNFUWVScHUybpYoohBjHkO257DO5VxaWO82FzWAt8sw3DviN-yq6WIuc_FAgRskWu7QaWwT0kgiyMKiM1mf7iYvlGT6D1qbNM_DKgdsN4INxt0T1uhcDGcCD7A7MOEu0OGumi4siQkEE7xQhA_eDdEJ0AVczQlnj2lfKppdMEylvv2dIgCCTECuCTaCPnSrAqd_PnAhix0f5kMfNosaRihH_o9-z0k5gdk9P1poau_NPjz1ScchxM6M06o"
                        width={600}
                        height={600}
                        priority
                    />
                    {/* Overlay Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl gold-glow border-primary/20">
                    <div className="flex items-center gap-3">
                        <div className="size-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">{t('liveCount')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
