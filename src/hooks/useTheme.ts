"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const KEY = "everlight_theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY) as Theme | null;
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
      setThemeState(initial);

      const root = document.documentElement;
      if (initial === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
    } catch {}
  }, []);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}

    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggleTheme };
}
