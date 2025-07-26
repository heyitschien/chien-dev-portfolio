
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import Section from './Section';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
        <i className={`${skill.iconClass} text-5xl text-primary-light dark:text-primary-dark mb-2`}></i>
        <p>{skill.name}</p>
    </div>
);

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {SKILLS.map(skill => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </div>
        </Section>
    );
};

export default Skills;
