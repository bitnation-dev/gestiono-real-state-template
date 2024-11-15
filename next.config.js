/** @type {import('next').NextConfig} */
const nextConfig = {
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