"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const SUPPORTED_LOCALES = ["pt", "en"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (SUPPORTED_LOCALES.includes(seg as Locale) ? (seg as Locale) : "pt");
}

function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  if (SUPPORTED_LOCALES.includes(maybeLocale as Locale)) {
    return "/" + parts.slice(1).join("/");
  }
  return pathname || "/";
}

function withLocale(locale: string, pathnameNoLocale: string) {
  const clean = pathnameNoLocale.startsWith("/") ? pathnameNoLocale : `/${pathnameNoLocale}`;
  // avoid double slashes
  const tail = clean === "/" ? "" : clean;
  return `/${locale}${tail}`;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const pathnameNoLocale = useMemo(() => stripLocale(pathname), [pathname]);

  const isPT = locale === "pt";

  const nav = [
    { key: "home", label: isPT ? "Home" : "Home", href: withLocale(locale, "/") },
    { key: "society", label: isPT ? "Sociedade" : "Society", href: withLocale(locale, "/society") },
    { key: "adventist", label: isPT ? "Adventista" : "Adventist", href: withLocale(locale, "/adventist") },
    { key: "library", label: isPT ? "Biblioteca" : "Library", href: withLocale(locale, "/library") },
    { key: "blog", label: isPT ? "Blog" : "Blog", href: withLocale(locale, "/blog") },
  ];

  const donateHref = withLocale(locale, "/donate");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const localeSwitchHref = (nextLocale: Locale) => withLocale(nextLocale, pathnameNoLocale);

  return (
    <header className="sticky top-0 z-50">
      {/* top bar blur */}
      <div className="border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href={withLocale(locale, "/")}
            className="group inline-flex items-center gap-3"
            aria-label="EverLight Journal"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-zinc-950">
              EL
            </span>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                EverLight <span className="text-zinc-500 dark:text-zinc-400">Journal</span>
              </div>
              <div className="text-[11px] tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                {isPT ? "FÉ & SOCIEDADE" : "FAITH & SOCIETY"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900/40",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side (desktop) */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Locale switch */}
            <div className="inline-flex overflow-hidden rounded-xl border border-zinc-200 bg-white/70 text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-950/30">
              {SUPPORTED_LOCALES.map((l) => {
                const active = l === locale;
                return (
                  <Link
                    key={l}
                    href={localeSwitchHref(l)}
                    className={[
                      "px-3 py-2 transition",
                      active
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900/40",
                    ].join(" ")}
                    aria-label={`Switch language to ${l}`}
                  >
                    {l.toUpperCase()}
                  </Link>
                );
              })}
            </div>

            {/* Donate button */}
            <Link
              href={donateHref}
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm transition hover:brightness-95 dark:bg-amber-400"
            >
              {isPT ? "Doar" : "Donate"}
            </Link>

            {/* Mobile button (hidden on desktop) */}
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={donateHref}
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-3 py-2 text-xs font-semibold text-zinc-950 shadow-sm transition hover:brightness-95 dark:bg-amber-400"
            >
              {isPT ? "Doar" : "Donate"}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 text-zinc-900 shadow-sm backdrop-blur transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {/* Simple icon */}
              <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <div className="border-b border-zinc-200/70 bg-white/90 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <nav className="grid gap-2">
                {nav.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={[
                        "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                        active
                          ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                          : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/30">
                <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                  {isPT ? "Idioma" : "Language"}
                </div>

                <div className="inline-flex overflow-hidden rounded-xl border border-zinc-200 bg-white text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-950/30">
                  {SUPPORTED_LOCALES.map((l) => {
                    const active = l === locale;
                    return (
                      <Link
                        key={l}
                        href={localeSwitchHref(l)}
                        className={[
                          "px-3 py-2 transition",
                          active
                            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900/40",
                        ].join(" ")}
                      >
                        {l.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href={donateHref}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:brightness-95 dark:bg-amber-400"
                >
                  {isPT ? "Doar / Apoiar o projeto" : "Donate / Support the project"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
                }
