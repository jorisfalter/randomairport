/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  images: {
    domains: ['cdn.jetphotos.com'],
  }, nextConfig
}

// module.exports = nextConfig
