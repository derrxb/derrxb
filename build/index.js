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
  default: () => App
});
var import_remix2 = __toModule(require("remix"));
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Derrxb - Photography and software")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/photography.tsx
var photography_exports = {};
__export(photography_exports, {
  default: () => JokesRoute
});
var import_remix3 = __toModule(require("remix"));
function JokesRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Photography"), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/photography/$photographyId.tsx
var photographyId_exports = {};
__export(photographyId_exports, {
  default: () => PhotographyRoute,
  loader: () => loader
});
var import_cloudinary = __toModule(require("cloudinary"));
var import_remix4 = __toModule(require("remix"));
var loader = async ({ params }) => {
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

// route-module:/Users/derrickbol/dev/derrxb/app/routes/photography/index.tsx
var photography_exports2 = {};
__export(photography_exports2, {
  default: () => PhotographyIndexRoute
});
function PhotographyIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random photo:"));
}

// route-module:/Users/derrickbol/dev/derrxb/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Hi"));
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
  "routes/photography": {
    id: "routes/photography",
    parentId: "root",
    path: "photography",
    index: void 0,
    caseSensitive: void 0,
    module: photography_exports
  },
  "routes/photography/$photographyId": {
    id: "routes/photography/$photographyId",
    parentId: "routes/photography",
    path: ":photographyId",
    index: void 0,
    caseSensitive: void 0,
    module: photographyId_exports
  },
  "routes/photography/index": {
    id: "routes/photography/index",
    parentId: "routes/photography",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: photography_exports2
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
