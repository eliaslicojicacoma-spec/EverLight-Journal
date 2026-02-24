import versesRaw from "@/data/verses.json";

export type Verse = {
  id: string;
  ref: string;
  pt: string;
  en: string;
};

const verses = versesRaw as Verse[];

function dayOfYear(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff =
    d.getTime() - start.getTime() +
    (start.getTimezoneOffset() - d.getTimezoneOffset()) * 60_000;
  return Math.floor(diff / 86_400_000);
}

export function getVerseOfDay(locale: "pt" | "en", date = new Date()) {
  const idx = dayOfYear(date) % verses.length;
  const v = verses[idx];

  return {
    id: v.id,
    ref: v.ref,
    text: locale === "pt" ? v.pt : v.en
  };
}
