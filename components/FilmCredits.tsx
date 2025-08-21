import React from 'react';
import Section from './Section';

type Credit = {
  title: string;
  role: string;
  meta?: string;
  logo?: string; // public path placeholder (can be replaced with official assets later)
};

const credits: Credit[] = [
  {
    title: 'Avatar: The Way of Water',
    role: 'Core MoCap Team',
    meta: '2.5 yrs, Lightstorm/20th Century',
    logo: '/assets/logos/avatar.png',
  },
  {
    title: 'Disney Studios',
    role: 'Stunt Performer',
    meta: 'titles available on request',
    logo: '/assets/logos/disney.png',
  },
  {
    title: 'Warner Bros',
    role: 'Stunt Performer',
    meta: 'titles available on request',
    logo: '/assets/logos/warner.png',
  },
];

const Logo: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  const boxClasses =
    'h-10 w-10 rounded-md ring-1 ring-neutral-200/70 dark:ring-neutral-800/70 bg-white/70 dark:bg-white/10 flex items-center justify-center overflow-hidden';

  if (!src) {
    return (
      <div className={`${boxClasses} text-neutral-500`}>
        <i className="fa-solid fa-clapperboard"></i>
      </div>
    );
  }
  return (
    <div className={boxClasses}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain p-1"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const FilmCredits: React.FC = () => {
  return (
    <Section id="film-credits">
      <h2 className="text-4xl font-bold text-center mb-8">Film Credits</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {credits.map((c) => (
          <div
            key={`${c.title}-${c.role}`}
            className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-surface-light dark:bg-surface-dark p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <Logo src={c.logo} alt={`${c.title} logo`} />
              <div className="font-semibold leading-tight">{c.title}</div>
            </div>
            <div className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
              <span className="font-medium">{c.role}</span>
              {c.meta ? ` — ${c.meta}` : ''}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-center mt-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
        Full credits available upon request.
      </p>
    </Section>
  );
};

export default FilmCredits;
