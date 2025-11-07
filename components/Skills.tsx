import React from "react";
import {
  Code,
  Route,
  FlaskConical,
  Accessibility,
  Wand2,
  Terminal,
  Brain,
  Network,
  Plug,
  Wrench,
  Gauge,
} from "lucide-react";
import Section from "./Section";

type Line = { text: string; icon: React.ComponentType<{ className?: string }> };
type Group = { title: string; lines: Line[] };

const GROUPS: Group[] = [
  {
    title: "Front-End",
    lines: [
      { text: "React, TypeScript, JavaScript (ES6+), HTML5, CSS3/Tailwind, Vite", icon: Code },
      { text: "State & routing: React Router, TanStack (if used)", icon: Route },
      { text: "Testing: Playwright, Vitest, Testing Library", icon: FlaskConical },
      { text: "a11y, SEO, analytics", icon: Accessibility },
    ],
  },
  {
    title: "AI / Agentic",
    lines: [
      { text: "Prompt engineering & evaluation", icon: Wand2 },
      { text: "Agentic IDEs: Cursor, Windsurf, Cline", icon: Terminal },
      { text: "LLMs: GPT, Claude, Gemini", icon: Brain },
      { text: "Patterns: RAG basics, tool-use/agents, test-time prompting", icon: Network },
      { text: "Integration: Google AI Studio / OpenAI APIs (where applicable)", icon: Plug },
    ],
  },
  {
    title: "Tooling & Ops",
    lines: [
      { text: "Git/GitHub, Vercel, PostCSS/Autoprefixer, Sharp pipeline", icon: Wrench },
      { text: "CI checks, perf budgets, Lighthouse", icon: Gauge },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <h2 className="mb-10 text-center text-4xl font-bold">Skills & Expertise</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {GROUPS.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-neutral-200/70 bg-surface-light p-5 dark:border-neutral-800/70 dark:bg-surface-dark"
          >
            <h3 className="mb-3 text-center text-xl font-semibold md:text-left">{g.title}</h3>
            <ul className="space-y-2 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {g.lines.map((line) => {
                const IconComponent = line.icon;
                return (
                  <li key={line.text} className="flex items-start gap-2 leading-relaxed">
                    <IconComponent
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-light dark:text-primary-dark"
                      aria-hidden="true"
                    />
                    <span>{line.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
