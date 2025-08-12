
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Section from './Section';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
        <picture>
            {project.imageWebp && (
                <source type="image/webp" srcSet={project.imageWebp} />
            )}
            <img
                src={project.imageJpg || project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
            />
        </picture>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4 text-sm flex-grow">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag.name} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tag.colorClass}`}>{tag.name}</span>
                ))}
            </div>
            <div className="flex space-x-4 mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">Live Site <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">GitHub <i className="fa-brands fa-github text-xs"></i></a>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
