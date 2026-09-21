import { useApp } from "../context/AppContext.jsx";

// A quiet ending — one line. Contact lives in the Contact section; controls
// live in the navbar; the floating BackToTop handles the way up.
export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="bg-band">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8">
      </div>
    </footer>
  );
}