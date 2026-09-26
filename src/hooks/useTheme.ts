import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

// index.html applies the saved/system theme before first paint; this hook
// just mirrors that state into React and lets the user toggle it.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // storage unavailable (private mode) — the toggle still works for this visit
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
