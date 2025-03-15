/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.warbycdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
