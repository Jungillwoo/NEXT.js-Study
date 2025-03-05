import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return[
      {
        source: "/api/:path*",
        destination: "http://makeup-api.herokuapp.com/api/:path*"
      }
    ]
  }
};

export default nextConfig;
