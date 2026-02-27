import SubscribeForm from "@/components/subscribe/SubscribeForm";

export default function NewsletterCard() {
  return (
    <div className="card p-6">
      <div className="text-[11px] tracking-[0.22em] text-black/55 dark:text-white/55">
        NEWSLETTER
      </div>

      <h3 className="mt-2 text-lg font-semibold text-black dark:text-white">
        Recebe conteúdo premium no email
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/70">
        Sem spam. Só resumos, estudos e links oficiais — com aplicação prática.
      </p>

      <div className="mt-4">
        <SubscribeForm />
      </div>

      <p className="mt-3 text-xs text-black/50 dark:text-white/50">
        Ao inscrever-se, concordas com a Política de Privacidade.
      </p>
    </div>
  );
}
