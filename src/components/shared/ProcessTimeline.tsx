import { useTranslations } from 'next-intl';

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

interface ProcessTimelineProps {
  heading?: string;
  steps?: ProcessStep[];
}

export function ProcessTimeline({ heading, steps }: ProcessTimelineProps) {
  const t = useTranslations('home.process');
  
  // Default steps for the home page if none provided
  const defaultSteps: ProcessStep[] = [
    {
      icon: 'clinical_notes',
      title: 'Initial Audit',
      description: 'Thorough assessment of your profile and eligibility against global standards.'
    },
    {
      icon: 'architecture',
      title: 'Strategy Design',
      description: 'Architecting a bespoke legal roadmap tailored to your specific goals.'
    },
    {
      icon: 'inventory_2',
      title: 'Execution',
      description: 'Full documentation management and precise submission to authorities.'
    },
    {
      icon: 'flight_takeoff',
      title: 'Onboarding',
      description: 'Post-approval support and relocation assistance for a smooth transition.'
    }
  ];

  const displaySteps = steps || defaultSteps;
  const displayHeading = heading || t('heading');
  const gridClassByCount: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
  };
  const gridClass = gridClassByCount[displaySteps.length] || 'md:grid-cols-4';

  return (
    <section id="process" className="py-32 bg-surface-container-low/30 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-headline text-center mb-24">{displayHeading}</h2>
        
        <div className={`grid ${gridClass} gap-8 relative`}>
            {/* Connector Line */}
            {displaySteps.length > 1 && (
                <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            )}
            
            {displaySteps.map((step, index) => (
                <div key={index} className="relative group text-center space-y-6">
                    <div className="size-24 rounded-full bg-surface-container-high border border-primary/20 flex items-center justify-center mx-auto relative z-10 group-hover:bg-primary transition-colors duration-500">
                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary">{step.icon}</span>
                        <div className="absolute -top-2 -right-2 size-8 bg-primary text-on-primary rounded-full flex items-center justify-center text-xs font-black">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-headline font-bold text-xl">{step.title}</h4>
                        <p className="text-sm text-on-surface-variant">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
