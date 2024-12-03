/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `${process.env.NEXT_API_AUTH}api/auth/:path*`,
      },
      {
        source: "/merchant/:path*",
        destination: `${process.env.NEXT_API_MERCHANT}api/merchant/:path*`,
      },
      {
        source: "/vendor/:path*",
        destination: `${process.env.NEXT_API_VENDOR}api/vendor/:path*`,
      },
      {
        source: "/wallet/:path*",
        destination: `${process.env.NEXT_API_WALLET}api/:path*`,
      },
      {
        source: "/sandbox/:path*",
        destination: `${process.env.NEXT_API_SANDBOX}:path*`,
      },
      //   {
      //     source: "/auth/:path*",
      //     destination: process.env.NEXT_API_AUTH,
      //   },
    ];
  },
};

export default nextConfig;
