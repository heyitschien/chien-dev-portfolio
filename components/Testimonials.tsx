import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";
import { Testimonial } from "../types";
import Section from "./Section";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:border-white/30">
    <Quote className="mb-4 h-8 w-8 text-primary-light" />
    <p className="mb-4 italic text-white/90 text-lg leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div className="font-semibold text-white">{testimonial.author}</div>
    <div className="text-sm text-white/70">{testimonial.role}</div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-white">Testimonials</h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
