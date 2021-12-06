var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/derrickbol/dev/derrxb/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix3 = __toModule(require("remix"));

// app/hooks/useDarkMode.tsx
var import_js_cookie = __toModule(require("js-cookie"));
var import_react = __toModule(require("react"));
var useDarkMode = () => {
  const [mode, setInternalMode] = (0, import_react.useState)(typeof window !== "undefined" ? import_js_cookie.default.get("mode") || "light" : "light");
  (0, import_react.useEffect)(() => {
    if (import_js_cookie.default.get("mode")) {
      const savedMode = import_js_cookie.default.get("mode");
      window.document.documentElement.classList.add(savedMode);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    const prevMode = mode === "dark" ? "light" : "dark";
    window.document.documentElement.classList.remove(prevMode);
    window.document.documentElement.classList.add(mode);
  }, [mode]);
  const setMode = (nextMode) => {
    import_js_cookie.default.set("mode", nextMode);
    setInternalMode(nextMode);
  };
  return {
    mode,
    setMode
  };
};
var useDarkMode_default = useDarkMode;

// app/components/mode.tsx
var Mode = () => {
  const { mode, setMode } = useDarkMode_default();
  const handleClick = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return /* @__PURE__ */ React.createElement("button", {
    onClick: handleClick,
    className: "font-semibold text-gray-600 px-4 hover:text-gray-800 dark:text-white"
  }, mode === "light" ? /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  })) : /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  })));
};
var mode_default = Mode;

// app/styles/app.css
var app_default = "/build/_assets/app-YBG3U5H7.css";

// app/utils/theme.server.tsx
var import_remix2 = __toModule(require("remix"));
var themeStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "MODE",
    secure: false,
    sameSite: "lax",
    path: "/",
    httpOnly: true
  }
});
async function getThemeSession(request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return themeValue === "dark" || themeValue === "light" ? themeValue : "dark";
    },
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// route-module:/Users/derrickbol/dev/derrxb/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
var loader = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  return (0, import_remix3.json)({ mode: themeSession.getTheme() });
};
function App() {
  const { mode } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: mode
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8",
    className: mode
  }), /* @__PURE__ */ React.createElement("title", null, "Derrxb - Photography and software"), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("nav", {
    className: "flex h-20 items-center px-24 w-full z-10"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: "font-bold text-2xl text-gray-800 dark:text-white"
  }, "DERRXB"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex ml-auto items-center"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/stories",
    className: "font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
  }, "Stories")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/software",
    className: "font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
  }, "Software")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/software",
    className: "font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
  }, "About")), /* @__PURE__ */ React.createElement(mode_default, null))), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null) : null));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/stories/$storyId.tsx
var storyId_exports = {};
__export(storyId_exports, {
  default: () => PhotographyRoute,
  loader: () => loader2
});
var import_cloudinary = __toModule(require("cloudinary"));
var import_remix4 = __toModule(require("remix"));
var loader2 = async ({ params }) => {
  import_cloudinary.default.v2.config({
    cloud_name: "derrxb",
    api_key: "824895549433489",
    api_secret: "yKNhsv-HefYGCRXf-0WjnYjpVSM",
    secure: true
  });
  const folderName = params == null ? void 0 : params.photographyId;
  const folderResult = await import_cloudinary.default.v2.search.expression(`${folderName}`).sort_by("public_id", "desc").max_results(15).execute();
  const images = folderResult.resources;
  return (0, import_remix4.json)({
    images: images.map((image) => ({
      id: image.public_id,
      url: image.url,
      secure_url: image.secure_url,
      name: image.filename
    }))
  });
};
function PhotographyRoute() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Title"), data.images.map((item) => /* @__PURE__ */ React.createElement("img", {
    src: item.url,
    key: item.id,
    style: { height: "250px", width: "480px" }
  })));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/stories/index.tsx
var stories_exports = {};
__export(stories_exports, {
  default: () => PhotographyIndexRoute
});
function PhotographyIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random photo:"));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/photography.tsx
var photography_exports = {};
__export(photography_exports, {
  default: () => JokesRoute
});
var import_remix5 = __toModule(require("remix"));
function JokesRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Photography"), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_framer_motion = __toModule(require("framer-motion"));
var import_react2 = __toModule(require("react"));
var import_react_intersection_observer = __toModule(require("react-intersection-observer"));
var import_remix6 = __toModule(require("remix"));

// public/images/cover-dark.jpg
var cover_dark_default = "/build/_assets/cover-dark-DBEAIXQF.jpg";

// public/images/cover-light.jpg
var cover_light_default = "/build/_assets/cover-light-NQXM2JO5.jpg";

// route-module:/Users/derrickbol/dev/derrxb/app/routes/index.tsx
function Index() {
  const [ref, inView] = (0, import_react_intersection_observer.useInView)();
  import_react2.default.useEffect(() => {
    var _a, _b;
    if (inView) {
      (_a = window == null ? void 0 : window.document.querySelector("nav")) == null ? void 0 : _a.classList.add("fixed");
    } else {
      (_b = window.document.querySelector("nav")) == null ? void 0 : _b.classList.remove("fixed");
    }
  }, [inView]);
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex h-full",
    ref
  }, /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.div, {
    className: "flex w-1/2 items-center justify-center p-8 px-24 dark:bg-black",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2 }
  }, /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.h1, {
    className: "m-0 text-6xl font-bold dark:text-white",
    initial: { paddingTop: 48 },
    animate: { paddingTop: 0 },
    transition: { duration: 1 }
  }, "I capture stories and build software with", " ", /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.span, {
    className: "text-yellow-500 hover:underline"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix6.Link, {
    to: "/stories"
  }, "photography")), " ", "and", /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.span, {
    className: "text-green-500 pl-2 hover:underline"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix6.Link, {
    to: "/software"
  }, "code")), ".")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "w-1/2"
  }, /* @__PURE__ */ import_react2.default.createElement("picture", {
    className: "w-full"
  }, /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.source, {
    src: cover_dark_default,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "h-screen w-full object-cover hidden dark:inline"
  }), /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.img, {
    src: cover_dark_default,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "h-screen w-full object-cover hidden dark:inline"
  }), /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.source, {
    src: cover_light_default,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "h-screen w-full object-cover dark:hidden"
  }), /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.motion.img, {
    src: cover_light_default,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    className: "h-screen w-full object-cover dark:hidden"
  })))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stories/$storyId": {
    id: "routes/stories/$storyId",
    parentId: "root",
    path: "stories/:storyId",
    index: void 0,
    caseSensitive: void 0,
    module: storyId_exports
  },
  "routes/stories/index": {
    id: "routes/stories/index",
    parentId: "root",
    path: "stories",
    index: true,
    caseSensitive: void 0,
    module: stories_exports
  },
  "routes/photography": {
    id: "routes/photography",
    parentId: "root",
    path: "photography",
    index: void 0,
    caseSensitive: void 0,
    module: photography_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
