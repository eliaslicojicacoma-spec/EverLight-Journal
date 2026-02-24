import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import teamRaw from "@/data/team.json";

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  links?: { email?: string };
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/team`;
  const title = locale === "pt" ? "Equipe" : "Team";
  const description =
    locale === "pt"
      ? "Quem está por trás do EverLight Journal."
      : "Who is behind EverLight Journal.";
  const image = `${base}/og/og-default.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default async function TeamPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;
  const members = teamRaw as Member[];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-6 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
          {locale === "pt" ? "CREDIBILIDADE" : "CREDIBILITY"}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          {locale === "pt" ? "Equipe" : "Team"}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Transparência editorial começa com rostos e responsabilidades."
            : "Editorial transparency starts with real people and responsibilities."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {members.map((m) => (
          <div
            key={m.id}
            className="rounded-2xl border p-5 shadow-sm
                       border-zinc-200 bg-white
                       dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image || "/images/equipe/pioneiros.jpg"}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1">
                <p className="text-lg font-extrabold">{m.name}</p>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                  {m.role}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
                  {m.bio}
                </p>

                {m.links?.email && (
                  <p className="mt-3 text-sm">
                    <span className="font-extrabold">
                      {locale === "pt" ? "Email:" : "Email:"}
                    </span>{" "}
                    <a
                      className="text-indigo-600 hover:underline dark:text-indigo-300"
                      href={`mailto:${m.links.email}`}
                    >
                      {m.links.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border p-5 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-extrabold">
          {locale === "pt" ? "Notas editoriais" : "Editorial notes"}
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-white/70">
          <li>{locale === "pt" ? "Conteúdo original, com fontes quando necessário." : "Original content, with sources when needed."}</li>
          <li>{locale === "pt" ? "Sem copiar artigos inteiros de terceiros." : "No full copying from third parties."}</li>
          <li>{locale === "pt" ? "Correções são bem-vindas e documentadas." : "Corrections are welcome and documented."}</li>
        </ul>
      </div>
    </div>
  );
        }
