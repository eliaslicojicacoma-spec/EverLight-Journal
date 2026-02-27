type Verse = {
  ref: string;
  pt: string;
  en: string;
};

const VERSES: Verse[] = [
  {
    ref: "João 3:16",
    pt: "Porque Deus amou o mundo de tal maneira que deu o Seu Filho unigênito, para que todo aquele que Nele crê não pereça, mas tenha a vida eterna.",
    en: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
  },
  {
    ref: "Salmo 23:1",
    pt: "O Senhor é o meu pastor; nada me faltará.",
    en: "The Lord is my shepherd; I shall not want.",
  },
  {
    ref: "Provérbios 3:5",
    pt: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    en: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
  },
  {
    ref: "Isaías 41:10",
    pt: "Não temas, porque Eu sou contigo; não te assombres, porque Eu sou o teu Deus.",
    en: "Fear not, for I am with you; be not dismayed, for I am your God.",
  },
  {
    ref: "Mateus 11:28",
    pt: "Vinde a Mim, todos os que estais cansados e oprimidos, e Eu vos aliviarei.",
    en: "Come to me, all who labor and are heavy laden, and I will give you rest.",
  },
];

function dayOfYearUTC(d = new Date()) {
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  const now = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  return Math.floor((now - start) / 86400000); // 0..365
}

export function getVerseOfDay(locale: string) {
  const idx = dayOfYearUTC() % VERSES.length;
  const v = VERSES[idx]!;
  const isPT = locale === "pt";
  return {
    ref: v.ref,
    text: isPT ? v.pt : v.en,
  };
}
