import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/san-pham',
        destination: '/product',
      },
      {
        source: '/san-pham/:id',
        destination: '/product/:id',
      },
    ]
  },
};

export default nextConfig;
