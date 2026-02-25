import Image from "next/image";
import Link from "next/link";

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "CONTATO" : "CONTACT",
    title: isPT ? "Fale connosco" : "Contact us",
    desc: isPT
      ? "Dúvidas, sugestões, parcerias ou feedback? Manda mensagem — respondemos com respeito e clareza."
      : "Questions, suggestions, partnerships, or feedback? Send a message — we reply with respect and clarity.",
    info: isPT ? "Informações" : "Info",
    form: isPT ? "Enviar mensagem" : "Send a message",
    name: isPT ? "Nome" : "Name",
    email: isPT ? "Email" : "Email",
    subject: isPT ? "Assunto" : "Subject",
    message: isPT ? "Mensagem" : "Message",
    send: isPT ? "Enviar" : "Send",
    back: isPT ? "Voltar ao Blog" : "Back to Blog",
    note: isPT
      ? "Nota: este formulário é UI pronto. Depois ligamos com EmailJS/Resend/API route."
      : "Note: this is UI-ready. Later we connect EmailJS/Resend/API route.",
  };

  const contacts = [
    { label: "Email", value: "eliaslicojicacoma@gmail.com", href: "mailto:eliaslicojicacoma@gmail.com" },
    { label: "WhatsApp", value: "+244 933 522 616", href: "https://wa.me/244933522616" },
    { label: "Instagram", value: "@EliasCacoma", href: "https://instagram.com/EliasCacoma" },
    { label: "Facebook", value: "Elias Cacoma", href: "https://facebook.com/EliasCacoma" },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=2200&q=70"
            alt="Contact background"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="text-[11px] font-medium tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
            {t.kicker}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-zinc-900/25 dark:bg-white/20" />
            <div className="text-xs font-semibold tracking-[0.22em] text-zinc-900 dark:text-white">
              EverLight Journal
            </div>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {t.desc}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.back}
            </Link>
            <Link
              href={`/${locale}/donate`}
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:brightness-95 dark:bg-amber-400"
            >
              {isPT ? "Apoiar o projeto" : "Support the project"}
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.info}</h2>

            <div className="mt-4 space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block rounded-2xl border border-zinc-200 bg-white p-4 text-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/40"
                >
                  <div className="text-xs font-semibold tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {c.label.toUpperCase()}
                  </div>
                  <div className="mt-1 font-semibold text-zinc-900 dark:text-white">{c.value}</div>
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:ring-amber-500/20">
              <p className="text-sm text-zinc-800 dark:text-zinc-200">{t.note}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.form}</h2>

            <form className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {t.name}
                </label>
                <input
                  type="text"
                  placeholder={isPT ? "Teu nome" : "Your name"}
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {t.email}
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {t.subject}
                </label>
                <input
                  type="text"
                  placeholder={isPT ? "Ex: parceria, sugestão..." : "Ex: partnership, suggestion..."}
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  {t.message}
                </label>
                <textarea
                  rows={6}
                  placeholder={isPT ? "Escreve a tua mensagem..." : "Write your message..."}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
                }
