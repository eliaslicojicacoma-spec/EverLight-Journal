"use client";

import { useState } from "react";

type Props = {
  locale?: string;
};

export default function SubscribeForm({ locale = "pt" }: Props) {
  const isPT = locale === "pt";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || (isPT ? "Falha ao inscrever." : "Subscription failed."));
      }

      setStatus("success");
      setMessage(isPT ? "Inscrição feita com sucesso. ✅" : "Subscribed successfully. ✅");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || (isPT ? "Erro inesperado." : "Unexpected error."));
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <label className="text-xs font-semibold tracking-wide text-black/60 dark:text-white/70">
        {isPT ? "Email" : "Email"}
      </label>

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={isPT ? "teuemail@gmail.com" : "you@example.com"}
          className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/25"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading"
            ? isPT
              ? "A inscrever..."
              : "Subscribing..."
            : isPT
            ? "Inscrever-me"
            : "Subscribe"}
        </button>
      </div>

      {message ? (
        <p
          className={`text-xs ${
            status === "success"
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-rose-700 dark:text-rose-300"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="text-xs text-black/50 dark:text-white/50">
          {isPT
            ? "Sem spam. Podes cancelar quando quiseres."
            : "No spam. You can unsubscribe anytime."}
        </p>
      )}
    </form>
  );
}
