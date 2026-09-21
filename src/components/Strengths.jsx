import { useApp } from "../context/AppContext.jsx";
import { improvements, pick, strengths } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Strengths() {
  const { lang, t } = useApp();
  const meta = t.sections.strengths;

  return (
    <Section id="strengths" number={meta.number} eyebrow={meta.eyebrow} title={meta.title}>
      <div className="space-y-12">
        {strengths.map((item, index) => (
          <Reveal key={index} delay={index * 60}>
            <div className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <p className="pt-1 font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="text-lg font-medium">{pick(item.title, lang)}</h3>
                <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{pick(item.description, lang)}</p>
                {pick(item.evidence, lang) && (
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted/80">
                    {pick(item.evidence, lang)}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24">
          <h3 className="text-xl font-semibold tracking-tight">{meta.improving}</h3>
          <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted">{meta.improvingIntro}</p>
          <div className="mt-10 space-y-10">
            {improvements.map((item, index) => (
              <Reveal key={index} delay={index * 60}>
                <div className="max-w-[62ch]">
                  <h4 className="font-medium">{pick(item.area, lang)}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {pick(item.how, lang)} {pick(item.progress, lang)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
