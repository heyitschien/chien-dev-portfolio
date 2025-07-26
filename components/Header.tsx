import React, { useState } from 'react';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ href, children, onClick, className = '' }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) {
            onClick(); // Execute the callback, e.g., to close the mobile menu.
        }
    };

    return (
        <a href={href} onClick={handleNavClick} className={`text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors ${className}`}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
    };

    return (
        <header id="header" className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={handleLogoClick} className="text-xl font-bold text-primary-light dark:text-primary-dark">CD</a>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
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
                            aria-expanded={isMenuOpen}
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
                    <NavLink href="#about" onClick={closeMenu} className="block py-2 text-base font-medium">About</NavLink>
                    <NavLink href="#projects" onClick={closeMenu} className="block py-2 text-base font-medium">Projects</NavLink>
                    <NavLink href="#skills" onClick={closeMenu} className="block py-2 text-base font-medium">Skills</NavLink>
                    <NavLink href="#contact" onClick={closeMenu} className="block py-2 text-base font-medium">Contact</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
