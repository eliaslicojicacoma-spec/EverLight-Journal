/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Root -> default locale
      {
        source: "/",
        destination: "/pt",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
