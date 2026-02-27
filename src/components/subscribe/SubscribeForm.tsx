"use client";

import { useState } from "react";

export default function SubscribeForm({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!r.ok || !data.ok) {
        setStatus("error");
        setMsg(data.error || (isPT ? "Falhou. Tenta novamente." : "Failed. Try again."));
        return;
      }

      setStatus("ok");
      setMsg(isPT ? "Feito! Agora estás na lista ✅" : "Done! You're in ✅");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg(isPT ? "Sem conexão. Tenta novamente." : "No connection. Try again.");
    }
  }

  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-[#121212]">
        {isPT ? "Newsletter EverLight" : "EverLight Newsletter"}
      </h3>
      <p className="mt-1 text-sm text-black/60">
        {isPT
          ? "1 email por semana: resumo + valor prático. Sem spam."
          : "1 email/week: summary + practical value. No spam."}
      </p>

      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={isPT ? "teuemail@exemplo.com" : "you@email.com"}
          className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none ring-0 focus:border-black/20"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-11 rounded-xl bg-[#121212] px-5 text-sm font-semibold text-white shadow-sm disabled:opacity-60"
        >
          {status === "loading" ? (isPT ? "A enviar..." : "Sending...") : isPT ? "Assinar" : "Subscribe"}
        </button>
      </form>

      {msg ? (
        <p
          className={`mt-3 text-sm ${
            status === "ok" ? "text-emerald-700" : status === "error" ? "text-red-700" : "text-black/60"
          }`}
        >
          {msg}
        </p>
      ) : null}
    </div>
  );
}
