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
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbxli4H5rKHK1b5WKbMGad64EY6ryZP228sc9P_we55dgf7uJ5pukWB9jkhkOjW0LqaFI277UOxISQOsUUl4fGh4M70_J5lubJa8bgjz0hnWaZCN9BLrxlZ6pG1ZeSEAbFYL2Z_kUjydQO3boR6XpG-mR_gVbPLSm8vnK6fpUVxqcHr-pullh7ZEBXrLs38qJPDUmopdWKl4CDe8HuThZeIl4MV8p9APJOQUkrcX7lwoxcTQXx0f_dJ7vumIcB2fTpj3RLWO5NW-8H',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSywwJQk-Omxr8qXZS2M4e55Q23DDXQg_nTpGwT3nXF_pCofdDQDfUCWUle-GevqjZ6as8JCa67Qs1vIllMUfe62Tx9TIbeDvJQZGCzX7cXU5W868LJjnFFJAMy6VWPk8hfNVlVKn4gtAwlLV8igPi3WHAyLkBYFli541cyfJZc5IS3-llky_BVUqkLJOdaEMJ9iD9bZiU-4qGWP0EM6p9fM-9Vp6yg3pwG9hBYSbYdcTEpdqAX1anKB3Uaas13Kt8EOjXIVbY7zdS',
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
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCmBfA-XOc4fPL679Rm2pzATdyC57yQ9IbC10LvA3sLK3t80KK6wCyZaUVN6VoqBeawbd32iCjYaN_bq2Ovw4DUGp4Is7LwEIIn2xoL10_y6_5CWEusZLkd3iIQ_MF_3qn2j8p7L3pBboh9QOHSJAyLGf5uXDBeQStx42GX3--I9oV5rEK5Zjt9MIwCspw4bJAEf2qrEs1KbPlGwsopzrriOtY4VE17BDqEa-vI19C65prUYdek4HqYJrt5Vz-1a--v9n_aT7K0YHcH',
        status: 'Open',
      },
      {
        slug: 'australia',
        title: 'Australia',
        description: 'Subclass 189/190 pathways for specialized engineering and architectural expertise.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUEzwsOLU9qpAH5nhGsT9uC37r3vbobtNZm5g6EQtKBd9NBmlIbgMa1JHxO-IlRaA0BX-2sEl9uqaIC_QtJ13LsN_xsyHm575kGRr50_aMIfCl6aw4ccEmgU20JFBLMk22Xm2DUt0N1hgqqNd2Goup2ZR9Wga_UF-PGkOgYl4Ckr1-6RSvIUlz0WxRRHdODDLGyifdU6_56fasuoSSHo0JIyRvEA3eBwLQYtCXkLsOGdJdGeg5mHKN5vfg5OVdk4nXwuEz_isB0Hh',
        status: 'Priority',
      },
      {
        slug: 'united-kingdom',
        title: 'United Kingdom',
        description: 'Skilled Worker Visa sponsorship support for senior leadership and finance roles.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAwkgUXoesEMGs_vyyxUOjCkPvzawi5Ud_4cg6TTAIPFw5320mQwa9sVWW3M-uaMISsuAV8ssxWk6da6wOd2dQ0ZYMsfreve1BQfG-GE0eyK2CGm2d40seeXSnmrrz17B_gpzQ7tFWtPWHzOZJxZsepVecOzHp_s75r116j8JvEfOCjZ5VxKjFui3nm0SE7tjSqJjIRAUN2648puq62dr_cn28zVWkdfULmFlGAjnu0FfAJZX_xJYW3hxw7E90Qt5udsVtYXmD_fDfK',
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
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEnrp6NOB0LBq4TT36HqeRCVZuAA0B2lpBLtPtQbzCJmxEaS-c_KBp7NYLQ2Ys7lFjy88n-P-YPNvGLRJoC6pcGtXiKbgcLKHzAruSi3Jmxph5UYa2eDqbbV5pLCuMzLaqoX13jkfVq9e5UjlEehtRUf76UxKAIBhsv-JJPdDOp6yQ4MHBUbfbGOjKn_KRJz3k1T-hRMBSKd1cSHn-lCXUhGrAbzJH4I7OSnVEhcRuRwcBTXfQjiBmn8l_TZ8x2m2pSjFD_LbFkCfU',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpXEk8f9s7-S8U-jxh3_wKoVLSJdQn3WXAG5_WQiX4ufJhCqSCYPrmU7b2X9fF3mjzwWLB7Nxjte03B_rkFz7b9VRrXFYK-KmRCfDLsn-nFJ6vHGcEhIi91dRbGxHPbPBsqL5Lx3A_hBl3mMrP0vlcXaGFmHnflB3hBJvGIoJpqWlZDp8PadV3EhxHfHSwbB6VLrq9eMx0HO_AUBg4VZp6ACRy3g_sj2UJbJDxcbnM5C4_YJPQ',
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
  },
  {
    slug: 'business-residency',
    title: 'Business Residency',
    tagline: 'Commercial Mobility Solutions',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEnrp6NOB0LBq4TT36HqeRCVZuAA0B2lpBLtPtQbzCJmxEaS-c_KBp7NYLQ2Ys7lFjy88n-P-YPNvGLRJoC6pcGtXiKbgcLKHzAruSi3Jmxph5UYa2eDqbbV5pLCuMzLaqoX13jkfVq9e5UjlEehtRUf76UxKAIBhsv-JJPdDOp6yQ4MHBUbfbGOjKn_KRJz3k1T-hRMBSKd1cSHn-lCXUhGrAbzJH4I7OSnVEhcRuRwcBTXfQjiBmn8l_TZ8x2m2pSjFD_LbFkCfU',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpXEk8f9s7-S8U-jxh3_wKoVLSJdQn3WXAG5_WQiX4ufJhCqSCYPrmU7b2X9fF3mjzwWLB7Nxjte03B_rkFz7b9VRrXFYK-KmRCfDLsn-nFJ6vHGcEhIi91dRbGxHPbPBsqL5Lx3A_hBl3mMrP0vlcXaGFmHnflB3hBJvGIoJpqWlZDp8PadV3EhxHfHSwbB6VLrq9eMx0HO_AUBg4VZp6ACRy3g_sj2UJbJDxcbnM5C4_YJPQ',
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
  },
  {
    slug: 'work-permits',
    title: 'Work Permits',
    tagline: 'Global Workforce Integration',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEnrp6NOB0LBq4TT36HqeRCVZuAA0B2lpBLtPtQbzCJmxEaS-c_KBp7NYLQ2Ys7lFjy88n-P-YPNvGLRJoC6pcGtXiKbgcLKHzAruSi3Jmxph5UYa2eDqbbV5pLCuMzLaqoX13jkfVq9e5UjlEehtRUf76UxKAIBhsv-JJPdDOp6yQ4MHBUbfbGOjKn_KRJz3k1T-hRMBSKd1cSHn-lCXUhGrAbzJH4I7OSnVEhcRuRwcBTXfQjiBmn8l_TZ8x2m2pSjFD_LbFkCfU',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpXEk8f9s7-S8U-jxh3_wKoVLSJdQn3WXAG5_WQiX4ufJhCqSCYPrmU7b2X9fF3mjzwWLB7Nxjte03B_rkFz7b9VRrXFYK-KmRCfDLsn-nFJ6vHGcEhIi91dRbGxHPbPBsqL5Lx3A_hBl3mMrP0vlcXaGFmHnflB3hBJvGIoJpqWlZDp8PadV3EhxHfHSwbB6VLrq9eMx0HO_AUBg4VZp6ACRy3g_sj2UJbJDxcbnM5C4_YJPQ',
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
  },
  {
    slug: 'permanent-residency',
    title: 'Permanent Residency',
    tagline: 'Generational Security',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEnrp6NOB0LBq4TT36HqeRCVZuAA0B2lpBLtPtQbzCJmxEaS-c_KBp7NYLQ2Ys7lFjy88n-P-YPNvGLRJoC6pcGtXiKbgcLKHzAruSi3Jmxph5UYa2eDqbbV5pLCuMzLaqoX13jkfVq9e5UjlEehtRUf76UxKAIBhsv-JJPdDOp6yQ4MHBUbfbGOjKn_KRJz3k1T-hRMBSKd1cSHn-lCXUhGrAbzJH4I7OSnVEhcRuRwcBTXfQjiBmn8l_TZ8x2m2pSjFD_LbFkCfU',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpXEk8f9s7-S8U-jxh3_wKoVLSJdQn3WXAG5_WQiX4ufJhCqSCYPrmU7b2X9fF3mjzwWLB7Nxjte03B_rkFz7b9VRrXFYK-KmRCfDLsn-nFJ6vHGcEhIi91dRbGxHPbPBsqL5Lx3A_hBl3mMrP0vlcXaGFmHnflB3hBJvGIoJpqWlZDp8PadV3EhxHfHSwbB6VLrq9eMx0HO_AUBg4VZp6ACRy3g_sj2UJbJDxcbnM5C4_YJPQ',
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
  },
  {
    slug: 'family-sponsorship',
    title: 'Family Sponsorship',
    tagline: 'Reuniting Global Families',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEnrp6NOB0LBq4TT36HqeRCVZuAA0B2lpBLtPtQbzCJmxEaS-c_KBp7NYLQ2Ys7lFjy88n-P-YPNvGLRJoC6pcGtXiKbgcLKHzAruSi3Jmxph5UYa2eDqbbV5pLCuMzLaqoX13jkfVq9e5UjlEehtRUf76UxKAIBhsv-JJPdDOp6yQ4MHBUbfbGOjKn_KRJz3k1T-hRMBSKd1cSHn-lCXUhGrAbzJH4I7OSnVEhcRuRwcBTXfQjiBmn8l_TZ8x2m2pSjFD_LbFkCfU',
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
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpXEk8f9s7-S8U-jxh3_wKoVLSJdQn3WXAG5_WQiX4ufJhCqSCYPrmU7b2X9fF3mjzwWLB7Nxjte03B_rkFz7b9VRrXFYK-KmRCfDLsn-nFJ6vHGcEhIi91dRbGxHPbPBsqL5Lx3A_hBl3mMrP0vlcXaGFmHnflB3hBJvGIoJpqWlZDp8PadV3EhxHfHSwbB6VLrq9eMx0HO_AUBg4VZp6ACRy3g_sj2UJbJDxcbnM5C4_YJPQ',
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
  },
];

export const publishedServices = services.filter((service) => service.isPublished);
