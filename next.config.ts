import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ambition-web",
  images: { unoptimized: true },
};

export default nextConfig;
