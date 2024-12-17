import Mode from "./components/mode";
import ThemeProvider from "./context/theme-context";
import { getThemeSession } from "./utils/theme.server";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import styles from "@app/tailwind.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: styles },
];

type LoaderData = {
  mode: "dark" | "light";
};

export const loader = async ({ request }: Route.LoaderArgs) => {
  const themeSession = await getThemeSession(request);

  return { mode: themeSession.getTheme() };
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
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
