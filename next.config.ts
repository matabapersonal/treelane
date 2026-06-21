import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server build for cPanel Node.js (Passenger) hosting. Emits
  // .next/standalone with a minimal server.js + slim node_modules.
  output: "standalone",
  // cPanel has no image-optimization service, so serve images as-is.
  images: {
    unoptimized: true,
  },
  // Allow cross-origin dev-server requests from these origins (e.g. ngrok
  // tunnels). Hostnames only, no protocol. The wildcard covers future
  // ngrok URLs, which change each session.
  allowedDevOrigins: [
    "b264-41-222-180-58.ngrok-free.app",
    "*.ngrok-free.app",
  ],
};

export default nextConfig;
