/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fs: "empty",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["i.postimg.cc"],
  },
};

module.exports = nextConfig;
