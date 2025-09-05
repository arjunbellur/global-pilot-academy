/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Disable source maps to reduce build complexity
  productionBrowserSourceMaps: false,
  // Disable build optimization to prevent stack overflow
  experimental: {
    // Use minimal experimental features
    webpackBuildWorker: false,
  },
}

module.exports = nextConfig
