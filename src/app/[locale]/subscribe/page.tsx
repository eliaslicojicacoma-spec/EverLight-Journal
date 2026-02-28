"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubscribePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.message || "Falha ao inscrever.");

      setStatus("ok");
      setMsg(isPT ? "Inscrito com sucesso ✅" : "Subscribed successfully ✅");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Erro interno no servidor.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-xl px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight text-black">
        {isPT ? "diário + Newsletter semanal" : "daily + Weekly Newsletter"}
      </h1>

      <p className="mt-4 text-sm leading-relaxed text-black/60">
        {isPT
          ? "Todos os dias: uma reflexão curta e prática. Toda semana: um resumo editorial com artigos fortes (fé + sociedade). Sem spam."
          : "Daily: short practical reflection. Weekly: editorial summary with strong articles. No spam."}
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder={isPT ? "seuemail@gmail.com" : "yourmail@gmail.com"}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-4 w-full rounded-2xl bg-black px-5 py-4 text-sm font-semibold text-white shadow-sm disabled:opacity-60"
        >
          {status === "loading"
            ? isPT
              ? "A inscrever..."
              : "Subscribing..."
            : isPT
            ? "Inscrever-se"
            : "Subscribe"}
        </button>

        {msg ? (
          <p
            className={`mt-4 text-sm ${
              status === "error" ? "text-red-600" : "text-black/70"
            }`}
          >
            {msg}
          </p>
        ) : null}

        <p className="mt-4 text-xs text-black/50">
          {isPT
            ? "Respeitamos sua privacidade. Cancele quando quiser."
            : "We respect your privacy. Unsubscribe anytime."}
        </p>

        <div className="mt-6">
          <Link
            className="text-sm font-semibold text-black underline decoration-black/20 underline-offset-4"
            href={`/${locale}`}
          >
            ← {isPT ? "Voltar ao site" : "Back to site"}
          </Link>
        </div>
      </form>
    </main>
  );
        }
