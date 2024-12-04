import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Add allowed external domains
  },
};

export default nextConfig;
