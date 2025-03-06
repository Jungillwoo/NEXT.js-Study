import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites () {
    return[
      {
        source: "/board/:path*",
        destination: "http://localhost:8080/board/:path*"
      }
    ];
  }
};

export default nextConfig;
