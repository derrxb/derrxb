import {
  json,
  Link,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "remix";
import Mode from "./components/mode";
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

  return (
    <html lang="en" className={mode}>
      <head>
        <meta charSet="utf-8" className={mode} />
        <title>Derrxb - Photography and software</title>
        <Meta />
        <Links />
      </head>

      <body>
        <nav className="flex h-20 items-center px-24 w-full z-10 fixed">
          <Link
            to="/"
            className="font-bold text-2xl text-gray-800 dark:text-white"
          >
            DERRXB
          </Link>

          <ul className="flex ml-auto items-center">
            <li>
              <Link
                to="/stories"
                className="font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
              >
                Stories
              </Link>
            </li>

            <li>
              <Link
                to="/software"
                className="font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500 hidden"
              >
                Software
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="font-semibold text-gray-600 px-4 hover:text-gray-900 dark:text-white dark:hover:text-gray-500"
              >
                About
              </Link>
            </li>

            <Mode />
          </ul>
        </nav>

        <Outlet />
        <Scripts />

        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
