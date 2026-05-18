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
    homeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATxzHKdh_RLdAydsvY6nZI7shSgTTUJNTs23VimeU90Pe8cZi8wNNhnfRVlSIn23TuAhY5QvJt3PY4-Mv4thUSmZpOhdEEjXxbwyrGJwQhqaPzvfVJ5OirO2K-VIK2v8hdk5fOTa36QPM1d_TXtAJt0Tk3cZE9nKDaP863eJnSEMx0wCHCJk4CrJAr5jnIoTZTtCbedh-ztizB3BoBgH09BhubMAXDh8-yo6JSRb95xKYrexZ8aWyyB4oU260tn03nVD_7sk-z5Sw3',
    homeHighlight: 'Express Entry • Provincial Nominee',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoM5GHKUNqhbgGylRNS4PdjQKMHUd4Pp0HvkNtrTSu2K-Oip0w5EgDM1tXh9SvaHm4a7eBCYR7v66-g2l7dD_0TXVnQcRO4FwbHujgBiZPMry5p6xEf_t7tRcuUaQlfpva86KsMmbYxHBP97ZJe6LboKyA_Lm0K7dZJhUH5KjG25JKD-xS4u17STzTon44HXbDB4xP8gZgYwfeRMhqsJYSrdtdqXGD9lcsiXvCXKZPA0FsZhwgxCHw0Luwu53Rs_Kbw7ZeJtUroEy9',
    heroHeadline: 'Canada',
    heroSubtext: 'A Land of Opportunity',
    overviewHeading: 'Why Global Leaders Choose Canada',
    overviewBody:
      'Canada offers an unparalleled quality of life, a stable economy, and a welcoming multicultural landscape, making it the premier choice for skilled professionals and investors from the Middle East.',
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMp1evYlOpM0ZuDcwfwHgfqZDW7C5kLBlyenYSXonraWAe3tvM7OxpQyzxNUAny0-G_F9IW8Gi7UZU1cNynW43uNZjZFHi7Qbu5NEymp7nMdeyqmFwx8fKTJXuzRkfKaTk4k5gx-2rqNM6jWZ7uQG3pNv9NdYUEUwnO101uHtAp1099p0KlauV1vnWAqcYtgugzfdOfOq8Rs4gsiTe5eapBPuGwKivFev79znQYPC24hzX9zLvU7UCyzlQsm7lT1BYZcBdRmq_QO_k',
    overviewStats: [
      { value: '#1', label: 'Best Quality of Life Globally' },
      { value: '93%', label: 'Immigrant Satisfaction Rate' },
    ],
    pathways: [
      {
        id: 'express-entry',
        title: 'Express Entry System',
        description:
          'The fastest route for skilled workers. We specialize in Federal Skilled Worker (FSW) and Canadian Experience Class (CEC) applications with high success rates.',
        icon: 'rocket_launch',
        ctaLabel: 'Explore Pathway',
      },
      {
        id: 'business',
        title: 'Investor & Entrepreneur',
        description:
          'Bespoke solutions for high-net-worth individuals seeking Start-up Visas or Provincial Business programs.',
        icon: 'business_center',
        ctaLabel: 'Consult',
      },
      {
        id: 'family',
        title: 'Family Sponsorship',
        description:
          'Reunite with your loved ones through our expert-guided spousal and parental sponsorship services.',
        icon: 'groups',
        ctaLabel: 'Consult',
      },
      {
        id: 'pnp',
        title: 'Provincial Nominee Programs (PNP)',
        description:
          'Tailored routes for specific provinces like Ontario, British Columbia, and Alberta based on local labor market needs.',
        icon: 'policy',
        bgImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCLU4M-0CD2TGBLfMr8KKQdTp2DPYnyiSAS7TA_Jhc8tXtxfdpo_oHh_jRPQen_ig3XHlyd8F0uVBKyWhWWPOrbIMvLqhKDnTD2o9WMwLrstDT5jzfTFiInet0sC3Q0g0mRsI9eVXv2L7vdI9Pqtv6Gg6dm-d_RU-snCIlB7frSeiHtmbvrL-OlTC5ChsFkh9Ox9L-ZM7vBTrswGr0F66iAaDHb8EG6i_1zIK5Tvz6YP94MPN07xMxFBcNSd2FkxR5VhS-HqCiEFVkm',
        ctaLabel: 'View Provinces',
      },
    ],
    whyChooseImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMp1evYlOpM0ZuDcwfwHgfqZDW7C5kLBlyenYSXonraWAe3tvM7OxpQyzxNUAny0-G_F9IW8Gi7UZU1cNynW43uNZjZFHi7Qbu5NEymp7nMdeyqmFwx8fKTJXuzRkfKaTk4k5gx-2rqNM6jWZ7uQG3pNv9NdYUEUwnO101uHtAp1099p0KlauV1vnWAqcYtgugzfdOfOq8Rs4gsiTe5eapBPuGwKivFev79znQYPC24hzX9zLvU7UCyzlQsm7lT1BYZcBdRmq_QO_k',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHj0DxO6R6drT6QKPSGy5hllixI8GtEb81Ya2HfAD_zTmytR5_n6RqhOhANC_WjqmxvFyRylh2LaaDun_z74QO_KyGMaI8xbpHCgvYxMNm3NtYe4g1SX6yHhe40zwouQXCEXykWPsLvQKGZShXvbfEtkUZabHLNmqNWkEFL1Ls3IK4A9hxzNBGCUZClvmoVWODCyL2V2Me9d1jiOe3AhoEcLBeXbeTzBdVx9iyzF2LOH_8fBoNrXAQxwRgrcPaee0j2qw_HpJ89OQT',
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
    homeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAY_mxwR0hBNeK-ko7Qt62XlqaCl1y5VLUvVfYSJgKbpN8ZPywLAWHStvI98W4WKxaDTErb28OxF1iiBVrtm47-YvwhIdvFaUZqPEec_0Put_7Ssd15lrsBLCiHDGC-Y0Y3q1pkqcWkewAlmle8C1F7O40teOGYpbz0W4jEgxNGno0geYMaZ7jPeBZwC2HZFs8Q9F8p-nE5CmjWmLSan9-xIoMtSaj3pxWEjUjjj40h2o6ugaktwMAWIh2VGTMPH2AO33mL2okCuV16',
    homeHighlight: 'Skilled Worker • Global Talent',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwkgUXoesEMGs_vyyxUOjCkPvzawi5Ud_4cg6TTAIPFw5320mQwa9sVWW3M-uaMISsuAV8ssxWk6da6wOd2dQ0ZYMsfreve1BQfG-GE0eyK2CGm2d40seeXSnmrrz17B_gpzQ7tFWtPWHzOZJxZsepVecOzHp_s75r116j8JvEfOCjZ5VxKjFui3nm0SE7tjSqJjIRAUN2648puq62dr_cn28zVWkdfULmFlGAjnu0FfAJZX_xJYW3hxw7E90Qt5udsVtYXmD_fDfK',
    heroHeadline: 'Elite Residency in the United Kingdom',
    heroSubtext:
      'Access unparalleled financial opportunities and world-class education through curated UK residency and citizenship pathways.',
    overviewHeading: 'Tradition Meets Modern Ambition',
    overviewBody:
      'The United Kingdom remains a premier destination for global professionals and investors. With its robust legal system, world-leading universities, and strategic position in global trade, it offers a secure and prosperous environment for your family.',
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwkgUXoesEMGs_vyyxUOjCkPvzawi5Ud_4cg6TTAIPFw5320mQwa9sVWW3M-uaMISsuAV8ssxWk6da6wOd2dQ0ZYMsfreve1BQfG-GE0eyK2CGm2d40seeXSnmrrz17B_gpzQ7tFWtPWHzOZJxZsepVecOzHp_s75r116j8JvEfOCjZ5VxKjFui3nm0SE7tjSqJjIRAUN2648puq62dr_cn28zVWkdfULmFlGAjnu0FfAJZX_xJYW3hxw7E90Qt5udsVtYXmD_fDfK',
    overviewStats: [
      { value: 'Top 5', label: 'Global Economy' },
      { value: '150+', label: 'Visa Categories' },
    ],
    pathways: [
      {
        id: 'skilled-worker',
        title: 'Skilled Worker Visa',
        description:
          'For professionals with a job offer from a licensed UK employer. We handle the entire sponsorship and application process.',
        icon: 'work',
      },
      {
        id: 'innovator',
        title: 'Innovator Founder',
        description:
          'For entrepreneurs looking to establish an innovative business in the UK. Requires endorsement from an approved body.',
        icon: 'lightbulb',
      },
    ],
    whyChooseImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwkgUXoesEMGs_vyyxUOjCkPvzawi5Ud_4cg6TTAIPFw5320mQwa9sVWW3M-uaMISsuAV8ssxWk6da6wOd2dQ0ZYMsfreve1BQfG-GE0eyK2CGm2d40seeXSnmrrz17B_gpzQ7tFWtPWHzOZJxZsepVecOzHp_s75r116j8JvEfOCjZ5VxKjFui3nm0SE7tjSqJjIRAUN2648puq62dr_cn28zVWkdfULmFlGAjnu0FfAJZX_xJYW3hxw7E90Qt5udsVtYXmD_fDfK',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwkgUXoesEMGs_vyyxUOjCkPvzawi5Ud_4cg6TTAIPFw5320mQwa9sVWW3M-uaMISsuAV8ssxWk6da6wOd2dQ0ZYMsfreve1BQfG-GE0eyK2CGm2d40seeXSnmrrz17B_gpzQ7tFWtPWHzOZJxZsepVecOzHp_s75r116j8JvEfOCjZ5VxKjFui3nm0SE7tjSqJjIRAUN2648puq62dr_cn28zVWkdfULmFlGAjnu0FfAJZX_xJYW3hxw7E90Qt5udsVtYXmD_fDfK',
    ],
    requirements: [],
    citizenshipSteps: [],
    ctaHeading: 'Architect Your UK Future.',
  },
  {
    slug: 'australia',
    name: 'Australia',
    tagline: 'Southern Cross Opportunities',
    homeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAV-4_OarjIg9lquBoD2YtELh5fe-5YrMA8kCpTnrgbd72KvyNsjPZphpxWG2WGJl2gXO-51FxSvBl2bSsT171--kKGv9HBGSpJqSE6-GPQOvkVSlQUV_vPQ-YOhhps1eiD_CSKJjk6fmcYxSxgMNsbqjxnnY8ZF_zvRYEnXh1M6uw7Y0qUtLfHCpewZCJ5VhByG7tO0yVpxmtNKQyg1TpzUjyHxPI5M2xUE2dPNvo_80SM1MkfcrB9iVbkNSF8OxG0G3lwLVSr7Agg',
    homeHighlight: 'Subclass 189 • Subclass 190',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUEzwsOLU9qpAH5nhGsT9uC37r3vbobtNZm5g6EQtKBd9NBmlIbgMa1JHxO-IlRaA0BX-2sEl9uqaIC_QtJ13LsN_xsyHm575kGRr50_aMIfCl6aw4ccEmgU20JFBLMk22Xm2DUt0N1hgqqNd2Goup2ZR9Wga_UF-PGkOgYl4Ckr1-6RSvIUlz0WxRRHdODDLGyifdU6_56fasuoSSHo0JIyRvEA3eBwLQYtCXkLsOGdJdGeg5mHKN5vfg5OVdk4nXwuEz_isB0Hh',
    heroHeadline: 'Bespoke Australian Immigration',
    heroSubtext:
      'Discover a lifestyle of excellence and a thriving economy. Our experts navigate the complex Australian points system for you.',
    overviewHeading: 'Unrivaled Quality of Life',
    overviewBody:
      'Australia offers more than just a vibrant lifestyle; it is a land of economic opportunity and social security. With a strong demand for skilled professionals and a transparent immigration system, it is a top choice for GCC families.',
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUEzwsOLU9qpAH5nhGsT9uC37r3vbobtNZm5g6EQtKBd9NBmlIbgMa1JHxO-IlRaA0BX-2sEl9uqaIC_QtJ13LsN_xsyHm575kGRr50_aMIfCl6aw4ccEmgU20JFBLMk22Xm2DUt0N1hgqqNd2Goup2ZR9Wga_UF-PGkOgYl4Ckr1-6RSvIUlz0WxRRHdODDLGyifdU6_56fasuoSSHo0JIyRvEA3eBwLQYtCXkLsOGdJdGeg5mHKN5vfg5OVdk4nXwuEz_isB0Hh',
    overviewStats: [
      { value: '25+', label: 'Years Economic Growth' },
      { value: '92%', label: 'PR Grant Rate' },
    ],
    pathways: [
      {
        id: 'skilled-independent',
        title: 'Skilled Independent (189)',
        description:
          'A points-tested visa for skilled workers who are not sponsored by an employer or family member or nominated by a state.',
        icon: 'person_celebrate',
      },
    ],
    whyChooseImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUEzwsOLU9qpAH5nhGsT9uC37r3vbobtNZm5g6EQtKBd9NBmlIbgMa1JHxO-IlRaA0BX-2sEl9uqaIC_QtJ13LsN_xsyHm575kGRr50_aMIfCl6aw4ccEmgU20JFBLMk22Xm2DUt0N1hgqqNd2Goup2ZR9Wga_UF-PGkOgYl4Ckr1-6RSvIUlz0WxRRHdODDLGyifdU6_56fasuoSSHo0JIyRvEA3eBwLQYtCXkLsOGdJdGeg5mHKN5vfg5OVdk4nXwuEz_isB0Hh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUEzwsOLU9qpAH5nhGsT9uC37r3vbobtNZm5g6EQtKBd9NBmlIbgMa1JHxO-IlRaA0BX-2sEl9uqaIC_QtJ13LsN_xsyHm575kGRr50_aMIfCl6aw4ccEmgU20JFBLMk22Xm2DUt0N1hgqqNd2Goup2ZR9Wga_UF-PGkOgYl4Ckr1-6RSvIUlz0WxRRHdODDLGyifdU6_56fasuoSSHo0JIyRvEA3eBwLQYtCXkLsOGdJdGeg5mHKN5vfg5OVdk4nXwuEz_isB0Hh',
    ],
    requirements: [],
    citizenshipSteps: [],
    ctaHeading: 'Launch Your Australian Life.',
  },
  {
    slug: 'usa',
    name: 'USA',
    tagline: 'The American Dream',
    homeImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6I1buuDVATChAJOyjkRfeKIRoE-BPbvAx98cjw69XtXlmKwtzb8sfOU84cF0ZTaeFXY-DraC-CRoWKm6uZ8u1-TNrF9i9jUmJIl1wVEnNybkP3ODhkNGKdj32We6BLsGk-RhE-95kMurj92fTkMNJwbkIk9S4c2gXSo5hnae3gTwP72mqHZStUEMRJIMVqdRyEB_giqXUwgDh44JFhLcKCVw0YjM54IupLyqFYcdcc8mqoJHeIbi5ybusUXslvZjBvwflqylY1dlH',
    homeHighlight: 'H-1B • EB-5 Investor',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJcxYDz5muIa45-x-SF_Dgv_oQ84h0BGo4jlhHG5XfNJSVubRs80UCU7BZTik4IezJeQNYdWf0JPk3A7JUfVBUh95-iQtw03vrZ0wM8HE3IIeAez2sg7C24LixIzJq_Ux8Q34dP5aWlgJhvm6IbXA3KW0sWNUXUt6KlEkydw6zcsM2bWZoL4k8lCyOxzShfVckY9VobvAEyM6xv9sKRP9yEAchAXfX6siMw2r8zj4Y24H3fV9DInJ9JH4zWo4f5X3t7eRPFzY0L8',
    heroHeadline: 'Strategic US Visa Solutions',
    heroSubtext:
      'From employment-based green cards to investor visas, we provide the legal precision required for US immigration success.',
    overviewHeading: "The World's Economic Engine",
    overviewBody:
      "The United States remains the global leader in innovation and entrepreneurship. Whether through specialized employment or strategic investment, a US Green Card provides unparalleled access to the world's largest market.",
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJcxYDz5muIa45-x-SF_Dgv_oQ84h0BGo4jlhHG5XfNJSVubRs80UCU7BZTik4IezJeQNYdWf0JPk3A7JUfVBUh95-iQtw03vrZ0wM8HE3IIeAez2sg7C24LixIzJq_Ux8Q34dP5aWlgJhvm6IbXA3KW0sWNUXUt6KlEkydw6zcsM2bWZoL4k8lCyOxzShfVckY9VobvAEyM6xv9sKRP9yEAchAXfX6siMw2r8zj4Y24H3fV9DInJ9JH4zWo4f5X3t7eRPFzY0L8',
    overviewStats: [
      { value: '#1', label: 'Innovation Hub' },
      { value: '1M+', label: 'Green Cards Issued' },
    ],
    pathways: [
      {
        id: 'eb1',
        title: 'Extraordinary Ability (EB-1)',
        description:
          'For individuals with extraordinary ability in sciences, arts, education, business, or athletics. No job offer required.',
        icon: 'star',
      },
    ],
    whyChooseImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJcxYDz5muIa45-x-SF_Dgv_oQ84h0BGo4jlhHG5XfNJSVubRs80UCU7BZTik4IezJeQNYdWf0JPk3A7JUfVBUh95-iQtw03vrZ0wM8HE3IIeAez2sg7C24LixIzJq_Ux8Q34dP5aWlgJhvm6IbXA3KW0sWNUXUt6KlEkydw6zcsM2bWZoL4k8lCyOxzShfVckY9VobvAEyM6xv9sKRP9yEAchAXfX6siMw2r8zj4Y24H3fV9DInJ9JH4zWo4f5X3t7eRPFzY0L8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMJcxYDz5muIa45-x-SF_Dgv_oQ84h0BGo4jlhHG5XfNJSVubRs80UCU7BZTik4IezJeQNYdWf0JPk3A7JUfVBUh95-iQtw03vrZ0wM8HE3IIeAez2sg7C24LixIzJq_Ux8Q34dP5aWlgJhvm6IbXA3KW0sWNUXUt6KlEkydw6zcsM2bWZoL4k8lCyOxzShfVckY9VobvAEyM6xv9sKRP9yEAchAXfX6siMw2r8zj4Y24H3fV9DInJ9JH4zWo4f5X3t7eRPFzY0L8',
    ],
    requirements: [],
    citizenshipSteps: [],
    ctaHeading: 'Secure Your American Green Card.',
  },
  {
    slug: 'european-union',
    name: 'European Union',
    tagline: 'Continental Freedom',
    homeHighlight: 'Golden Visa • Schengen Access',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS_9B1WsvHNjqvddDf9HAzg67nzhjZMV2uW5abUU7h6NfLQNG1WEhT8AoYx9fTjn_9zHmCKe6JbJbF4yiyuuWUp7A6D5aIo9zFVqdk0DmM2-6TSkoHxLhrNiwJkP1jA8hUOOrYB1msS41m7aYbgn2IdM0xO9JH3xjox8w84qFM7c6k3uU2dYBKo3G8AWkD3xKg7rQjrH0sA1Kk8B4vR9jV2lM',
    heroHeadline: 'European Residency & Citizenship',
    heroSubtext:
      'Gain the freedom to live, work, and study across the EU through strategic investment and residency programs.',
    overviewHeading: 'A Gateway to the Old World',
    overviewBody:
      'The European Union offers a unique blend of heritage, modern infrastructure, and high social standards. Through Golden Visa programs and specialized residency streams, we help you secure a foothold in the Schengen Area.',
    overviewImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS_9B1WsvHNjqvddDf9HAzg67nzhjZMV2uW5abUU7h6NfLQNG1WEhT8AoYx9fTjn_9zHmCKe6JbJbF4yiyuuWUp7A6D5aIo9zFVqdk0DmM2-6TSkoHxLhrNiwJkP1jA8hUOOrYB1msS41m7aYbgn2IdM0xO9JH3xjox8w84qFM7c6k3uU2dYBKo3G8AWkD3xKg7rQjrH0sA1Kk8B4vR9jV2lM',
    overviewStats: [
      { value: '27', label: 'Member States' },
      { value: 'No. 1', label: 'Health Systems' },
    ],
    pathways: [
      {
        id: 'golden-visa',
        title: 'Golden Visa Programs',
        description:
          'Residency through real estate investment or capital transfer in countries like Portugal, Greece, and Spain.',
        icon: 'euro_symbol',
      },
    ],
    whyChooseImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS_9B1WsvHNjqvddDf9HAzg67nzhjZMV2uW5abUU7h6NfLQNG1WEhT8AoYx9fTjn_9zHmCKe6JbJbF4yiyuuWUp7A6D5aIo9zFVqdk0DmM2-6TSkoHxLhrNiwJkP1jA8hUOOrYB1msS41m7aYbgn2IdM0xO9JH3xjox8w84qFM7c6k3uU2dYBKo3G8AWkD3xKg7rQjrH0sA1Kk8B4vR9jV2lM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxS_9B1WsvHNjqvddDf9HAzg67nzhjZMV2uW5abUU7h6NfLQNG1WEhT8AoYx9fTjn_9zHmCKe6JbJbF4yiyuuWUp7A6D5aIo9zFVqdk0DmM2-6TSkoHxLhrNiwJkP1jA8hUOOrYB1msS41m7aYbgn2IdM0xO9JH3xjox8w84qFM7c6k3uU2dYBKo3G8AWkD3xKg7rQjrH0sA1Kk8B4vR9jV2lM',
    ],
    requirements: [],
    citizenshipSteps: [],
    ctaHeading: 'Unlock European Mobility.',
  },
];

export const publishedCountries = countries.filter((country) => country.isPublished);
