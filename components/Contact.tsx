
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
    return (
        <Section id="contact" className="text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Great.</h2>
            <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark max-w-2xl mx-auto mb-8">I'm currently available for freelance projects and full-time opportunities. Feel free to reach out or schedule a chat.</p>
            <div className="flex justify-center items-center space-x-6 mb-8">
                <a href="mailto:chien.escalera.duong@gmail.com" aria-label="Email" className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/chien-duong/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Chien-Duong" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"><i className="fa-brands fa-github"></i></a>
            </div>
             <a href="https://calendly.com/chien-duong/30min" target="_blank" rel="noopener noreferrer" className="bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-300 dark:text-background-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg inline-block">
                Schedule a Chat (Calendly)
            </a>
        </Section>
    );
};

export default Contact;
