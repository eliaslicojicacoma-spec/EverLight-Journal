import "@/app/globals.css";
import ThemeInitScript from "@/components/legal/ThemeInitScript";
import CookieBanner from "@/components/legal/CookieBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>

      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
        {/* Premium background: soft glows + blocks */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-36 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/50" />
          <div className="absolute -bottom-44 -left-44 h-[560px] w-[560px] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/10" />
          <div className="absolute -bottom-60 -right-60 h-[640px] w-[640px] rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10" />

          <div className="absolute left-6 top-24 h-24 w-24 rounded-3xl bg-zinc-100/80 ring-1 ring-zinc-200/70 dark:bg-zinc-900/40 dark:ring-zinc-800/60" />
          <div className="absolute right-10 top-40 h-28 w-28 rounded-3xl bg-zinc-100/70 ring-1 ring-zinc-200/70 dark:bg-zinc-900/40 dark:ring-zinc-800/60" />
          <div className="absolute bottom-24 left-10 h-20 w-20 rounded-3xl bg-zinc-100/70 ring-1 ring-zinc-200/70 dark:bg-zinc-900/40 dark:ring-zinc-800/60" />
        </div>

        <Header />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-zinc-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/50">
            <div className="p-4 sm:p-6 lg:p-8">{children}</div>
          </div>
        </main>

        {/* ✅ Passa locale ao Footer */}
        <Footer params={{ locale }} />

        <CookieBanner />
      </body>
    </html>
  );
}
