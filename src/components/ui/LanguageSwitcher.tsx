"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "pt" | "en";

function swapLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);

  // Se estiver na raiz sem locale, manda pro /{locale}
  if (parts.length === 0) return `/${nextLocale}`;

  // Se já tiver locale na primeira posição, troca
  if (parts[0] === "pt" || parts[0] === "en") {
    parts[0] = nextLocale;
    return "/" + parts.join("/");
  }

  // Se não tiver locale, insere
  return `/${nextLocale}/` + parts.join("/");
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const current: Locale = pathname.startsWith("/en") ? "en" : "pt";

  const ptHref = swapLocale(pathname, "pt");
  const enHref = swapLocale(pathname, "en");

  return (
    <div className="inline-flex items-center gap-2">
      <Link
        href={ptHref}
        className={`rounded-xl border px-3 py-2 text-xs font-extrabold transition
          border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
          dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10
          ${current === "pt" ? "ring-2 ring-indigo-500/30" : ""}`}
        aria-label="Português"
        title="Português"
      >
        PT
      </Link>

      <Link
        href={enHref}
        className={`rounded-xl border px-3 py-2 text-xs font-extrabold transition
          border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
          dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10
          ${current === "en" ? "ring-2 ring-indigo-500/30" : ""}`}
        aria-label="English"
        title="English"
      >
        EN
      </Link>
    </div>
  );
}
