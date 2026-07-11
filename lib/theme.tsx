"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

export type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "jin-painting-theme";

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");
  const themeRef = useRef<Theme>("system");

  useEffect(() => {
    // A blocking inline script (see layout.tsx) already applied the correct
    // class before paint. This effect just brings React state in sync with
    // it — it must never call applyTheme() with the pre-mount default
    // values above, or it would flash back to "system"/"light" for a frame.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme: Theme =
      stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const initialSystemTheme: ResolvedTheme = media.matches ? "dark" : "light";

    themeRef.current = initialTheme;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(initialTheme);
    setSystemTheme(initialSystemTheme);
    applyTheme(initialTheme === "system" ? initialSystemTheme : initialTheme);

    const handleChange = (e: MediaQueryListEvent) => {
      const next: ResolvedTheme = e.matches ? "dark" : "light";
      setSystemTheme(next);
      if (themeRef.current === "system") applyTheme(next);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const resolvedTheme: ResolvedTheme = theme === "system" ? systemTheme : theme;

  function setTheme(next: Theme) {
    themeRef.current = next;
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next === "system" ? systemTheme : next);
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
