import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        pathname: "/demos/images/**",
      },
    ],
  },
};

export default nextConfig;
