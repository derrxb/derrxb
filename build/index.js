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
var app_default = "/build/_assets/app-ZXEZ7JN6.css";

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
    className: "flex h-20 items-center px-24 w-full z-10 fixed"
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
    className: "font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500 hidden"
  }, "Software")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about",
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-2 md:px-24 pt-20 bg-white dark:bg-black flex h-full w-full fixed flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full h-fit relative"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "aspect-video rounded-3xl shadow-md object-cover",
    src: "https://res.cloudinary.com/derrxb/image/upload/v1637675220/exploring-cahal-pech-in-san-ignacio-belize/cahal-pech-07_lqofby.jpg",
    alt: "cahal-pech"
  }))));
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
    className: "flex w-1/2 items-center justify-center p-8 px-24 dark:bg-black-home",
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
var assets_manifest_default = { "version": "da1cfdf8", "entry": { "module": "/build/entry.client-Y2TDRDGN.js", "imports": ["/build/_shared/chunk-RURQH2HP.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MITBTAT4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IPOP5ABM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/photography": { "id": "routes/photography", "parentId": "root", "path": "photography", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/photography-GYY3FELT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stories/$storyId": { "id": "routes/stories/$storyId", "parentId": "root", "path": "stories/:storyId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/stories/$storyId-RO2XFETW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stories/index": { "id": "routes/stories/index", "parentId": "root", "path": "stories", "index": true, "caseSensitive": void 0, "module": "/build/routes/stories/index-FKYLIDLO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DA1CFDF8.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbW9kZS50c3giLCAiLi4vYXBwL2hvb2tzL3VzZURhcmtNb2RlLnRzeCIsICIuLi9hcHAvdXRpbHMvdGhlbWUuc2VydmVyLnRzeCIsICJyb3V0ZTovVXNlcnMvZGVycmlja2JvbC9kZXYvZGVycnhiL2FwcC9yb3V0ZXMvc3Rvcmllcy8kc3RvcnlJZC50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL3N0b3JpZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9waG90b2dyYXBoeS50c3giLCAicm91dGU6L1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCBhcGljYWNoZSBmcm9tIFwiYXBpY2FjaGVcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5cbmxldCBjYWNoZSA9IGFwaWNhY2hlLm1pZGRsZXdhcmU7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgY29ycyh7XG4gICAgb3JpZ2luOiBcIipcIixcbiAgfSlcbik7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5hcHAudXNlKGNhY2hlKFwiNSBtaW51dGVzXCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2RlcnJpY2tib2wvZGV2L2RlcnJ4Yi9hcHAvcm91dGVzL3N0b3JpZXMvJHN0b3J5SWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9zdG9yaWVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZGVycmlja2JvbC9kZXYvZGVycnhiL2FwcC9yb3V0ZXMvcGhvdG9ncmFwaHkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9kZXJyaWNrYm9sL2Rldi9kZXJyeGIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3N0b3JpZXMvJHN0b3J5SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N0b3JpZXMvJHN0b3J5SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3Rvcmllcy86c3RvcnlJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc3Rvcmllcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3Rvcmllcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdG9yaWVzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGhvdG9ncmFwaHlcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3Bob3RvZ3JhcGh5XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBob3RvZ3JhcGh5XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIGpzb24sXG4gIExpbmssXG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBNb2RlIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWVTZXNzaW9uIH0gZnJvbSBcIi4vdXRpbHMvdGhlbWUuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgbW9kZTogXCJkYXJrXCIgfCBcImxpZ2h0XCI7XG59O1xuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdGhlbWVTZXNzaW9uID0gYXdhaXQgZ2V0VGhlbWVTZXNzaW9uKHJlcXVlc3QpO1xuXG4gIHJldHVybiBqc29uKHsgbW9kZTogdGhlbWVTZXNzaW9uLmdldFRoZW1lKCkgfSBhcyBMb2FkZXJEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgeyBtb2RlIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9e21vZGV9PlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIGNsYXNzTmFtZT17bW9kZX0gLz5cbiAgICAgICAgPHRpdGxlPkRlcnJ4YiAtIFBob3RvZ3JhcGh5IGFuZCBzb2Z0d2FyZTwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8Ym9keT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGgtMjAgaXRlbXMtY2VudGVyIHB4LTI0IHctZnVsbCB6LTEwIGZpeGVkXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERFUlJYQlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG1sLWF1dG8gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc3Rvcmllc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHB4LTQgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0b3JpZXNcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3NvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgcHgtNCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOnRleHQtZ3JheS01MDAgaGlkZGVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNvZnR3YXJlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIHB4LTQgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpob3Zlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDxNb2RlIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuXG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gPExpdmVSZWxvYWQgLz4gOiBudWxsfVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdXNlRGFya01vZGUgZnJvbSBcIi4uL2hvb2tzL3VzZURhcmtNb2RlXCI7XG5cbmNvbnN0IE1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbW9kZSwgc2V0TW9kZSB9ID0gdXNlRGFya01vZGUoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIHNldE1vZGUoXCJsaWdodFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW9kZShcImRhcmtcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgcHgtNCBob3Zlcjp0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgPlxuICAgICAge21vZGUgPT09IFwibGlnaHRcIiA/IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKSA6IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlO1xuIiwgImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBtb2RlID0gXCJkYXJrXCIgfCBcImxpZ2h0XCI7XG5cbmNvbnN0IHVzZURhcmtNb2RlID0gKCkgPT4ge1xuICBjb25zdCBbbW9kZSwgc2V0SW50ZXJuYWxNb2RlXSA9IHVzZVN0YXRlPG1vZGU+KFxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gKENvb2tpZXMuZ2V0KFwibW9kZVwiKSBhcyBtb2RlKSB8fCBcImxpZ2h0XCJcbiAgICAgIDogXCJsaWdodFwiXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQ29va2llcy5nZXQoXCJtb2RlXCIpKSB7XG4gICAgICBjb25zdCBzYXZlZE1vZGUgPSBDb29raWVzLmdldChcIm1vZGVcIikgYXMgbW9kZTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzYXZlZE1vZGUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJldk1vZGUgPSBtb2RlID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuXG4gICAgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHByZXZNb2RlKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQobW9kZSk7XG4gIH0sIFttb2RlXSk7XG5cbiAgY29uc3Qgc2V0TW9kZSA9IChuZXh0TW9kZTogbW9kZSkgPT4ge1xuICAgIENvb2tpZXMuc2V0KFwibW9kZVwiLCBuZXh0TW9kZSk7XG4gICAgc2V0SW50ZXJuYWxNb2RlKG5leHRNb2RlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGUsXG4gICAgc2V0TW9kZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURhcmtNb2RlO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IHRoZW1lU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJNT0RFXCIsXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbXCI2anp0WWRSNzNKYnE2Z0p0U21qcFwiXSxcbiAgfSxcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRUaGVtZVNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdGhlbWVTdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaGVtZTogKCk6IFwiZGFya1wiIHwgXCJsaWdodFwiID0+IHtcbiAgICAgIGNvbnN0IHRoZW1lVmFsdWUgPSBzZXNzaW9uLmdldChcInRoZW1lXCIpO1xuICAgICAgcmV0dXJuIHRoZW1lVmFsdWUgPT09IFwiZGFya1wiIHx8IHRoZW1lVmFsdWUgPT09IFwibGlnaHRcIlxuICAgICAgICA/IHRoZW1lVmFsdWVcbiAgICAgICAgOiBcImRhcmtcIjtcbiAgICB9LFxuICAgIHNldFRoZW1lOiAodGhlbWU6IFwiZGFya1wiIHwgXCJsaWdodFwiKSA9PiBzZXNzaW9uLnNldChcInRoZW1lXCIsIHRoZW1lKSxcbiAgICBjb21taXQ6ICgpID0+IHRoZW1lU3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICB9O1xufVxuXG5leHBvcnQgeyBnZXRUaGVtZVNlc3Npb24gfTtcbiIsICJpbXBvcnQgY2xvdWRpbmFyeSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xuaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjbG91ZGluYXJ5LnYyLmNvbmZpZyh7XG4gICAgY2xvdWRfbmFtZTogXCJkZXJyeGJcIixcbiAgICBhcGlfa2V5OiBcIjgyNDg5NTU0OTQzMzQ4OVwiLFxuICAgIGFwaV9zZWNyZXQ6IFwieUtOaHN2LUhlZllHQ1JYZi0wV2puWWpwVlNNXCIsXG4gICAgc2VjdXJlOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBmb2xkZXJOYW1lID0gcGFyYW1zPy5waG90b2dyYXBoeUlkIGFzIHN0cmluZztcbiAgY29uc3QgZm9sZGVyUmVzdWx0ID0gYXdhaXQgY2xvdWRpbmFyeS52Mi5zZWFyY2hcbiAgICAuZXhwcmVzc2lvbihgJHtmb2xkZXJOYW1lfWApXG4gICAgLnNvcnRfYnkoXCJwdWJsaWNfaWRcIiwgXCJkZXNjXCIpXG4gICAgLm1heF9yZXN1bHRzKDE1KVxuICAgIC5leGVjdXRlKCk7XG4gIGNvbnN0IGltYWdlcyA9IGZvbGRlclJlc3VsdC5yZXNvdXJjZXMgYXMge1xuICAgIGFzc2V0X2lkOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgc2VjdXJlX3VybDogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljX2lkOiBzdHJpbmc7XG4gIH1bXTtcblxuICByZXR1cm4ganNvbih7XG4gICAgaW1hZ2VzOiBpbWFnZXMubWFwKChpbWFnZSkgPT4gKHtcbiAgICAgIGlkOiBpbWFnZS5wdWJsaWNfaWQsXG4gICAgICB1cmw6IGltYWdlLnVybCxcbiAgICAgIHNlY3VyZV91cmw6IGltYWdlLnNlY3VyZV91cmwsXG4gICAgICBuYW1lOiBpbWFnZS5maWxlbmFtZSxcbiAgICB9KSksXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9ncmFwaHlSb3V0ZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyB7XG4gICAgaW1hZ2VzOiB7IGlkOiBzdHJpbmc7IHVybDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICB7ZGF0YS5pbWFnZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2l0ZW0udXJsfVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjUwcHhcIiwgd2lkdGg6IFwiNDgwcHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9ncmFwaHlJbmRleFJvdXRlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBtZDpweC0yNCBwdC0yMCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIGZsZXggaC1mdWxsIHctZnVsbCBmaXhlZCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1maXQgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gcm91bmRlZC0zeGwgc2hhZG93LW1kIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXJyeGIvaW1hZ2UvdXBsb2FkL3YxNjM3Njc1MjIwL2V4cGxvcmluZy1jYWhhbC1wZWNoLWluLXNhbi1pZ25hY2lvLWJlbGl6ZS9jYWhhbC1wZWNoLTA3X2xxb2ZieS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwiY2FoYWwtcGVjaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9rZXNSb3V0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBob3RvZ3JhcGh5PC9oMT5cbiAgICAgIDxtYWluPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBjb3ZlckRhcmsgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvY292ZXItZGFyay5qcGdcIjtcbmltcG9ydCBjb3ZlckxpZ2h0IGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2NvdmVyLWxpZ2h0LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgd2luZG93Py5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpPy5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gICAgfVxuICB9LCBbaW5WaWV3XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbFwiIHJlZj17cmVmfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctMS8yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggcHgtMjQgZGFyazpiZy1ibGFjay1ob21lXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAyIH19XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtLTAgdGV4dC02eGwgZm9udC1ib2xkIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBpbml0aWFsPXt7IHBhZGRpbmdUb3A6IDQ4IH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHBhZGRpbmdUb3A6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJIGNhcHR1cmUgc3RvcmllcyBhbmQgYnVpbGQgc29mdHdhcmUgd2l0aHtcIiBcIn1cbiAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3N0b3JpZXNcIj5waG90b2dyYXBoeTwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+e1wiIFwifVxuICAgICAgICAgICAgYW5kXG4gICAgICAgICAgICA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgcGwtMiBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc29mdHdhcmVcIj5jb2RlPC9MaW5rPlxuICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgICA8cGljdHVyZSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uc291cmNlXG4gICAgICAgICAgICAgIHNyYz17Y292ZXJEYXJrfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImgtc2NyZWVuIHctZnVsbCBvYmplY3QtY292ZXIgaGlkZGVuIGRhcms6aW5saW5lXCJ9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICBzcmM9e2NvdmVyRGFya31cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJoLXNjcmVlbiB3LWZ1bGwgb2JqZWN0LWNvdmVyIGhpZGRlbiBkYXJrOmlubGluZVwifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPG1vdGlvbi5zb3VyY2VcbiAgICAgICAgICAgICAgc3JjPXtjb3ZlckxpZ2h0fVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImgtc2NyZWVuIHctZnVsbCBvYmplY3QtY292ZXIgZGFyazpoaWRkZW5cIn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIHNyYz17Y292ZXJMaWdodH1cbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJoLXNjcmVlbiB3LWZ1bGwgb2JqZWN0LWNvdmVyIGRhcms6aGlkZGVuXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidkYTFjZmRmOCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtWTJURFJER04uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJVUlFIMkhQLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlFZQkFVU1EuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1JVEJUQVQ0LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1JUE9QNUFCTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bob3RvZ3JhcGh5Jzp7J2lkJzoncm91dGVzL3Bob3RvZ3JhcGh5JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3Bob3RvZ3JhcGh5JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bob3RvZ3JhcGh5LUdZWTNGRUxULmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3Rvcmllcy8kc3RvcnlJZCc6eydpZCc6J3JvdXRlcy9zdG9yaWVzLyRzdG9yeUlkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N0b3JpZXMvOnN0b3J5SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3Rvcmllcy8kc3RvcnlJZC1STzJYRkVUVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3Rvcmllcy9pbmRleCc6eydpZCc6J3JvdXRlcy9zdG9yaWVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N0b3JpZXMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3N0b3JpZXMvaW5kZXgtRktZTElETE8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtREExQ0ZERjguanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07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
