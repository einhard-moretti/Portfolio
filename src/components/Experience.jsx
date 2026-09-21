import { useApp } from "../context/AppContext.jsx";
import { experience, pick } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  const { lang, t } = useApp();
  const meta = t.sections.experience;

  return (
    <Section id="experience" number={meta.number} eyebrow={meta.eyebrow} title={meta.title} intro={meta.intro}>
      <ol className="space-y-16">
        {experience.map((job, index) => (
          <li key={`${job.org}-${index}`}>
            <Reveal delay={index * 80}>
              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <p className="font-mono text-sm leading-6 text-muted">
                  {meta.worked.replace("{duration}", pick(job.period, lang))}
                </p>
                <div>
                  <p className="text-lg font-medium leading-snug">
                    {job.org}
                    <span className="font-normal text-muted"> {meta.as} </span>
                    {pick(job.role, lang)}
                    <span className="font-normal text-muted">
                      {" "}
                      {meta.at.replace("{location}", pick(job.location, lang))}
                    </span>
                  </p>
                  <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-accent/60">
                    {pick(job.points, lang).map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
