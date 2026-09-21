import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Strengths from "./components/Strengths.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AmbientBackground from "./components/AmbientBackground.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useApp } from "./context/AppContext.jsx";

export default function App() {
  const { lang, t } = useApp();

  return (
    <div className="relative min-h-[100dvh] bg-base font-sans text-ink antialiased">
      <AmbientBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#12151B]"
      >
        {t.actions.skipToContent}
      </a>
      <Navbar />
      {/* key={lang} remounts content on language switch: quick fade-slide,
          staggered reveals replay, scroll position is preserved. */}
      <main id="main" key={lang} className="lang-swap">
        <Hero />
        <About />
        <PersonalInfo />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Strengths />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}