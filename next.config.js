/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GESTIONO_API_URL: process.env.GESTIONO_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.gestiono.app',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 