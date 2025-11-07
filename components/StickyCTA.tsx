import React from "react";

const StickyCTA: React.FC = () => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isOnCaseStudy = window.location.hash.startsWith("#/case/");

    if (!isOnCaseStudy) {
      // Only do smooth scroll if on the main page
      e.preventDefault();
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }
    // If on a case study page, do nothing here and let the default
    // anchor link behavior navigate to /#projects.
  };

  return (
    <div className="pointer-events-none fixed bottom-3 left-0 right-0 z-40 px-4 md:hidden">
      <div className="pointer-events-auto mx-auto max-w-md">
        <a
          href="#projects"
          onClick={onClick}
          aria-label="View case studies"
          className="block rounded-full bg-primary-light py-3 text-center font-bold text-white shadow-lg hover:bg-blue-600 dark:bg-primary-dark dark:text-background-dark dark:hover:bg-blue-300"
        >
          View Case Studies
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
