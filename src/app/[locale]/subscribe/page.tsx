import Link from "next/link";

export default function SubscribePage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { status?: string };
}) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";
  const status = searchParams?.status;

  const msg =
    status === "ok"
      ? isPT
        ? "✅ Inscrição confirmada! Verifica o teu e-mail (e a caixa de spam só por garantia)."
        : "✅ Subscribed! Check your email (and spam folder just in case)."
      : status === "invalid"
      ? isPT
        ? "⚠️ Email inválido. Confirma e tenta novamente."
        : "⚠️ Invalid email. Please try again."
      : status === "server"
      ? isPT
        ? "⚠️ Configuração do servidor incompleta. Falta BREVO_API_KEY ou BREVO_LIST_ID."
        : "⚠️ Server not configured. Missing BREVO_API_KEY or BREVO_LIST_ID."
      : status === "error"
      ? isPT
        ? "⚠️ Não foi possível concluir. Tenta novamente em alguns segundos."
        : "⚠️ Something went wrong. Please try again."
      : null;

  return (
    <main className="space-y-10">
      <section className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="text-[11px] tracking-[0.22em] text-black/55">
            {isPT ? "NEWSLETTER OFICIAL" : "OFFICIAL NEWSLETTER"}
          </div>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            {isPT ? "Devocional diário + Newsletter semanal" : "Daily devotional + Weekly newsletter"}
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-black/60 sm:text-base">
            {isPT
              ? "Todos os dias: uma reflexão curta e prática. Toda semana: um resumo editorial com artigos fortes (fé + sociedade). Sem spam."
              : "Daily: a short, practical devotional. Weekly: an editorial digest with strong articles (faith + society). No spam."}
          </p>

          {msg ? (
            <div className="mt-6 rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/80">
              {msg}
            </div>
          ) : null}

          <form action="/api/subscribe" method="POST" className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input type="hidden" name="locale" value={locale} />

            <input
              type="email"
              name="email"
              required
              placeholder={isPT ? "Seu melhor e-mail" : "Your best email"}
              className="w-full rounded-2xl border border-black/15 px-5 py-3 text-sm outline-none focus:border-black"
            />

            <button
              type="submit"
              className="rounded-2xl bg-black px-6 py-3 text-xs font-semibold tracking-wide text-white hover:opacity-90"
            >
              {isPT ? "Inscrever-se" : "Subscribe"}
            </button>
          </form>

          <p className="mt-4 text-xs text-black/45">
            {isPT
              ? "Respeitamos sua privacidade. Cancele quando quiser."
              : "We respect your privacy. Unsubscribe anytime."}
          </p>

          <div className="mt-6">
            <Link
              href={`/${locale}`}
              className="text-xs font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
            >
              {isPT ? "← Voltar ao site" : "← Back to site"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
