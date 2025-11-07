import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FilmCredits from "./components/FilmCredits";
import HowIBuildAI from "./components/HowIBuildAI";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyPage from "./components/CaseStudyPage";
import StickyCTA from "./components/StickyCTA";

type Theme = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [hash, setHash] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Simple hash router
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Route parsing: #/case/:id
  const caseMatch = hash.match(/^#\/case\/(.+)$/);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="main" className="container mx-auto px-6">
        {caseMatch ? (
          <CaseStudyPage projectId={caseMatch[1]} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <FilmCredits />
            <HowIBuildAI />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <StickyCTA />
      <Footer />
    </>
  );
};

export default App;
