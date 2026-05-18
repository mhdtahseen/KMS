import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { publishedServices } from "@/data/services";
import { publishedCountries } from "@/data/countries";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
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
              {["link", "mail", "call"].map((icon) => (
                <button
                  key={icon}
                  className="glass-card-light w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:border-[#ecc06f]/40"
                >
                  <span className="material-symbols-outlined text-base" style={{ color: "#9a8f7f", fontSize: "18px" }}>
                    {icon}
                  </span>
                </button>
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
              {publishedServices.map((s) => (
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
              {publishedCountries.map((c) => (
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

          {/* Office & Connect */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#ecc06f" }}
            >
              {t("office")}
            </p>
            <address className="not-italic space-y-3">
              <p className="text-sm leading-relaxed" style={{ color: "#d1c5b3" }}>
                Tornado Tower, Level 22<br />
                West Bay, P.O. Box 27750<br />
                Doha, State of Qatar
              </p>
              <a
                href="tel:+97444009000"
                className="text-sm block hover:text-[#ecc06f] transition-colors"
                style={{ color: "#d1c5b3" }}
              >
                {t("phone")}
              </a>
              <a
                href="mailto:concierge@kmsconsultants.qa"
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
