/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Images (Unsplash)
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  // Se tu quiseres URLs SEM barra no fim (padrão mais comum)
  trailingSlash: false,

  // Redirects (SEO + i18n)
  async redirects() {
    return [
      // 1) Home root → default locale
      { source: "/", destination: "/pt", permanent: false },

      // 2) Normalizar locale variantes comuns (opcional mas útil)
      { source: "/pt-PT/:path*", destination: "/pt/:path*", permanent: true },
      { source: "/pt-BR/:path*", destination: "/pt/:path*", permanent: true },
      { source: "/en-US/:path*", destination: "/en/:path*", permanent: true },
      { source: "/en-GB/:path*", destination: "/en/:path*", permanent: true },

      // 3) Limpar double slashes (best-effort; Next já ajuda, mas deixo aqui)
      { source: "//:path*", destination: "/:path*", permanent: true },
    ];
  },

  // Headers (security + caching)
  async headers() {
    return [
      // Cache forte para assets estáticos gerados pelo Next (nível empresa)
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // Cache para imagens otimizadas do Next (bom equilíbrio)
      {
        source: "/_next/image/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },

      // Security headers (geral)
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          // HSTS (só faz sentido em HTTPS; Vercel é HTTPS)
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // Permissions Policy (bem conservador)
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
