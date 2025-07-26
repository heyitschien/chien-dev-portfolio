
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import Section from './Section';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-md">
        <i className="fa-solid fa-quote-left text-3xl text-primary-light dark:text-primary-dark mb-4"></i>
        <p className="text-on-surface-variant-light dark:text-on-surface-variant-dark italic mb-4">"{testimonial.quote}"</p>
        <div className="font-semibold">{testimonial.author}</div>
        <div className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">{testimonial.role}</div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <Section id="testimonials">
            <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {TESTIMONIALS.map(testimonial => (
                    <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
