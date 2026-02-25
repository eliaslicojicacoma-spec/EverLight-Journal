import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "EverLight Journal",
  description: "Fé & Sociedade — conteúdo original, moderno e confiável.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen">
        {/* Premium background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#F6F4EF]" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(26,42,120,0.12),transparent_65%)] blur-2xl" />
          <div className="absolute -bottom-64 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,199,140,0.18),transparent_65%)] blur-2xl" />
        </div>

        <Header locale={locale} />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-5">
          {children}
        </div>

        <footer className="border-t border-black/10 bg-[#1F1F1F] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
            <div>
              <div className="text-lg font-semibold">EverLight Journal</div>
              <p className="mt-3 max-w-md text-sm text-white/70">
                {locale === "pt"
                  ? "Conectando fé e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais."
                  : "Connecting faith and society in a balanced, biblical, and relevant way for today’s challenges."}
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/70">
                <div>📞 +244 933 522 616</div>
                <div>✉️ eliaslicojicacoma@gmail.com</div>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold">Links</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li><a className="hover:text-white" href={`/${locale}/blog`}>Blog</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/society`}>{locale === "pt" ? "Sociedade" : "Society"}</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/adventist`}>{locale === "pt" ? "Adventista" : "Adventist"}</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/library`}>{locale === "pt" ? "Biblioteca" : "Library"}</a></li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-semibold">Recursos</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li><a className="hover:text-white" href={`/${locale}/verse-of-day`}>{locale === "pt" ? "Versículo do Dia" : "Verse of the Day"}</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/donate`}>{locale === "pt" ? "Doar" : "Donate"}</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/contact`}>{locale === "pt" ? "Contato" : "Contact"}</a></li>
                  <li><a className="hover:text-white" href={`/${locale}/privacy`}>{locale === "pt" ? "Privacidade" : "Privacy"}</a></li>
                </ul>

                <div className="mt-6">
                  <a
                    href={`/${locale}/donate`}
                    className="inline-block w-full rounded-xl border border-white/25 px-6 py-3 text-center text-xs font-semibold tracking-wide text-white transition hover:bg-white/10"
                  >
                    {locale === "pt" ? "Apoiar o Ministério" : "Support the Ministry"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-xs text-white/55">
            © {new Date().getFullYear()} EverLight Journal.{" "}
            {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </div>
        </footer>
      </body>
    </html>
  );
}
