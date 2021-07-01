const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  },
});
