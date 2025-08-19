import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Skill } from '../types';
import Section from './Section';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
        <i className={`${skill.iconClass} text-5xl text-primary-light dark:text-primary-dark mb-2`} aria-hidden></i>
        <p>{skill.name}</p>
    </div>
);

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
            {SKILL_CATEGORIES.map(category => (
                <div key={category.title} className="mb-12">
                    <h3 className="text-2xl font-semibold text-center mb-8">{category.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {category.skills.map(skill => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default Skills;
