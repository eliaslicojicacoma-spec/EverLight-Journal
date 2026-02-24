"use client";

import { useEffect, useMemo, useState } from "react";

export default function ShareBar({
  title,
  url
}: {
  title: string;
  url?: string; // se não vier, ele pega o URL atual no client
}) {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (url) setCurrentUrl(url);
    else if (typeof window !== "undefined") setCurrentUrl(window.location.href);
  }, [url]);

  const encoded = useMemo(() => {
    const u = encodeURIComponent(currentUrl);
    const t = encodeURIComponent(title);
    return { u, t };
  }, [currentUrl, title]);

  const wa = `https://wa.me/?text=${encoded.t}%20${encoded.u}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encoded.u}`;
  const x = `https://twitter.com/intent/tweet?text=${encoded.t}&url=${encoded.u}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copiado ✅");
    } catch {
      alert("Não consegui copiar. Copia manualmente 😅");
    }
  }

  return (
    <div
      className="rounded-2xl border p-4 shadow-sm
                 border-zinc-200 bg-white
                 dark:border-white/10 dark:bg-white/5"
    >
      <p className="text-sm font-extrabold">Partilhar</p>
      <p className="mt-1 text-xs text-zinc-600 dark:text-white/70">
        Leva este conteúdo para mais pessoas.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-green-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-green-700"
        >
          WhatsApp
        </a>

        <a
          href={fb}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-700"
        >
          Facebook
        </a>

        <a
          href={x}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-extrabold text-white hover:bg-zinc-800
                     dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
        >
          X
        </a>

        <button
          type="button"
          onClick={copy}
          className="rounded-2xl border px-4 py-2 text-sm font-extrabold
                     border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                     dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Copiar link
        </button>
      </div>

      {currentUrl && (
        <p className="mt-3 break-all text-xs text-zinc-500 dark:text-white/50">
          {currentUrl}
        </p>
      )}
    </div>
  );
        }
