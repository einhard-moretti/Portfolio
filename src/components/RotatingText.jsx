import { useEffect, useState } from "react";

// Cycles through the profession words with a soft fade-up swap.
// Static first word under prefers-reduced-motion. Interval, not scroll-driven.
export default function RotatingText({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 3000);
    return () => clearInterval(id);
  }, [words]);

  return (
    <span key={index} className="role-swap">
      {words[index]}
    </span>
  );
}