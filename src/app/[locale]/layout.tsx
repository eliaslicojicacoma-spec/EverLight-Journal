import "@/app/globals.css";
import ThemeInitScript from "@/components/legal/ThemeInitScript";
import CookieBanner from "@/components/legal/CookieBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
