import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}> = ({ href, children, onClick, className = "", active }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isOnCaseStudy = window.location.hash.startsWith("#/case/");

    if (!isOnCaseStudy) {
      // Only do smooth scroll if on the main page
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      if (history.pushState) {
        history.pushState(null, "", href);
      } else {
        window.location.hash = href;
      }
    }

    if (onClick) {
      onClick(); // Always close menu if function is provided
    }
  };

  return (
    <a
      href={href}
      onClick={handleNavClick}
      aria-current={active ? "page" : undefined}
      className={`text-on-surface-variant-light transition-colors hover:text-primary-light dark:text-on-surface-variant-dark dark:hover:text-primary-dark ${active ? "font-semibold text-primary-light dark:text-primary-dark" : ""} ${className}`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || "#hero");

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isOnCaseStudy = window.location.hash.startsWith("#/case/");
    if (isOnCaseStudy) {
      window.location.hash = "";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handler = () => setActiveHash(window.location.hash || "#hero");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-gray-200 bg-surface-light/80 backdrop-blur-sm transition-colors duration-300 dark:border-gray-700 dark:bg-surface-dark/80"
    >
      {/* Skip to content link */}
      <a
        href="#main"
        className="sr-only rounded bg-primary-light px-3 py-2 text-white focus:not-sr-only focus:absolute focus:left-2 focus:top-2 dark:bg-primary-dark dark:text-background-dark"
      >
        Skip to content
      </a>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={handleLogoClick}
          className="text-xl font-bold text-primary-light dark:text-primary-dark"
        >
          CD
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <NavLink href="#about" active={activeHash === "#about"}>
            About
          </NavLink>
          <NavLink href="#projects" active={activeHash === "#projects"}>
            Projects
          </NavLink>
          <NavLink href="#skills" active={activeHash === "#skills"}>
            Skills
          </NavLink>
          <NavLink href="#how-i-build-ai" active={activeHash === "#how-i-build-ai"}>
            AI Process
          </NavLink>
          <NavLink href="#film-credits" active={activeHash === "#film-credits"}>
            Film Credits
          </NavLink>
          <NavLink href="#contact" active={activeHash === "#contact"}>
            Contact
          </NavLink>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 text-on-surface-variant-light" />
            ) : (
              <Sun className="h-5 w-5 text-on-surface-variant-dark" />
            )}
          </button>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              className="flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-on-surface-variant-light dark:text-on-surface-variant-dark" />
              ) : (
                <Menu className="h-6 w-6 text-on-surface-variant-light dark:text-on-surface-variant-dark" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`container mx-auto overflow-hidden px-6 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="space-y-1 pb-4 pt-2">
          <NavLink
            href="#about"
            active={activeHash === "#about"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            About
          </NavLink>
          <NavLink
            href="#projects"
            active={activeHash === "#projects"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            Projects
          </NavLink>
          <NavLink
            href="#skills"
            active={activeHash === "#skills"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            Skills
          </NavLink>
          <NavLink
            href="#how-i-build-ai"
            active={activeHash === "#how-i-build-ai"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            AI Process
          </NavLink>
          <NavLink
            href="#film-credits"
            active={activeHash === "#film-credits"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            Film Credits
          </NavLink>
          <NavLink
            href="#contact"
            active={activeHash === "#contact"}
            onClick={closeMenu}
            className="block py-2 text-base font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
