"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/utils/cookies";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (!c) setOpen(true);
    if (c) {
      setAnalytics(c.analytics);
      setAds(c.ads);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto w-full max-w-5xl p-3">
        <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur p-4 shadow-2xl
                        dark:border-white/10 dark:bg-zinc-950/80">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="font-semibold text-zinc-900 dark:text-white">Cookies</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                Usamos cookies necessários para o site funcionar e (se permitires) cookies de
                <b> análise</b> e <b>publicidade</b>. Podes alterar quando quiseres.
              </p>

              <div className="mt-3 flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-white/80">
                  <input checked disabled type="checkbox" className="accent-zinc-900 dark:accent-white" />
                  Necessários (sempre ativos)
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-white/80">
                  <input
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    type="checkbox"
                    className="accent-zinc-900 dark:accent-white"
                  />
                  Análise (ex: medir tráfego)
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-white/80">
                  <input
                    checked={ads}
                    onChange={(e) => setAds(e.target.checked)}
                    type="checkbox"
                    className="accent-zinc-900 dark:accent-white"
                  />
                  Publicidade (ex: Google AdSense)
                </label>
              </div>
            </div>

            <div className="flex gap-2 md:flex-col md:min-w-[220px]">
              <button
                className="w-full rounded-xl bg-zinc-900 text-white font-semibold px-4 py-2 hover:bg-zinc-800
                           dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
                onClick={() => {
                  setConsent({ analytics: true, ads: true });
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Aceitar tudo
              </button>

              <button
                className="w-full rounded-xl border px-4 py-2 font-semibold
                           border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100
                           dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                onClick={() => {
                  setConsent({ analytics, ads });
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Guardar escolhas
              </button>

              <button
                className="w-full rounded-xl bg-transparent px-4 py-2 text-zinc-600 hover:text-zinc-900
                           dark:text-white/70 dark:hover:text-white"
                onClick={() => {
                  setConsent({ analytics: false, ads: false });
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Rejeitar opcionais
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-zinc-500 dark:text-white/50">
            Transparência + consentimento = confiança (e ajuda no AdSense).
          </p>
        </div>
      </div>
    </div>
  );
}
