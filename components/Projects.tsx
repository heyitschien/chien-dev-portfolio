import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import Section from "./Section";

// Helper function to get tech badge color classes (matching case study page)
const getTechBadgeColor = (tech: string): string => {
  const techLower = tech.toLowerCase();
  if (techLower.includes("react")) return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700";
  if (techLower.includes("typescript") || techLower.includes("ts")) return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700";
  if (techLower.includes("javascript") || techLower.includes("js")) return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700";
  if (techLower.includes("tailwind")) return "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700";
  if (techLower.includes("vite")) return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700";
  if (techLower.includes("playwright")) return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700";
  if (techLower.includes("vercel")) return "bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700";
  if (techLower.includes("figma")) return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700";
  if (techLower.includes("wix")) return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700";
  if (techLower.includes("yup")) return "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700";
  if (techLower.includes("vitest") || techLower.includes("test")) return "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700";
  return "bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700";
};

const StackBadge: React.FC<{ label: string }> = ({ label }) => (
  <span
    className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all hover:scale-105 ${getTechBadgeColor(label)}`}
    title={label}
  >
    {label}
  </span>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const img = project.images && project.images[0];
  const impact = project.impact?.slice(0, 3) ?? [];
  return (
    <div className="group flex transform flex-col overflow-hidden rounded-2xl bg-surface-light shadow-lg shadow-primary-light/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-light/20 dark:bg-surface-dark dark:shadow-primary-dark/5 dark:hover:shadow-primary-dark/20">
      {img && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-4 text-sm font-semibold text-white drop-shadow-lg">
            {project.title}
          </div>
        </div>
      )}
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-1 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
          {project.role}
          {project.org ? ` • ${project.org}` : ""}
        </div>
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        {project.problem && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Problem
            </div>
            <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {project.problem}
            </p>
          </div>
        )}
        {(project.solution || project.summary) && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
              What I built
            </div>
            <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {project.solution ?? project.summary}
            </p>
          </div>
        )}
        {impact.length > 0 && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Impact / metrics
            </div>
            <ul className="list-inside list-disc space-y-1 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {impact.map((pt: string, idx: number) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
        {project.stack?.length > 0 && (
          <div className="mb-4">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item: string) => (
                <StackBadge key={item} label={item} />
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto flex items-center space-x-4 pt-2">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary-light transition-colors hover:text-accent-solution dark:text-primary-dark"
            >
              Live <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary-light transition-colors hover:text-accent-solution dark:text-primary-dark"
            >
              GitHub <Github className="h-3 w-3" />
            </a>
          )}
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              className="font-semibold text-primary-light transition-colors hover:text-accent-solution dark:text-primary-dark"
            >
              Read case study →
            </a>
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
      <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
