/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [360, 640, 768, 960, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
  },
};

module.exports = nextConfig;
