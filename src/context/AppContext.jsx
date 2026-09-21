import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations.js";

const AppContext = createContext(null);

const THEME_KEY = "pref-theme";
const LANG_KEY = "pref-lang";

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getInitialLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === "en" || stored === "id") return stored;
  return (navigator.language || "en").toLowerCase().startsWith("id") ? "id" : "en";
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#0D1016" : "#F5F3EE";
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-switch");
    window.setTimeout(() => root.classList.remove("theme-switch"), 200);
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, lang, setLang, t: translations[lang] }),
    [theme, toggleTheme, lang]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
