import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites () {
    return[
      {
        source: "/notice/:path*", 
        destination: "http://localhost:8080/notice/:path*",
      }
    ];
  }
};

export default nextConfig;
