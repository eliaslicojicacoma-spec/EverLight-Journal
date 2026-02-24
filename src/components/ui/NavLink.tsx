"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/pt" && href !== "/en" && pathname.startsWith(href + "/")) ||
    (href.endsWith("/blog") && pathname.startsWith(href)); // mantém blog ativo em /blog/... também

  return (
    <Link
      href={href}
      className={`rounded-xl px-3 py-2 text-sm font-semibold transition
        ${isActive
          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
          : "text-zinc-700 hover:bg-zinc-100 dark:text-white/80 dark:hover:bg-white/10"
        }`}
    >
      {label}
    </Link>
  );
}
