import { useApp } from "../context/AppContext.jsx";
import { pick, skillGroups } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  const { lang, t } = useApp();
  const meta = t.sections.skills;

  return (
    <Section id="skills" number={meta.number} eyebrow={meta.eyebrow} title={meta.title}>
      <div className="space-y-12">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title.en} delay={index * 80}>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {pick(group.title, lang)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {pick(group.items, lang).map((skill, skillIndex) => (
                  <li
                    key={`${skill}-${skillIndex}`}
                    className="card-shadow rounded-full bg-surface px-4 py-2 text-sm transition-colors duration-200 hover:text-accent-strong"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
