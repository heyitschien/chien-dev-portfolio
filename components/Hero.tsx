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
      className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-20 text-center"
    >
      <div className="animate-fade-in-up">
        <picture>
          <source type="image/webp" srcSet="/assets/headshots/chien_head_shot.webp" />
          <img
            src="/assets/headshots/chien_head_shot.jpg"
            alt="Chien Escalera Duong headshot"
            className="mx-auto mb-8 h-40 w-40 rounded-full border-4 border-surface-light object-cover shadow-lg dark:border-gray-600"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
      <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in-up text-3xl font-extrabold text-on-surface-light [animation-delay:0.2s] dark:text-on-surface-dark sm:text-4xl md:text-5xl">
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
          className="transform rounded-full bg-primary-light px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600 dark:bg-primary-dark dark:text-background-dark dark:hover:bg-blue-300"
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
            className={`inline-flex items-center gap-2 rounded-full border border-gray-300 bg-surface-light px-4 py-3 font-semibold text-on-surface-light transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:bg-gray-700 ${!RESUME_URL ? "cursor-not-allowed opacity-60" : ""}`}
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleCtaClick(e, "#contact")}
            className="rounded-full border border-gray-300 bg-surface-light px-4 py-3 font-semibold text-on-surface-light transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:bg-gray-700"
          >
            Book 15-min Call
          </a>
        </div>
      </div>
      <div className="mt-10 opacity-90" aria-label="Trusted by">
        <ul className="flex flex-nowrap items-center justify-center gap-x-8 overflow-x-auto whitespace-nowrap px-2 sm:px-0">
          {[
            { src: "/assets/logos/avatar.png", alt: "Avatar: The Way of Water" },
            { src: "/assets/logos/disney.png", alt: "Disney" },
            { src: "/assets/logos/warner.png", alt: "Warner Bros" },
            { src: "/assets/logos/stanford.png", alt: "Stanford" },
          ].map((brand) => (
            <li key={brand.alt} className="flex shrink-0 items-center justify-center">
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-7 w-auto object-contain sm:h-8 md:h-9"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
