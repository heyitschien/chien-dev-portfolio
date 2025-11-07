import React from 'react';
import { PenTool, Code, Search, Sparkles, Rocket } from 'lucide-react';
import Section from './Section';

type Step = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string; // tailwind color name for border/accent
  tint: string;  // bg tint class
};

const steps: Step[] = [
  {
    title: 'Plan',
    text: 'requirements → user stories → wireframes (AI draft + human edit)',
    icon: PenTool,
    color: 'border-blue-400 dark:border-blue-500',
    tint: 'bg-blue-50 dark:bg-blue-900/30',
  },
  {
    title: 'Build',
    text: 'Cursor/Windsurf pair-programming with guardrails, test-first prompts',
    icon: Code,
    color: 'border-emerald-400 dark:border-emerald-500',
    tint: 'bg-emerald-50 dark:bg-emerald-900/30',
  },
  {
    title: 'Verify',
    text: 'Playwright/Vitest generated baselines, a11y checks (axe)',
    icon: Search,
    color: 'border-amber-400 dark:border-amber-500',
    tint: 'bg-amber-50 dark:bg-amber-900/30',
  },
  {
    title: 'Polish',
    text: 'perf budget, LCP/CLS targets, bundle analysis',
    icon: Sparkles,
    color: 'border-fuchsia-400 dark:border-fuchsia-500',
    tint: 'bg-fuchsia-50 dark:bg-fuchsia-900/30',
  },
  {
    title: 'Ship',
    text: 'Vercel preview links, analytics dashboards, post-ship checklist',
    icon: Rocket,
    color: 'border-cyan-400 dark:border-cyan-500',
    tint: 'bg-cyan-50 dark:bg-cyan-900/30',
  },
];

const HowIBuildAI: React.FC = () => {
  return (
    <Section id="how-i-build-ai">
      <h2 className="text-4xl font-bold text-center mb-8">How I Build with AI</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, idx) => {
          const IconComponent = s.icon;
          return (
            <div
              key={s.title}
              className={`relative rounded-2xl border ${s.color} bg-surface-light dark:bg-surface-dark p-5 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-3">
                <div className={`h-9 w-9 ${s.tint} text-on-surface-light dark:text-on-surface-dark rounded-lg flex items-center justify-center shrink-0`} aria-hidden>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    Step {idx + 1}
                  </div>
                  <div className="text-lg font-semibold leading-tight mb-1">{s.title}</div>
                  <div className="text-[15px] leading-relaxed">{s.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HowIBuildAI;
