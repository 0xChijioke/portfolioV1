/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: 'dk3o1hrxt/image/upload/v1683378215/**',
      },
    ],
  },
}

module.exports = nextConfig
