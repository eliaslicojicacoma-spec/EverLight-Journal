import type { ReactNode } from "react";
import Header from "@/components/layout/Header";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";

  return (
    <div className="el-bg min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl dark:bg-rose-500/10" />
      </div>

      <Header locale={locale} />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-10">
        {children}
      </main>
    </div>
  );
}
