import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');
  
  return (
    <section id="testimonials" className="py-32 bg-surface-container-lowest relative">
        <div className="container mx-auto px-8">
            <h2 className="text-4xl font-headline mb-16">{t('heading')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="glass-card p-10 rounded-[32px] space-y-8 group border-primary/10">
                        <div className="flex items-center gap-4">
                            <div className="relative size-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                                <Image 
                                    src={testimonial.image} 
                                    alt={`headshot of ${testimonial.name}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-on-surface-variant italic">{testimonial.role}</p>
                            </div>
                        </div>
                        <blockquote className="text-2xl font-headline leading-snug">
                            {testimonial.quote}
                        </blockquote>
                        <div className="flex flex-wrap gap-4 items-center">
                            {testimonial.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                    {tag}
                                </span>
                            ))}
                            <span className="text-xs text-on-surface-variant">{testimonial.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
