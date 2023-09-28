const withLess = require("next-with-less");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com"],
    domains: ["api.lorem.space"],
    domains: ["https://fakestoreapi.com"],
    domains: ["skybizcdn.keef.org.in"],
  },
};
module.exports = withLess({
  images: {
    domains: ["skybizcdn.keef.org.in"],
  },
  i18n,
  lessLoaderOptions: {
    /* ... */
  },

  async rewrites() {
    return [
      {
        source: "/bus-tickets/:source/:dest",
        destination: "/pasajes-bus/:source/:dest",
      },
      {
        source: "/pasajes-bus/booking/:status",
        destination: "/pasajes-bus/booking/:status/no-pnr",
      },

      {
        source: "/traslados/:source/:dest",
        destination: "/transfer/:source/:dest",
      },
    ];
  },
});
