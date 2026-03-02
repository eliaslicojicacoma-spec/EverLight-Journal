import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/config/siteConfig";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Guard simples (evita locale inválido)
  const isValid = (siteConfig.locales as readonly string[]).includes(locale);
  const safeLocale = (isValid ? locale : siteConfig.defaultLocale) as Locale;

  return (
    <html lang={safeLocale}>
      <body className="bg-zinc-950 text-white">
        <Header locale={safeLocale} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
