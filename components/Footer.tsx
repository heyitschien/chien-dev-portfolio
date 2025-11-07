import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-6 text-center text-on-surface-variant-light dark:text-on-surface-variant-dark">
        <p>&copy; {new Date().getFullYear()} Chien Duong | Designed & Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
