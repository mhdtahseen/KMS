/**
 * Composed stand-in for a photograph: warm light and a large outlined
 * mark. Used wherever an image is missing or fails to load.
 */
export function Plate({ mark, className = '' }: { mark?: string; className?: string }) {
  return (
    <div className={`absolute inset-0 bg-surface-container-low ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_15%,rgba(196,154,48,0.28),transparent_70%)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[70%] rounded-full border border-gold-soft/15" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[105%] rounded-full border border-gold-soft/10" />
      {mark && (
        <span className="latin numeral absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[clamp(4rem,9vw,8.5rem)] leading-none font-light text-transparent [-webkit-text-stroke:1px_rgba(196,154,48,0.55)]">
          {mark}
        </span>
      )}
    </div>
  );
}
