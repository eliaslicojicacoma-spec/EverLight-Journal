"use client";

import SubscribeForm from "@/components/subscribe/SubscribeForm";

export default function NewsletterCard({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  return (
    <section id="newsletter" className="card p-6">
      <div className="text-[11px] tracking-[0.22em] text-black/55 dark:text-white/60">
        NEWSLETTER
      </div>

      <h3 className="mt-2 text-lg font-semibold">
        {isPT ? "Recebe conteúdo premium no email" : "Get premium content by email"}
      </h3>

      <p className="mt-2 text-sm text-black/60 dark:text-white/70">
        {isPT
          ? "Sem spam. Só resumos, estudos e links oficiais — com aplicação prática."
          : "No spam. Only summaries, studies and official links — with practical steps."}
      </p>

      <div className="mt-4">
        <SubscribeForm locale={locale} />
      </div>
    </section>
  );
}
