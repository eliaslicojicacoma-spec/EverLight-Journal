import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getVerseOfDay } from "@/lib/verses";
import ShareBar from "@/components/social/ShareBar";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/verse-of-day`;
  const title = locale === "pt" ? "Versículo do Dia" : "Verse of the Day";
  const description =
    locale === "pt"
      ? "Uma palavra diária para foco, esperança e direção."
      : "A daily word for focus, hope, and direction.";
  const image = `${base}/og/og-default.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default async function VerseOfDayPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;
  const verse = getVerseOfDay(locale);

  const title = locale === "pt" ? "Versículo do Dia" : "Verse of the Day";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
          {locale === "pt" ? "DEVOCIONAL" : "DEVOTIONAL"}
        </p>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          {title}
        </h1>

        <div className="mt-5 rounded-2xl border p-5
                        border-zinc-200 bg-zinc-50
                        dark:border-white/10 dark:bg-white/5">
          <p className="text-lg font-extrabold leading-relaxed">
            “{verse.text}”
          </p>
          <p className="mt-3 text-sm font-extrabold text-indigo-600 dark:text-indigo-300">
            {verse.ref}
          </p>
        </div>

        <p className="mt-4 text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Dica: lê o contexto do capítulo e escreve 1 ação prática para hoje."
            : "Tip: read the chapter context and write 1 practical action for today."}
        </p>
      </div>

      <ShareBar title={`${title} • ${verse.ref}`} />
    </div>
  );
      }
