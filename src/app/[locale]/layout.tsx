import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s • ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author?.name || siteConfig.name }],
  creator: siteConfig.author?.name || siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Open Graph`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og/default.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props) {
  const locale = params?.locale ?? "pt";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {/* Background premium */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* gradient base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.20),transparent_55%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.14),transparent_55%),radial-gradient(circle_at_20%_60%,rgba(244,63,94,0.12),transparent_55%)]" />
          {/* subtle noise */}
          <div className="absolute inset-0 opacity-[0.10] [background-image:url('/images/noise.png')] [background-size:300px_300px]" />
          {/* vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_75%)]" />
          {/* grid */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <Header />

        <main className="mx-auto w-full max-w-5xl px-4 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
