import React from "react";
import { Film, Building2, Award, Bot, BookOpen } from "lucide-react";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section id="about">
      <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-white">About</h2>
      <div className="grid items-start gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Story</h3>
          </div>
          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-lg">
            <p className="mb-4 text-lg text-white/90 leading-relaxed">
              I spent a decade as a stunt performer in Los Angeles, including 2.5 years on James
              Cameron's Avatar 2 as part of the core motion-capture team. Film sets demand precision,
              safety, and speed under pressure habits I bring to front-end engineering.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Today I design and build accessible, high-performance web apps. My workflow is
              AI-powered end-to-end: ideation, UX drafts, code generation, test scaffolding, and perf
              audits using GPT/Gemini/Claude inside agentic IDEs (Cursor, Windsurf, Cline). The
              result: faster iterations, clearer docs, and production-ready UI.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:border-white/30">
          <h4 className="mb-4 text-xl font-semibold text-white">Career Highlights</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 shadow-md">
                <Film className="h-4 w-4 text-white" />
              </span>
              <span className="text-base text-white/90">Avatar 2 – Core MoCap Team (2.5 yrs)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 shadow-md">
                <Film className="h-4 w-4 text-white" />
              </span>
              <span className="text-base text-white/90">Disney, Warner Bros credits</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-md">
                <Building2 className="h-4 w-4 text-white" />
              </span>
              <span className="text-base text-white/90">Stanford collaboration (UX & SEO)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 shadow-md">
                <Award className="h-4 w-4 text-white" />
              </span>
              <span className="text-base text-white/90">Meta Front-End Developer Certificate</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-md">
                <Bot className="h-4 w-4 text-white" />
              </span>
              <span className="text-base text-white/90">
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
