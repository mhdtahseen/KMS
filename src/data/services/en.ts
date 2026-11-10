export type Service = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  heroHeadline: string;
  heroHeadlineAccent?: string;
  heroSubtext: string;
  overviewHeading: string;
  overviewBody: string;
  overviewBodySecondary?: string;
  overviewStats: { value: string; label: string }[];
  overviewImage: string;
  eligibilityCriteria: {
    icon: string;
    title: string;
    description: string;
    badge?: string;
    featured?: boolean;
    pointsImportance?: string;
    checkPoints?: string[];
    accent?: boolean;
  }[];
  processSteps: { icon: string; title: string; description: string }[];
  destinations: string[];
  destinationCards?: {
    slug: string;
    title: string;
    description: string;
    image: string;
    status: string;
  }[];
  ctaHeading: string;
  isPublished?: boolean;
};

export const services: Service[] = [
  {
    slug: 'skilled-immigration',
    title: 'Skilled Immigration',
    tagline: 'Elite Global Mobility',
    heroImage: '/images/services/skilled-immigration-hero.jpg',
    heroHeadline: 'Skilled Immigration for',
    heroHeadlineAccent: 'Global Professionals',
    heroSubtext:
      "Navigate the complexities of international career transitions with Doha's premier consultancy. We provide bespoke pathways to global economic centers for high-performing talent.",
    overviewHeading: 'Strategic Talent Relocation',
    overviewBody:
      'In an era of global competition for talent, Skilled Immigration remains the most effective bridge to permanent residency and long-term career stability in leading economies.',
    overviewBodySecondary:
      "KMS Consultants specializes in identifying the precise intersection between your professional credentials and the specific economic needs of your destination country. Our approach is not transactional; it is a strategic partnership designed to secure your family's future through high-authority legal representation.",
    overviewStats: [
      { value: '98%', label: 'Success Rate' },
      { value: '12+', label: 'Global Hubs' },
    ],
    overviewImage: '/images/services/skilled-immigration-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'school',
        title: 'Academic Credentials',
        description:
          "Hold a minimum of a Bachelor's degree or equivalent professional qualification recognized by ECA authorities.",
        badge: 'Level 6+ Required',
      },
      {
        icon: 'work_history',
        title: 'Professional Tenure',
        description:
          'At least 3 years of continuous, high-level experience in a role classified under skilled occupation lists (NOC/ANZSCO).',
        featured: true,
        pointsImportance: '75%',
        checkPoints: ['Verifiable employer references', 'Official salary statements', 'Documented tax contributions'],
      },
      {
        icon: 'translate',
        title: 'Linguistic Proficiency',
        description:
          'Mastery of English or French demonstrated via IELTS, CELPIP, or TEF with competitive band scores.',
        badge: 'CLB 7 Mininum',
      },
      {
        icon: 'health_and_safety',
        title: 'Character & Health',
        description:
          'Absence of criminal record and health conditions that may pose a public risk or excessive demand on social systems.',
      },
      {
        icon: 'info',
        title: 'Age Factor',
        description:
          'Optimal score allocation typically targets applicants between ages 22 and 45 for maximum economic integration potential.',
        accent: true,
      },
    ],
    processSteps: [
      { icon: '01', title: 'Diagnostic', description: 'Comprehensive review of profile vs target country criteria.' },
      { icon: '02', title: 'Strategy', description: 'Tailoring documentation to maximize points-based ranking.' },
      { icon: '03', title: 'Submission', description: 'Official filing and management of government portal communications.' },
      { icon: '04', title: 'Processing', description: 'Navigation of health, security checks, and document updates.' },
      { icon: '05', title: 'Landing', description: 'Final visa grant and post-arrival integration support.' },
    ],
    destinations: ['canada', 'australia', 'united-kingdom'],
    destinationCards: [
      {
        slug: 'canada',
        title: 'Canada',
        description: 'Express Entry & Provincial Nomination programs for tech and healthcare professionals.',
        image:
          '/images/countries/canada-card.jpg',
        status: 'Open',
      },
      {
        slug: 'australia',
        title: 'Australia',
        description: 'Subclass 189/190 pathways for specialized engineering and architectural expertise.',
        image:
          '/images/countries/australia-card.jpg',
        status: 'Priority',
      },
      {
        slug: 'united-kingdom',
        title: 'United Kingdom',
        description: 'Skilled Worker Visa sponsorship support for senior leadership and finance roles.',
        image:
          '/images/countries/united-kingdom-card.jpg',
        status: 'New Track',
      },
    ],
    ctaHeading: 'Elevate Your Professional Horizon.',
    isPublished: true,
  },
  {
    slug: 'study-permits',
    title: 'Study Permits',
    tagline: 'Academic Excellence Pathways',
    heroImage: '/images/services/study-permits-hero.jpg',
    heroHeadline: 'Your Academic Gateway to Global Residency',
    heroSubtext:
      "Secure your future with expert visa guidance for the world's most prestigious educational institutions.",
    overviewHeading: 'Education as Strategic Foundation',
    overviewBody:
      'A student visa is more than just a permit to learn; it is the most effective entry point into high-priority residency streams in Canada, the UK, and Australia.',
    overviewStats: [
      { value: '98%', label: 'Approval Rate' },
      { value: '500+', label: 'Partner Institutions' },
    ],
    overviewImage: '/images/services/study-permits-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'school',
        title: 'Institution Acceptance',
        description: 'Letter of Acceptance from a Designated Learning Institution.',
        badge: 'Mandatory',
        featured: true,
      },
      {
        icon: 'payments',
        title: 'Financial Capability',
        description: 'Sufficient funds for tuition, living expenses, and return travel.',
        badge: '1 Year Funds',
      },
      {
        icon: 'translate',
        title: 'Language Skills',
        description: 'Meeting institutional and visa language requirements.',
        badge: 'IELTS/TOEFL',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'Institutional Matching', description: 'Selecting programs that maximize future immigration potential.' },
      { icon: 'description', title: 'Submission Package', description: 'Expert preparation of Study Plan and Statement of Purpose.' },
      { icon: 'send', title: 'Visa Execution', description: 'Precise lodgment with all supporting documentation.' },
    ],
    destinations: ['canada', 'united-kingdom', 'australia', 'usa'],
    ctaHeading: 'Begin Your Educational Legacy.',
    isPublished: true,
  },
  {
    slug: 'business-residency',
    title: 'Business Residency',
    tagline: 'Commercial Mobility Solutions',
    heroImage: '/images/services/business-residency-hero.jpg',
    heroHeadline: 'Strategic Business Residency & Citizenship',
    heroSubtext:
      'Establish your commercial presence in global markets through high-value investment and entrepreneur pathways.',
    overviewHeading: 'Capital as Your Passport',
    overviewBody:
      'For elite entrepreneurs and investors, business residency programs offer a direct route to securing rights in leading economies while expanding your commercial reach.',
    overviewStats: [
      { value: '$1M+', label: 'Capital Managed' },
      { value: '100%', label: 'Compliance Rate' },
    ],
    overviewImage: '/images/services/business-residency-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'account_balance',
        title: 'Investment Capital',
        description: 'Legally acquired funds meeting program thresholds.',
        badge: 'High Value',
        featured: true,
      },
      {
        icon: 'business_center',
        title: 'Executive Experience',
        description: 'Proven track record in business management or ownership.',
        badge: '3+ Years',
      },
    ],
    processSteps: [
      { icon: 'analytics', title: 'Portfolio Review', description: 'Matching your investment profile with optimal jurisdictions.' },
      { icon: 'architecture', title: 'Business Strategy', description: 'Developing compliant business plans and investment structures.' },
    ],
    destinations: ['united-kingdom', 'canada', 'usa', 'european-union'],
    ctaHeading: 'Invest in Global Freedom.',
    isPublished: true,
  },
  {
    slug: 'work-permits',
    title: 'Work Permits',
    tagline: 'Global Workforce Integration',
    heroImage: '/images/services/work-permits-hero.jpg',
    heroHeadline: 'Authoritative Work Authorization',
    heroSubtext:
      'Bridge the gap between your talent and international opportunity through expert work permit representation.',
    overviewHeading: 'Unlocking Global Opportunity',
    overviewBody:
      'Whether through employer-sponsored programs or open market categories, we ensure your right to work in your chosen destination is secured with legal precision.',
    overviewStats: [
      { value: '45 Days', label: 'Avg. Processing' },
      { value: 'Elite', label: 'Client Base' },
    ],
    overviewImage: '/images/services/work-permits-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'work',
        title: 'Valid Job Offer',
        description: 'Sponsorship from a recognized employer in the destination country.',
        badge: 'Required',
        featured: true,
      },
      {
        icon: 'verified_user',
        title: 'Legal Admissibility',
        description: 'Meeting all health and security background requirements.',
        badge: 'Strict',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'Employer Verification', description: 'Ensuring sponsorship compliance and license validity.' },
      { icon: 'send', title: 'Permit Submission', description: 'Managing the entire authorization workflow from Qatar.' },
    ],
    destinations: ['canada', 'united-kingdom', 'australia'],
    ctaHeading: 'Take Your Career Global.',
    isPublished: true,
  },
  {
    slug: 'permanent-residency',
    title: 'Permanent Residency',
    tagline: 'Generational Security',
    heroImage: '/images/services/permanent-residency-hero.jpg',
    heroHeadline: 'The Ultimate Status in Global Mobility',
    heroSubtext:
      'Secure full permanent residency and a guaranteed pathway to citizenship for you and your family.',
    overviewHeading: 'The Pinnacle of Achievement',
    overviewBody:
      "Permanent residency is the foundation of your family's future in a new nation. Our senior consultants manage every nuance of your application to ensure success.",
    overviewStats: [
      { value: '1,500+', label: 'PRs Secured' },
      { value: '99.2%', label: 'Success Rate' },
    ],
    overviewImage: '/images/services/permanent-residency-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'verified_user',
        title: 'Status Compliance',
        description: 'Meeting all prior residency and legal requirements.',
        badge: 'Critical',
        featured: true,
      },
      {
        icon: 'groups',
        title: 'Family Inclusion',
        description: 'Ensuring all eligible dependents are correctly represented.',
        badge: 'All Members',
      },
    ],
    processSteps: [
      { icon: 'analytics', title: 'Pre-Assessment', description: 'Exhaustive audit of eligibility across all PR streams.' },
      { icon: 'send', title: 'ITA Management', description: 'Precise handling of Invitations to Apply and final filing.' },
    ],
    destinations: ['canada', 'australia', 'united-kingdom', 'european-union'],
    ctaHeading: 'Claim Your Permanent Home.',
    isPublished: true,
  },
  {
    slug: 'family-sponsorship',
    title: 'Family Sponsorship',
    tagline: 'Reuniting Global Families',
    heroImage: '/images/services/family-sponsorship-hero.jpg',
    heroHeadline: 'Bring Your Family Together',
    heroSubtext:
      'Expert representation for spousal, parental, and dependent sponsorship in the world\'s most welcoming nations.',
    overviewHeading: 'Unified Futures',
    overviewBody:
      'We understand that immigration is personal. Our family sponsorship specialists provide the compassionate yet authoritative guidance needed to navigate complex reunion pathways.',
    overviewStats: [
      { value: '500+', label: 'Families Reunited' },
      { value: 'Private', label: 'Case Handling' },
    ],
    overviewImage: '/images/services/family-sponsorship-overview.jpg',
    eligibilityCriteria: [
      {
        icon: 'favorite',
        title: 'Relationship Proof',
        description: 'Comprehensive evidence of genuine family or spousal bonds.',
        badge: 'Primary',
        featured: true,
      },
      {
        icon: 'payments',
        title: 'Sponsor Funds',
        description: 'Evidence of ability to support sponsored family members.',
        badge: 'Income Test',
      },
    ],
    processSteps: [
      { icon: 'search', title: 'Evidence Audit', description: 'Ensuring relationship documentation meets strict government standards.' },
      { icon: 'send', title: 'Dual Filing', description: 'Managing sponsor and applicant submissions simultaneously.' },
    ],
    destinations: ['canada', 'united-kingdom', 'usa', 'australia'],
    ctaHeading: 'Bring Them Home.',
    isPublished: true,
  },
];

export const publishedServices = services.filter((service) => service.isPublished);
