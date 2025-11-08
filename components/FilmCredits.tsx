import React from "react";
import { Film } from "lucide-react";
import Section from "./Section";

type Credit = {
  title: string;
  role: string;
  meta?: string;
  logo?: string; // public path placeholder (can be replaced with official assets later)
};

const credits: Credit[] = [
  {
    title: "Avatar: The Way of Water",
    role: "Core MoCap Team",
    meta: "2.5 yrs, Lightstorm/20th Century",
    logo: "/assets/logos/avatar.png",
  },
  {
    title: "Disney Studios",
    role: "Stunt Performer",
    meta: "titles available on request",
    logo: "/assets/logos/disney.png",
  },
  {
    title: "Warner Bros",
    role: "Stunt Performer",
    meta: "titles available on request",
    logo: "/assets/logos/warner.png",
  },
];

const Logo: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  const boxClasses =
    "h-12 w-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden p-2";

  if (!src) {
    return (
      <div className={`${boxClasses} text-white/70`}>
        <Film className="h-5 w-5" />
      </div>
    );
  }
  return (
    <div className={boxClasses}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const FilmCredits: React.FC = () => {
  return (
    <Section id="film-credits">
      <h2 className="mb-8 text-center text-4xl md:text-5xl font-extrabold text-white">Film Credits</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {credits.map((c) => (
          <div
            key={`${c.title}-${c.role}`}
            className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:border-white/30"
          >
            <div className="mb-2 flex items-center gap-3">
              <Logo src={c.logo} alt={`${c.title} logo`} />
              <div className="font-semibold leading-tight text-white">{c.title}</div>
            </div>
            <div className="text-sm text-white/80">
              <span className="font-medium text-white/90">{c.role}</span>
              {c.meta ? ` — ${c.meta}` : ""}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-white/70">
        Full credits available upon request.
      </p>
    </Section>
  );
};

export default FilmCredits;
