/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    backend: "https://api-dev.teachersucenter.com",
  },
};

module.exports = nextConfig;
