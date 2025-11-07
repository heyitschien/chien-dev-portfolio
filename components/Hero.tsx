import React from "react";
import { Download } from "lucide-react";
import { RESUME_URL } from "../constants";
import LiquidGradientBackground from "./LiquidGradientBackground";

const Hero: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LiquidGradientBackground variant="hero" className="min-h-screen">
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-20 text-center"
      >
        <div className="relative z-10 container mx-auto px-6">
          {/* Profile Picture */}
          <div className="animate-fade-in-up mb-8">
            <div className="relative mx-auto inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light via-accent-solution to-primary-light p-0.5 opacity-80 dark:from-primary-dark dark:via-accent-solution dark:to-primary-dark blur-sm" />
              <picture className="relative block">
                <source type="image/webp" srcSet="/assets/headshots/chien_head_shot.webp" />
                <img
                  src="/assets/headshots/chien_head_shot.jpg"
                  alt="Chien Escalera Duong"
                  className="relative h-40 w-40 rounded-full object-cover shadow-2xl shadow-primary-light/20 transition-transform hover:scale-105 dark:shadow-primary-dark/20 sm:h-44 sm:w-44"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

          {/* Refined Headline */}
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in-up text-4xl font-extrabold text-on-surface-light [animation-delay:0.2s] dark:text-on-surface-dark sm:text-5xl md:text-6xl">
            Front-End Developer
            <br />
            <span className="bg-gradient-to-r from-primary-light to-accent-solution bg-clip-text text-transparent dark:from-primary-dark dark:to-accent-solution">
              AI Builder
            </span>
            <span className="text-on-surface-variant-light dark:text-on-surface-variant-dark"> • </span>
            <span className="text-on-surface-variant-light italic dark:text-on-surface-variant-dark">
              ex-Hollywood Stunt Performer
            </span>
          </h1>

          {/* Refined Description */}
          <p className="mx-auto mb-2 max-w-3xl animate-fade-in-up text-lg text-on-surface-light [animation-delay:0.4s] dark:text-on-surface-dark sm:text-xl md:text-2xl">
            Building elegant interfaces with AI-accelerated workflows.
          </p>
          <p className="mx-auto mb-8 text-sm text-on-surface-variant-light [animation-delay:0.4s] dark:text-on-surface-variant-dark">
            10 years on film sets → now shipping for startups
          </p>

          {/* CTAs */}
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
                className={`inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 font-semibold text-on-surface-light transition-all hover:scale-105 hover:bg-white/20 hover:shadow-lg dark:text-on-surface-dark ${!RESUME_URL ? "cursor-not-allowed opacity-60" : ""}`}
                style={{ filter: "url(#glass-effect)" }}
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleCtaClick(e, "#contact")}
                className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 font-semibold text-on-surface-light transition-all hover:scale-105 hover:bg-white/20 hover:shadow-lg dark:text-on-surface-dark"
                style={{ filter: "url(#glass-effect)" }}
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
    </LiquidGradientBackground>
  );
};

export default Hero;
