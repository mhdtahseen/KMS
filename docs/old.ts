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
    id: "t1",
    name: "Dr. Ahmed Al-Farsi",
    role: "Relocated to London, UK",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEZ93evDwvfOIQ50dcq9EZ8NhsHdYsBauMhXvijpulSI-AoG6gA0Q4xY_W1dO8DK3JDHJQ8PXrKmBR-HTRi5pylNy7WoiXq6UpyEu9DGE02eW6FyXnkP5N5UxMN7ktzyMl0Epes_t4ug6HvAMkShr7Nz1WHCGNpbH2qlqbhSEaW9kwz3BqsRSzNwB5KGO5irSk2LCj3fkx0HpTWCHEtFH3kfYmShXgxCvlXLX7SG2PC_x4--2929Uio6QTTmSgz_88pWu6lmlNSS4a",
    quote:
      '"KMS Consultants navigated the complex Tier 2 visa process for my family with absolute precision. Their attention to legal detail is unmatched."',
    tags: ["Health Care Sector"],
    duration: "Approved in 45 Days",
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Moved to Vancouver, Canada",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZayEQ8gSFG_UT-CA4MmWgaD8C_kRrTeQAQbJBDqlLeMfL6Apz9By7h2iymU-rOo9ZKFUoiYLHIU0PLeveeIoDLdqjW5r3EHwGxZpjwwcXHz6Byi367B7Ptovn2sZA50DpjRZFclomXl0sn-FtMtZeUwTIm95tyt8pdbNax9ZxQUO10lGFqjNMQJMGG3rmU-bnRF9Uv1h3g_fANKb7Qw54ZdtQW42RQonTG4K2_L7NwiS0UsKXX6Gatz4TCl9FS4E1de-eR_LosZOQ",
    quote:
      '"The Express Entry route seemed daunting until KMS took over. They optimized my profile and handled every piece of paperwork perfectly."',
    tags: ["Tech Industry"],
    duration: "Permanent Residency Awarded",
  },
];

const testimonialsAr: Testimonial[] = [
  {
    id: "dirkster-smith",
    name: "Dirkster Smith",
    role: "متقدم لتأشيرة كندا",
    quote:
      '"كان الفريق محترفاً وذا معرفة عالية ومستعداً دائماً للمساعدة في أي أسئلة أو استفسارات. اهتمامهم بالتفاصيل وتواصلهم السريع جعلا العملية بأكملها سلسة وخالية من التوتر — حصلت بنجاح على تأشيرتي الكندية."',
    tags: ["هجرة كندا"],
    duration: "تمت الموافقة على تأشيرة كندا",
  },
  {
    id: "muhammad-ali-inam",
    name: "Muhammad Ali Inam",
    role: "تقييم المهارات الأسترالي (VETASSESS)",
    quote:
      '"منذ اليوم الأول، كان التوجيه واضحاً ومفصلاً وصادقاً — وهو ما لم أحصل عليه من أي استشارة أخرى. لم تكن حالتي بسيطة، لكن الفريق استخدم خبرته لإيجاد حلول عملية وأعد طلبي باهتمام استثنائي بالتفاصيل."',
    tags: ["هجرة أستراليا", "الهجرة الماهرة"],
    duration: "نتيجة إيجابية في VETASSESS",
  },
  {
    id: "a-raza",
    name: "A Raza",
    role: "متقدم للإقامة الدائمة الأسترالية",
    quote:
      '"كان الفريق محترفاً وذا معرفة عالية وواقعياً بشأن ملفي منذ البداية. تجاوزت النتيجة توقعاتي — حصلت على نتائج ناجحة في ثلاث رموز مهنية مختلفة (ANZSCO)، مما عزز بشكل كبير مسار إقامتي الدائمة في أستراليا."',
    tags: ["هجرة أستراليا", "الإقامة الدائمة"],
    duration: "إقامة دائمة أسترالية — 3 رموز ANZSCO",
  },
  {
    id: "muhammad-ali-sethi",
    name: "Muhammad Ali Sethi",
    role: "تقييم مهارات ACS الأسترالي",
    quote:
      '"أزال الفريق كل الحيرة من تقييم ACS الخاص بي. راجعوا سجلاتي الأكاديمية بدقة، ورسموا تاريخي الوظيفي التقني المعقد بشكل صحيح، وضمنوا توافق كل وثيقة تماماً مع إرشادات ACS."',
    tags: ["هجرة أستراليا", "المهنيون التقنيون"],
    duration: "تمت الموافقة على تقييم ACS",
  },
  {
    id: "helen-sapico",
    name: "Helen Sapico",
    role: "متقدمة لتأشيرة",
    quote:
      '"كانت زيبا متعاونة وصبورة للغاية، وأخذت الوقت الكافي لشرح كل خطوة من العملية بوضوح. قدرتها على تبسيط المعلومات المعقدة جعلت كل شيء سهل الفهم، مهما كان عدد أسئلتي."',
    tags: ["استشارات الهجرة"],
    duration: "عملية سلسة وخالية من التوتر",
  },
];

export const getTestimonials = (locale: string) =>
  locale === "ar" ? testimonialsAr : testimonialsEn;
