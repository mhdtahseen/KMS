export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  tags: string[];
  duration: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Ahmed Al-Farsi',
    role: 'Relocated to London, UK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEZ93evDwvfOIQ50dcq9EZ8NhsHdYsBauMhXvijpulSI-AoG6gA0Q4xY_W1dO8DK3JDHJQ8PXrKmBR-HTRi5pylNy7WoiXq6UpyEu9DGE02eW6FyXnkP5N5UxMN7ktzyMl0Epes_t4ug6HvAMkShr7Nz1WHCGNpbH2qlqbhSEaW9kwz3BqsRSzNwB5KGO5irSk2LCj3fkx0HpTWCHEtFH3kfYmShXgxCvlXLX7SG2PC_x4--2929Uio6QTTmSgz_88pWu6lmlNSS4a',
    quote: '"KMS Consultants navigated the complex Tier 2 visa process for my family with absolute precision. Their attention to legal detail is unmatched."',
    tags: ['Health Care Sector'],
    duration: 'Approved in 45 Days'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Moved to Vancouver, Canada',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZayEQ8gSFG_UT-CA4MmWgaD8C_kRrTeQAQbJBDqlLeMfL6Apz9By7h2iymU-rOo9ZKFUoiYLHIU0PLeveeIoDLdqjW5r3EHwGxZpjwwcXHz6Byi367B7Ptovn2sZA50DpjRZFclomXl0sn-FtMtZeUwTIm95tyt8pdbNax9ZxQUO10lGFqjNMQJMGG3rmU-bnRF9Uv1h3g_fANKb7Qw54ZdtQW42RQonTG4K2_L7NwiS0UsKXX6Gatz4TCl9FS4E1de-eR_LosZOQ',
    quote: '"The Express Entry route seemed daunting until KMS took over. They optimized my profile and handled every piece of paperwork perfectly."',
    tags: ['Tech Industry'],
    duration: 'Permanent Residency Awarded'
  }
];
