export type LibraryCollectionKey = "egw" | "bible" | "sabbath-school" | "magazines";

export type LibraryItem = {
  id: string;
  title: string;
  desc: string;
  href: string; // link oficial
  sourceName: string; // nome da fonte
  sourceUrl: string; // página da fonte
  type?: "book" | "article" | "study" | "magazine" | "site";
  language?: "pt" | "en" | "mix";
};

export type LibraryCollection = {
  key: LibraryCollectionKey;
  titlePT: string;
  titleEN: string;
  descPT: string;
  descEN: string;
  heroImage: string;
  badgePT: string;
  badgeEN: string;
  items: LibraryItem[];
};

export const LIBRARY: LibraryCollection[] = [
  {
    key: "egw",
    titlePT: "Ellen G. White (EGW)",
    titleEN: "Ellen G. White (EGW)",
    descPT: "Livros e escritos com fonte oficial.",
    descEN: "Books and writings from official sources.",
    heroImage:
      "https://images.unsplash.com/photo-1455885666463-3d1c6b7c5b78?auto=format&fit=crop&w=2200&q=70",
    badgePT: "OFICIAL",
    badgeEN: "OFFICIAL",
    items: [
      {
        id: "egw-writings",
        title: "EGW Writings (site oficial)",
        desc: "Biblioteca completa em várias línguas (pesquisa, livros e artigos).",
        href: "https://egwwritings.org/",
        sourceName: "EGW Writings",
        sourceUrl: "https://egwwritings.org/",
        type: "site",
        language: "mix",
      },
      {
        id: "egw-writings-portuguese",
        title: "EGW Writings — Português",
        desc: "Acesso direto aos conteúdos em português (quando disponível).",
        href: "https://egwwritings.org/",
        sourceName: "EGW Writings",
        sourceUrl: "https://egwwritings.org/",
        type: "site",
        language: "pt",
      },
    ],
  },

  {
    key: "bible",
    titlePT: "Bíblia",
    titleEN: "Bible",
    descPT: "Leitura, estudo e ferramentas bíblicas.",
    descEN: "Reading, study, and Bible tools.",
    heroImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=70",
    badgePT: "ESTUDO",
    badgeEN: "STUDY",
    items: [
      {
        id: "biblegateway",
        title: "BibleGateway",
        desc: "Leitura bíblica em várias versões e línguas.",
        href: "https://www.biblegateway.com/",
        sourceName: "BibleGateway",
        sourceUrl: "https://www.biblegateway.com/",
        type: "site",
        language: "mix",
      },
    ],
  },

  {
    key: "sabbath-school",
    titlePT: "Escola Sabatina",
    titleEN: "Sabbath School",
    descPT: "Lições e recursos de estudo semanais.",
    descEN: "Weekly lessons and study resources.",
    heroImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=70",
    badgePT: "LIÇÕES",
    badgeEN: "LESSONS",
    items: [
      {
        id: "ss-archives",
        title: "Sabbath School (oficial)",
        desc: "Lições e materiais oficiais (arquivo e acesso por datas).",
        href: "https://www.sabbathschoolpersonalministries.org/",
        sourceName: "Sabbath School & Personal Ministries",
        sourceUrl: "https://www.sabbathschoolpersonalministries.org/",
        type: "site",
        language: "mix",
      },
    ],
  },

  {
    key: "magazines",
    titlePT: "Revistas",
    titleEN: "Magazines",
    descPT: "Revistas e publicações com curadoria.",
    descEN: "Magazines and curated publications.",
    heroImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2200&q=70",
    badgePT: "CURADORIA",
    badgeEN: "CURATION",
    items: [
      {
        id: "adventist-review",
        title: "Adventist Review",
        desc: "Artigos e atualizações (publicação reconhecida).",
        href: "https://www.adventistreview.org/",
        sourceName: "Adventist Review",
        sourceUrl: "https://www.adventistreview.org/",
        type: "magazine",
        language: "en",
      },
    ],
  },
];

export function getLibraryCollections() {
  return LIBRARY;
}

export function getLibraryCollectionByKey(key: string) {
  return LIBRARY.find((c) => c.key === key) ?? null;
}

export function getCollectionTitle(c: LibraryCollection, locale: string) {
  return locale === "pt" ? c.titlePT : c.titleEN;
}

export function getCollectionDesc(c: LibraryCollection, locale: string) {
  return locale === "pt" ? c.descPT : c.descEN;
    }
