import type { Metadata } from "next";
import "../globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "EverLight Journal",
  description: "Conectando fé e sociedade com clareza bíblica e aplicação prática.",
};

export default function LocaleLayout({ children, params }: Props) {
  const locale = params.locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Background premium */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <SiteHeader locale={locale} />

        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-10">{children}</div>
        </main>

        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
