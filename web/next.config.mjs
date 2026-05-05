/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laboratoiresvenus.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
