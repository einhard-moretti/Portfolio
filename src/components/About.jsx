import { useApp } from "../context/AppContext.jsx";
import { about, pick } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { lang, t } = useApp();
  const meta = t.sections.about;

  return (
    <Section id="about" number={meta.number} eyebrow={meta.eyebrow} title={meta.title}>
      <div className="space-y-5">
        {pick(about.paragraphs, lang).map((paragraph, index) => (
          <Reveal key={index} delay={index * 80}>
            <p className="max-w-[62ch] text-[17px] leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{meta.focus}</p>
          <p className="mt-2 max-w-[55ch] text-lg leading-relaxed">{pick(about.focus, lang)}</p>
        </div>
      </Reveal>
    </Section>
  );
}