export type Country = {
  slug: string;
  name: string;
  tagline: string;
  homeImage?: string;
  homeHighlight?: string;
  heroImage: string;
  heroHeadline: string;
  heroSubtext: string;
  overviewHeading: string;
  overviewBody: string;
  overviewImage: string;
  overviewStats: { value: string; label: string }[];
  pathways: {
    id: string;
    title: string;
    description: string;
    icon: string;
    bgImage?: string;
    link?: string;
    ctaLabel?: string;
  }[];
  whyChooseImages: string[];
  requirements: {
    title: string;
    description: string;
    badge: string;
  }[];
  citizenshipSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  ctaHeading: string;
  isPublished?: boolean;
};

export const countries: Country[] = [
  {
    slug: 'canada',
    name: 'Canada',
    tagline: 'A Land of Opportunity',
    homeImage: '/images/countries/canada-home.jpg',
    homeHighlight: 'Express Entry • Provincial Nominee',
    heroImage: '/images/countries/canada-hero.jpg',
    heroHeadline: 'Canada',
    heroSubtext: 'A Land of Opportunity',
    overviewHeading: 'Why Global Leaders Choose Canada',
    overviewBody:
      'Canada offers an unparalleled quality of life, a stable economy, and a welcoming multicultural landscape, making it the premier choice for skilled professionals and investors from the Middle East.',
    overviewImage: '/images/countries/canada-overview.jpg',
    overviewStats: [
      { value: '#1', label: 'Best Quality of Life Globally' },
      { value: '93%', label: 'Immigrant Satisfaction Rate' },
    ],
    pathways: [
      {
        id: 'express-entry',
        title: 'Express Entry',
        description:
          'Canada\'s principal route to permanent residency for skilled workers. We assess your eligibility, calculate your Comprehensive Ranking System (CRS) score and build a strong profile for an Invitation to Apply — including the category-based draws for healthcare, STEM, trades, education and French-language candidates.',
        icon: 'rocket_launch',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'pnp',
        title: 'Provincial Nominee Programs',
        description:
          'Nomination streams run by each province and territory for the occupations and profiles their labour markets need, giving a route to permanent residency either through Express Entry (with 600 additional CRS points) or directly to IRCC.',
        icon: 'policy',
      },
      {
        id: 'community',
        title: 'Rural, Francophone & Atlantic Programs',
        description:
          'Employer-driven permanent residency in smaller communities: the Rural Community Immigration Program (made permanent in November 2026), the Francophone Community Immigration Pilot for French speakers settling outside Quebec, and the Atlantic Immigration Program in Canada\'s four Atlantic provinces.',
        icon: 'landscape',
      },
      {
        id: 'work-permits',
        title: 'Work Permits',
        description:
          'Employer-specific permits through the Temporary Foreign Worker Program (LMIA-based) and the International Mobility Program, plus International Experience Canada (IEC) for eligible young nationals. We manage employer compliance and the permit application from start to finish.',
        icon: 'work',
        bgImage: '/images/countries/canada-bg.jpg',
      },
      {
        id: 'study',
        title: 'Study Permits & Post-Graduation Work',
        description:
          'Study permit applications for designated learning institutions, including the provincial attestation letter now required for most programs under Canada\'s study permit cap, followed by the Post-Graduation Work Permit (PGWP) — the bridge from Canadian education to Canadian work experience and permanent residency.',
        icon: 'school',
      },
      {
        id: 'family',
        title: 'Family Sponsorship & Super Visa',
        description:
          'Spousal and common-law partner sponsorship, dependent child sponsorship, and the Parent and Grandparent Super Visa — a multi-entry visa allowing stays of up to five years per visit, and the practical route for parents while the Parents and Grandparents Program remains closed to new sponsors.',
        icon: 'groups',
      },
    ],
    whyChooseImages: [
      '/images/countries/canada-why.jpg',
      '/images/countries/canada-why-2.jpg',
    ],
    requirements: [
      {
        title: 'Physical Presence',
        description:
          'You must have been physically present in Canada for at least 1,095 days during the five years right before the date you sign your application.',
        badge: 'Mandatory',
      },
      {
        title: 'Language Proficiency',
        description:
          'Ability to communicate in either English or French. Candidates between 18-54 must provide proof of proficiency (CLB 4 or higher).',
        badge: 'Level 4+',
      },
      {
        title: 'Income Tax Filing',
        description:
          'Filing personal income tax returns for at least 3 years that are fully or partially within the 5 years before you apply.',
        badge: '3 Years',
      },
    ],
    citizenshipSteps: [
      {
        step: '01',
        title: 'Obtain Permanent Residency',
        description: 'Through skilled worker, investment, or family programs.',
      },
      {
        step: '02',
        title: 'Maintain Residency Obligation',
        description: 'Live in Canada for 3 out of 5 years to qualify for citizenship.',
      },
      {
        step: '03',
        title: 'Citizenship Application',
        description: 'Pass the citizenship test and attend the oath ceremony.',
      },
    ],
    ctaHeading: 'Ready to Call Canada Your Home?',
    isPublished: true,
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    tagline: 'Global Financial Center',
    homeImage: '/images/countries/united-kingdom-home.jpg',
    homeHighlight: 'Skilled Worker • Innovator Founder',
    heroImage: '/images/countries/united-kingdom-hero.jpg',
    heroHeadline: 'Elite Residency in the United Kingdom',
    heroSubtext:
      'Access unparalleled financial opportunities and world-class education through curated UK residency and citizenship pathways.',
    overviewHeading: 'Tradition Meets Modern Ambition',
    overviewBody:
      'The United Kingdom remains a premier destination for global professionals and investors. With its robust legal system, world-leading universities, and strategic position in global trade, it offers a secure and prosperous environment for your family.',
    overviewImage: '/images/countries/united-kingdom-overview.jpg',
    overviewStats: [
      { value: 'Top 5', label: 'Global Economy' },
      { value: '150+', label: 'Visa Categories' },
    ],
    pathways: [
      {
        id: 'skilled-worker',
        title: 'Skilled Worker Visa',
        description:
          'Sponsored employment in graduate-level roles (RQF 6 and above since July 2025) that meet the current salary thresholds and English requirement. The Health and Care Worker visa remains open to nurses, doctors and allied health professionals, although overseas recruitment of care workers closed in 2025. Settlement is currently possible after five years; the government has announced an \'earned settlement\' reform that is not yet law.',
        icon: 'work',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'global-talent',
        title: 'Global Talent Visa',
        description:
          'For leaders and future leaders in academia, research, digital technology, arts and culture, endorsed by a recognised body or holding a qualifying prize. No job offer or sponsor is needed, and settlement can follow after three years for exceptional talent.',
        icon: 'workspace_premium',
      },
      {
        id: 'hpi',
        title: 'High Potential Individual Visa',
        description:
          'A two-year work visa (three for PhDs) for recent graduates of the world\'s leading universities, with no sponsor required. The October 2026 Budget announced an expansion of the eligible-university list and cap, which has not yet taken effect.',
        icon: 'school',
      },
      {
        id: 'student',
        bgImage: '/images/countries/united-kingdom-overview.jpg',
        title: 'Student Visa & Graduate Route',
        description:
          'Student visa applications with a Confirmation of Acceptance for Studies (CAS) and proof of funds, then the Graduate Route to work after your degree — two years for applications made before 2027, 18 months thereafter, and three years for PhDs — and the switch to a Skilled Worker visa for long-term settlement.',
        icon: 'menu_book',
      },
      {
        id: 'family',
        title: 'Family & Spouse Visas',
        description:
          'Spouse and partner visas to join a British or settled partner (minimum income requirement currently £29,000 a year), parent visas, and dependent child visas for children under 18.',
        icon: 'groups',
      },
      {
        id: 'innovator',
        title: 'Innovator Founder Visa',
        description:
          'The UK\'s route for entrepreneurs launching an innovative, viable and scalable business endorsed by an approved endorsing body — with no minimum investment requirement since 2023 and a path to settlement after three years. It replaced the Start-up visa; the Tier 1 Investor route closed in 2022.',
        icon: 'business_center',
      },
    ],
    whyChooseImages: [
      '/images/countries/united-kingdom-why.jpg',
      '/images/countries/united-kingdom-why-2.jpg',
    ],
    requirements: [
      {
        title: 'Skilled Worker Sponsorship',
        description: 'Must have a confirmed job offer from a UK Home Office–licensed sponsor in an eligible occupation.',
        badge: 'Mandatory',
      },
      {
        title: 'Salary Threshold',
        description: 'Meet the minimum salary requirement for the specific occupation (generally £38,700 or the going rate, whichever is higher).',
        badge: '£38,700+',
      },
      {
        title: 'English Language Proficiency',
        description: 'Demonstrate English at B1 level or above on the CEFR scale via an approved test or degree.',
        badge: 'B1+ Required',
      },
      {
        title: 'Financial Maintenance',
        description: 'Hold at least £1,270 in a bank account for 28 consecutive days unless your employer certifies maintenance.',
        badge: '£1,270',
      },
    ],
    citizenshipSteps: [
      {
        step: '01',
        title: 'Obtain Skilled Worker Visa',
        description: 'Secure employer sponsorship and ILR after 5 years of lawful residence.',
      },
      {
        step: '02',
        title: 'Indefinite Leave to Remain (ILR)',
        description: 'Apply for ILR after 5 continuous years in the UK with no extended absences.',
      },
      {
        step: '03',
        title: 'British Citizenship',
        description: 'Apply for naturalisation after 12 months of ILR, passing the Life in the UK test.',
      },
    ],
    ctaHeading: 'Architect Your UK Future.',
    isPublished: true,
  },
  {
    slug: 'australia',
    name: 'Australia',
    tagline: 'Southern Cross Opportunities',
    homeImage: '/images/countries/australia-home.jpg',
    homeHighlight: 'Subclass 189 • Subclass 190',
    heroImage: '/images/countries/australia-hero.jpg',
    heroHeadline: 'Bespoke Australian Immigration',
    heroSubtext:
      'Discover a lifestyle of excellence and a thriving economy. Our experts navigate the complex Australian points system for you.',
    overviewHeading: 'Unrivaled Quality of Life',
    overviewBody:
      'Australia offers more than just a vibrant lifestyle; it is a land of economic opportunity and social security. With a strong demand for skilled professionals and a transparent immigration system, it is a top choice for GCC families.',
    overviewImage: '/images/countries/australia-overview.jpg',
    overviewStats: [
      { value: '25+', label: 'Years Economic Growth' },
      { value: '92%', label: 'PR Grant Rate' },
    ],
    pathways: [
      {
        id: 'skilled',
        title: 'Skilled Migration (Subclass 189, 190, 491)',
        description:
          'Points-tested permanent and provisional visas: Skilled Independent (189), State Nominated (190) and Regional Sponsored (491). We assess eligibility, arrange your skills assessment, lodge a strong Expression of Interest through SkillSelect and maximise your points for an invitation.',
        icon: 'rocket_launch',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'employer',
        title: 'Employer-Sponsored Work Visas',
        description:
          'The Skills in Demand visa (subclass 482), which replaced the Temporary Skill Shortage visa in December 2024, and the Employer Nomination Scheme (subclass 186) pathway to permanent residency for sponsored workers.',
        icon: 'work',
      },
      {
        id: 'regional',
        title: 'Regional Employer Sponsorship (494 → 191)',
        description:
          'The Skilled Employer Sponsored Regional visa (subclass 494) for workers with a job offer in regional Australia, leading to the Permanent Residence (Skilled Regional) visa (subclass 191) after three years of regional work and residence.',
        icon: 'landscape',
      },
      {
        id: 'innovation',
        bgImage: '/images/countries/australia-why-2.jpg',
        title: 'National Innovation Visa (Subclass 858)',
        description:
          'Australia\'s invitation-only permanent visa for globally exceptional talent in priority sectors, which replaced the Global Talent visa in December 2024. The Business Innovation and Investment (188) programme closed to new applicants in July 2024, so this is now the principal route for high-achieving entrepreneurs and researchers.',
        icon: 'workspace_premium',
      },
      {
        id: 'study',
        title: 'Student Visas & Graduate Work',
        description:
          'Subclass 500 student visas for Australian universities and colleges, the Temporary Graduate visa (subclass 485) to work after your studies, and advice on turning Australian qualifications and experience into permanent residency.',
        icon: 'school',
      },
      {
        id: 'family',
        title: 'Partner, Parent & Child Visas',
        description:
          'Partner visas for spouses and de facto partners (subclasses 820/801 onshore and 309/100 offshore), the Prospective Marriage visa (300), Parent visas including Contributory Parent (143) and Aged Parent (864), and Child visas (101 and 802).',
        icon: 'groups',
      },
    ],
    whyChooseImages: [
      '/images/countries/australia-why.jpg',
      '/images/countries/australia-why-2.jpg',
    ],
    requirements: [
      {
        title: 'Points Test Score',
        description: 'Score at least 65 points under the SkillSelect points system, considering age, English, experience, and qualifications.',
        badge: '65+ Points',
      },
      {
        title: 'Skills Assessment',
        description: 'Receive a positive skills assessment from the relevant Australian assessing authority for your occupation.',
        badge: 'Mandatory',
      },
      {
        title: 'English Language',
        description: 'Achieve at least competent English (IELTS 6.0 or equivalent) for Subclass 189/190; higher for some streams.',
        badge: 'IELTS 6.0+',
      },
      {
        title: 'Health & Character',
        description: 'Meet Australian health requirements and pass a character check with a clean criminal record.',
        badge: 'Mandatory',
      },
    ],
    citizenshipSteps: [
      {
        step: '01',
        title: 'Obtain Permanent Residency',
        description: 'Apply for a Subclass 189 (independent) or 190 (state-nominated) visa.',
      },
      {
        step: '02',
        title: 'Maintain Residency',
        description: 'Reside in Australia for at least 4 years, including 1 year as a permanent resident.',
      },
      {
        step: '03',
        title: 'Citizenship Application',
        description: 'Pass the citizenship test, demonstrate commitment to Australia, and attend the ceremony.',
      },
    ],
    ctaHeading: 'Launch Your Australian Life.',
    isPublished: true,
  },
  {
    slug: 'usa',
    name: 'USA',
    tagline: 'The American Dream',
    homeImage: '/images/countries/usa-home.jpg',
    homeHighlight: 'H-1B • Family Green Cards',
    heroImage: '/images/countries/usa-hero.jpg',
    heroHeadline: 'Strategic US Visa Solutions',
    heroSubtext:
      'From employment-based green cards to investor visas, we provide the legal precision required for US immigration success.',
    overviewHeading: "The World's Economic Engine",
    overviewBody:
      "The United States remains the global leader in innovation and entrepreneurship. Whether through specialized employment or strategic investment, a US Green Card provides unparalleled access to the world's largest market.",
    overviewImage: '/images/countries/usa-overview.jpg',
    overviewStats: [
      { value: '#1', label: 'Innovation Hub' },
      { value: '1M+', label: 'Green Cards Issued' },
    ],
    pathways: [
      {
        id: 'work-visas',
        title: 'Work Visas (H-1B, L-1, O-1)',
        description:
          'H-1B specialty-occupation petitions — now selected through a wage-weighted lottery — alongside L-1 intra-company transfers for executives and specialists and O-1 visas for individuals of extraordinary ability. We prepare the employer documentation and supporting evidence, and plan alternatives if you are not selected.',
        icon: 'work',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'talent',
        title: 'EB-1A & EB-2 National Interest Waiver',
        description:
          'Self-petitioned employment-based green cards for people with sustained national or international acclaim (EB-1A) or whose work is in the US national interest (EB-2 NIW) — no employer sponsor or labour certification required. Demand is high, so the strength of the evidence decides the case.',
        icon: 'workspace_premium',
      },
      {
        id: 'investor',
        title: 'EB-5 Investor Green Card',
        description:
          'Permanent residency for you, your spouse and unmarried children under 21 through a qualifying investment in a US business that creates at least ten jobs, with reduced thresholds for rural and high-unemployment areas under the EB-5 Reform and Integrity Act. We coordinate source-of-funds documentation and regional-centre due diligence.',
        icon: 'account_balance',
      },
      {
        id: 'study',
        bgImage: '/images/countries/usa-why-2.jpg',
        title: 'Student Visas & OPT',
        description:
          'F-1 student visa applications for US universities, Optional Practical Training (OPT) and the 24-month STEM extension to gain US work experience after graduation, and advice on moving from student status to a work visa or green card.',
        icon: 'school',
      },
      {
        id: 'family-green-cards',
        title: 'Family-Based Green Cards',
        description:
          'Immigrant petitions for spouses, children, parents and siblings of US citizens and permanent residents, prepared and tracked through USCIS and consular processing so your family\'s case moves without avoidable delay.',
        icon: 'groups',
      },
      {
        id: 'marriage',
        title: 'Marriage & Fiancé(e) Visas',
        description:
          'CR-1 and IR-1 immigrant visas for spouses of US citizens and permanent residents, and the K-1 fiancé(e) visa for partners planning to marry in the United States — with the relationship evidence and interview preparation these cases demand.',
        icon: 'favorite',
      },
    ],
    whyChooseImages: [
      '/images/countries/usa-why.jpg',
      '/images/countries/usa-why-2.jpg',
    ],
    requirements: [
      {
        title: 'Priority Date & Category',
        description: 'Qualify under an employment-based (EB) or family-based preference category, subject to annual visa caps.',
        badge: 'Category-Based',
      },
      {
        title: 'PERM Labor Certification',
        description: 'For most EB-2 and EB-3 categories, employer must obtain PERM certification from the Department of Labor.',
        badge: 'Employer-Filed',
      },
      {
        title: 'Admissibility Standards',
        description: 'Pass background checks, medical examination, and demonstrate no bars to admissibility (criminal, health, financial).',
        badge: 'Strict',
      },
      {
        title: 'Affidavit of Support',
        description: 'Sponsor must demonstrate financial ability to support the applicant above 125% of the federal poverty line.',
        badge: '125% FPG',
      },
    ],
    citizenshipSteps: [
      {
        step: '01',
        title: 'Obtain Green Card',
        description: 'Secure permanent residency through employment, family, or investment pathways.',
      },
      {
        step: '02',
        title: 'Maintain Continuous Residence',
        description: 'Reside in the US for 5 years (3 years if married to a US citizen) without extended departures.',
      },
      {
        step: '03',
        title: 'Naturalization',
        description: 'Pass the civics and English tests, attend an interview, and take the Oath of Allegiance.',
      },
    ],
    ctaHeading: 'Secure Your American Green Card.',
    isPublished: true,
  },
  {
    slug: 'european-union',
    name: 'European Union',
    tagline: 'Continental Freedom',
    homeImage: '/images/countries/european-union-home.jpg',
    homeHighlight: 'EU Blue Card • Golden Visa',
    heroImage: '/images/countries/european-union-hero.jpg',
    heroHeadline: 'European Residency & Citizenship',
    heroSubtext:
      'Gain the freedom to live, work, and study across the EU through strategic investment and residency programs.',
    overviewHeading: 'A Gateway to the Old World',
    overviewBody:
      'The European Union offers a unique blend of heritage, modern infrastructure, and high social standards. Through Golden Visa programs and specialized residency streams, we help you secure a foothold in the Schengen Area.',
    overviewImage: '/images/countries/european-union-overview.jpg',
    overviewStats: [
      { value: '27', label: 'Member States' },
      { value: 'No. 1', label: 'Health Systems' },
    ],
    pathways: [
      {
        id: 'blue-card',
        title: 'EU Blue Card & Work Permits',
        description:
          'The EU Blue Card for university-educated professionals with a qualifying job offer — in Germany, the Netherlands, France and most member states — plus national skilled-worker permits, with a fast track to long-term residence.',
        icon: 'work',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'job-seeker',
        title: 'Opportunity Card & Job-Seeker Visas',
        description:
          'Germany\'s Opportunity Card (Chancenkarte), a points-based permit to enter the country and look for work for up to a year, together with job-seeker visas in Austria, Portugal and other member states for qualified professionals without an offer yet in hand.',
        icon: 'search',
      },
      {
        id: 'study',
        title: 'Student Visas & Post-Study Work',
        description:
          'Student residence permits for Germany, France, the Netherlands, Spain and other EU countries, followed by post-study job-search permits — up to 18 months in Germany — and the transition to a Blue Card or national work permit.',
        icon: 'school',
      },
      {
        id: 'family',
        bgImage: '/images/countries/european-union-why-2.jpg',
        title: 'Family Reunification',
        description:
          'Residence permits for spouses, partners and minor children joining an EU resident, including the simplified family reunion rules for Blue Card holders and skilled workers in Germany.',
        icon: 'groups',
      },
      {
        id: 'investment',
        title: 'Golden Visas & Investor Residency',
        description:
          'Residency by investment in the programmes still open: Greece (real estate), Portugal (investment funds; property no longer qualifies since 2023), Italy\'s Investor Visa, Hungary\'s Guest Investor programme, Malta\'s Permanent Residence Programme and Cyprus. Spain closed its golden visa in 2025.',
        icon: 'account_balance',
      },
      {
        id: 'nomad',
        title: 'Digital Nomad & Entrepreneur Visas',
        description:
          'Remote-work residence permits for professionals with foreign income in Portugal (D8), Italy, Spain, Greece and Hungary, alongside entrepreneur, freelancer and self-employed permits in Germany, the Netherlands and other member states.',
        icon: 'laptop_mac',
      },
    ],
    whyChooseImages: [
      '/images/countries/european-union-why.jpg',
      '/images/countries/european-union-why-2.jpg',
    ],
    requirements: [
      {
        title: 'Minimum Investment',
        description: 'Meet the capital threshold for the target country (e.g., Portugal €500K real estate or €250K cultural investment).',
        badge: 'Capital Required',
      },
      {
        title: 'Clean Criminal Record',
        description: 'Provide authenticated police clearance from all countries of residence in the past 5 years.',
        badge: 'Mandatory',
      },
      {
        title: 'Health Insurance',
        description: 'Obtain valid health insurance covering the entire Schengen Area for yourself and all dependents.',
        badge: 'Full Schengen',
      },
      {
        title: 'Minimum Stay Compliance',
        description: 'Maintain the minimum physical presence required by the specific program (e.g., 7 days/year for Portugal Golden Visa).',
        badge: 'Program-Specific',
      },
    ],
    citizenshipSteps: [
      {
        step: '01',
        title: 'Obtain Golden Visa / Residency',
        description: 'Qualify through investment (real estate, capital, or job creation) in the target EU country.',
      },
      {
        step: '02',
        title: 'Maintain Investment & Residence',
        description: 'Sustain the qualifying investment and meet minimum annual stay requirements for 5 years.',
      },
      {
        step: '03',
        title: 'Permanent Residency & Citizenship',
        description: 'Apply for permanent residency after 5 years, then citizenship after meeting language and integration criteria.',
      },
    ],
    ctaHeading: 'Unlock European Mobility.',
    isPublished: true,
  },
];
