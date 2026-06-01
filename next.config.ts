import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ayevto1.thewarriors.team",
      },
    ],
  },
};

export default nextConfig;
