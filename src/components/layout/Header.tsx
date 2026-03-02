import Link from "next/link";
import Container from "./Container";

export default function Header({ locale }: { locale: string }) {
  return (
    <header className="border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="font-semibold tracking-tight">
            EverLight Journal
          </Link>

          <nav className="flex items-center gap-4 text-sm text-white/70">
            <Link className="hover:text-white" href={`/${locale}/blog`}>Blog</Link>
            <Link className="hover:text-white" href={`/${locale}/about`}>Sobre</Link>
            <Link className="hover:text-white" href={`/${locale}/subscribe`}>Newsletter</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
