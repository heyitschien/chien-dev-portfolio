
import React from 'react';

const Hero: React.FC = () => {
    const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center py-20">
            <div className="animate-fade-in-up">
                <picture>
                    <source type="image/webp" srcSet="/assets/headshots/chien_head_shot.webp" />
                    <img
                        src="/assets/headshots/chien_head_shot.jpg"
                        alt="Chien Escalera Duong headshot"
                        className="w-40 h-40 rounded-full object-cover border-4 border-surface-light dark:border-gray-600 shadow-lg mx-auto mb-8"
                        loading="eager"
                        decoding="async"
                    />
                </picture>
            </div>
            <h1 className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface-light dark:text-on-surface-dark mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Chien Escalera Duong Front-End Developer • AI Builder (ex-Hollywood Stunt Performer)</h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-on-surface-variant-light dark:text-on-surface-variant-dark mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>I turn product ideas into elegant, fast interfaces—delivered with AI-accelerated workflows. 10 yrs on film sets (Avatar 2), now shipping for startups & teams.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <a href="#projects" onClick={(e) => handleCtaClick(e, '#projects')} className="bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-300 dark:text-background-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                    View Case Studies
                </a>
                <div className="flex gap-3">
                    <a href="#" className="bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-600 text-on-surface-light dark:text-on-surface-dark font-semibold py-3 px-4 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                        Download Résumé
                    </a>
                    <a href="#contact" onClick={(e) => handleCtaClick(e, '#contact')} className="bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-600 text-on-surface-light dark:text-on-surface-dark font-semibold py-3 px-4 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                        Book 15-min Call
                    </a>
                </div>
            </div>
            <div className="mt-10 opacity-90" aria-label="Trusted by">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    {[
                        'Avatar: The Way of Water',
                        'Disney',
                        'Warner Bros',
                        'Stanford',
                    ].map((name) => (
                        <li key={name} className="flex items-center gap-2">
                            {/* Placeholder logo */}
                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="opacity-70 fill-current text-on-surface-variant-light dark:text-on-surface-variant-dark">
                                <circle cx="8" cy="8" r="7" stroke="currentColor" fill="none" />
                            </svg>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
