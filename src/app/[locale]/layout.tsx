// src/app/[locale]/layout.tsx
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
    <html lang={locale}>
      <body className="min-h-screen bg-[#F6F4EF] text-[#121212]">
        <Header locale={locale} />
        <main className="mx-auto w-full max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
