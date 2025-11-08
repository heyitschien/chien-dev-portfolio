import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-6 text-center text-white/70">
        <p>&copy; {new Date().getFullYear()} Chien Duong | Designed & Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
