import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-600 dark:text-white/70">
            © {new Date().getFullYear()} EverLight Journal
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link className="text-zinc-700 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white" href="/pt/privacy">
              Privacy
            </Link>
            <Link className="text-zinc-700 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white" href="/pt/terms">
              Terms
            </Link>
            <Link className="text-zinc-700 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white" href="/pt/editorial-policy">
              Editorial
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
