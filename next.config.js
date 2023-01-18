/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  env: {
    COUNTRIES_API_KEY: process.env.COUNTRIES_API_KEY,
    COUNTRIES_API_EMAIL: process.env.COUNTRIES_API_EMAIL
  }
};

module.exports = nextConfig;
