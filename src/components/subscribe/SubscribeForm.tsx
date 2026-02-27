"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim() || undefined }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setMsg(data?.error ?? "Não deu para inscrever agora.");
        return;
      }

      setStatus("ok");
      setMsg("Inscrição feita. Bem-vindo ao EverLight 🙌");
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
      setMsg("Sem rede ou erro no servidor.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome (opcional)"
          className="h-11 w-full rounded-2xl border border-black/10 bg-white/70 px-4 text-sm outline-none focus:border-black/20 dark:border-white/10 dark:bg-white/5"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
          className="h-11 w-full rounded-2xl border border-black/10 bg-white/70 px-4 text-sm outline-none focus:border-black/20 dark:border-white/10 dark:bg-white/5"
        />
      </div>

      <button
        disabled={status === "loading"}
        className="inline-flex h-11 items-center justify-center rounded-2xl bg-black px-5 text-xs font-semibold tracking-wide text-white shadow-sm disabled:opacity-60"
        type="submit"
      >
        {status === "loading" ? "A inscrever..." : "Inscrever-me"}
      </button>

      {msg ? (
        <p className={`text-xs ${status === "error" ? "text-red-600" : "text-black/70 dark:text-white/70"}`}>
          {msg}
        </p>
      ) : null}
    </form>
  );
}
