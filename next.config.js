/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  profiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
        port: "",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/movie",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/category/",
        destination: "/",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
