import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/BroadCastMed' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BroadCastMed' : '',
};

export default nextConfig;
