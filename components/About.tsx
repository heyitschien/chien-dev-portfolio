import React from "react";
import { Film, Building2, Award, Bot, BookOpen } from "lucide-react";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section id="about">
      <h2 className="mb-12 text-center text-4xl font-bold">About</h2>
      <div className="grid items-start gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-primary-light/10 p-2 dark:bg-primary-dark/20">
              <BookOpen className="h-5 w-5 text-primary-light dark:text-primary-dark" />
            </div>
            <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark">
              Story
            </h3>
          </div>
          <div className="rounded-xl border-l-4 border-primary-light bg-blue-50/30 p-6 dark:border-primary-dark dark:bg-blue-900/10">
            <p className="mb-4 text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
              I spent a decade as a stunt performer in Los Angeles, including 2.5 years on James
              Cameron's Avatar 2 as part of the core motion-capture team. Film sets demand precision,
              safety, and speed under pressure habits I bring to front-end engineering.
            </p>
            <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Today I design and build accessible, high-performance web apps. My workflow is
              AI-powered end-to-end: ideation, UX drafts, code generation, test scaffolding, and perf
              audits using GPT/Gemini/Claude inside agentic IDEs (Cursor, Windsurf, Cline). The
              result: faster iterations, clearer docs, and production-ready UI.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 rounded-2xl border-l-4 border-primary-light bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-primary-dark dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-900/20">
          <h4 className="mb-4 text-xl font-semibold">Career Highlights</h4>
          <ul className="space-y-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 shadow-md">
                <Film className="h-4 w-4 text-white" />
              </span>
              <span className="text-base">Avatar 2 – Core MoCap Team (2.5 yrs)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 shadow-md">
                <Film className="h-4 w-4 text-white" />
              </span>
              <span className="text-base">Disney, Warner Bros credits</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-md">
                <Building2 className="h-4 w-4 text-white" />
              </span>
              <span className="text-base">Stanford collaboration (UX & SEO)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 shadow-md">
                <Award className="h-4 w-4 text-white" />
              </span>
              <span className="text-base">Meta Front-End Developer Certificate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-md">
                <Bot className="h-4 w-4 text-white" />
              </span>
              <span className="text-base">
                AI-Driven Dev: agentic workflows, evals, & E2E tests
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
