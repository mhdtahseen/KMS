const FLAGS: Record<string, { file: string; code: string }> = {
  canada: { file: 'ca', code: 'CA' },
  'united-kingdom': { file: 'gb', code: 'UK' },
  australia: { file: 'au', code: 'AU' },
  usa: { file: 'us', code: 'US' },
  'european-union': { file: 'eu', code: 'EU' },
};

/** Two-letter code for a country slug, e.g. "CA". */
export const countryCode = (slug: string) => FLAGS[slug]?.code;

/** Small glass pill with the flag and country code. Renders nothing for unknown slugs. */
export function FlagChip({ slug, className = '' }: { slug: string; className?: string }) {
  const flag = FLAGS[slug];
  if (!flag) return null;
  return (
    <span
      className={`latin inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-background/55 py-1.5 ps-1.5 pe-3.5 backdrop-blur-md ${className}`}
      dir="ltr"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/flags/${flag.file}.svg`} alt="" width={30} height={20} className="h-5 w-[30px] rounded-full object-cover" />
      <span className="text-[0.625rem] font-bold tracking-[0.24em] text-on-background/90">{flag.code}</span>
    </span>
  );
}
