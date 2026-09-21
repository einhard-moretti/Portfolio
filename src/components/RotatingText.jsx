import { useEffect, useState } from "react";

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
