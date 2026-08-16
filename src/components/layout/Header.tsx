"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { getPublishedServices } from "@/data/services";
import { getPublishedCountries } from "@/data/countries";

const KMSLogo = () => (
  <svg
    className="size-8 text-primary"
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "#ecc06f" }}
  >
    <path
      d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  const navLinkClass = (active?: boolean) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      active
        ? "text-[#ecc06f] border-b border-[#ecc06f] pb-0.5"
        : "text-[#d1c5b3] hover:text-[#ecc06f]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-dropdown border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <KMSLogo />
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "#eae1d8" }}
          >
            KMS Consultants
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={navLinkClass(pathname.includes("/services"))}>
              {t("services")}
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 nav-dropdown rounded-xl overflow-hidden py-2"
                >
                  {getPublishedServices(locale).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${locale}/services/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#d1c5b3] hover:text-[#ecc06f] hover:bg-white/5 transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Countries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCountriesOpen(true)}
            onMouseLeave={() => setCountriesOpen(false)}
          >
            <button className={navLinkClass(pathname.includes("/countries"))}>
              {t("countries")}
            </button>
            <AnimatePresence>
              {countriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 nav-dropdown rounded-xl overflow-hidden py-2"
                >
                  {getPublishedCountries(locale).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${locale}/countries/${c.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#d1c5b3] hover:text-[#ecc06f] hover:bg-white/5 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href={`/${locale}#process`} className={navLinkClass()}>
            {t("process")}
          </Link>
          <Link href={`/${locale}#testimonials`} className={navLinkClass()}>
            {t("testimonials")}
          </Link>
          <Link href={`/${locale}/about`} className={navLinkClass(pathname.includes("/about"))}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/contact`} className={navLinkClass(pathname.includes("/contact"))}>
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <button
            onClick={switchLocale}
            className="text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-[#4e4638] text-[#d1c5b3] hover:text-[#ecc06f] hover:border-[#ecc06f] transition-all"
          >
            {locale === "en" ? "AR" : "EN"}
          </button>
        </nav>

        {/* CTA */}
        <Link
          href={`/${locale}/contact`}
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all gold-glow hover:opacity-90 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #ecc06f 0%, #7f5e15 100%)",
            color: "#412d00",
          }}
        >
          {t("cta")}
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#d1c5b3] focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-dropdown border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ecc06f]">
                Services
              </p>
              {getPublishedServices(locale).map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-[#d1c5b3] hover:text-[#ecc06f] py-1"
                >
                  {s.title}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ecc06f] mb-3">
                  Countries
                </p>
                {getPublishedCountries(locale).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${locale}/countries/${c.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-[#d1c5b3] hover:text-[#ecc06f] py-1"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-1">
                <Link
                  href={`/${locale}/about`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-[#d1c5b3] hover:text-[#ecc06f] py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-[#d1c5b3] hover:text-[#ecc06f] py-1"
                >
                  {t("contact")}
                </Link>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center gap-4">
                <button
                  onClick={switchLocale}
                  className="text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-[#4e4638] text-[#d1c5b3]"
                >
                  {locale === "en" ? "AR" : "EN"}
                </button>
                <Link
                  href={`/${locale}/contact`}
                  className="flex-1 text-center px-4 py-2.5 rounded-xl font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #ecc06f 0%, #7f5e15 100%)",
                    color: "#412d00",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
