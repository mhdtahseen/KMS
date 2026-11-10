import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getPublishedServices } from "@/data/services";
import { getPublishedCountries } from "@/data/countries";
import { KMSWordmark } from "@/components/layout/Wordmark";

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
    { icon: "public", href: "https://linkedin.com/in/kmsconsultants/", label: "LinkedIn" },
    { icon: "alternate_email", href: `mailto:${email}`, label: "Email" },
    { icon: "call", href: `tel:${phone.replace(/\s/g, "")}`, label: "Phone" },
  ];

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
                  className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-on-surface-variant transition-all duration-500 hover:border-gold-soft/70 hover:text-champagne"
                >
                  <span className="material-symbols-outlined !text-[18px]" aria-hidden="true">{item.icon}</span>
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
            <p className="text-xs text-outline">{t("copyright")}</p>
            <Link href={`/${locale}/contact`} className="text-[0.6875rem] font-bold uppercase tracking-[0.24em] text-gold-soft hover:text-champagne transition-colors duration-300">
              {tNav("cta")}
            </Link>
            <div className="flex gap-7">
              <Link href="#" className="text-xs text-outline hover:text-champagne transition-colors duration-300">{t("privacy")}</Link>
              <Link href="#" className="text-xs text-outline hover:text-champagne transition-colors duration-300">{t("terms")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
