type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  accent?: string;
  subtext?: string;
  align?: 'start' | 'center';
  as?: 'h2' | 'h3';
  className?: string;
};

/** Eyebrow + serif display heading with an italic gold accent phrase. */
export function SectionHeading({ eyebrow, heading, accent, subtext, align = 'start', as: Tag = 'h2', className = '' }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${centered ? 'eyebrow-center' : ''}`}>{eyebrow}</p>}
      <Tag className="display-2 mt-6 text-on-background">
        {heading}{' '}
        {accent && <span className="italic font-normal text-gradient-gold">{accent}</span>}
      </Tag>
      {subtext && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed text-on-surface-variant max-w-xl ${centered ? 'mx-auto' : ''}`}>{subtext}</p>
      )}
    </div>
  );
}
