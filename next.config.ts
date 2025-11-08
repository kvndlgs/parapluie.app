import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  reactStrictMode: false, // Disable to fix createRoot() error with R3F
};

export default nextConfig;
