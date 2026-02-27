import Link from "next/link";
import CopyField from "@/components/ui/CopyField";

export default function DonatePage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "APOIO • MANTER O PROJETO VIVO" : "SUPPORT • KEEP THE PROJECT ALIVE",
    title: isPT ? "Doar com simplicidade e transparência." : "Donate with simplicity and transparency.",
    desc: isPT
      ? "O EverLight Journal existe para servir com qualidade. Se este projeto te ajuda, tua doação mantém o ritmo: site, tempo de escrita, recursos e melhorias."
      : "EverLight Journal exists to serve with quality. If this project helps you, your donation sustains the work: site, writing time, resources, and improvements.",
    back: isPT ? "Voltar para Home" : "Back to Home",
    pix: "PIX",
    paypal: "PayPal",
    safetyTitle: isPT ? "Nota de segurança" : "Safety note",
    safetyDesc: isPT
      ? "Confirma o destinatário antes de enviar. Se algo parecer estranho, não transfere."
      : "Confirm the recipient before sending. If something looks off, don’t transfer.",
    thanks: isPT ? "Obrigado por apoiar. Deus te abençoe. 🙏🏽" : "Thanks for supporting. God bless you. 🙏🏽",
  };

  
  const PIX_KEY = "elias-licoji-cacoma-273@jim.com";
  const PAYPAL_EMAIL = "eliaslicojicacoma@gmail.com";

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:p-10">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
          {t.kicker}
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {t.desc}
        </p>

        <div className="mt-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
          >
            ← {t.back}
          </Link>
        </div>
      </section>

      {/* PAYMENT CARDS */}
      <section className="grid gap-4 lg:grid-cols-2">
        {/* PIX */}
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">{t.pix}</h2>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              {isPT ? "Rápido" : "Fast"}
            </span>
          </div>

          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            {isPT ? "Chave PIX (copia e cola):" : "PIX key (copy & paste):"}
          </p>

          <div className="mt-3">
            <CopyField label={isPT ? "Chave PIX" : "PIX key"} value={PIX_KEY} />
          </div>

          <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-white">
              {isPT ? "Como usar:" : "How to use:"}
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>{isPT ? "Abre o app do banco." : "Open your banking app."}</li>
              <li>{isPT ? "PIX → Copia e Cola." : "PIX → Copy & Paste."}</li>
              <li>{isPT ? "Cola a chave e confirma." : "Paste the key and confirm."}</li>
            </ol>
          </div>
        </div>

        {/* PAYPAL */}
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">{t.paypal}</h2>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              {isPT ? "Internacional" : "International"}
            </span>
          </div>

          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            {isPT ? "Conta PayPal (email):" : "PayPal account (email):"}
          </p>

          <div className="mt-3">
            <CopyField label={isPT ? "Email PayPal" : "PayPal email"} value={PAYPAL_EMAIL} />
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              href={`mailto:${PAYPAL_EMAIL}?subject=Doação%20EverLight%20Journal&body=Olá,%20quero%20apoiar%20o%20EverLight%20Journal.`}
            >
              {isPT ? "Contactar por email" : "Contact by email"}
            </a>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {isPT ? "Falar comigo" : "Talk to me"}
            </Link>
          </div>
        </div>
      </section>

      {/* SAFETY + THANKS */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <h3 className="text-base font-semibold">{t.safetyTitle}</h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{t.safetyDesc}</p>

        <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/10 dark:bg-zinc-900/40 dark:ring-white/10">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.thanks}</p>
        </div>
      </section>
    </div>
  );
}
