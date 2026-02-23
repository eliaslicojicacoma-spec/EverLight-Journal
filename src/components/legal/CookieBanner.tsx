"use client";

import { useEffect, useMemo, useState } from "react";
import { getConsent, setConsent, ConsentState } from "@/utils/cookies";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  const existing = useMemo(() => (typeof window !== "undefined" ? getConsent() : null), []);

  useEffect(() => {
    const c = getConsent();
    if (!c) setOpen(true);
  }, []);

  useEffect(() => {
    const c: ConsentState | null = existing;
    if (c) {
      setAnalytics(c.analytics);
      setAds(c.ads);
    }
  }, [existing]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto w-full max-w-5xl p-3">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur p-4 shadow-2xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-white font-semibold">Cookies</p>
              <p className="text-white/70 text-sm mt-1">
                Usamos cookies necessários para o site funcionar e (se permitires) cookies de
                <b> análise</b> e <b>publicidade</b>. Podes alterar quando quiseres.
              </p>

              <div className="mt-3 flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-white/80">
                  <input checked disabled type="checkbox" className="accent-white" />
                  Necessários (sempre ativos)
                </label>

                <label className="flex items-center gap-2 text-sm text-white/80">
                  <input
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    type="checkbox"
                    className="accent-white"
                  />
                  Análise (ex: medir tráfego)
                </label>

                <label className="flex items-center gap-2 text-sm text-white/80">
                  <input
                    checked={ads}
                    onChange={(e) => setAds(e.target.checked)}
                    type="checkbox"
                    className="accent-white"
                  />
                  Publicidade (ex: Google AdSense)
                </label>
              </div>
            </div>

            <div className="flex gap-2 md:flex-col md:min-w-[220px]">
              <button
                className="w-full rounded-xl bg-white text-zinc-950 font-semibold px-4 py-2 hover:bg-white/90"
                onClick={() => {
                  setConsent({ analytics: true, ads: true });
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Aceitar tudo
              </button>

              <button
                className="w-full rounded-xl bg-white/10 text-white font-semibold px-4 py-2 hover:bg-white/15 border border-white/10"
                onClick={() => {
                  setConsent({ analytics, ads });
                  setOpen(false);
                  window.location.reload();
                }}
              >
                Guardar escolhas
              </button>

              <button
                className="w-full rounded-xl bg-transparent text-white/70 px-4 py-2 hover:text-white"
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

          <p className="text-xs text-white/50 mt-3">
            Dica: para AdSense, transparência + página de privacidade + consent é ouro.
          </p>
        </div>
      </div>
    </div>
  );
}
