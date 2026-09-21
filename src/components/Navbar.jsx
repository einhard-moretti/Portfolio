import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { translations } from "../i18n/translations.js";
import { nav } from "../data/profile.js";
import ThemeToggle from "./ThemeToggle.jsx";
import LangToggle from "./LangToggle.jsx";

export default function Navbar() {
  const { lang, t } = useApp();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      <header className="nav-in sticky top-0 z-50 bg-base sm:bg-base/80 sm:backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8"
        >
          <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`group relative grid pb-1 text-sm transition-colors duration-200 ${
                    active === item.id ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
                    {translations.en.nav[item.id]}
                  </span>
                  <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
                    {translations.id.nav[item.id]}
                  </span>
                  <span
                    key={lang}
                    className="nav-label-in col-start-1 row-start-1 justify-self-center whitespace-nowrap"
                  >
                    {t.nav[item.id]}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-300 ease-smooth ${
                      active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-1">
            <ThemeToggle />
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.actions.closeMenu : t.actions.openMenu}
              className="ml-3 inline-flex h-11 w-11 items-center justify-center text-muted transition-colors duration-200 hover:text-ink lg:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-base/70 lg:hidden"
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-50 border-b border-line bg-base lg:hidden"
          >
            <ul className="mx-auto w-full max-w-6xl space-y-1 px-5 pb-6 pt-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex h-12 items-center text-[15px] transition-colors duration-200 ${
                      active === item.id ? "text-accent-strong" : "text-muted"
                    }`}
                  >
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}