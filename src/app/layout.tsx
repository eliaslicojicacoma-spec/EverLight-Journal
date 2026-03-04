import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: {
    default: "EverLight Journal",
    template: "%s | EverLight Journal",
  },
  description:
    "Portal cristão dedicado à reflexão bíblica, sociedade, fé e pensamento cristão.",

  openGraph: {
    title: "EverLight Journal",
    description:
      "Artigos sobre fé, sociedade, espiritualidade e pensamento cristão.",
    url: "https://everlight-journal.com",
    siteName: "EverLight Journal",
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EverLight Journal",
    description:
      "Artigos sobre fé, sociedade e espiritualidade.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F6F4EF] text-[#121212] antialiased dark:bg-zinc-950 dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
