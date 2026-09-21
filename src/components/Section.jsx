import Reveal from "./Reveal.jsx";

export default function Section({ id, number, eyebrow, title, intro, large = false, band = false, clip = false, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 ${band ? "bg-band" : ""} ${clip ? "overflow-hidden" : ""}`}
    >
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          {number && <p className="font-mono text-sm text-accent-strong">{number}</p>}
          <p className="mt-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            style={{ textWrap: "balance" }}
            className={`mt-4 font-semibold tracking-tight ${large ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}
          >
            {title}
          </h2>
          {intro ? <p className="mt-5 max-w-[58ch] leading-relaxed text-muted">{intro}</p> : null}
        </Reveal>
        <div className="mt-14 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
