import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  // basePath: '/lz-a-nextts-tailwindcss-landing-pages',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
