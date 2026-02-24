import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur
                 dark:border-white/10 dark:bg-zinc-950/70"
    >
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/pt" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="font-extrabold tracking-tight text-zinc-900 dark:text-white">
              EverLight Journal
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100
                         dark:text-white/80 dark:hover:bg-white/10"
              href="/pt/society"
            >
              Society
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100
                         dark:text-white/80 dark:hover:bg-white/10"
              href="/pt/adventist"
            >
              Adventist
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100
                         dark:text-white/80 dark:hover:bg-white/10"
              href="/pt/library"
            >
              Library
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100
                         dark:text-white/80 dark:hover:bg-white/10"
              href="/pt/blog"
            >
              Blog
            </Link>
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100
                         dark:text-white/80 dark:hover:bg-white/10"
              href="/pt/donate"
            >
              Donate
            </Link>

            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
