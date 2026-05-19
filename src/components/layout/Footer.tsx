import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getPublishedServices } from "@/data/services";
import { getPublishedCountries } from "@/data/countries";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer
      className="relative border-t"
      style={{
        background: "var(--color-surface-container-lowest)",
        borderColor: "rgba(127,94,21,0.3)",
      }}
    >
      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #ecc06f55, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <span
              className="text-xl font-bold block mb-4"
              style={{ fontFamily: "var(--font-serif)", color: "#eae1d8" }}
            >
              KMS Consultants
            </span>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#d1c5b3" }}>
              {t("tagline")}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {([
                { icon: "public", href: "https://linkedin.com/in/kmsconsultants/", label: "LinkedIn" },
                { icon: "alternate_email", href: `mailto:${t("email")}`, label: "Email" },
                { icon: "call", href: `tel:${t("phone").replace(/\s/g, "")}`, label: "Phone" },
              ] as const).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="glass-card-light w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:border-[#ecc06f]/40"
                >
                  <span className="material-symbols-outlined text-base" style={{ color: "#9a8f7f", fontSize: "18px" }}>
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#ecc06f" }}
            >
              {t("services")}
            </p>
            <ul className="space-y-3">
              {getPublishedServices(locale).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${locale}/services/${s.slug}`}
                    className="text-sm transition-colors hover:text-[#ecc06f]"
                    style={{ color: "#d1c5b3" }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#ecc06f" }}
            >
              {t("countries")}
            </p>
            <ul className="space-y-3">
              {getPublishedCountries(locale).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${locale}/countries/${c.slug}`}
                    className="text-sm transition-colors hover:text-[#ecc06f]"
                    style={{ color: "#d1c5b3" }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#ecc06f" }}
            >
              {t("company")}
            </p>
            <ul className="space-y-3">
              {([
                { label: t("aboutUs"), href: `/${locale}/about` },
                { label: t("contactUs"), href: `/${locale}/contact` },
                { label: t("process"), href: `/${locale}#process` },
                { label: t("testimonials"), href: `/${locale}#testimonials` },
              ] as const).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#ecc06f]"
                    style={{ color: "#d1c5b3" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#ecc06f" }}
            >
              {t("office")}
            </p>
            <address className="not-italic space-y-3">
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#d1c5b3" }}>
                {t("address")}
              </p>
              <a
                href={`tel:${t("phone").replace(/\s/g, "")}`}
                className="text-sm block hover:text-[#ecc06f] transition-colors"
                style={{ color: "#d1c5b3" }}
              >
                {t("phone")}
              </a>
              <a
                href={`tel:${t("phone2").replace(/\s/g, "")}`}
                className="text-sm block hover:text-[#ecc06f] transition-colors"
                style={{ color: "#d1c5b3" }}
              >
                {t("phone2")}
              </a>
              <a
                href={`mailto:${t("email")}`}
                className="text-sm block hover:text-[#ecc06f] transition-colors"
                style={{ color: "#d1c5b3" }}
              >
                {t("email")}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(78,70,56,0.5)" }}
        >
          <p className="text-xs" style={{ color: "#9a8f7f" }}>
            {t("copyright")}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs hover:text-[#ecc06f] transition-colors" style={{ color: "#9a8f7f" }}>
              {t("privacy")}
            </Link>
            <Link href="#" className="text-xs hover:text-[#ecc06f] transition-colors" style={{ color: "#9a8f7f" }}>
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
