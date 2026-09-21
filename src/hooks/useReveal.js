import { useEffect, useRef, useState } from "react";

// Two-way reveal: animates in on viewport entry, resets on exit, and plays
// again on every pass — scrolling down or up. Reduced motion renders static.
export default function useReveal(threshold = 0.05) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold,
      rootMargin: "0px 0px -10% 0px",
    });

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}