import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/adventist`;
  const title = "Adventist";
  const description =
    locale === "pt"
      ? "Temas e notícias com responsabilidade editorial, resumo e aplicação prática."
      : "Themes and news with editorial responsibility, summaries, and practical application.";
  const image = `${base}/og/og-default.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default function AdventistPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Adventist</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Notícias e temas com fontes confiáveis, sempre com resumo e valor adicional.
      </p>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-extrabold">Boas práticas</h3>
        <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-white/70">
          <li>Não copiar artigos inteiros. Faz resumo + análise + aplicação.</li>
          <li>Inclui “Fontes” no fim (links oficiais).</li>
          <li>Prioriza conteúdos evergreen: família, saúde, estudo bíblico, missão.</li>
        </ul>
      </div>
    </div>
  );
}
