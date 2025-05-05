/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    // Remove or replace turbo with a valid object when needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.196flavors.com',
        pathname: '/**',
      },
    ],
    domains: ['localhost'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
