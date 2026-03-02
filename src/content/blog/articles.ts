export type BlogLocale = "pt" | "en";

export type BlogArticle = {
  locale: BlogLocale;
  slug: string;
  category: string;
  title: string;
  summary: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  content: string;
};

const ARTICLES: BlogArticle[] = [
  {
    locale: "pt",
    slug: "familia-fe-e-habitos-simples-que-protegem-o-lar",
    category: "Adventista",
    title: "Família, Fé e Hábitos Simples que Protegem o Lar",
    summary:
      "Pequenas rotinas espirituais criam uma casa mais segura emocionalmente e mais forte em Deus.",
    excerpt:
      "Quando a fé vira rotina saudável, o lar ganha estabilidade, paz e direção.",
    date: "2026-02-28",
    readTime: "4 min",
    tags: ["familia", "habitos", "vida-espiritual"],
    coverImage: "/images/blog/default.jpg",
    content: `
## Por que hábitos simples mudam tudo
A maior parte das crises familiares não começa “grande”. Começa pequena: falta de conversa, pressão, ansiedade, fadiga e decisões rápidas.

## 1) Culto familiar curto, consistente e real
- 8 a 12 minutos são suficientes.
- Leitura bíblica + 1 ideia prática + oração curta.
- Melhor constância do que “perfeição”.

## 2) Uma regra de ouro: nunca dormir brigado
A reconciliação não apaga o problema; ela protege o vínculo enquanto o problema é resolvido com maturidade.

## 3) Planeamento do sábado na sexta
A preparação reduz stress e protege o espírito do lar no sábado.

## 4) A linguagem que cura
Troca “tu nunca…” por “eu sinto… quando…”
É simples, mas muda o clima da casa.

## Leitura recomendada
Hebreus 10:24-25; Efésios 4:26-32

## Ação
- Fazer um culto familiar hoje (10 min)
- Escrever 3 gratidões em família
- Preparar o sábado na sexta
`,
  },
  {
    locale: "pt",
    slug: "sabado-e-identidade",
    category: "Adventista",
    title: "Sábado e Identidade",
    summary: "O sábado é descanso, confiança e aliança.",
    excerpt:
      "Num mundo acelerado, o sábado é resistência espiritual e reencontro com Deus.",
    date: "2026-02-20",
    readTime: "3 min",
    tags: ["sabado", "identidade", "aliança"],
    coverImage: "/images/blog/default.jpg",
    content: `
## O sábado não é apenas um dia
É uma mensagem viva: Deus cria, Deus sustenta e Deus salva.

## O que ele protege
- Mente: desacelera e cura o foco
- Relacionamentos: volta ao essencial
- Fé: reforça confiança

## Ação
- Preparar o sábado na sexta
- Reduzir o uso do telefone
- Fazer um momento de gratidão
`,
  },
];

export function getBlogArticles(locale: BlogLocale): BlogArticle[] {
  return ARTICLES.filter((a) => a.locale === locale);
}

export function getBlogArticle(
  locale: BlogLocale,
  slug: string
): BlogArticle | null {
  return (
    ARTICLES.find((a) => a.locale === locale && a.slug === slug) ?? null
  );
}

export function getBlogSlugs(locale: BlogLocale): string[] {
  return getBlogArticles(locale).map((a) => a.slug);
}

export function getBlogCategories(locale: BlogLocale): string[] {
  const set = new Set(getBlogArticles(locale).map((a) => a.category));
  return Array.from(set);
}
