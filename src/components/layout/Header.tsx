import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileMenu from "@/components/layout/MobileMenu";
import NavLink from "@/components/ui/NavLink";

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
            <NavLink href="/pt" label="Home" />
            <NavLink href="/pt/society" label="Society" />
            <NavLink href="/pt/adventist" label="Adventist" />
            <NavLink href="/pt/library" label="Library" />
            <NavLink href="/pt/blog" label="Blog" />
            <NavLink href="/pt/donate" label="Donate" />

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
