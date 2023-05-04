// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ajoutez la règle pour les fichiers GLSL
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
