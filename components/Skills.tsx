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
  const categoryConfig = [
    {
      title: "Front-End",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 via-blue-50/50 to-blue-50",
      borderColor: "border-blue-300",
      iconBg: "from-blue-400 to-blue-500",
    },
    {
      title: "AI / Agentic",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 via-purple-50/50 to-purple-50",
      borderColor: "border-purple-300",
      iconBg: "from-purple-400 to-purple-500",
    },
    {
      title: "Tooling & Ops",
      gradient: "from-cyan-400 to-cyan-600",
      bgGradient: "from-cyan-50 via-cyan-50/50 to-cyan-50",
      borderColor: "border-cyan-300",
      iconBg: "from-cyan-400 to-cyan-500",
    },
  ];

  return (
    <Section id="skills">
      <h2 className="mb-10 text-center text-4xl md:text-5xl font-extrabold text-white">Skills & Expertise</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {GROUPS.map((g, idx) => {
          const config = categoryConfig[idx];
          return (
            <div
              key={g.title}
              className={`group relative overflow-hidden rounded-xl border-l-4 ${config.borderColor} bg-white/10 backdrop-blur-md border-r border-t border-b border-white/20 p-5 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:border-white/30`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${config.iconBg} flex items-center justify-center shadow-md`}>
                  {g.lines[0] && (() => {
                    const IconComponent = g.lines[0].icon;
                    return <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />;
                  })()}
                </div>
                <h3 className="text-center text-xl font-semibold text-white md:text-left">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.lines.map((line) => {
                  const IconComponent = line.icon;
                  return (
                    <li key={line.text} className="flex items-start gap-2 leading-relaxed">
                      <IconComponent
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-light"
                        aria-hidden="true"
                      />
                      <span className="text-white/90">{line.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
