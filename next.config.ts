import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  env: {
    // Same value in the server and client bundles, so time-based text
    // (years of experience) hydrates without a mismatch.
    NEXT_PUBLIC_BUILD_TIME: String(Date.now()),
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // ~5 KB of CSS total — inlining it removes the render-blocking
    // stylesheet requests on first load.
    inlineCss: true,
  },
};

export default nextConfig;