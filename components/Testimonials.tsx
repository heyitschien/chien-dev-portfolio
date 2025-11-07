import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";
import { Testimonial } from "../types";
import Section from "./Section";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="rounded-2xl bg-surface-light p-8 shadow-md dark:bg-surface-dark">
    <Quote className="mb-4 h-8 w-8 text-primary-light dark:text-primary-dark" />
    <p className="mb-4 italic text-on-surface-variant-light dark:text-on-surface-variant-dark">
      "{testimonial.quote}"
    </p>
    <div className="font-semibold">{testimonial.author}</div>
    <div className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
      {testimonial.role}
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <h2 className="mb-12 text-center text-4xl font-bold">Testimonials</h2>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
