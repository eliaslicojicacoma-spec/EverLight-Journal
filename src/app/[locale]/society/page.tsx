export default function SocietyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Society</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Actualidade com resumo + contexto + ações práticas. Sempre conteúdo original.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold">Formato recomendado</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-white/70">
            <li><b>Resumo:</b> 6–10 linhas.</li>
            <li><b>Contexto:</b> por que importa.</li>
            <li><b>Ação:</b> 2 ideias práticas.</li>
            <li><b>Fontes:</b> links oficiais no final.</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold">Ritmo editorial</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
            1 post/dia (curto) + 1 por semana (profundo) = crescimento consistente e SEO forte.
          </p>
        </div>
      </div>
    </div>
  );
}
