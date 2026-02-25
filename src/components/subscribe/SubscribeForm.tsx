"use client";

import { useMemo, useState } from "react";

type Props = {
  locale: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SubscribeForm({ locale }: Props) {
  const isPT = locale === "pt";

  const t = useMemo(
    () => ({
      title: isPT ? "Entrar na lista" : "Join the list",
      email: isPT ? "Teu email" : "Your email",
      name: isPT ? "Teu nome (opcional)" : "Your name (optional)",
      btn: isPT ? "Inscrever agora" : "Subscribe now",
      privacy: isPT
        ? "Respeitamos tua privacidade. Tu podes cancelar quando quiseres."
        : "We respect your privacy. You can unsubscribe anytime.",
      ok: isPT ? "Fechado ✅ Agora estás na lista." : "Done ✅ You’re on the list.",
      already: isPT
        ? "Tu já estavas na lista 😄"
        : "You were already subscribed 😄",
      bad: isPT ? "Email inválido." : "Invalid email.",
      fail: isPT ? "Não foi possível inscrever agora." : "Could not subscribe right now.",
      loading: isPT ? "A inscrever..." : "Subscribing...",
    }),
    [isPT]
  );

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "already" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();
    if (!isValidEmail(cleanEmail)) {
      setStatus("error");
      setError(t.bad);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: cleanEmail,
          name: name.trim(),
          company: "", // honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (data?.ok) {
        setStatus(data?.already ? "already" : "ok");
        return;
      }

      setStatus("error");
      setError(String(data?.message || t.fail));
    } catch {
      setStatus("error");
      setError(t.fail);
    }
  }

  return (
    <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-lg font-semibold">{t.title}</h2>

      <form onSubmit={onSubmit} className="mt-4 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {t.email}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@email.com"
            className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {t.name}
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="name"
            placeholder={isPT ? "Elias (opcional)" : "Elias (optional)"}
            className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-white"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          {status === "loading" ? t.loading : t.btn}
        </button>

        {status === "ok" && (
          <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20">
            {t.ok}
          </div>
        )}

        {status === "already" && (
          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/20">
            {t.already}
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-900 ring-1 ring-rose-200 dark:bg-rose-500/10 dark:text-rose-200 dark:ring-rose-500/20">
            {error || t.fail}
          </div>
        )}

        <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.privacy}</p>
      </form>
    </div>
  );
      }
