import Link from "next/link";

export default function RootGatewayPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 py-10">
        {/* Header */}
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-200">
              EverLight Journal • PT/EN • AdSense-ready
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-8 w-full text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Escolha o idioma para continuar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
            Conteúdo original sobre <span className="text-zinc-100">Sociedade</span>{" "}
            e <span className="text-zinc-100">Fé Adventista</span>, com qualidade
            editorial e design moderno.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/pt"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">Português</h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Acessar a versão PT do EverLight Journal.
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                /pt
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-200">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                →
              </span>
              <span className="group-hover:text-white">Entrar em Português</span>
            </div>
          </Link>

          <Link
            href="/en"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">English</h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Access the EN version of EverLight Journal.
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                /en
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-200">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                →
              </span>
              <span className="group-hover:text-white">Enter English</span>
            </div>
          </Link>
        </div>

        {/* Auto redirect hint */}
        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-zinc-300">
            Dica: se tu preferes ir direto para PT sempre, eu posso configurar um
            botão “Lembrar idioma” (salva no browser) e redireciona automático.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} EverLight Journal • Built with Next.js + Tailwind
        </footer>
      </div>
    </main>
  );
      }
