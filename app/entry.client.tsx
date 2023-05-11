import { RemixBrowser } from "@remix-run/react";
import React from "react";
import { hydrateRoot } from "react-dom/client";

const finalHydrate = () => hydrateRoot(document, <RemixBrowser />);

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(finalHydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(finalHydrate, 1);
}
