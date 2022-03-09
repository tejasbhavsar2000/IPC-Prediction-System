/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  externals: {
    child_process: "require('child_process')",
  },
};

module.exports = nextConfig;
