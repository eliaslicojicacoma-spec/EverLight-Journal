import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EverLight Journal",
  description: "Sociedade com visão global, fé com profundidade.",
  metadataBase: new URL("https://ever-light-journal.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-[#F6F4EF] text-[#121212]">{children}</body>
    </html>
  );
}
