import { createCookieSessionStorage } from "remix";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "MODE",
    secure: false,
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["6jztYdR73Jbq6gJtSmjp"],
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));

  return {
    getTheme: (): "dark" | "light" => {
      const themeValue = session.get("theme");
      return themeValue === "dark" || themeValue === "light"
        ? themeValue
        : "dark";
    },
    setTheme: (theme: "dark" | "light") => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
