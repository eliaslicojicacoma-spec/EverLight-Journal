import Link from "next/link";

export default function DonatePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const PIX = "elias-licoji-cacoma-273@jim.com";
  const PAYPAL = "eliaslicojicacoma@gmail.com";

  const t = {
    kicker: isPT ? "APOIE O PROJETO" : "SUPPORT THE PROJECT",
    title: isPT ? "Doar" : "Donate",
    desc: isPT
      ? "A tua doação ajuda a manter o EverLight Journal vivo: conteúdos, curadoria, melhorias e alcance."
      : "Your donation helps keep EverLight Journal alive: content, curation, improvements, and reach.",
    pix: "Pix",
    paypal: "PayPal",
    copy: isPT ? "Copiar" : "Copy",
    back: isPT ? "Voltar" : "Back",
    note: isPT
      ? "Transparência: vamos publicar metas e melhorias do site com base no apoio."
      : "Transparency: we’ll publish goals and improvements based on the support.",
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
        <div className="text-[11px] font-medium tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
          {t.kicker}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {t.desc}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <DonateCard label={t.pix} value={PIX} />
          <DonateCard label={t.paypal} value={PAYPAL} />
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{t.note}</p>
        </div>

        <Link
          href={`/${locale}`}
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
        >
          {t.back}
        </Link>
      </section>
    </div>
  );
}

function DonateCard({ label, value }: { label: string; value: string }) {
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(value);
      // sem alert feio — UX limpa (e mobile-friendly)
    } catch {
      // se clipboard falhar, o usuário ainda consegue copiar manualmente
    }
  }

  return (
    <div className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-xs font-semibold tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
        {label.toUpperCase()}
      </div>

      <div className="mt-3 break-all text-base font-semibold text-zinc-900 dark:text-white">{value}</div>

      <button
        type="button"
        onClick={copyToClipboard}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
      >
        Copiar
      </button>
    </div>
  );
}
