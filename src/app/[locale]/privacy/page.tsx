export default function PrivacyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Política de Privacidade</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Esta página explica como tratamos dados e cookies.
      </p>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-lg font-semibold">Cookies</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          Usamos cookies necessários para funcionamento do site e, se consentires, cookies de análise e publicidade.
        </p>

        <h2 className="mt-5 text-lg font-semibold">Publicidade</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          Quando ativada, a publicidade pode usar cookies para medir desempenho e personalizar anúncios.
        </p>

        <h2 className="mt-5 text-lg font-semibold">Controlo</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          Podes ajustar preferências no CookieBanner e nas definições do teu navegador.
        </p>
      </div>
    </div>
  );
}
