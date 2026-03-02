import DonationBox from "@/components/monetization/DonationBox";

export default function SupportPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  return (
    <main className="space-y-10">
      <section className="rounded-[28px] border border-black/10 bg-white/70 p-7 shadow-sm backdrop-blur sm:p-10">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/55">
          {isPT ? "APOIE" : "SUPPORT"}
        </div>

        <h1 className="mt-3 text-4xl font-semibold leading-tight text-black sm:text-5xl">
          {isPT ? "Apoie o EverLight Journal" : "Support EverLight Journal"}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
          {isPT
            ? "O teu apoio ajuda a manter o site online, produzir estudos bíblicos e fortalecer conteúdos para a comunidade."
            : "Your support helps keep the site online, produce biblical studies, and strengthen content for the community."}
        </p>
      </section>

      <DonationBox locale={locale} />
    </main>
  );
}
