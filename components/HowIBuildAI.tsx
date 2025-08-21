import React from 'react';
import Section from './Section';

const steps = [
  {
    title: 'Plan',
    text: 'requirements → user stories → wireframes (AI draft + human edit)',
  },
  {
    title: 'Build',
    text: 'Cursor/Windsurf pair-programming with guardrails, test-first prompts',
  },
  {
    title: 'Verify',
    text: 'Playwright/Vitest generated baselines, a11y checks (axe)',
  },
  {
    title: 'Polish',
    text: 'perf budget, LCP/CLS targets, bundle analysis',
  },
  {
    title: 'Ship',
    text: 'Vercel preview links, analytics dashboards, post-ship checklist',
  },
];

const HowIBuildAI: React.FC = () => {
  return (
    <Section id="how-i-build-ai">
      <h2 className="text-4xl font-bold text-center mb-8">How I Build with AI</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-surface-light dark:bg-surface-dark p-5"
          >
            <div className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1">
              {s.title}
            </div>
            <div className="text-base">{s.text}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowIBuildAI;
