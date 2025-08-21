import React from 'react';

const StickyCTA: React.FC = () => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-3 left-0 right-0 md:hidden z-40 px-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href="#projects"
          onClick={onClick}
          aria-label="View case studies"
          className="block text-center bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-300 text-white dark:text-background-dark font-bold py-3 rounded-full shadow-lg"
        >
          View Case Studies
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
