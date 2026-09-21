import { useApp } from "../context/AppContext.jsx";
import { personalInfo, pick } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function PersonalInfo() {
  const { lang, t } = useApp();
  const meta = t.sections.info;

  return (
    <Section id="info" number={meta.number} eyebrow={meta.eyebrow} title={meta.title}>
      <dl className="grid gap-x-16 gap-y-8 sm:grid-cols-2">
        {personalInfo.map((item, index) => (
          <Reveal key={item.key} delay={index * 50}>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{t.info[item.key]}</dt>
              <dd className="mt-2 break-words text-[17px]">
                {item.href ? (
                  <a href={item.href} className="transition-colors duration-200 hover:text-accent-strong">
                    {pick(item.value, lang)}
                  </a>
                ) : (
                  pick(item.value, lang)
                )}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}