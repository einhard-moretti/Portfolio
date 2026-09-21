import { useEffect, useRef } from "react";
import { useApp } from "../context/AppContext.jsx";
import { profile, pick } from "../data/profile.js";
import Reveal from "./Reveal.jsx";
import RotatingText from "./RotatingText.jsx";

function HeroMedia() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  if (profile.video) {
    return (
      <div className="relative mx-auto w-full max-w-sm">
        <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl" />
        <video
          ref={videoRef}
          src={profile.video}
          poster={profile.photo || undefined}
          className="card-shadow relative aspect-[4/5] w-full rounded-[2rem] object-cover transform-gpu"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>
    );
  }

  if (profile.photo) {
    return (
      <div className="relative mx-auto w-full max-w-sm">
        <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl" />
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name.en}`}
          className="card-shadow relative aspect-[4/5] w-full rounded-[2rem] object-cover"
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="float-slow absolute inset-4 rounded-full bg-accent/20 blur-3xl" />
      <div className="spin-slow absolute inset-0 rounded-full border border-accent/25">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
      <div className="absolute inset-12 rounded-full border border-line" />
      <span className="absolute -left-1 top-1/3 font-mono text-sm text-muted">+</span>
      <span className="absolute -right-1 bottom-1/4 font-mono text-sm text-muted">+</span>
      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        Portfolio — {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default function Hero() {
  const { lang, t } = useApp();
  const roles = profile.roles[lang];

  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted">{t.hero.eyebrow}</p>
            <h1
              style={{ textWrap: "balance" }}
              className="mt-4 text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[1.02] tracking-tight"
            >
              {pick(profile.name, lang)}
            </h1>
            <p className="mt-4 text-xl font-medium text-accent-strong sm:text-2xl">
              <RotatingText words={roles} />
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[52ch] leading-relaxed text-muted sm:text-lg">{pick(profile.intro, lang)}</p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <HeroMedia />
        </Reveal>
      </div>
    </section>
  );
}