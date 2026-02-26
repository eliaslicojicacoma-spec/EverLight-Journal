import Link from "next/link";

export default function Footer({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  return (
    <footer className="mt-10 bg-[#1F1F1F] text-white">
      <div className="container-xl grid gap-10 py-14 md:grid-cols-2">
        <div>
          <div className="text-lg font-semibold">EverLight Journal</div>
          <p className="mt-3 max-w-md text-sm text-white/70">
            {isPT
              ? "Conectando fé e sociedade com clareza, profundidade e responsabilidade editorial."
              : "Connecting faith and society with clarity, depth, and editorial responsibility."}
          </p>

          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div>📞 +244 933 522 616</div>
            <div>✉️ eliaslicojicacoma@gmail.com</div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="text-sm font-semibold">{isPT ? "Links Rápidos" : "Quick Links"}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white" href={`/${locale}/blog`}>Blog</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/society`}>{isPT ? "Sociedade" : "Society"}</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/adventist`}>{isPT ? "Adventista" : "Adventist"}</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/library`}>{isPT ? "Biblioteca" : "Library"}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">{isPT ? "Recursos" : "Resources"}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white" href={`/${locale}/donate`}>{isPT ? "Apoie" : "Donate"}</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/subscribe`}>Newsletter</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/contact`}>{isPT ? "Contato" : "Contact"}</Link></li>
              <li><Link className="hover:text-white" href={`/${locale}/privacy`}>{isPT ? "Privacidade" : "Privacy"}</Link></li>
            </ul>

            <div className="mt-6">
              <Link
                href={`/${locale}/subscribe`}
                className="inline-block w-full rounded-2xl border border-white/25 px-6 py-3 text-center text-xs font-semibold tracking-wide text-white transition hover:bg-white/10"
              >
                {isPT ? "Inscrever-se" : "Subscribe"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/55">
        © {new Date().getFullYear()} EverLight Journal. {isPT ? "Todos os direitos reservados." : "All rights reserved."}
      </div>
    </footer>
  );
}
