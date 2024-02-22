/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/hp" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
