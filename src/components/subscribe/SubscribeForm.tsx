"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Falha ao inscrever.");
      }

      setStatus("success");
      setMessage("Inscrição feita com sucesso ✨ Verifica o teu email.");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Erro ao enviar. Tenta novamente.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="O teu email"
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/20"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-black px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-sm hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-black"
      >
        {status === "loading" ? "A enviar..." : "Inscrever-me"}
      </button>

      {message && (
        <p
          className={`text-xs ${
            status === "success"
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-rose-700 dark:text-rose-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
