/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.warbyparker.com',
        port: '',
        pathname: '/eyeglasses/**',
      },
    ],
  },
};

export default nextConfig;
