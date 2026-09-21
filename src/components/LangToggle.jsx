import { useApp } from "../context/AppContext.jsx";

const OPTIONS = ["en", "id"];

const BORDER = "border-[#454A52]";

export default function LangToggle() {
  const { lang, setLang, t } = useApp();

  return (
    <div
      role="group"
      aria-label={t.actions.language}
      className={`relative grid h-9 w-[76px] shrink-0 grid-cols-2 rounded-full border ${BORDER} p-0.5`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-elevated transition-transform duration-300 ease-smooth ${
          lang === OPTIONS[1] ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`relative z-10 flex items-center justify-center font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 ${
            lang === option ? "text-accent-strong" : "text-muted hover:text-ink"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
