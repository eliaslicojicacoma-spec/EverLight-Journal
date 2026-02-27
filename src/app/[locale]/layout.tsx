import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";

  return (
    <>
      <Header locale={locale} />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-10">
        {children}
      </main>

      <Footer locale={locale} />
    </>
  );
}
