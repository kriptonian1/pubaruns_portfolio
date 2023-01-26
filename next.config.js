/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fs: 'empty',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config
  },
  images: {
    domains: ['e7.pngegg.com', 'natgeotraveller.in', 'www.thehindu.com', 'www.forbes.com', '/images.edexlive.com', 'play-lh.googleusercontent.com', 'static.indiatvnews.com', 'www.telegraphindia.com', 'www.mansworldindia.com', 'encrypted-tbn0.gstatic.com', '1000logos.net', 'upload.wikimedia.org', 'i.pinimg.com', 'www.logo-designer.co', 'i.dailymail.co.uk', 'logos-download.com', 'www.globalindian.com',],
  }
}

module.exports = nextConfig
