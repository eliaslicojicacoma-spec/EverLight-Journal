export const siteConfig = {
  name: "EverLight Journal",
  tagline: "Fé & Sociedade",
  description:
    "Conectando fé e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais.",
  defaultLocale: "pt",
  locales: ["pt", "en"] as const,
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://ever-light-journal-m5bz.vercel.app",
};
