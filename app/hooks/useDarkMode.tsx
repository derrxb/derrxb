import Cookies from "js-cookie";
import { useEffect, useState } from "react";

type mode = "dark" | "light";

const useDarkMode = () => {
  const [mode, setInternalMode] = useState<mode>(
    typeof window !== "undefined"
      ? (Cookies.get("mode") as mode) || "light"
      : "light"
  );

  useEffect(() => {
    if (Cookies.get("mode")) {
      const savedMode = Cookies.get("mode") as mode;
      window.document.documentElement.classList.add(savedMode);
    }
  }, []);

  useEffect(() => {
    const prevMode = mode === "dark" ? "light" : "dark";

    window.document.documentElement.classList.remove(prevMode);
    window.document.documentElement.classList.add(mode);
  }, [mode]);

  const setMode = (nextMode: mode) => {
    Cookies.set("mode", nextMode);
    setInternalMode(nextMode);
  };

  return {
    mode,
    setMode,
  };
};

export default useDarkMode;
