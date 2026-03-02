import "@/styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig, type SiteLocale } from "@/config/siteConfig";

export const dynamic = "force-static";

export function generateStaticParams() {
  return siteConfig.i18n.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: SiteLocale };
}) {
  const locale = params?.locale ?? siteConfig.i18n.defaultLocale;

  return (
    <html lang={locale}>
      <body className="min-h-screen antialiased">
        <Header locale={locale} />
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
