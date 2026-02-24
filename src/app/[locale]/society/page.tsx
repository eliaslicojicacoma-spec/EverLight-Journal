import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/society`;
  const title = locale === "pt" ? "Society" : "Society";
  const description =
    locale === "pt"
      ? "Actualidade com resumo, contexto e ações práticas — conteúdo original."
      : "News with context and practical actions — original content.";
  const image = `${base}/og/og-default.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default function SocietyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Society</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Actualidade com resumo + contexto + ações práticas. Sempre conteúdo original.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-extrabold">Formato recomendado</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-white/70">
            <li><b>Resumo:</b> 6–10 linhas.</li>
            <li><b>Contexto:</b> por que importa.</li>
            <li><b>Ação:</b> 2 ideias práticas.</li>
            <li><b>Fontes:</b> links oficiais no final.</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-extrabold">Ritmo editorial</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
            1 post/dia (curto) + 1 por semana (profundo) = crescimento consistente e SEO forte.
          </p>
        </div>
      </div>
    </div>
  );
}
