import React from "react";
import Section from "./Section";

const TrustedBy: React.FC = () => {
  const brands = [
    { src: "/assets/logos/avatar.png", alt: "Avatar: The Way of Water" },
    { src: "/assets/logos/disney.png", alt: "Disney" },
    { src: "/assets/logos/warner.png", alt: "Warner Bros" },
    { src: "/assets/logos/stanford.png", alt: "Stanford" },
  ];

  return (
    <Section id="trusted-by" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Trusted By
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80 md:text-xl">
          Collaborating with industry leaders to build exceptional digital experiences
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className="group flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-xl group-hover:shadow-primary-light/20">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-16 w-auto object-contain transition-all duration-300 md:h-20 lg:h-24"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TrustedBy;

