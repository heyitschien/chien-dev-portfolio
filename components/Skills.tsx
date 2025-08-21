import React from 'react';
import Section from './Section';

type Line = { text: string; icon: string };
type Group = { title: string; lines: Line[] };

const GROUPS: Group[] = [
  {
    title: 'Front-End',
    lines: [
      { text: 'React, TypeScript, JavaScript (ES6+), HTML5, CSS3/Tailwind, Vite', icon: 'fa-code' },
      { text: 'State & routing: React Router, TanStack (if used)', icon: 'fa-route' },
      { text: 'Testing: Playwright, Vitest, Testing Library', icon: 'fa-vial' },
      { text: 'a11y, SEO, analytics', icon: 'fa-universal-access' },
    ],
  },
  {
    title: 'AI / Agentic',
    lines: [
      { text: 'Prompt engineering & evaluation', icon: 'fa-wand-magic-sparkles' },
      { text: 'Agentic IDEs: Cursor, Windsurf, Cline', icon: 'fa-terminal' },
      { text: 'LLMs: GPT, Claude, Gemini', icon: 'fa-brain' },
      { text: 'Patterns: RAG basics, tool-use/agents, test-time prompting', icon: 'fa-diagram-project' },
      { text: 'Integration: Google AI Studio / OpenAI APIs (where applicable)', icon: 'fa-plug' },
    ],
  },
  {
    title: 'Tooling & Ops',
    lines: [
      { text: 'Git/GitHub, Vercel, PostCSS/Autoprefixer, Sharp pipeline', icon: 'fa-screwdriver-wrench' },
      { text: 'CI checks, perf budgets, Lighthouse', icon: 'fa-gauge-high' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold text-center mb-10">Skills & Expertise</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 p-5 bg-surface-light dark:bg-surface-dark">
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">{g.title}</h3>
            <ul className="space-y-2 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {g.lines.map((line) => (
                <li key={line.text} className="leading-relaxed flex items-start gap-2">
                  <i className={`fa-solid ${line.icon} mt-0.5 text-primary-light dark:text-primary-dark`} aria-hidden="true"></i>
                  <span>{line.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
