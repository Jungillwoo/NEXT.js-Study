import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites () {
    return[
      {
        source: "/api/v1/bbs/:path*",
        destination: "http://localhost:8080/api/v1/bbs/:path*"
      },
      {
        source: "/api/v1/members/:path*",
        destination: "http://localhost:8080/api/v1/members/:path*"
      }
    ]
  }
};

export default nextConfig;
