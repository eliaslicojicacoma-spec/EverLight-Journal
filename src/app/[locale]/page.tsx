import Link from "next/link";
import Container from "@/components/layout/Container";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="py-10">
      <Container>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-xs text-white/60 tracking-widest uppercase">
            Espiritualidade & Sociedade
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            EverLight Journal
          </h1>
          <p className="mt-2 text-white/70">
            Conectando fé e sociedade com clareza bíblica e aplicação prática.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900"
              href={`/${locale}/blog`}
            >
              Explorar Artigos
            </Link>
            <Link
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              href={`/${locale}/verse-of-day`}
            >
              Versículo do Dia
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
