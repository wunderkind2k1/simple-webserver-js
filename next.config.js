/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PORT: '4522',
  },
}

module.exports = nextConfig
