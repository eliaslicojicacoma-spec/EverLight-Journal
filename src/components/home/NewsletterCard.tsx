import SubscribeForm from "@/components/subscribe/SubscribeForm";

export default function NewsletterCard({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#121212]">
            {isPT ? "Recebe o melhor do EverLight" : "Get the best of EverLight"}
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-black/60">
            {isPT
              ? "Uma vez por semana: resumo + contexto + aplicação prática. Sem spam, sem drama."
              : "Once a week: summary + context + practical steps. No spam, no drama."}
          </p>
        </div>

        <span className="inline-flex w-fit items-center rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-[#121212]">
          {isPT ? "Newsletter Premium" : "Premium Newsletter"}
        </span>
      </div>

      <div className="mt-4">
        <SubscribeForm locale={locale} />
      </div>

      <p className="mt-3 text-xs text-black/50">
        {isPT
          ? "Ao assinar, concordas em receber emails do EverLight. Podes sair quando quiseres."
          : "By subscribing, you agree to receive EverLight emails. Unsubscribe anytime."}
      </p>
    </section>
  );
}
