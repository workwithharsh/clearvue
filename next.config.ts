import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: `/${process.env.ADMIN_SECURE_ROUTE_PATH}/:path*`,
        destination: "/admin/:path*",
      },
    ];
  }
};

export default nextConfig;
