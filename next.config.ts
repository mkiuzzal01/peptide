import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ayevto1.thewarriors.team",
      },
      {
        protocol: "https",
        hostname: "api.peptidelabsusa.com",
      },
    ],
  },
};

export default nextConfig;
