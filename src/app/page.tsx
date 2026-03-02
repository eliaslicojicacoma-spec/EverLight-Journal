import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            EverLight Journal · PT/EN · AdSense-ready
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            Escolha o idioma para continuar
          </h1>
          <p className="mt-2 text-white/60">
            Conteúdo original sobre Sociedade e Fé Adventista, com qualidade editorial e design moderno.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/60">Português</div>
            <div className="mt-1 font-medium">Acessar a versão PT</div>
            <Link
              href="/pt"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-medium"
            >
              Entrar em Português
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/60">English</div>
            <div className="mt-1 font-medium">Access the EN version</div>
            <Link
              href="/en"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-medium"
            >
              Enter English
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
          Dica: depois adicionamos “Lembrar idioma” para redirecionar automaticamente (sem perguntar sempre).
        </div>
      </div>
    </main>
  );
}
