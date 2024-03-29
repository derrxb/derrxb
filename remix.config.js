/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
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
