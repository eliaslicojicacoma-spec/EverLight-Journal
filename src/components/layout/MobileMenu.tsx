"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type NavItem = { label: string; href: string };

function buildNav(locale: "pt" | "en"): NavItem[] {
  // Labels “internacionais” (curtos) — depois podemos traduzir via next-intl se quiseres
  return [
    { label: "Home", href: `/${locale}` },
    { label: "Society", href: `/${locale}/society` },
    { label: "Adventist", href: `/${locale}/adventist` },
    { label: "Library", href: `/${locale}/library` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: "Donate", href: `/${locale}/donate` },
    { label: "About", href: `/${locale}/about` },
    { label: "Contact", href: `/${locale}/contact` }
  ];
}

export default function MobileMenu() {
  const pathname = usePathname();
  const locale: "pt" | "en" = pathname.startsWith("/en") ? "en" : "pt";

  const nav = useMemo(() => buildNav(locale), [locale]);
  const [open, setOpen] = useState(false);

  // fecha no ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // trava scroll ao abrir
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-extrabold
                   border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                   dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        aria-label="Abrir menu"
        title="Menu"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            type="button"
          />

          {/* drawer */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-[380px] border-l
                          border-zinc-200 bg-white shadow-2xl
                          dark:border-white/10 dark:bg-zinc-950">
            <div className="flex items-center justify-between gap-3 border-b p-4
                            border-zinc-200 dark:border-white/10">
              <div>
                <p className="text-sm font-extrabold">EverLight Journal</p>
                <p className="text-xs text-zinc-600 dark:text-white/70">
                  {locale.toUpperCase()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border px-3 py-2 text-sm font-extrabold
                           border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                           dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                aria-label="Fechar"
                title="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              <div className="grid gap-2">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-extrabold transition
                        border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                        dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
                        ${active ? "ring-2 ring-indigo-500/30" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="rounded-2xl border p-4 text-xs text-zinc-600
                              border-zinc-200 bg-zinc-50
                              dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                Dica: PT/EN + SEO + consistência editorial = crescimento real.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
            }
