/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/ek-connect-hp',
  assetPrefix: '/ek-connect-hp/',
  reactStrictMode: true,
  experimental: {
    vite: true,
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/services': { page: '/services' },
      '/contact': { page: '/contact' },
      // 他のページもここに追加します
    };
  },
};

module.exports = nextConfig;
