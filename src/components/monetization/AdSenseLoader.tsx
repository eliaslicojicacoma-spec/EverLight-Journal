"use client";

import Script from "next/script";
import { getConsent } from "@/utils/cookies";

export default function AdSenseLoader() {
  const consent = typeof window !== "undefined" ? getConsent() : null;

  // Só carrega quando o user aceitou ADS
  if (!consent?.ads) return null;

  // Trocar depois do approval: ca-pub-XXXXXXXXXXXX
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (!client) return null;

  return (
    <Script
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
