import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Cairo, Archivo_Black } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";
import { MotionConfig } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

// Arabic UI and headings
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

// Heavy, blocky display face used only for the "KMS" wordmark, to match the
// brand logo's lettering (Cormorant/Manrope don't go dense enough).
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wordmark",
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
    "immigration consultancy Doha",
    "Canada PR consultant Qatar",
    "Canada visa consultant Doha",
    "UK visa consultant Doha",
    "Australia visa consultant Qatar",
    "student visa consultant Qatar",
    "travel visa agency Doha",
    "Schengen visa Qatar",
    "تأشيرة كندا قطر",
    "استشارات هجرة الدوحة",
    "مستشار هجرة قطر",
    "أفضل مكتب استشارات هجرة في قطر",
    "KMS Consultants",
    "KMS Consultants Doha",
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
      "x-default": "https://www.kms-consultants.com/en",
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
    <html
      lang={locale}
      dir={dir}
      className={`dark ${cormorant.variable} ${manrope.variable} ${cairo.variable} ${archivoBlack.variable}`}
    >
      <head>
        <meta name="theme-color" content="#181918" />
        <meta name="color-scheme" content="dark" />
        <meta name="geo.region" content="QA-DA" />
        <meta name="geo.placename" content="Doha, Qatar" />
        <meta name="geo.position" content="25.2738691;51.5430943" />
        <meta name="ICBM" content="25.2738691, 51.5430943" />
        <OrganizationJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
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
            <WhatsAppButton />
            <BackToTop />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "rgba(34,35,34,0.86)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                  borderInlineStart: "2px solid #c49a30",
                  color: "#f2ede3",
                  fontFamily: "var(--kms-text)",
                },
              }}
            />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
