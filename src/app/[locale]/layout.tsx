import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: "KMS Consultants | Elite Immigration Services",
  description:
    "Trusted immigration consultancy helping families and professionals seamlessly move to Canada, UK, Australia, USA and Europe. Based in Doha, Qatar.",
  keywords: "immigration consultants, visa services, Canada immigration, UK visa, Qatar, Doha",
  openGraph: {
    title: "KMS Consultants | Elite Immigration Services",
    description: "Bespoke immigration solutions for high-net-worth individuals and skilled professionals in the Middle East.",
    type: "website",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
