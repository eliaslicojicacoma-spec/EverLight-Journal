import Link from "next/link";

export default function SubscribePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  return (
    <main className="space-y-10">
      <section className="card overflow-hidden p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="text-[11px] tracking-[0.22em] text-black/55">
            {isPT ? "NEWSLETTER OFICIAL" : "OFFICIAL NEWSLETTER"}
          </div>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            {isPT
              ? "Receba fé e clareza direto no seu e-mail"
              : "Receive faith and clarity in your inbox"}
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-black/60 sm:text-base">
            {isPT
              ? "Artigos exclusivos, reflexões semanais e conteúdos estratégicos sobre fé e sociedade. Sem spam. Apenas valor real."
              : "Exclusive articles, weekly reflections and strategic insights about faith and society. No spam. Only value."}
          </p>

          {/* FORM */}
          <form
            action="/api/subscribe"
            method="POST"
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
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
              ? "Ao inscrever-se, você concorda com nossa política de privacidade."
              : "By subscribing you agree to our privacy policy."}
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
