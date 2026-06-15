/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['uploads-ssl.webflow.com', 'static.wixstatic.com'],
    unoptimized: true,
  },
}
module.exports = nextConfig
