import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { monetizationConfig } from "@/config/monetizationConfig";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/transparency`;
  const title = locale === "pt" ? "Transparência" : "Transparency";
  const description =
    locale === "pt"
      ? "Como o EverLight Journal é financiado e como mantemos independência editorial."
      : "How EverLight Journal is funded and how we keep editorial independence.";
  const image = `${base}/og/og-default.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default async function TransparencyPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  const t = {
    title: locale === "pt" ? "Transparência" : "Transparency",
    intro:
      locale === "pt"
        ? "Este projeto existe para servir pessoas com conteúdo original, responsável e útil. Aqui está como financiamos e como protegemos a integridade editorial."
        : "This project exists to serve people with original, responsible, useful content. Here is how we fund it and protect editorial integrity.",
    funding: locale === "pt" ? "Fontes de apoio" : "Funding sources",
    independence: locale === "pt" ? "Independência editorial" : "Editorial independence",
    disclosures: locale === "pt" ? "Divulgação (disclosure)" : "Disclosure",
    contact: locale === "pt" ? "Contacto" : "Contact"
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">{t.title}</h1>
      <p className="text-zinc-600 dark:text-white/70">{t.intro}</p>

      <section className="rounded-3xl border p-6 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-extrabold">{t.funding}</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-white/70">
          <li>
            <b>{locale === "pt" ? "Doações:" : "Donations:"}</b> PIX e PayPal ajudam com domínio, hospedagem, ferramentas e produção.
          </li>
          <li>
            <b>{locale === "pt" ? "Publicidade:" : "Ads:"}</b> quando ativada (ex: AdSense), é gerida com consentimento e privacidade.
          </li>
          <li>
            <b>{locale === "pt" ? "Afiliados (opcional):" : "Affiliate (optional):"}</b> se usarmos links afiliados, será indicado claramente na página e no conteúdo.
          </li>
        </ul>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-4 border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-extrabold">PIX</p>
            <p className="mt-1 break-all text-sm text-zinc-600 dark:text-white/70">
              {monetizationConfig.pixKey}
            </p>
          </div>

          <div className="rounded-2xl border p-4 border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-extrabold">PayPal</p>
            <p className="mt-1 break-all text-sm text-zinc-600 dark:text-white/70">
              {monetizationConfig.paypalEmail}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border p-6 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-extrabold">{t.independence}</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-white/70">
          <li>{locale === "pt" ? "Doações não compram opinião editorial." : "Donations do not buy editorial opinions."}</li>
          <li>{locale === "pt" ? "Publicidade não dita conteúdo." : "Ads do not dictate content."}</li>
          <li>{locale === "pt" ? "Fontes são citadas e o conteúdo é original." : "Sources are cited and content is original."}</li>
          <li>{locale === "pt" ? "Links externos são escolhidos por utilidade e confiança." : "External links are chosen for trust and usefulness."}</li>
        </ul>
      </section>

      <section className="rounded-3xl border p-6 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-extrabold">{t.disclosures}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Se uma página/artigo tiver link afiliado, vamos sinalizar com etiqueta ‘Afiliado’ e explicar claramente."
            : "If a page/article contains affiliate links, we will label it as ‘Affiliate’ and explain clearly."}
        </p>
      </section>

      <section className="rounded-3xl border p-6 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-extrabold">{t.contact}</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Pedidos de correção, parceria ou dúvidas:"
            : "Corrections, partnerships, or questions:"}
        </p>
        <p className="mt-2 text-sm font-extrabold">{siteConfig.email}</p>
      </section>
    </div>
  );
      }
