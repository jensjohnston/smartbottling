// Import next-videos
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

// Wrap your existing config with withVideos()
module.exports = withVideos(nextConfig);
