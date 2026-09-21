import { Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp();
  const label = theme === "dark" ? t.actions.themeToLight : t.actions.themeToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-accent-strong"
    >
      <span key={theme} className="theme-icon-swap inline-flex">
        {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </span>
    </button>
  );
}