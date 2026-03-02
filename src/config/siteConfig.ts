export const siteConfig = {
  name: "EverLight Journal",
  tagline: "Fé & Sociedade",
  description:
    "Conectando fé e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais.",
  url: "https://ever-light-journal.vercel.app",
  author: {
    name: "Elias Licoji Cacoma",
    role: "Idealizador",
    bio:
      "Movido pelo desejo de comunicar e inspirar, dedica-se à curadoria e criação de conteúdos que elevam o pensamento e fortalecem a esperança.",
  },
  contact: {
    email: "eliaslicojicacoma@gmail.com",
    phone: "+244 933 522 616"
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/"
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"] as const
  }
} as const;

export type SiteLocale = (typeof siteConfig.i18n.locales)[number];
