/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Qualidade + performance (Next vai servir WebP/AVIF quando possível)
    formats: ["image/avif", "image/webp"],

    // Unsplash + (caso o Next use o subdomínio source do Unsplash)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],

    // (Opcional) evita estourar teu build quando a imagem é grande
    // deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 1920],
  },

  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Segurança leve (safe)
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // Cache de assets (melhora muito o “feel” premium)
          // Só aplica bem se teus assets estiverem em /_next/static
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
