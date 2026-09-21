import { useApp } from "../context/AppContext.jsx";
import { education, pick } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Education() {
  const { lang, t } = useApp();
  const meta = t.sections.education;

  return (
    <Section id="education" number={meta.number} eyebrow={meta.eyebrow} title={meta.title}>
      <ol className="space-y-14">
        {education.map((item, index) => (
          <li key={`${item.institution}-${index}`}>
            <Reveal delay={index * 80}>
              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="font-mono text-sm leading-6 text-muted">{item.period}</p>
                <div>
                  <h3 className="text-lg font-medium">{item.institution}</h3>
                  <p className="mt-1 text-muted">
                    {[pick(item.program, lang), pick(item.degree, lang)].filter(Boolean).join(", ")}
                  </p>
                  {pick(item.note, lang) && (
                    <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted">{pick(item.note, lang)}</p>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
