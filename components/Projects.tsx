import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import Section from "./Section";

const StackBadge: React.FC<{ label: string }> = ({ label }) => (
  <span
    className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white/90 transition-all hover:scale-105"
    title={label}
  >
    {label}
  </span>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const img = project.images && project.images[0];
  const impact = project.impact?.slice(0, 3) ?? [];
  return (
    <div className="group flex transform flex-col overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/30">
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
        <div className="mb-1 text-sm text-white/70">
          {project.role}
          {project.org ? ` • ${project.org}` : ""}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        {project.problem && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-1">
              Problem
            </div>
            <p className="text-sm text-white/90">
              {project.problem}
            </p>
          </div>
        )}
        {(project.solution || project.summary) && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-1">
              What I built
            </div>
            <p className="text-sm text-white/90">
              {project.solution ?? project.summary}
            </p>
          </div>
        )}
        {impact.length > 0 && (
          <div className="mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-1">
              Impact / metrics
            </div>
            <ul className="list-inside list-disc space-y-1 text-sm text-white/90">
              {impact.map((pt: string, idx: number) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
        {project.stack?.length > 0 && (
          <div className="mb-4">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">
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
              className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-white/80"
            >
              Live <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-white/80"
            >
              GitHub <Github className="h-3 w-3" />
            </a>
          )}
          {project.links?.caseStudy && (
            <a
              href={project.links.caseStudy}
              className="font-semibold text-white transition-colors hover:text-white/80"
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
      <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
