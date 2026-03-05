import "@/app/globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "EverLight Journal",
  description: "Espiritualidade & sociedade com clareza bíblica e aplicação prática.",
};

export default function LocaleLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body className="min-h-screen bg-[#07070A] text-white">
        <SiteHeader locale={params.locale} />
        {children}
        <SiteFooter locale={params.locale} />
      </body>
    </html>
  );
}
