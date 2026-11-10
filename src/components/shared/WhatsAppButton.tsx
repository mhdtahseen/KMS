import { useTranslations } from 'next-intl';

const WHATSAPP_NUMBER = '97430405474';

/** Floating WhatsApp contact — the channel most Gulf clients reach for first. */
export function WhatsAppButton() {
  const t = useTranslations('whatsapp');
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('message'))}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      className="group fixed bottom-4 start-4 z-50 flex items-center gap-3 rounded-full border border-white/12 bg-[#1f2b22]/90 py-2 ps-2 pe-2 text-on-background shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:border-[#25D366]/60 sm:pe-5"
    >
      <span className="grid size-10 place-items-center rounded-full bg-[#25D366] text-[#0b2a16] shadow-[0_0_30px_-6px_rgba(37,211,102,0.8)]">
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="hidden sm:block text-sm font-semibold">{t('label')}</span>
    </a>
  );
}
