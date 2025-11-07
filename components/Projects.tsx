 
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Section from './Section';

const StackBadge: React.FC<{ label: string }> = ({ label }) => (
    <span
        className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
        title={label}
    >
        {label}
    </span>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const img = project.images && project.images[0];
    const impact = project.impact?.slice(0, 3) ?? [];
    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
            {img && (
                <div className="relative h-48">
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white font-semibold text-sm drop-shadow-sm">
                        {project.title}
                    </div>
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1">{project.role}{project.org ? ` • ${project.org}` : ''}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                {project.problem && (
                    <div className="mb-3">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">Problem</div>
                        <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">{project.problem}</p>
                    </div>
                )}
                {(project.solution || project.summary) && (
                    <div className="mb-3">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">What I built</div>
                        <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">{project.solution ?? project.summary}</p>
                    </div>
                )}
                {impact.length > 0 && (
                    <div className="mb-3">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">Impact / metrics</div>
                        <ul className="list-disc list-inside text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark space-y-1">
                            {impact.map((pt: string, idx: number) => (
                                <li key={idx}>{pt}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {project.stack?.length > 0 && (
                    <div className="mb-4">
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1">Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((item: string) => (
                                <StackBadge key={item} label={item} />)
                            )}
                        </div>
                    </div>
                )}
                <div className="flex items-center space-x-4 mt-auto pt-2">
                    {project.links?.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline inline-flex items-center gap-1">Live <ExternalLink className="w-3 h-3" /></a>
                    )}
                    {project.links?.repo && (
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline inline-flex items-center gap-1">GitHub <Github className="w-3 h-3" /></a>
                    )}
                    {project.links?.caseStudy && (
                        <a href={project.links.caseStudy} className="font-semibold text-primary-light dark:text-primary-dark hover:underline">Read case study →</a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const sorted = [...PROJECTS].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    return (
        <Section id="projects">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sorted.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
 
