var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
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

// route:/Users/derrickbol/dev/derrxb/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/mode.tsx
init_react();

// app/hooks/useDarkMode.tsx
init_react();
var import_js_cookie = __toESM(require("js-cookie"));
var import_react = require("react");
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
var app_default = "/build/_assets/app-WS2YRE2T.css";

// app/utils/theme.server.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var themeStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "MODE",
    secure: false,
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["6jztYdR73Jbq6gJtSmjp"]
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

// route:/Users/derrickbol/dev/derrxb/app/root.tsx
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
  }, "About")), /* @__PURE__ */ React.createElement(mode_default, null))), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), true ? /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null) : null));
}

// route:/Users/derrickbol/dev/derrxb/app/routes/stories/$storyId.tsx
var storyId_exports = {};
__export(storyId_exports, {
  default: () => PhotographyRoute,
  loader: () => loader2
});
init_react();
var import_cloudinary = __toESM(require("cloudinary"));
var import_remix4 = __toESM(require_remix());
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

// route:/Users/derrickbol/dev/derrxb/app/routes/stories/index.tsx
var stories_exports = {};
__export(stories_exports, {
  default: () => PhotographyIndexRoute
});
init_react();
function PhotographyIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random photo:"));
}

// route:/Users/derrickbol/dev/derrxb/app/routes/photography.tsx
var photography_exports = {};
__export(photography_exports, {
  default: () => JokesRoute
});
init_react();
var import_remix5 = __toESM(require_remix());
function JokesRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Photography"), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}

// route:/Users/derrickbol/dev/derrxb/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_framer_motion = require("framer-motion");
var import_react2 = __toESM(require("react"));
var import_react_intersection_observer = require("react-intersection-observer");
var import_remix6 = __toESM(require_remix());

// public/images/cover-dark.jpg
var cover_dark_default = "/build/_assets/cover-dark-DBEAIXQF.jpg";

// public/images/cover-light.jpg
var cover_light_default = "/build/_assets/cover-light-NQXM2JO5.jpg";

