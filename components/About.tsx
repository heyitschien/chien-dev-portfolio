
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">From Uber to UI: A Journey of Reinvention</h3>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4">
                        My journey into tech wasn't traditional. Driving for Uber taught me discipline, resilience, and the importance of a user-centric mindset—skills I now apply to every line of code I write. I thrive on solving complex problems and transforming them into beautiful, intuitive, and impactful digital experiences.
                    </p>
                    <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
                        I am passionate about building accessible, responsive, and high-performance web applications. My goal is to collaborate with teams that push the boundaries of technology to create products that make a real difference.
                    </p>
                </div>
                <div className="md:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Highlights</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center"><i className="fa-solid fa-certificate text-primary-light dark:text-primary-dark w-6"></i><span className="ml-3">Meta Certified Front-End Developer</span></li>
                        <li className="flex items-center"><i className="fa-solid fa-flask text-primary-light dark:text-primary-dark w-6"></i><span className="ml-3">Stanford University Collaboration</span></li>
                        <li className="flex items-center"><i className="fa-solid fa-robot text-primary-light dark:text-primary-dark w-6"></i><span className="ml-3">AI Startup Development</span></li>
                        <li className="flex items-center"><i className="fa-solid fa-microphone text-primary-light dark:text-primary-dark w-6"></i><span className="ml-3">Toastmasters Public Speaking</span></li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
