/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Required for static export
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static export
  trailingSlash: true, // Required for static hosting
  skipTrailingSlashRedirect: true,
  distDir: 'out', // Output directory for static files
}

module.exports = nextConfig
