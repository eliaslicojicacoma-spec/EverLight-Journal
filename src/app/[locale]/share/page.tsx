import ShareBar from "@/components/social/ShareBar";

export default async function SharePage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">
        {locale === "pt" ? "Partilhar" : "Share"}
      </h1>
      <p className="text-zinc-600 dark:text-white/70">
        {locale === "pt"
          ? "Usa os botões abaixo para partilhar um link. (Cola o link no teu navegador e partilha.)"
          : "Use the buttons below to share a link."}
      </p>

      <ShareBar
        title={locale === "pt" ? "EverLight Journal" : "EverLight Journal"}
      />

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-extrabold">Dica</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Partilha artigos do Blog e páginas da Biblioteca. Isso ajuda no tráfego e na credibilidade."
            : "Share blog posts and library pages. It helps traffic and credibility."}
        </p>
      </div>
    </div>
  );
}
