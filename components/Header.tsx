import React, { useEffect, useState } from 'react';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; className?: string; active?: boolean }> = ({ href, children, onClick, className = '', active }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) {
            onClick(); // Execute the callback, e.g., to close the mobile menu.
        }
        // update hash for accessibility and active state
        if (history.pushState) {
            history.pushState(null, '', href);
        } else {
            window.location.hash = href;
        }
    };

    return (
        <a href={href} onClick={handleNavClick} aria-current={active ? 'page' : undefined} className={`text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors ${active ? 'font-semibold text-primary-light dark:text-primary-dark' : ''} ${className}`}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState<string>(window.location.hash || '#hero');

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
    };

    useEffect(() => {
        const handler = () => setActiveHash(window.location.hash || '#hero');
        window.addEventListener('hashchange', handler);
        return () => window.removeEventListener('hashchange', handler);
    }, []);

    return (
        <header id="header" className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {/* Skip to content link */}
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark px-3 py-2 rounded">Skip to content</a>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={handleLogoClick} className="text-xl font-bold text-primary-light dark:text-primary-dark">CD</a>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink href="#about" active={activeHash === '#about'}>About</NavLink>
                    <NavLink href="#projects" active={activeHash === '#projects'}>Projects</NavLink>
                    <NavLink href="#skills" active={activeHash === '#skills'}>Skills</NavLink>
                    <NavLink href="#how-i-build-ai" active={activeHash === '#how-i-build-ai'}>AI Process</NavLink>
                    <NavLink href="#film-credits" active={activeHash === '#film-credits'}>Film Credits</NavLink>
                    <NavLink href="#contact" active={activeHash === '#contact'}>Contact</NavLink>
                </div>
                
                {/* Right Side Controls */}
                <div className="flex items-center space-x-2">
                    <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        {theme === 'light' ? (
                            <i className="fa-solid fa-moon text-on-surface-variant-light"></i>
                        ) : (
                            <i className="fa-solid fa-sun text-on-surface-variant-dark"></i>
                        )}
                    </button>
                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            aria-label="Toggle Menu" 
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-10 h-10 flex items-center justify-center"
                        >
                            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl text-on-surface-variant-light dark:text-on-surface-variant-dark`}></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <div 
                id="mobile-menu"
                className={`md:hidden container mx-auto px-6 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="pb-4 pt-2 space-y-1">
                    <NavLink href="#about" active={activeHash === '#about'} onClick={closeMenu} className="block py-2 text-base font-medium">About</NavLink>
                    <NavLink href="#projects" active={activeHash === '#projects'} onClick={closeMenu} className="block py-2 text-base font-medium">Projects</NavLink>
                    <NavLink href="#skills" active={activeHash === '#skills'} onClick={closeMenu} className="block py-2 text-base font-medium">Skills</NavLink>
                    <NavLink href="#how-i-build-ai" active={activeHash === '#how-i-build-ai'} onClick={closeMenu} className="block py-2 text-base font-medium">AI Process</NavLink>
                    <NavLink href="#film-credits" active={activeHash === '#film-credits'} onClick={closeMenu} className="block py-2 text-base font-medium">Film Credits</NavLink>
                    <NavLink href="#contact" active={activeHash === '#contact'} onClick={closeMenu} className="block py-2 text-base font-medium">Contact</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
