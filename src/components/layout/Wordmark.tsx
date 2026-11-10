/** Brand lockup — the globe mark from the KMS logo plus the name. Always Latin, in both locales. */
export const KMSWordmark = ({ className = "" }: { className?: string }) => (
  <span className={`latin flex items-center gap-3 ${className}`} dir="ltr">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logo-mark.svg" alt="" width={36} height={32} className="h-8 w-auto drop-shadow-[0_0_12px_rgba(196,154,48,0.35)]" />
    <span className="flex items-baseline gap-2.5">
      <span
        className="text-gradient-gold text-[1.55rem] leading-none tracking-[0.01em]"
        style={{ fontFamily: "var(--font-wordmark)" }}
      >
        KMS
      </span>
      <span className="hidden sm:inline lg:hidden xl:inline text-[0.625rem] font-semibold uppercase tracking-[0.34em] text-on-surface-variant">
        Consultants
      </span>
    </span>
  </span>
);
