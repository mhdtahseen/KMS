import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kms-consultants.com"),
  title: {
    default: "KMS Consultants — Best-Rated Immigration Consultants in Qatar",
    template: "%s | KMS Consultants",
  },
  description:
    "KMS Consultants — the best-rated, MARA-certified & IRCC-authorized immigration consultancy in Doha, Qatar. 1,000+ clients from 20+ nationalities. Canada, UK, Australia, USA, Europe.",
  keywords: [
    "immigration consultants Qatar",
    "best immigration consultants in Qatar",
    "immigration consultants in Doha Qatar",
    "trusted immigration consultants Doha",
    "visa services Doha",
    "MARA certified agent Qatar",
    "IRCC authorized representative Qatar",
    "Canada immigration consultants",
    "UK visa Qatar",
    "Australia immigration",
    "USA visa consultant",
    "skilled immigration Qatar",
    "study permit Qatar",
    "permanent residency",
    "work permit consultant Doha",
    "family sponsorship visa",
    "business residency",
    "ethical immigration consulting Qatar",
    "RCIC consultant",
    "immigration lawyer Qatar",
    "KMS Consultants",
  ],
  authors: [{ name: "KMS Consultants", url: "https://www.kms-consultants.com" }],
  creator: "KMS Consultants",
  publisher: "KMS Consultants",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_QA",
    url: "https://www.kms-consultants.com",
    siteName: "KMS Consultants",
    title: "KMS Consultants — Best-Rated Immigration Consultants in Qatar",
    description:
      "MARA-certified & IRCC-authorized immigration consultancy in Doha, Qatar. 1,000+ clients from 20+ nationalities, 5-star rated on Google. Bespoke solutions for the GCC's high-net-worth and skilled professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KMS Consultants — Best-Rated Immigration Consultants in Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KMS Consultants — Best-Rated Immigration Consultants in Qatar",
    description:
      "MARA-certified & IRCC-authorized immigration consultants in Doha, Qatar. Trusted by 1,000+ clients from 20+ nationalities across Canada, UK, Australia, USA and Europe.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://www.kms-consultants.com",
    languages: {
      "en": "https://www.kms-consultants.com/en",
      "ar": "https://www.kms-consultants.com/ar",
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="dark">
      <head>
        <meta name="theme-color" content="#16130d" />
        <meta name="color-scheme" content="dark" />
        <OrganizationJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold text-sm"
        >
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <MotionConfig reducedMotion="user">
            <Header />
            <div id="main-content">
              {children}
            </div>
            <Footer />
            <BackToTop />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  borderLeft: "3px solid #ecc06f",
                  color: "#eae1d8",
                  fontFamily: "var(--font-sans)",
                },
              }}
            />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
