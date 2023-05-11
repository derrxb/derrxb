/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.spec.tsx"],
  serverDependenciesToBundle: [],
  future: {
    unstable_dev: {
      port: 3010,
      appServerPort: 3000,
    },
    unstable_tailwind: true,
  },
};
