import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { pick, projects } from "../data/profile.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

// Natural-ratio cover: the screenshot itself determines the height —
// w-full h-auto block, no forced aspect, no contain letterboxing, no crop.
// Only the fallback (no image) keeps a fixed aspect so the gradient has form.
function Cover({ project }) {
  if (project.image) {
    return (
      <div className="card-shadow overflow-hidden rounded-2xl bg-surface">
        <img src={project.image} alt={`${project.name} preview`} className="block h-auto w-full" />
      </div>
    );
  }
  return (
    <div className="card-shadow relative aspect-video overflow-hidden rounded-2xl bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
    </div>
  );
}

// Editorial project: image, metadata, title, one description, stack, link.
// No problem/outcome sections, no decorative index or year.
function Project({ project }) {
  const { lang, t } = useApp();

  return (
    <article>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={project.name}
          className="block transition-opacity duration-300 hover:opacity-95"
        >
          <Cover project={project} />
        </a>
      ) : (
        <Cover project={project} />
      )}

      <p className="mt-7 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        {project.year} · {pick(project.role, lang)}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
      <p className="mt-4 max-w-[62ch] leading-relaxed text-muted">{pick(project.description, lang)}</p>
      <p className="mt-6 font-mono text-xs text-muted">{project.stack.join("  ·  ")}</p>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-opacity duration-200 hover:opacity-80"
        >
          {t.actions.viewProject}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

// Two-column portfolio grid. Mobile collapses to one column.
export default function Portfolio() {
  const { t } = useApp();
  const meta = t.sections.portfolio;

  return (
    <Section id="portfolio" number={meta.number} eyebrow={meta.eyebrow} title={meta.title} intro={meta.intro} band>
      {projects.length === 0 ? (
        <div>
          <p className="text-lg font-medium">{meta.emptyTitle}</p>
          <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-muted">{meta.emptyBody}</p>
        </div>
      ) : (
        <div className="space-y-24">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <Project project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}