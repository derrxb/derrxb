import type { LinksFunction, LoaderFunction } from "remix";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import Mode from "./components/mode";
import ThemeProvider from "./context/theme-context";
import styles from "./styles/app.css";
import { getThemeSession } from "./utils/theme.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type LoaderData = {
  mode: "dark" | "light";
};
export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  return json({ mode: themeSession.getTheme() } as LoaderData);
};

export default function App() {
  const { mode } = useLoaderData<LoaderData>();
  const location = useLocation();

  return (
    <html lang="en" className={mode}>
      <head>
        <meta charSet="utf-8" className={mode} />
        <title>Derrxb - Photography and software</title>
        <Meta />
        <Links />
      </head>

      <body>
        <ThemeProvider initialTheme={mode}>
          <nav
            className={`flex h-24 items-center px-4 md:px-24 w-full z-10 ${
              location.pathname === "/"
                ? "fixed"
                : "block bg-white dark:bg-black"
            }`}
          >
            <Link
              to="/"
              className="font-bold text-2xl text-gray-800 dark:text-white"
            >
              derrxb
            </Link>

            <ul className="flex ml-auto items-center">
              <li className="hidden">
                <Link
                  to="/stories"
                  className="font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
                >
                  Stories
                </Link>
              </li>

              <li className="hidden">
                <Link
                  to="/software"
                  className="font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500 hidden"
                >
                  Software
                </Link>
              </li>

              <Mode />
            </ul>
          </nav>

          <Outlet />
          <Scripts />

          {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        </ThemeProvider>
      </body>
    </html>
  );
}
