
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about">
            <h2 className="text-4xl font-bold text-center mb-12">From Set Pieces to Ship Dates</h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">High-stakes mindset, applied to product.</h3>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4">
                        I learned pressure, timing, and teamwork from the film set—where choreography, safety, and split-second decisions matter. I bring that same discipline to front-end engineering: clear plans, fast iteration, and predictable delivery.
                    </p>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4">
                        Today, I design and ship accessible, performant interfaces and increasingly leverage AI/agentic workflows to move from idea to impact faster—without sacrificing quality.
                    </p>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
                        Whether it’s a growth site, an internal tool, or a product UI, I focus on outcomes: reducing friction, clarifying decisions, and shipping work that earns trust.
                    </p>
                </div>
                <div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Career Highlights</h4>
                    <ul className="space-y-3 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                        <li className="flex items-start"><i className="fa-solid fa-certificate text-primary-light dark:text-primary-dark w-6 mt-1"></i><span className="ml-3">Meta Certified Front-End Developer</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-building-columns text-primary-light dark:text-primary-dark w-6 mt-1"></i><span className="ml-3">Built UX prototypes with Stanford collaborators</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-robot text-primary-light dark:text-primary-dark w-6 mt-1"></i><span className="ml-3">Shipped AI-powered workflows at early-stage startups</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-clapperboard text-primary-light dark:text-primary-dark w-6 mt-1"></i><span className="ml-3">Film/stunt background informs systems thinking and reliability</span></li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
