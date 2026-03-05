cat > src/content/library/types.ts <<'EOF'
export type LibraryLocaleText = {
  pt: string;
  en: string;
};

export type LibraryItem = {
  slug: string;
  title: LibraryLocaleText;
  author?: LibraryLocaleText;
  description?: LibraryLocaleText;

  pdf?: string;          // "/downloads/arquivo.pdf"
  url?: string;          // "https://..."
  coverImage?: string;   // "/images/..."

  tags?: string[];       // ✅ agora existe
  category?: string;

  publishedAt?: string;  // "2026-03-05"
};
EOF
