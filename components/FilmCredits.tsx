import React from 'react';
import Section from './Section';

const FilmCredits: React.FC = () => {
  const credits = [
    {
      title: 'Avatar: The Way of Water',
      role: 'Core MoCap Team',
      meta: '2.5 yrs, Lightstorm/20th Century',
    },
    { title: 'Disney Studios', role: 'Stunt Performer', meta: 'titles available on request' },
    { title: 'Warner Bros', role: 'Stunt Performer', meta: 'titles available on request' },
  ];

  return (
    <Section id="film-credits">
      <h2 className="text-4xl font-bold text-center mb-6">Film Credits</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {credits.map((c) => (
          <div
            key={`${c.title}-${c.role}`}
            className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-surface-light dark:bg-surface-dark p-4"
          >
            <div className="font-semibold">{c.title}</div>
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

      {/* Optional: Monochrome studio logos (keep tasteful) */}
      {/* <div className="mt-6 flex flex-wrap justify-center gap-6 opacity-80">
        <img src="/logos/lightstorm.svg" alt="Lightstorm" className="h-6 invert dark:invert-0 grayscale" />
        <img src="/logos/disney.svg" alt="Disney" className="h-6 invert dark:invert-0 grayscale" />
        <img src="/logos/warner-bros.svg" alt="Warner Bros" className="h-6 invert dark:invert-0 grayscale" />
      </div> */}
    </Section>
  );
};

export default FilmCredits;
