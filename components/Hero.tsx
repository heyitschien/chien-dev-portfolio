import React from "react";
import { Download } from "lucide-react";
import { RESUME_URL } from "../constants";

const Hero: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative -mx-6 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden py-20 text-center md:-mx-6"
    >
      {/* Full-width gradient background - spans entire viewport */}
      <div 
        className="absolute inset-y-0 bg-gradient-to-br from-primary-light/10 via-surface-light to-accent-solution/5 dark:from-primary-dark/10 dark:via-surface-dark dark:to-accent-solution/10" 
        style={{ 
          left: 'calc(50% - 50vw)', 
          width: '100vw'
        }}
      />
      
      <div className="relative z-10 w-full px-6 md:px-6">
        <div className="animate-fade-in-up">
          <div className="relative mx-auto mb-8 inline-block">
            {/* Gradient border wrapper */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light via-accent-solution to-primary-light p-0.5 opacity-80 dark:from-primary-dark dark:via-accent-solution dark:to-primary-dark">
              <div className="h-full w-full rounded-full bg-surface-light dark:bg-surface-dark" />
            </div>
            <picture className="relative block">
              <source type="image/webp" srcSet="/assets/headshots/chien_head_shot.webp" />
              <img
                src="/assets/headshots/chien_head_shot.jpg"
                alt="Chien Escalera Duong headshot"
                className="relative h-40 w-40 rounded-full object-cover shadow-2xl shadow-primary-light/20 transition-transform hover:scale-105 dark:shadow-primary-dark/20 sm:h-44 sm:w-44"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
        <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in-up bg-gradient-to-r from-on-surface-light via-primary-light to-accent-solution bg-clip-text text-3xl font-extrabold text-transparent [animation-delay:0.2s] dark:from-on-surface-dark dark:via-primary-dark dark:to-accent-solution sm:text-4xl md:text-5xl">
          Chien Escalera Duong Front-End Developer • AI Builder (ex-Hollywood Stunt Performer)
        </h1>
        <p className="mx-auto mb-8 max-w-3xl animate-fade-in-up text-lg text-on-surface-variant-light [animation-delay:0.4s] dark:text-on-surface-variant-dark sm:text-xl md:text-2xl">
          I turn product ideas into elegant, fast interfaces—delivered with AI-accelerated workflows.
          10 yrs on film sets (Avatar 2), now shipping for startups & teams.
        </p>
        <div className="flex animate-fade-in-up flex-col items-center justify-center gap-4 [animation-delay:0.6s] sm:flex-row">
          <a
            href="#projects"
            onClick={(e) => handleCtaClick(e, "#projects")}
            className="transform rounded-full bg-gradient-to-r from-primary-light to-accent-solution px-8 py-3 font-bold text-white shadow-xl shadow-primary-light/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary-light/40 dark:from-primary-dark dark:to-accent-solution dark:shadow-primary-dark/30 dark:hover:shadow-primary-dark/40"
          >
            View Case Studies
          </a>
          <div className="flex gap-3">
            <a
              href={RESUME_URL || "#"}
              onClick={(e) => {
                if (!RESUME_URL) e.preventDefault();
              }}
              aria-disabled={!RESUME_URL ? "true" : undefined}
              tabIndex={RESUME_URL ? undefined : -1}
              title={RESUME_URL ? "Download Resume (PDF)" : "Resume coming soon"}
              target={RESUME_URL ? "_blank" : undefined}
              rel={RESUME_URL ? "noopener noreferrer" : undefined}
              download={!!RESUME_URL}
              className={`inline-flex items-center gap-2 rounded-full border-2 border-primary-light/30 bg-surface-light px-4 py-3 font-semibold text-on-surface-light transition-all hover:scale-105 hover:border-primary-light/50 hover:bg-gradient-to-r hover:from-primary-light/10 hover:to-accent-solution/10 hover:shadow-lg dark:border-primary-dark/30 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:border-primary-dark/50 dark:hover:from-primary-dark/10 dark:hover:to-accent-solution/10 ${!RESUME_URL ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <Download className="h-5 w-5 text-primary-light dark:text-primary-dark" aria-hidden="true" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleCtaClick(e, "#contact")}
              className="rounded-full border-2 border-primary-light/30 bg-surface-light px-4 py-3 font-semibold text-on-surface-light transition-all hover:scale-105 hover:border-primary-light/50 hover:bg-gradient-to-r hover:from-primary-light/10 hover:to-accent-solution/10 hover:shadow-lg dark:border-primary-dark/30 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:border-primary-dark/50 dark:hover:from-primary-dark/10 dark:hover:to-accent-solution/10"
            >
              Book 15-min Call
            </a>
          </div>
        </div>
        <div className="mt-10 opacity-90" aria-label="Trusted by">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-on-surface-variant-light dark:text-on-surface-variant-dark">
            Trusted by
          </p>
          <ul className="flex flex-nowrap items-center justify-center gap-x-8 overflow-x-auto whitespace-nowrap px-2 sm:px-0">
            {[
              { src: "/assets/logos/avatar.png", alt: "Avatar: The Way of Water" },
              { src: "/assets/logos/disney.png", alt: "Disney" },
              { src: "/assets/logos/warner.png", alt: "Warner Bros" },
              { src: "/assets/logos/stanford.png", alt: "Stanford" },
            ].map((brand) => (
              <li key={brand.alt} className="flex shrink-0 items-center justify-center transition-transform hover:scale-110">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-7 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-8 md:h-9"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
