
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about">
            <h2 className="text-4xl font-bold text-center mb-12">About</h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">Story</h3>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4">
                        I spent a decade as a stunt performer in Los Angeles, including 2.5 years on James Cameron’s Avatar 2 as part of the core motion-capture team. Film sets demand precision, safety, and speed under pressure habits I bring to front-end engineering.
                    </p>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
                        Today I design and build accessible, high-performance web apps. My workflow is AI-powered end-to-end: ideation, UX drafts, code generation, test scaffolding, and perf audits using GPT/Gemini/Claude inside agentic IDEs (Cursor, Windsurf, Cline). The result: faster iterations, clearer docs, and production-ready UI.
                    </p>
                </div>
                <div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Career Highlights</h4>
                    <ul className="space-y-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                        <li className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-3">
                                <i className="fa-solid fa-clapperboard text-primary-light dark:text-primary-dark"></i>
                            </span>
                            <span className="text-base">Avatar 2 – Core MoCap Team (2.5 yrs)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-3">
                                <i className="fa-solid fa-film text-primary-light dark:text-primary-dark"></i>
                            </span>
                            <span className="text-base">Disney, Warner Bros credits</span>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-3">
                                <i className="fa-solid fa-building-columns text-primary-light dark:text-primary-dark"></i>
                            </span>
                            <span className="text-base">Stanford collaboration (UX & SEO)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-3">
                                <i className="fa-solid fa-certificate text-primary-light dark:text-primary-dark"></i>
                            </span>
                            <span className="text-base">Meta Front-End Developer Certificate</span>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-3">
                                <i className="fa-solid fa-robot text-primary-light dark:text-primary-dark"></i>
                            </span>
                            <span className="text-base">AI-Driven Dev: agentic workflows, evals, & E2E tests</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