// route:/Users/derrickbol/dev/derrxb/app/routes/index.tsx
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

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b3d3d2b5", "entry": { "module": "/build/entry.client-Y2TDRDGN.js", "imports": ["/build/_shared/chunk-RURQH2HP.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NQM5RLXJ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WBZSL4PR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/photography": { "id": "routes/photography", "parentId": "root", "path": "photography", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/photography-GYY3FELT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stories/$storyId": { "id": "routes/stories/$storyId", "parentId": "root", "path": "stories/:storyId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/stories/$storyId-RO2XFETW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stories/index": { "id": "routes/stories/index", "parentId": "root", "path": "stories", "index": true, "caseSensitive": void 0, "module": "/build/routes/stories/index-LVASA5IJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B3D3D2B5.js" };

// server-entry-module:@remix-run/dev/server-build
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

// server.js
var import_express = require("@remix-run/express");
var import_apicache = __toESM(require("apicache"));
var import_compression = __toESM(require("compression"));
var import_cors = __toESM(require("cors"));
var import_express2 = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var cache = import_apicache.default.middleware;
var app = (0, import_express2.default)();
app.use((0, import_cors.default)({
  origin: "*"
}));
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express2.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express2.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.use(cache("5 minutes"));
app.all("*", (0, import_express.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW9kZS50c3giLCAiLi4vYXBwL2hvb2tzL3VzZURhcmtNb2RlLnRzeCIsICIuLi9hcHAvdXRpbHMvdGhlbWUuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVycmlja2JvbC9kZXYvZGVycnhiL2FwcC9yb3V0ZXMvc3Rvcmllcy8kc3RvcnlJZC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL3N0b3JpZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9waG90b2dyYXBoeS50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCBhcGljYWNoZSBmcm9tIFwiYXBpY2FjaGVcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5cbmxldCBjYWNoZSA9IGFwaWNhY2hlLm1pZGRsZXdhcmU7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgY29ycyh7XG4gICAgb3JpZ2luOiBcIipcIixcbiAgfSlcbik7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5hcHAudXNlKGNhY2hlKFwiNSBtaW51dGVzXCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL3N0b3JpZXMvJHN0b3J5SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9zdG9yaWVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYvZGVycnhiL2FwcC9yb3V0ZXMvcGhvdG9ncmFwaHkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3N0b3JpZXMvJHN0b3J5SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N0b3JpZXMvJHN0b3J5SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3Rvcmllcy86c3RvcnlJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc3Rvcmllcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3Rvcmllcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdG9yaWVzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGhvdG9ncmFwaHlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bob3RvZ3JhcGh5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBob3RvZ3JhcGh5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGpzb24sXG4gIExpbmssXG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBNb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWVTZXNzaW9uIH0gZnJvbSBcIi4vdXRpbHMvdGhlbWUuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgbW9kZTogXCJkYXJrXCIgfCBcImxpZ2h0XCI7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdGhlbWVTZXNzaW9uID0gYXdhaXQgZ2V0VGhlbWVTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiBqc29uKHsgbW9kZTogdGhlbWVTZXNzaW9uLmdldFRoZW1lKCkgfSBhcyBMb2FkZXJEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyBtb2RlIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9e21vZGV9PlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIGNsYXNzTmFtZT17bW9kZX0gLz5cbiAgICAgICAgPHRpdGxlPkRlcnJ4YiAtIFBob3RvZ3JhcGh5IGFuZCBzb2Z0d2FyZTwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8Ym9keT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGgtMjAgaXRlbXMtY2VudGVyIHB4LTI0IHctZnVsbCB6LTEwXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERFUlJYQlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG1sLWF1dG8gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc3Rvcmllc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHB4LTQgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0b3JpZXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3NvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgcHgtNCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU29mdHdhcmVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3NvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgcHgtNCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPE1vZGUgLz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB1c2VEYXJrTW9kZSBmcm9tIFwiLi4vaG9va3MvdXNlRGFya01vZGVcIjtcblxuY29uc3QgTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgeyBtb2RlLCBzZXRNb2RlIH0gPSB1c2VEYXJrTW9kZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChtb2RlID09PSBcImRhcmtcIikge1xuICAgICAgc2V0TW9kZShcImxpZ2h0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb2RlKFwiZGFya1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBweC00IGhvdmVyOnRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICA+XG4gICAgICB7bW9kZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgICAgICBkPVwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICApIDogKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGU7XG4iLCAiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIG1vZGUgPSBcImRhcmtcIiB8IFwibGlnaHRcIjtcblxuY29uc3QgdXNlRGFya01vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RlLCBzZXRJbnRlcm5hbE1vZGVdID0gdXNlU3RhdGU8bW9kZT4oXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyAoQ29va2llcy5nZXQoXCJtb2RlXCIpIGFzIG1vZGUpIHx8IFwibGlnaHRcIlxuICAgICAgOiBcImxpZ2h0XCJcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChDb29raWVzLmdldChcIm1vZGVcIikpIHtcbiAgICAgIGNvbnN0IHNhdmVkTW9kZSA9IENvb2tpZXMuZ2V0KFwibW9kZVwiKSBhcyBtb2RlO1xuICAgICAgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHNhdmVkTW9kZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcmV2TW9kZSA9IG1vZGUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG5cbiAgICB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUocHJldk1vZGUpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChtb2RlKTtcbiAgfSwgW21vZGVdKTtcblxuICBjb25zdCBzZXRNb2RlID0gKG5leHRNb2RlOiBtb2RlKSA9PiB7XG4gICAgQ29va2llcy5zZXQoXCJtb2RlXCIsIG5leHRNb2RlKTtcbiAgICBzZXRJbnRlcm5hbE1vZGUobmV4dE1vZGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW9kZSxcbiAgICBzZXRNb2RlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRGFya01vZGU7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgdGhlbWVTdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIk1PREVcIixcbiAgICBzZWN1cmU6IGZhbHNlLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3JldHM6IFtcIjZqenRZZFI3M0picTZnSnRTbWpwXCJdLFxuICB9LFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRoZW1lU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB0aGVtZVN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcblxuICByZXR1cm4ge1xuICAgIGdldFRoZW1lOiAoKTogXCJkYXJrXCIgfCBcImxpZ2h0XCIgPT4ge1xuICAgICAgY29uc3QgdGhlbWVWYWx1ZSA9IHNlc3Npb24uZ2V0KFwidGhlbWVcIik7XG4gICAgICByZXR1cm4gdGhlbWVWYWx1ZSA9PT0gXCJkYXJrXCIgfHwgdGhlbWVWYWx1ZSA9PT0gXCJsaWdodFwiXG4gICAgICAgID8gdGhlbWVWYWx1ZVxuICAgICAgICA6IFwiZGFya1wiO1xuICAgIH0sXG4gICAgc2V0VGhlbWU6ICh0aGVtZTogXCJkYXJrXCIgfCBcImxpZ2h0XCIpID0+IHNlc3Npb24uc2V0KFwidGhlbWVcIiwgdGhlbWUpLFxuICAgIGNvbW1pdDogKCkgPT4gdGhlbWVTdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gIH07XG59XG5cbmV4cG9ydCB7IGdldFRoZW1lU2Vzc2lvbiB9O1xuIiwgImltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJjbG91ZGluYXJ5XCI7XG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNsb3VkaW5hcnkudjIuY29uZmlnKHtcbiAgICBjbG91ZF9uYW1lOiBcImRlcnJ4YlwiLFxuICAgIGFwaV9rZXk6IFwiODI0ODk1NTQ5NDMzNDg5XCIsXG4gICAgYXBpX3NlY3JldDogXCJ5S05oc3YtSGVmWUdDUlhmLTBXam5ZanBWU01cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IGZvbGRlck5hbWUgPSBwYXJhbXM/LnBob3RvZ3JhcGh5SWQgYXMgc3RyaW5nO1xuICBjb25zdCBmb2xkZXJSZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnNlYXJjaFxuICAgIC5leHByZXNzaW9uKGAke2ZvbGRlck5hbWV9YClcbiAgICAuc29ydF9ieShcInB1YmxpY19pZFwiLCBcImRlc2NcIilcbiAgICAubWF4X3Jlc3VsdHMoMTUpXG4gICAgLmV4ZWN1dGUoKTtcbiAgY29uc3QgaW1hZ2VzID0gZm9sZGVyUmVzdWx0LnJlc291cmNlcyBhcyB7XG4gICAgYXNzZXRfaWQ6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBzZWN1cmVfdXJsOiBzdHJpbmc7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcbiAgICBwdWJsaWNfaWQ6IHN0cmluZztcbiAgfVtdO1xuXG4gIHJldHVybiBqc29uKHtcbiAgICBpbWFnZXM6IGltYWdlcy5tYXAoKGltYWdlKSA9PiAoe1xuICAgICAgaWQ6IGltYWdlLnB1YmxpY19pZCxcbiAgICAgIHVybDogaW1hZ2UudXJsLFxuICAgICAgc2VjdXJlX3VybDogaW1hZ2Uuc2VjdXJlX3VybCxcbiAgICAgIG5hbWU6IGltYWdlLmZpbGVuYW1lLFxuICAgIH0pKSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b2dyYXBoeVJvdXRlKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIGFzIHtcbiAgICBpbWFnZXM6IHsgaWQ6IHN0cmluZzsgdXJsOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W107XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRpdGxlPC9oMT5cbiAgICAgIHtkYXRhLmltYWdlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aXRlbS51cmx9XG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCB3aWR0aDogXCI0ODBweFwiIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b2dyYXBoeUluZGV4Um91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPkhlcmUncyBhIHJhbmRvbSBwaG90bzo8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpva2VzUm91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5QaG90b2dyYXBoeTwvaDE+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY292ZXJEYXJrIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NvdmVyLWRhcmsuanBnXCI7XG5pbXBvcnQgY292ZXJMaWdodCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9jb3Zlci1saWdodC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIHdpbmRvdz8uZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKT8uY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkXCIpO1xuICAgIH1cbiAgfSwgW2luVmlld10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIiByZWY9e3JlZn0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LTEvMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IHB4LTI0IGRhcms6YmctYmxhY2tcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMCB0ZXh0LTZ4bCBmb250LWJvbGQgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgcGFkZGluZ1RvcDogNDggfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgcGFkZGluZ1RvcDogMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEkgY2FwdHVyZSBzdG9yaWVzIGFuZCBidWlsZCBzb2Z0d2FyZSB3aXRoe1wiIFwifVxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc3Rvcmllc1wiPnBob3RvZ3JhcGh5PC9MaW5rPlxuICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICBhbmRcbiAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBwbC0yIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zb2Z0d2FyZVwiPmNvZGU8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvbW90aW9uLmgxPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPG1vdGlvbi5zb3VyY2VcbiAgICAgICAgICAgICAgc3JjPXtjb3ZlckRhcmt9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlciBoaWRkZW4gZGFyazppbmxpbmVcIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIHNyYz17Y292ZXJEYXJrfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImgtc2NyZWVuIHctZnVsbCBvYmplY3QtY292ZXIgaGlkZGVuIGRhcms6aW5saW5lXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8bW90aW9uLnNvdXJjZVxuICAgICAgICAgICAgICBzcmM9e2NvdmVyTGlnaHR9XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlciBkYXJrOmhpZGRlblwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgc3JjPXtjb3ZlckxpZ2h0fVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImgtc2NyZWVuIHctZnVsbCBvYmplY3QtY292ZXIgZGFyazpoaWRkZW5cIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2IzZDNkMmI1JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1ZMlREUkRHTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlVSUUgySFAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUVlCQVVTUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTlFNNVJMWEouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVdCWlNMNFBSLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGhvdG9ncmFwaHknOnsnaWQnOidyb3V0ZXMvcGhvdG9ncmFwaHknLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGhvdG9ncmFwaHknLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGhvdG9ncmFwaHktR1lZM0ZFTFQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdG9yaWVzLyRzdG9yeUlkJzp7J2lkJzoncm91dGVzL3N0b3JpZXMvJHN0b3J5SWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3Rvcmllcy86c3RvcnlJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdG9yaWVzLyRzdG9yeUlkLVJPMlhGRVRXLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdG9yaWVzL2luZGV4Jzp7J2lkJzoncm91dGVzL3N0b3JpZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3RvcmllcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3Rvcmllcy9pbmRleC1MVkFTQTVJSi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CM0QzRDJCNS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFB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
