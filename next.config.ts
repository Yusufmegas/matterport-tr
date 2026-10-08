import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
  },
  // Pin the workspace root: a stray lockfile in the user home directory
  // otherwise makes Next.js infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
