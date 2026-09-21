import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";

export default function BackToTop() {
  const { t } = useApp();
  const sentinelRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[50dvh] w-px"
      />
      <button
        type="button"
        onClick={scrollTop}
        aria-label={t.actions.backToTop}
        className={`card-shadow fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-elevated text-muted transition-all duration-300 ease-smooth hover:-translate-y-1 hover:text-accent-strong sm:bottom-8 sm:right-8 ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
}
