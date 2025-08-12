
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Section from './Section';

// Lightweight icon mapping for tooling badges
const TOOL_EMOJI: Record<string, string> = {
    'React Router': '🔗',
    'Tailwind CSS v4': '🌀',
    'Tailwind v4': '🌀',
    PostCSS: '🧩',
    Autoprefixer: '⚙️',
    Sharp: '🖼️',
    Playwright: '🎭',
    'Vercel Analytics': '▲',
    Yup: '✅',
    Vitest: '🧪',
    'Testing Library': '📕',
    axe: '♿',
    ESLint: '🧹',
    Prettier: '🎨',
    // Stanford / UX stack
    Figma: '🖌️',
    'Zilane Prototype': '⚡',
    Wix: '🕸️',
    SEO: '🔍',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
        <div className="relative h-48">
            <picture>
                {project.imageWebp && (
                    <source type="image/webp" srcSet={project.imageWebp} />
                )}
                <img
                    src={project.imageJpg || project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-4 text-white font-semibold text-sm drop-shadow-sm">
                {project.title.replace(/^[^A-Za-z0-9]+\s*/, '')}
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4 text-sm flex-grow">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag.name} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tag.colorClass}`}>{tag.name}</span>
                ))}
            </div>
            {project.tooling && project.tooling.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                    {project.tooling.map(tool => (
                        <span
                            key={tool}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                            title={tool}
                        >
                            <span className="mr-1" aria-hidden>{TOOL_EMOJI[tool] ?? '🔧'}</span>{tool}
                        </span>
                    ))}
                </div>
            )}
            {project.roleImpact && (
                <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark mb-4">
                    <span className="font-semibold">Role &amp; Impact:</span> {project.roleImpact}
                </p>
            )}
            <div className="flex items-center space-x-4 mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">Live Site <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>
                {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">GitHub <i className="fa-brands fa-github text-xs"></i></a>
                ) : (
                    <span className="text-on-surface-variant-light dark:text-on-surface-variant-dark text-sm">No public repo</span>
                )}
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
