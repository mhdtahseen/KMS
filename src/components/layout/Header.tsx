"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { getPublishedServices } from "@/data/services";
import { getPublishedCountries } from "@/data/countries";
import { KMSWordmark } from "@/components/layout/Wordmark";

type MenuKey = "services" | "countries" | null;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  const services = getPublishedServices(locale);
  const countries = getPublishedCountries(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the full-screen mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = () => {
    const next = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  const linkClass = (active?: boolean) =>
    `group/link relative py-2 text-[0.8125rem] font-medium tracking-[0.06em] transition-colors duration-300 ${
      active ? "text-champagne" : "text-on-surface-variant hover:text-on-background"
    }`;

  const underline = (active?: boolean) => (
    <span
      aria-hidden="true"
      className={`absolute inset-x-0 -bottom-0.5 h-px origin-center bg-gold-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
      }`}
    />
  );

  const dropdown = (key: Exclude<MenuKey, null>, label: string, items: { href: string; label: string }[], active: boolean) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(key)}
      onMouseLeave={() => setOpenMenu(null)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null);
      }}
    >
      <button
        type="button"
        className={`${linkClass(active)} inline-flex items-center gap-1`}
        aria-expanded={openMenu === key}
        aria-haspopup="true"
        onClick={() => setOpenMenu(openMenu === key ? null : key)}
        onFocus={() => setOpenMenu(key)}
      >
        {label}
        <span
          className={`material-symbols-outlined !text-[16px] opacity-60 transition-transform duration-300 ${openMenu === key ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          expand_more
        </span>
        {underline(active)}
      </button>
      <AnimatePresence>
        {openMenu === key && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full start-0 pt-4"
          >
            <div className="nav-dropdown w-64 rounded-2xl p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm text-on-surface-variant transition-colors duration-300 hover:bg-white/[0.06] hover:text-on-background"
                >
                  {item.label}
                  <span
                    className="material-symbols-outlined !text-[16px] text-gold-soft opacity-0 -translate-x-1 rtl:translate-x-1 rtl:rotate-180 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const serviceItems = services.map((s) => ({ href: `/${locale}/services/${s.slug}`, label: s.title }));
  const countryItems = countries.map((c) => ({ href: `/${locale}/countries/${c.slug}`, label: c.name }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 md:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled || mobileOpen
            ? "nav-dropdown mt-3 h-16 max-w-6xl rounded-full ps-6 pe-3"
            : "mt-0 h-24 max-w-7xl rounded-none border border-transparent px-3 md:px-2"
        }`}
      >
        <Link href={`/${locale}`} aria-label="KMS Consultants" onClick={() => setMobileOpen(false)}>
          <KMSWordmark />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Primary">
          {dropdown("services", t("services"), serviceItems, pathname.includes("/services"))}
          {dropdown("countries", t("countries"), countryItems, pathname.includes("/countries"))}
          <Link href={`/${locale}#process`} className={linkClass()}>
            {t("process")}
            {underline()}
          </Link>
          <Link href={`/${locale}#testimonials`} className={linkClass()}>
            {t("testimonials")}
            {underline()}
          </Link>
          <Link href={`/${locale}/about`} className={linkClass(pathname.includes("/about"))}>
            {t("about")}
            {underline(pathname.includes("/about"))}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          <button
            type="button"
            onClick={switchLocale}
            className="text-sm font-medium text-on-surface-variant hover:text-champagne transition-colors duration-300"
            style={locale === "en" ? { fontFamily: "var(--font-cairo)" } : undefined}
            lang={locale === "en" ? "ar" : "en"}
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
          <Link href={`/${locale}/contact`} className="btn-gold btn-sm">
            {t("cta")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-on-background"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined !text-[22px]" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto lg:hidden nav-dropdown mt-3 rounded-[28px] max-h-[calc(100svh-6.5rem)] overflow-y-auto"
          >
            <div className="p-7 space-y-7">
              <div>
                <p className="eyebrow mb-4">{t("services")}</p>
                <div className="grid gap-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-headline text-2xl text-on-background/90 py-1.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hairline" />
              <div>
                <p className="eyebrow mb-4">{t("countries")}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {countryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-headline text-xl text-on-background/90 py-1.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hairline" />
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-surface-variant">
                <Link href={`/${locale}#process`} onClick={() => setMobileOpen(false)}>{t("process")}</Link>
                <Link href={`/${locale}#testimonials`} onClick={() => setMobileOpen(false)}>{t("testimonials")}</Link>
                <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)}>{t("about")}</Link>
                <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)}>{t("contact")}</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href={`/${locale}/contact`} className="btn-gold flex-1" onClick={() => setMobileOpen(false)}>
                  {t("cta")}
                </Link>
                <button
                  type="button"
                  onClick={switchLocale}
                  className="btn-ghost !px-5"
                  style={locale === "en" ? { fontFamily: "var(--font-cairo)", fontSize: "0.9375rem", letterSpacing: 0 } : undefined}
                  lang={locale === "en" ? "ar" : "en"}
                >
                  {locale === "en" ? "العربية" : "EN"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
