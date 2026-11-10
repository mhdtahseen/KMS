import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getPublishedServices } from "@/data/services";
import { getPublishedCountries } from "@/data/countries";
import { KMSWordmark } from "@/components/layout/Wordmark";

const iconProps = { className: "size-[18px]", viewBox: "0 0 24 24", "aria-hidden": true } as const;
const WhatsAppIcon = () => (
  <svg {...iconProps} fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
);
const InstagramIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>
);
const LinkedInIcon = () => (
  <svg {...iconProps} fill="currentColor"><rect x="2.5" y="9" width="4" height="12" /><circle cx="4.5" cy="4.6" r="2.2" /><path d="M10 9h3.8v1.7c.6-1 1.9-2 3.9-2 4.1 0 4.3 2.7 4.3 6.1V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z" /></svg>
);
const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4V14h2.8v8h3.3z" /></svg>
);

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const phone = t("phone");
  const whatsapp = t("whatsapp");
  const email = t("email");

  const columns = [
    {
      title: t("services"),
      links: getPublishedServices(locale).map((s) => ({ label: s.title, href: `/${locale}/services/${s.slug}` })),
    },
    {
      title: t("countries"),
      links: getPublishedCountries(locale).map((c) => ({ label: c.name, href: `/${locale}/countries/${c.slug}` })),
    },
    {
      title: t("company"),
      links: [
        { label: t("aboutUs"), href: `/${locale}/about` },
        { label: t("contactUs"), href: `/${locale}/contact` },
        { label: t("process"), href: `/${locale}#process` },
        { label: t("testimonials"), href: `/${locale}#testimonials` },
      ],
    },
  ];

  const social = [
    { icon: <WhatsAppIcon />, href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`, label: "WhatsApp" },
    { icon: <InstagramIcon />, href: "https://www.instagram.com/kms_consultants_", label: "Instagram" },
    { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/kms-consultants/", label: "LinkedIn" },
    { icon: <FacebookIcon />, href: "https://www.facebook.com/share/1Bh8FiGz1A/", label: "Facebook" },
    { icon: <span className="material-symbols-outlined !text-[18px]" aria-hidden="true">alternate_email</span>, href: `mailto:${email}`, label: "Email" },
  ];
  const year = new Date().getFullYear();
  const copyright = t("copyright").replace(/\b20\d{2}\b/, String(year));

  const headingClass = "text-[0.6875rem] font-bold uppercase tracking-[0.26em] text-gold-soft mb-6";
  const linkClass = "text-sm text-on-surface-variant transition-colors duration-300 hover:text-champagne";

  return (
    <footer className="relative overflow-hidden bg-surface-container-lowest">
      <div className="gold-rule" />
      <div aria-hidden="true" className="absolute -top-56 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-gold/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-3">
            <Link href={`/${locale}`} aria-label="KMS Consultants" className="inline-block">
              <KMSWordmark />
            </Link>
            <p className="mt-6 max-w-sm font-headline text-2xl leading-snug text-on-background/85">{t("tagline")}</p>
            <div className="mt-8 flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-on-surface-variant transition-all duration-500 hover:border-gold-soft/70 hover:text-champagne"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <p className={headingClass}>{col.title}</p>
              <ul className="space-y-3.5">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Office */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 lg:ps-8">
            <p className={headingClass}>{t("office")}</p>
            <address className="not-italic space-y-3.5">
              <p className="text-sm leading-relaxed whitespace-pre-line text-on-surface-variant">{t("address")}</p>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={`${linkClass} block`} dir="ltr">
                <span className="rtl:block rtl:text-end">{phone}</span>
              </a>
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} block`}
                dir="ltr"
              >
                <span className="rtl:block rtl:text-end">WhatsApp {whatsapp}</span>
              </a>
              <a href={`mailto:${email}`} className={`${linkClass} block`} dir="ltr">
                <span className="rtl:block rtl:text-end">{email}</span>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20">
          <div className="hairline" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">
            <p className="text-xs text-outline">{copyright}</p>
            <Link href={`/${locale}/contact`} className="text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft hover:text-champagne transition-colors duration-300">
              {tNav("cta")}
            </Link>
            <Link href={`/${locale}/privacy`} className="text-xs text-outline hover:text-champagne transition-colors duration-300">{t("privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
