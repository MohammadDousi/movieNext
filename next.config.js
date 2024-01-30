/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // Enable the React DevTools profiler
  profiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};
