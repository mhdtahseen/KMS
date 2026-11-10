import { Service } from './en';

export const servicesAr: Service[] = [
  {
    slug: 'skilled-immigration',
    title: 'هجرة الكفاءات',
    tagline: 'تنقل النخبة عالمياً',
    heroImage: '/images/services/skilled-immigration-hero.jpg',
    heroHeadline: 'هجرة الكفاءات',
    heroHeadlineAccent: 'للمحترفين عالمياً',
    heroSubtext:
      'تجاوز تعقيدات الانتقال المهني الدولي مع الشركة الرائدة في الدوحة. نحن نوفر مسارات مخصصة للكوادر المتميزة للوصول إلى أهم المراكز الاقتصادية العالمية.',
    overviewHeading: 'انتقال المواهب الاستراتيجي',
    overviewBody:
      'في عصر التنافس العالمي على المواهب، تظل هجرة الكفاءات الجسر الأكثر فعالية للحصول على الإقامة الدائمة والاستقرار المهني طويل الأمد في الاقتصادات الرائدة.',
    overviewBodySecondary:
      'تتخصص KMS Consultants في إيجاد التوافق الدقيق بين مؤهلاتك المهنية والاحتياجات الاقتصادية المحددة لبلد الوجهة. نهجنا ليس مجرد تقديم خدمة، بل شراكة استراتيجية مصممة لتأمين مستقبل عائلتك من خلال تمثيل قانوني رفيع المستوى.',
    overviewStats: [
      { value: '98%', label: 'نسبة النجاح' },
      { value: '12+', label: 'وجهات عالمية' },
    ],
    overviewImage: '/images/services/skilled-immigration-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'school',
        title: 'المؤهلات الأكاديمية',
        description: 'الحصول على درجة البكالوريوس كحد أدنى أو مؤهل مهني معادل معترف به من سلطات تقييم الشهادات.',
        badge: 'المستوى 6+ مطلوب',
      },
      {
        icon: 'work_history',
        title: 'الخبرة المهنية',
        description: 'ما لا يقل عن 3 سنوات من الخبرة المتواصلة عالية المستوى في دور مصنف ضمن قوائم المهن المطلوبة.',
        featured: true,
        pointsImportance: '75%',
        checkPoints: ['مراجع وظيفية يمكن التحقق منها', 'بيانات راتب رسمية', 'مساهمات ضريبية موثقة'],
      },
      {
        icon: 'translate',
        title: 'إتقان اللغة',
        description: 'إجادة اللغتين الإنجليزية أو الفرنسية بشكل مثبت عبر اختبارات IELTS أو CELPIP أو TEF بدرجات تنافسية.',
        badge: 'CLB 7 كحد أدنى',
      },
      {
        icon: 'health_and_safety',
        title: 'الفحص الطبي والأمني',
        description: 'خلو السجل الجنائي أو الصحي من أي مشاكل قد تشكل خطراً عاماً أو عبئاً مفرطاً على الأنظمة الاجتماعية.',
      },
      {
        icon: 'info',
        title: 'عامل العمر',
        description: 'يستهدف توزيع النقاط الأمثل عادة المتقدمين الذين تتراوح أعمارهم بين 22 و 45 عاماً لضمان أقصى إمكانيات الاندماج الاقتصادي.',
        accent: true,
      },
    ],
    processSteps: [
      { icon: '01', title: 'التشخيص', description: 'مراجعة شاملة للملف الشخصي مقابل معايير البلد المستهدف.' },
      { icon: '02', title: 'الاستراتيجية', description: 'تخصيص الوثائق لزيادة الترتيب المبني على النقاط.' },
      { icon: '03', title: 'التقديم', description: 'تقديم الطلب الرسمي وإدارة الاتصالات عبر البوابات الحكومية.' },
      { icon: '04', title: 'المعالجة', description: 'متابعة الفحوصات الطبية والأمنية وتحديثات الوثائق.' },
      { icon: '05', title: 'الوصول', description: 'المنح النهائي للتأشيرة ودعم الاندماج بعد الوصول.' },
    ],
    destinations: ['canada', 'australia', 'united-kingdom'],
    destinationCards: [
      {
        slug: 'canada',
        title: 'كندا',
        description: 'برامج الدخول السريع وترشيح المقاطعات لمحترفي التكنولوجيا والرعاية الصحية.',
        image:
          '/images/countries/canada-card.jpg',
        status: 'متاح',
      },
      {
        slug: 'australia',
        title: 'أستراليا',
        description: 'مسارات الفئة 189/190 لخبرات الهندسة المعمارية والمتخصصة.',
        image:
          '/images/countries/australia-card.jpg',
        status: 'أولوية',
      },
      {
        slug: 'united-kingdom',
        title: 'المملكة المتحدة',
        description: 'دعم رعاية تأشيرة العمالة الماهرة لأدوار القيادة العليا والمالية.',
        image:
          '/images/countries/united-kingdom-card.jpg',
        status: 'مسار جديد',
      },
    ],
    ctaHeading: 'ارتقِ بأفقك المهني.',
    isPublished: true,
  },
  {
    slug: 'study-permits',
    title: 'تصاريح الدراسة',
    tagline: 'مسارات التميز الأكاديمي',
    heroImage: '/images/services/study-permits-hero.jpg',
    heroHeadline: 'بوابتك الأكاديمية للإقامة العالمية',
    heroSubtext:
      'أمّن مستقبلك مع توجيه خبراء التأشيرات لأرقى المؤسسات التعليمية في العالم.',
    overviewHeading: 'التعليم كأداة أساسية',
    overviewBody:
      'تأشيرة الطالب هي أكثر من مجرد تصريح للتعلم؛ إنها نقطة الدخول الأكثر فاعلية لبرامج الإقامة ذات الأولوية العالية في كندا والمملكة المتحدة وأستراليا.',
    overviewStats: [
      { value: '98%', label: 'نسبة القبول' },
      { value: '500+', label: 'مؤسسات شريكة' },
    ],
    overviewImage: '/images/services/study-permits-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'school',
        title: 'القبول المؤسسي',
        description: 'خطاب قبول من مؤسسة تعليمية معتمدة.',
        badge: 'إلزامي',
        featured: true,
      },
      {
        icon: 'payments',
        title: 'القدرة المالية',
        description: 'أموال كافية للرسوم الدراسية ونفقات المعيشة وسفر العودة.',
        badge: 'أموال لسنة واحدة',
      },
      {
        icon: 'translate',
        title: 'المهارات اللغوية',
        description: 'تلبية متطلبات اللغة للمؤسسة والتأشيرة.',
        badge: 'IELTS/TOEFL',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'المطابقة المؤسسية', description: 'اختيار البرامج التي تزيد من فرص الهجرة المستقبلية.' },
      { icon: 'description', title: 'حزمة التقديم', description: 'إعداد احترافي لخطة الدراسة وبيان الغرض.' },
      { icon: 'send', title: 'تنفيذ التأشيرة', description: 'تقديم دقيق مع جميع الوثائق الداعمة.' },
    ],
    destinations: ['canada', 'united-kingdom', 'australia', 'usa'],
    ctaHeading: 'ابدأ إرثك التعليمي.',
    isPublished: true,
  },
  {
    slug: 'business-residency',
    title: 'إقامة الأعمال',
    tagline: 'حلول التنقل التجاري',
    heroImage: '/images/services/business-residency-hero.jpg',
    heroHeadline: 'إقامة الأعمال والمواطنة الاستراتيجية',
    heroSubtext:
      'أسس وجودك التجاري في الأسواق العالمية عبر مسارات الاستثمار وريادة الأعمال عالية القيمة.',
    overviewHeading: 'رأس المال كجواز سفرك',
    overviewBody:
      'توفر برامج إقامة الأعمال لرواد الأعمال والمستثمرين النخبة طريقًا مباشرًا لتأمين حقوقهم في الاقتصادات الرائدة مع توسيع نطاق أعمالهم التجاري.',
    overviewStats: [
      { value: '$1M+', label: 'رؤوس أموال مدارة' },
      { value: '100%', label: 'نسبة الامتثال' },
    ],
    overviewImage: '/images/services/business-residency-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'account_balance',
        title: 'رأس مال الاستثمار',
        description: 'أموال مكتسبة بشكل قانوني تستوفي حدود البرنامج.',
        badge: 'قيمة عالية',
        featured: true,
      },
      {
        icon: 'business_center',
        title: 'الخبرة التنفيذية',
        description: 'سجل حافل في إدارة الأعمال أو الملكية.',
        badge: '3+ سنوات',
      },
    ],
    processSteps: [
      { icon: 'analytics', title: 'مراجعة المحفظة', description: 'مطابقة ملفك الاستثماري مع الولايات القضائية المثلى.' },
      { icon: 'architecture', title: 'استراتيجية الأعمال', description: 'تطوير خطط أعمال وهياكل استثمارية متوافقة.' },
    ],
    destinations: ['united-kingdom', 'canada', 'usa', 'european-union'],
    ctaHeading: 'استثمر في حريتك العالمية.',
    isPublished: true,
  },
  {
    slug: 'work-permits',
    title: 'تصاريح العمل',
    tagline: 'اندماج القوى العاملة العالمية',
    heroImage: '/images/services/work-permits-hero.jpg',
    heroHeadline: 'تصاريح عمل موثوقة',
    heroSubtext:
      'جسّر الفجوة بين موهبتك والفرص الدولية من خلال تمثيل خبراء تصاريح العمل.',
    overviewHeading: 'فتح الفرص العالمية',
    overviewBody:
      'سواء من خلال البرامج التي يرعاها صاحب العمل أو فئات السوق المفتوحة، فإننا نضمن تأمين حقك في العمل في وجهتك المختارة بدقة قانونية.',
    overviewStats: [
      { value: '45 يوماً', label: 'متوسط وقت المعالجة' },
      { value: 'نخبة', label: 'قاعدة العملاء' },
    ],
    overviewImage: '/images/services/work-permits-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'work',
        title: 'عرض عمل صالح',
        description: 'رعاية من صاحب عمل معترف به في بلد الوجهة.',
        badge: 'مطلوب',
        featured: true,
      },
      {
        icon: 'verified_user',
        title: 'القبول القانوني',
        description: 'تلبية جميع متطلبات الفحص الصحي والأمني.',
        badge: 'صارم',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'التحقق من صاحب العمل', description: 'ضمان امتثال الرعاية وصلاحية الترخيص.' },
      { icon: 'send', title: 'تقديم التصريح', description: 'إدارة تدفق سير العمل بالكامل من قطر.' },
    ],
    destinations: ['canada', 'united-kingdom', 'australia'],
    ctaHeading: 'انطلق بمسيرتك عالمياً.',
    isPublished: true,
  },
  {
    slug: 'permanent-residency',
    title: 'الإقامة الدائمة',
    tagline: 'أمان للأجيال القادمة',
    heroImage: '/images/services/permanent-residency-hero.jpg',
    heroHeadline: 'أرقى درجات الإقامة حول العالم',
    heroSubtext:
      'تأمين الإقامة الدائمة الكاملة ومسار مضمون للحصول على الجنسية لك ولعائلتك.',
    overviewHeading: 'قمة الإنجاز',
    overviewBody:
      'تعتبر الإقامة الدائمة أساس مستقبل عائلتك في أمة جديدة. يدير كبار المستشارين لدينا كل جانب من جوانب طلبك لضمان النجاح.',
    overviewStats: [
      { value: '1,500+', label: 'إقامات دائمة مؤمنة' },
      { value: '99.2%', label: 'نسبة النجاح' },
    ],
    overviewImage: '/images/services/permanent-residency-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'verified_user',
        title: 'امتثال الوضع',
        description: 'تلبية جميع متطلبات الإقامة السابقة والمتطلبات القانونية.',
        badge: 'حرج',
        featured: true,
      },
      {
        icon: 'groups',
        title: 'تضمين العائلة',
        description: 'التأكد من تمثيل جميع المعالين المؤهلين بشكل صحيح.',
        badge: 'جميع الأعضاء',
      },
    ],
    processSteps: [
      { icon: 'analytics', title: 'التقييم المسبق', description: 'تدقيق شامل للأهلية عبر جميع مسارات الإقامة الدائمة.' },
      { icon: 'send', title: 'إدارة الدعوة', description: 'التعامل الدقيق مع دعوات التقديم والتقديم النهائي.' },
    ],
    destinations: ['canada', 'australia', 'united-kingdom', 'european-union'],
    ctaHeading: 'طالب بموطنك الدائم.',
    isPublished: true,
  },
  {
    slug: 'family-sponsorship',
    title: 'رعاية الأسرة',
    tagline: 'لم شمل العائلات عالمياً',
    heroImage: '/images/services/family-sponsorship-hero.jpg',
    heroHeadline: 'اجمع شمل عائلتك',
    heroSubtext:
      'تمثيل خبير لرعاية الأزواج والآباء والمعالين في الدول الأكثر ترحيباً في العالم.',
    overviewHeading: 'مستقبل موحد',
    overviewBody:
      'نحن نتفهم أن الهجرة قضية شخصية. يقدم أخصائيو رعاية الأسرة لدينا التوجيه المتعاطف والموثوق اللازم للتنقل في مسارات لم الشمل المعقدة.',
    overviewStats: [
      { value: '500+', label: 'عائلات تم لم شملها' },
      { value: 'خاصة', label: 'إدارة الحالات' },
    ],
    overviewImage: '/images/services/family-sponsorship-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'favorite',
        title: 'إثبات العلاقة',
        description: 'أدلة شاملة على الروابط العائلية أو الزوجية الحقيقية.',
        badge: 'أساسي',
        featured: true,
      },
      {
        icon: 'payments',
        title: 'أموال الراعي',
        description: 'دليل على القدرة على دعم أفراد الأسرة المكفولين.',
        badge: 'اختبار الدخل',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'مراجعة الأدلة', description: 'ضمان توافق وثائق العلاقة مع المعايير الحكومية الصارمة.' },
      { icon: 'send', title: 'التقديم المزدوج', description: 'إدارة تقديمات الكفيل والمتقدم في وقت واحد.' },
    ],
    destinations: ['canada', 'united-kingdom', 'usa', 'australia'],
    ctaHeading: 'أحضرهم إلى المنزل.',
    isPublished: true,
  },
  {
    slug: 'travel-visas',
    title: 'تأشيرات السفر',
    tagline: 'تأشيرات الزيارة والسياحة',
    heroImage: '/images/services/travel-visas-hero.jpg',
    heroHeadline: 'اكتشف العالم',
    heroHeadlineAccent: 'دون عناء الأوراق',
    heroSubtext:
      'تأشيرات الزيارة والسياحة وزيارات الأعمال للمقيمين في قطر من جميع الجنسيات — المملكة المتحدة، ومنطقة شنغن، والولايات المتحدة، وكندا، وأستراليا — مُعدّة وفق المعايير التي تتوقعها القنصليات.',
    overviewHeading: 'إقامات قصيرة بإجراءات سليمة',
    overviewBody:
      'رفض تأشيرة الزيارة يبقى في سجلك ويُصعّب كل طلب لاحق. نُعدّ كل ملف بحيث يكون الغرض من السفر وروابطك بقطر ووضعك المالي موثقاً بوضوح من المرة الأولى.',
    overviewBodySecondary:
      'نغطي تأشيرة الزائر القياسية للمملكة المتحدة وتصريح ETA البريطاني، وتأشيرات شنغن قصيرة الإقامة لجميع الدول الأعضاء، وتأشيرات الزيارة الأمريكية B-1/B-2، وتأشيرات الزيارة الكندية (TRV) وتصاريح eTA، وتأشيرة الزائر الأسترالية (الفئة 600) — بما في ذلك حجز المواعيد والتحضير للمقابلة عند الحاجة.',
    overviewStats: [
      { value: '90', label: 'يوماً لكل 180 يوماً في شنغن' },
      { value: '10 سنوات', label: 'صلاحية تأشيرة الزيارة الأمريكية (حتى)' },
    ],
    overviewImage: '/images/services/travel-visas-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'flight_takeoff',
        title: 'الغرض وبرنامج الرحلة',
        description: 'غرض واضح من السفر مع حجوزات أو دعوة تتوافق مع نوع التأشيرة.',
        badge: 'مطلوب',
        featured: true,
        checkPoints: ['برنامج رحلة مؤكد أو خطاب دعوة', 'تفاصيل الإقامة', 'إثبات رحلة العودة'],
      },
      {
        icon: 'payments',
        title: 'القدرة المالية',
        description: 'كشوف حسابات بنكية وإثبات راتب يُظهر قدرتك على تمويل الرحلة.',
        badge: 'مستندي',
      },
      {
        icon: 'home',
        title: 'الروابط بقطر',
        description: 'العمل وتصريح الإقامة والروابط العائلية التي تُثبت عودتك.',
        badge: 'عامل أساسي',
      },
      {
        icon: 'health_and_safety',
        title: 'تأمين السفر',
        description: 'تأمين طبي يستوفي الحد الأدنى للتغطية في بلد الوجهة — إلزامي لطلبات شنغن.',
        badge: 'شنغن',
      },
    ],
    processSteps: [
      { icon: 'fact_check', title: 'التقييم', description: 'اختيار نوع التأشيرة المناسب ومراجعة سجل سفرك وروابطك.' },
      { icon: 'description', title: 'التوثيق', description: 'إعداد ملف كامل ومتسق وفق قائمة متطلبات القنصلية.' },
      { icon: 'event', title: 'الموعد والبصمات', description: 'حجز موعد مركز التأشيرات وتحضيرك لأي مقابلة.' },
      { icon: 'flight_takeoff', title: 'القرار والسفر', description: 'متابعة القرار وتقديم المشورة بشأن متطلبات الدخول قبل سفرك.' },
    ],
    destinations: ['united-kingdom', 'european-union', 'usa', 'canada', 'australia'],
    ctaHeading: 'سافر بثقة.',
    isPublished: true,
  },
];
