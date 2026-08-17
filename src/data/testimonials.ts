export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image?: string;
  quote: string;
  tags: string[];
  duration: string;
}

const testimonialsEn: Testimonial[] = [
  {
    id: 'dirkster-smith',
    name: 'Dirkster Smith',
    role: 'Canadian Visa Applicant',
    quote:
      '"The team was professional, knowledgeable, and always willing to assist with any questions or concerns. Their attention to detail and prompt communication made the entire process smooth and stress-free — I successfully obtained my Canadian visa."',
    tags: ['Canada Immigration'],
    duration: 'Canadian Visa Approved',
  },
  {
    id: 'muhammad-ali-inam',
    name: 'Muhammad Ali Inam',
    role: 'Australian Skills Assessment (VETASSESS)',
    quote:
      '"From day one, the guidance was clear, detailed, and honest — something I didn\'t receive from any other consultancy. My case wasn\'t straightforward, but the team used their expertise to find practical solutions and prepared my application with exceptional attention to detail."',
    tags: ['Australia Immigration', 'Skilled Migration'],
    duration: 'VETASSESS Positive Outcome',
  },
  {
    id: 'a-raza',
    name: 'A Raza',
    role: 'Australian PR Applicant',
    quote:
      '"The team was professional, knowledgeable, and realistic about my profile from the very beginning. The result exceeded my expectations — I received successful outcomes in three different ANZSCO occupation codes, significantly strengthening my Australian PR pathway."',
    tags: ['Australia Immigration', 'Permanent Residency'],
    duration: 'Australian PR — 3 ANZSCO Codes',
  },
  {
    id: 'muhammad-ali-sethi',
    name: 'Muhammad Ali Sethi',
    role: 'Australian ACS Skills Assessment',
    quote:
      '"The team took all the guesswork out of my ACS skills assessment. They meticulously reviewed my academic transcripts, mapped my complex technical work history accurately, and ensured every piece of documentation perfectly aligned with ACS guidelines."',
    tags: ['Australia Immigration', 'IT Professionals'],
    duration: 'ACS Assessment Approved',
  },
  {
    id: 'helen-sapico',
    name: 'Helen Sapico',
    role: 'Visa Applicant',
    quote:
      '"Zeba was incredibly accommodating and patient, taking the time to clearly explain every step of the process. Her ability to break down complex information made everything easy to understand, no matter how many questions I asked."',
    tags: ['Immigration Consulting'],
    duration: 'Smooth, Stress-Free Process',
  },
];

const testimonialsAr: Testimonial[] = [
  {
    id: 'dirkster-smith',
    name: 'Dirkster Smith',
    role: 'متقدم لتأشيرة كندا',
    quote:
      '"كان الفريق محترفاً وذا معرفة عالية ومستعداً دائماً للمساعدة في أي أسئلة أو استفسارات. اهتمامهم بالتفاصيل وتواصلهم السريع جعلا العملية بأكملها سلسة وخالية من التوتر — حصلت بنجاح على تأشيرتي الكندية."',
    tags: ['هجرة كندا'],
    duration: 'تمت الموافقة على تأشيرة كندا',
  },
  {
    id: 'muhammad-ali-inam',
    name: 'Muhammad Ali Inam',
    role: 'تقييم المهارات الأسترالي (VETASSESS)',
    quote:
      '"منذ اليوم الأول، كان التوجيه واضحاً ومفصلاً وصادقاً — وهو ما لم أحصل عليه من أي استشارة أخرى. لم تكن حالتي بسيطة، لكن الفريق استخدم خبرته لإيجاد حلول عملية وأعد طلبي باهتمام استثنائي بالتفاصيل."',
    tags: ['هجرة أستراليا', 'الهجرة الماهرة'],
    duration: 'نتيجة إيجابية في VETASSESS',
  },
  {
    id: 'a-raza',
    name: 'A Raza',
    role: 'متقدم للإقامة الدائمة الأسترالية',
    quote:
      '"كان الفريق محترفاً وذا معرفة عالية وواقعياً بشأن ملفي منذ البداية. تجاوزت النتيجة توقعاتي — حصلت على نتائج ناجحة في ثلاث رموز مهنية مختلفة (ANZSCO)، مما عزز بشكل كبير مسار إقامتي الدائمة في أستراليا."',
    tags: ['هجرة أستراليا', 'الإقامة الدائمة'],
    duration: 'إقامة دائمة أسترالية — 3 رموز ANZSCO',
  },
  {
    id: 'muhammad-ali-sethi',
    name: 'Muhammad Ali Sethi',
    role: 'تقييم مهارات ACS الأسترالي',
    quote:
      '"أزال الفريق كل الحيرة من تقييم ACS الخاص بي. راجعوا سجلاتي الأكاديمية بدقة، ورسموا تاريخي الوظيفي التقني المعقد بشكل صحيح، وضمنوا توافق كل وثيقة تماماً مع إرشادات ACS."',
    tags: ['هجرة أستراليا', 'المهنيون التقنيون'],
    duration: 'تمت الموافقة على تقييم ACS',
  },
  {
    id: 'helen-sapico',
    name: 'Helen Sapico',
    role: 'متقدمة لتأشيرة',
    quote:
      '"كانت زيبا متعاونة وصبورة للغاية، وأخذت الوقت الكافي لشرح كل خطوة من العملية بوضوح. قدرتها على تبسيط المعلومات المعقدة جعلت كل شيء سهل الفهم، مهما كان عدد أسئلتي."',
    tags: ['استشارات الهجرة'],
    duration: 'عملية سلسة وخالية من التوتر',
  },
];

export const getTestimonials = (locale: string) => (locale === 'ar' ? testimonialsAr : testimonialsEn);
