import { monetizationConfig } from "@/config/monetizationConfig";

export default function DonatePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Apoie</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Se este conteúdo te ajuda, considera apoiar. Isso sustenta domínio, hospedagem e produção.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold">PIX</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-white/70 break-all">
            {monetizationConfig.pixKey}
          </p>
        </div>

        <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold">PayPal</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-white/70 break-all">
            {monetizationConfig.paypalEmail}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-semibold">Transparência</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          Doações não compram opinião editorial. Servem para manter o projeto vivo com independência.
        </p>
      </div>
    </div>
  );
}
