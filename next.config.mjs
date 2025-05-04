/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        hostname: 'www.196flavors.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
