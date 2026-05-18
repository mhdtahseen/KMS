import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export type EligibilityCriterion = {
  icon: string;
  title: string;
  description: string;
  badge: string;
  featured?: boolean;
  pointsImportance?: string;
  checkPoints?: string[];
};

export function EligibilityMatrix({ criteria }: { criteria: EligibilityCriterion[] }) {
  const t = useTranslations('services.eligibility');

  return (
    <section className="py-40 px-8 md:px-16 bg-surface-container-low">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-bold text-primary uppercase tracking-[0.3em]">Evaluation Framework</span>
            <h2 className="font-headline text-5xl md:text-6xl text-on-background leading-tight">
              Pre-Qualification Matrix
            </h2>
          </div>
          <p className="text-xl text-on-surface-variant max-w-md leading-relaxed opacity-70">
            {t('subtext')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {criteria.map((criterion, idx) => {
            if (criterion.featured) {
              return (
                <div key={idx} className="md:col-span-8 glass-card p-12 bg-primary/5 border-primary/20 flex flex-col justify-between group hover:bg-primary/[0.08] transition-all duration-700">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="size-20 rounded-3xl bg-primary flex items-center justify-center text-on-primary shadow-2xl shadow-primary/40">
                        <span className="material-symbols-outlined text-4xl">{criterion.icon}</span>
                      </div>
                      <h4 className="font-headline text-3xl md:text-4xl leading-tight">{criterion.title}</h4>
                      <p className="text-xl text-on-surface-variant leading-relaxed">{criterion.description}</p>
                    </div>
                    
                    <div className="space-y-10 border-l border-white/10 pl-12 flex flex-col justify-center">
                      {criterion.pointsImportance && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Points Weight</span>
                            <span className="text-3xl font-headline text-primary">{criterion.pointsImportance}</span>
                          </div>
                          <div className="h-2 bg-white/5 w-full rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }} // Using a default high-value percentage for "High Impact"
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="h-full bg-primary"
                            ></motion.div>
                          </div>
                        </div>
                      )}
                      
                      {criterion.checkPoints && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold uppercase tracking-widest opacity-60">Critical Checks</span>
                          <ul className="space-y-3">
                            {criterion.checkPoints.map((point, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                <span className="size-1.5 rounded-full bg-primary"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-16 flex items-center gap-4 text-primary font-bold text-sm tracking-widest uppercase">
                    <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                    <span>High Impact Factor</span>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className="md:col-span-4 glass-card p-12 flex flex-col justify-between group hover:bg-white/5 transition-all duration-500 border-white/5">
                <div className="space-y-8">
                  <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform duration-500">
                    {criterion.icon}
                  </span>
                  <div>
                    <h4 className="font-headline text-2xl font-medium mb-4 leading-tight">{criterion.title}</h4>
                    <p className="text-lg text-on-surface-variant opacity-70 leading-relaxed">{criterion.description}</p>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {criterion.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
