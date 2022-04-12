import React from "react";

type Theme = "light" | "dark";

const ThemeContext = React.createContext({ value: "light" } as {
  value: "light" | "dark";
});

ThemeContext.displayName = "ThemeContext";

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = React.useState<Theme>(props.initialTheme as Theme);

  const value = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
};

export default ThemeProvider;
