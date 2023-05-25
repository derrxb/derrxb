/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.spec.tsx"],
  cacheDirectory: "./node_modules/.cache/remix",
  serverDependenciesToBundle: [],
  devServerPort: 3010,
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: true,
    v2_meta: false,
    v2_normalizeFormMethod: true,
    v2_routeConvention: false,
  },
  postcss: true,
  tailwind: true,
};
