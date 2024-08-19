/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "allnvysbhq.cloudimg.io",
      },
    ],
  },
};

export default nextConfig;
