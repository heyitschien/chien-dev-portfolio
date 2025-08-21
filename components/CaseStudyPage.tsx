import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Section from './Section';

interface CaseStudyPageProps {
  projectId: string;
}

const Label: React.FC<{ title: string }> = ({ title, children }) => (
  <div className="mb-6">
    <div className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1">{title}</div>
    <div className="text-base text-on-surface-variant-light dark:text-on-surface-variant-dark">{children}</div>
  </div>
);

const StackBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60" title={label}>
    {label}
  </span>
);

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectId }) => {
  const project: Project | undefined = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <Section id="case">
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Case study not found</h2>
          <a href="#projects" className="text-primary-light dark:text-primary-dark font-semibold hover:underline">← Back to Projects</a>
        </div>
      </Section>
    );
  }

  const img = project.images && project.images[0];

  return (
    <Section id="case">
      <div className="max-w-4xl mx-auto">
        <a href="#projects" className="inline-flex items-center text-primary-light dark:text-primary-dark font-semibold hover:underline mb-6">← Back to Projects</a>
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <div className="text-on-surface-variant-light dark:text-on-surface-variant-dark mb-6">
          {project.role}{project.org ? ` • ${project.org}` : ''}{project.timeframe ? ` • ${project.timeframe}` : ''}
        </div>

        {img && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" decoding="async" />
          </div>
        )}

        {project.problem && (
          <Label title="Problem">{project.problem}</Label>
        )}

        {(project.solution || project.summary) && (
          <Label title="What I built">{project.solution ?? project.summary}</Label>
        )}

        {project.impact && project.impact.length > 0 && (
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1">Impact / Metrics</div>
            <ul className="list-disc list-inside text-base text-on-surface-variant-light dark:text-on-surface-variant-dark space-y-1">
              {project.impact.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        {project.stack && project.stack.length > 0 && (
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark mb-2">Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => <StackBadge key={s} label={s} />)}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">Live <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>
          )}
          {project.links?.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-light dark:text-primary-dark hover:underline">GitHub <i className="fa-brands fa-github text-xs"></i></a>
          )}
        </div>
      </div>
    </Section>
  );
};

export default CaseStudyPage;
