// src/app/[locale]/layout.tsx
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
    <html lang={locale}>
      <body>
        {/* background premium sutil */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#F6F4EF]" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#1A2A78]/10 blur-3xl" />
          <div className="absolute -bottom-56 left-1/2 h-[540px] w-[980px] -translate-x-1/2 rounded-full bg-[#D8C78C]/18 blur-3xl" />
        </div>

        <Header locale={locale} />
        <main className="container-xl py-6">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
