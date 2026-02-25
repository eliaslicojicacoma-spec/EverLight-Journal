/** @type {import('next').NextConfig} */
const nextConfig = {
  // Premium: imagens externas otimizadas (Unsplash)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // opcional: se no futuro usares outro CDN, adiciona aqui
      // { protocol: "https", hostname: "cdn.seusite.com" },
    ],
  },

  // Premium: trailing slash consistente (bom para SEO e links)
  // Se não quiseres, podes apagar esta linha
  trailingSlash: false,

  // Premium: headers de segurança (leve, mas ajuda)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
