import React, { useEffect, useMemo, useState } from "react";
import {
  Target,
  Lightbulb,
  BarChart3,
  Workflow,
  Network,
  TestTube,
  AlertCircle,
  Trophy,
  Eye,
  Images,
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Zap,
  Shield,
  Gauge,
} from "lucide-react";
import { PROJECTS } from "../constants";
import { Project } from "../types";

interface CaseStudyPageProps {
  projectId: string;
}

// Helper function to get tech badge color classes
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
  return "bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700";
};

// Section configuration with colors and icons
const sectionConfig: Record<string, { color: string; icon: React.ComponentType<{ className?: string }>; bgTint: string }> = {
  overview: { color: "border-l-primary-light dark:border-l-primary-dark", icon: Eye, bgTint: "bg-blue-50/30 dark:bg-blue-900/10" },
  goals: { color: "border-l-accent-goals", icon: Target, bgTint: "bg-blue-50/30 dark:bg-blue-900/10" },
  solution: { color: "border-l-accent-solution", icon: Lightbulb, bgTint: "bg-emerald-50/30 dark:bg-emerald-900/10" },
  metrics: { color: "border-l-accent-metrics", icon: BarChart3, bgTint: "bg-purple-50/30 dark:bg-purple-900/10" },
  process: { color: "border-l-accent-process", icon: Workflow, bgTint: "bg-cyan-50/30 dark:bg-cyan-900/10" },
  architecture: { color: "border-l-accent-architecture", icon: Network, bgTint: "bg-teal-50/30 dark:bg-teal-900/10" },
  testing: { color: "border-l-accent-testing", icon: TestTube, bgTint: "bg-amber-50/30 dark:bg-amber-900/10" },
  lessons: { color: "border-l-accent-challenges", icon: AlertCircle, bgTint: "bg-red-50/30 dark:bg-red-900/10" },
  results: { color: "border-l-accent-results", icon: Trophy, bgTint: "bg-green-50/30 dark:bg-green-900/10" },
  gallery: { color: "border-l-primary-light dark:border-l-primary-dark", icon: Images, bgTint: "bg-neutral-50/30 dark:bg-neutral-800/20" },
};

// Process step colors
const processStepColors = [
  { gradient: "from-blue-400 to-blue-500", bg: "bg-blue-50 dark:bg-blue-900/30", border: "border-blue-200 dark:border-blue-700" },
  { gradient: "from-emerald-400 to-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/30", border: "border-emerald-200 dark:border-emerald-700" },
  { gradient: "from-amber-400 to-amber-500", bg: "bg-amber-50 dark:bg-amber-900/30", border: "border-amber-200 dark:border-amber-700" },
  { gradient: "from-fuchsia-400 to-fuchsia-500", bg: "bg-fuchsia-50 dark:bg-fuchsia-900/30", border: "border-fuchsia-200 dark:border-fuchsia-700" },
  { gradient: "from-cyan-400 to-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-900/30", border: "border-cyan-200 dark:border-cyan-700" },
];

const TocLink: React.FC<{
  targetId: string;
  label: string;
  active: boolean;
}> = ({ targetId, label, active }) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a
      href={`#${targetId}`}
      onClick={onClick}
      className={`toc-link text-sm transition-colors ${
        active
          ? "font-semibold text-primary-light dark:text-primary-dark"
          : "text-on-surface-variant-light hover:text-primary-light dark:text-on-surface-variant-dark dark:hover:text-primary-dark"
      }`}
    >
      {label}
    </a>
  );
};

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Number.isFinite(scrolled) ? scrolled : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler as any);
  }, []);
  return progress;
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const sectionRefs = useMemo(
    () => ids.map((id) => ({ id, el: null as HTMLElement | null })),
    [ids]
  );
  useEffect(() => {
    const opts: IntersectionObserverInit = { rootMargin: "0px 0px -70% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const id = (e.target as HTMLElement).id;
        if (e.isIntersecting) setActive(id);
      });
    }, opts);
    sectionRefs.forEach((ref) => {
      ref.el = document.getElementById(ref.id);
      if (ref.el) io.observe(ref.el);
    });
    return () => io.disconnect();
  }, [sectionRefs]);
  return active;
}

function useJKNav(ids: string[]) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((document.activeElement as HTMLElement)?.tagName?.match(/INPUT|TEXTAREA|SELECT/)) return;
      const currentIdx = ids.findIndex((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect ? rect.top >= 0 && rect.top < window.innerHeight * 0.6 : false;
      });
      if (e.key === "j") {
        const next = Math.min(currentIdx < 0 ? 0 : currentIdx + 1, ids.length - 1);
        const el = document.getElementById(ids[next]);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (e.key === "k") {
        const prev = Math.max(currentIdx < 0 ? 0 : currentIdx - 1, 0);
        const el = document.getElementById(ids[prev]);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [ids]);
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectId }) => {
  const project: Project | undefined = PROJECTS.find((p) => p.id === projectId);

  const sectionIds = useMemo(
    () => [
      "overview",
      "goals",
      "solution",
      "metrics",
      "process",
      "architecture",
      "testing",
      "lessons",
      "results",
      "gallery",
    ],
    []
  );
  const activeId = useScrollSpy(sectionIds);
  useJKNav(sectionIds);
  const progress = useScrollProgress();
  useEffect(() => {
    document.documentElement.style.setProperty("--reading-progress", `${progress}%`);
    return () => {
      document.documentElement.style.removeProperty("--reading-progress");
    };
  }, [progress]);

  const galleryItems = useMemo(() => {
    if (!project) return new Array(6).fill(null);
    const imgs = project.images ?? [];
    if (imgs.length === 0) return new Array(6).fill(null);
    const out: ((typeof imgs)[number] | null)[] = [];
    let i = 0;
    while (out.length < 6) {
      out.push(imgs[i % imgs.length]);
      i++;
      if (i > 24) break;
    }
    return out;
  }, [project]);

  if (!project) {
    return (
      <div className="py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Case study not found</h2>
        <a
          href="#projects"
          className="font-semibold text-primary-light hover:underline dark:text-primary-dark"
        >
          ← Back to Projects
        </a>
      </div>
    );
  }

  const heroImg = project.images && project.images[0];
  const metrics =
    project.impact && project.impact.length > 0
      ? project.impact.slice(0, 3)
      : [
          "1.9s LCP on hero (median)",
          "100 a11y score (Lighthouse)",
          "Preview errors reduced; conversion up",
        ];

  return (
    <div className="relative">
      {/* Reading progress bar */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-primary-light via-accent-metrics to-accent-results dark:from-primary-dark"
        style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-700">
        {/* Full-width gradient background - spans entire viewport */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-surface-light to-accent-solution/5 dark:from-primary-dark/10 dark:via-surface-dark dark:to-accent-solution/10" />
        {/* Content container */}
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-light dark:text-primary-dark">
                Case Study
              </p>
              <h1 className="mt-2 bg-gradient-to-r from-on-surface-light to-primary-light bg-clip-text text-3xl font-extrabold text-transparent dark:from-on-surface-dark dark:to-primary-dark md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-base text-on-surface-variant-light dark:text-on-surface-variant-dark md:text-lg">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack?.map((s) => (
                  <span
                    key={s}
                    className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all hover:scale-105 ${getTechBadgeColor(s)}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <aside className="self-start rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900">
              <dl className="text-sm">
                <div className="flex justify-between border-b border-gray-200 py-2 dark:border-gray-700">
                  <dt className="text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    Role
                  </dt>
                  <dd className="font-medium">{project.role}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2 dark:border-gray-700">
                  <dt className="text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    Timeline
                  </dt>
                  <dd className="font-medium">{project.timeframe ?? "—"}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    Org
                  </dt>
                  <dd className="font-medium">{project.org ?? "—"}</dd>
                </div>
              </dl>
              <div className="space-y-2 pt-4">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 transition-all hover:bg-neutral-50 hover:shadow-md dark:border-gray-700 dark:hover:bg-neutral-800"
                  >
                    <span>Live site</span> <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 transition-all hover:bg-neutral-50 hover:shadow-md dark:border-gray-700 dark:hover:bg-neutral-800"
                  >
                    <span>GitHub</span> <Github className="h-4 w-4" />
                  </a>
                )}
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-light px-3 py-2 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-primary-dark dark:text-background-dark"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book 15-min Call</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* TOC */}
        <nav className="sticky top-24 hidden self-start lg:block" aria-label="On this page">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-neutral-900">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
              On this page
            </p>
            <ol className="space-y-2">
              <li>
                <TocLink targetId="overview" label="Overview" active={activeId === "overview"} />
              </li>
              <li>
                <TocLink targetId="goals" label="Goals" active={activeId === "goals"} />
              </li>
              <li>
                <TocLink targetId="solution" label="Solution" active={activeId === "solution"} />
              </li>
              <li>
                <TocLink
                  targetId="metrics"
                  label="Impact & Metrics"
                  active={activeId === "metrics"}
                />
              </li>
              <li>
                <TocLink targetId="process" label="Process" active={activeId === "process"} />
              </li>
              <li>
                <TocLink
                  targetId="architecture"
                  label="Architecture"
                  active={activeId === "architecture"}
                />
              </li>
              <li>
                <TocLink
                  targetId="testing"
                  label="Testing & Perf"
                  active={activeId === "testing"}
                />
              </li>
              <li>
                <TocLink
                  targetId="lessons"
                  label="Challenges & Lessons"
                  active={activeId === "lessons"}
                />
              </li>
              <li>
                <TocLink targetId="results" label="Results" active={activeId === "results"} />
              </li>
              <li>
                <TocLink targetId="gallery" label="Gallery" active={activeId === "gallery"} />
              </li>
            </ol>
          </div>
        </nav>

        {/* Content */}
        <article className="space-y-10">
          {/* Back link */}
          <div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold text-primary-light transition-all hover:gap-3 hover:underline dark:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </a>
          </div>

          {/* Overview */}
          {(() => {
            const config = sectionConfig.overview;
            const Icon = config.icon;
            return (
              <section
                id="overview"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary-light/10 p-2 dark:bg-primary-dark/20">
                    <Icon className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Overview{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#overview"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <p className="mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  {project.summary}
                </p>
                {heroImg && (
                  <div className="mt-6 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
                    <img
                      src={heroImg.src}
                      alt={heroImg.alt}
                      className="h-64 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </section>
            );
          })()}

          {/* Goals */}
          {(() => {
            const config = sectionConfig.goals;
            const Icon = config.icon;
            return (
              <section
                id="goals"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-goals/10 p-2 dark:bg-accent-goals/20">
                    <Icon className="h-5 w-5 text-accent-goals" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Goals{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#goals"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  <li>Deliver a polished creation flow with preview on hover and instant feedback.</li>
                  <li>Keep LCP &lt; 2.0s on the hero and ensure smooth scroll/route transitions.</li>
                  <li>Stand up analytics and E2E coverage for reliable iteration.</li>
                </ul>
              </section>
            );
          })()}

          {/* Solution */}
          {(() => {
            const config = sectionConfig.solution;
            const Icon = config.icon;
            return (
              <section
                id="solution"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-solution/10 p-2 dark:bg-accent-solution/20">
                    <Icon className="h-5 w-5 text-accent-solution" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Solution{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#solution"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Key Decisions</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                      <li>
                        Router-based layout with guarded routes and optimistic UI for upload/preview.
                      </li>
                      <li>Sharp-powered image pipeline with poster/LQIP strategy for stable media.</li>
                      <li>AI-assisted scaffolds in Cursor/Windsurf, reviewed & refined by hand.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Stack</h3>
                    <p className="mt-2 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                      React, TypeScript, Tailwind, Vite, Playwright
                    </p>
                    <div className="mt-4 grid h-36 place-items-center rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm text-on-surface-variant-light dark:from-neutral-800 dark:to-neutral-900 dark:text-on-surface-variant-dark">
                      Architecture diagram placeholder
                    </div>
                  </div>
                </div>
              </section>
            );
          })()}

          {/* Metrics - Enhanced */}
          {(() => {
            const config = sectionConfig.metrics;
            const Icon = config.icon;
            const metricIcons = [Zap, Shield, Gauge];
            return (
              <section
                id="metrics"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-metrics/10 p-2 dark:bg-accent-metrics/20">
                    <Icon className="h-5 w-5 text-accent-metrics" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Impact &amp; Metrics{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#metrics"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {metrics.map((m, i) => {
                    const MetricIcon = metricIcons[i] || BarChart3;
                    const firstWord = m.split(" ")[0];
                    const rest = m.substring(m.indexOf(" ")).trim();
                    return (
                      <div
                        key={i}
                        className="group/card relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 p-6 shadow-md transition-all hover:scale-105 hover:shadow-xl dark:from-purple-900/20 dark:via-blue-900/20 dark:to-purple-900/20"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <div className="rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-2">
                            <MetricIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div className="text-3xl font-extrabold text-purple-700 dark:text-purple-300">
                          {firstWord}
                        </div>
                        <div className="mt-2 text-sm font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          {rest}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  (*Replace with real numbers when available.)
                </p>
              </section>
            );
          })()}

          {/* Process - Enhanced */}
          {(() => {
            const config = sectionConfig.process;
            const Icon = config.icon;
            const processSteps = [
              {
                step: "Step 1",
                title: "Plan",
                desc: "Requirements → user stories → wireframes (AI draft + human edit).",
              },
              {
                step: "Step 2",
                title: "Build",
                desc: "Pair-programming with guardrails; component library & routing.",
              },
              {
                step: "Step 3",
                title: "Verify",
                desc: "Playwright baselines, unit coverage, a11y checks (axe).",
              },
              {
                step: "Step 4",
                title: "Polish",
                desc: "Perf budget, LCP/CLS targets, bundle analysis.",
              },
              {
                step: "Step 5",
                title: "Ship",
                desc: "Previews, analytics dashboards, post-ship checklist.",
              },
            ];
            return (
              <section
                id="process"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-process/10 p-2 dark:bg-accent-process/20">
                    <Icon className="h-5 w-5 text-accent-process" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Process{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#process"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                  {processSteps.map((s, idx) => {
                    const stepColor = processStepColors[idx % processStepColors.length];
                    return (
                      <div
                        key={idx}
                        className={`group/step relative overflow-hidden rounded-xl border-2 ${stepColor.border} ${stepColor.bg} p-5 shadow-md transition-all hover:scale-105 hover:shadow-xl`}
                      >
                        <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${stepColor.gradient} text-white shadow-md`}>
                          <span className="text-lg font-bold">{idx + 1}</span>
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          {s.step}
                        </div>
                        <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          {s.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })()}

          {/* Architecture */}
          {(() => {
            const config = sectionConfig.architecture;
            const Icon = config.icon;
            return (
              <section
                id="architecture"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-architecture/10 p-2 dark:bg-accent-architecture/20">
                    <Icon className="h-5 w-5 text-accent-architecture" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Architecture Notes{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#architecture"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  <li>Feature-based folders with co-located tests.</li>
                  <li>
                    Edge-cached media posters; LQIP → full-res swap with fade to avoid black frames.
                  </li>
                  <li>Strict TS configs; ESLint/Prettier; CI gate on tests and size limits.</li>
                </ul>
                <pre className="mt-4 overflow-auto whitespace-pre-wrap rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 text-xs text-neutral-100 shadow-inner">
                  <code>{`// Example route guard (simplified)
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const authed = useAuth();
  const loc = useLocation();
  return authed ? children : <Navigate to="/signin" state={{ from: loc }} replace />;
}`}</code>
                </pre>
              </section>
            );
          })()}

          {/* Testing & Perf */}
          {(() => {
            const config = sectionConfig.testing;
            const Icon = config.icon;
            return (
              <section
                id="testing"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-testing/10 p-2 dark:bg-accent-testing/20">
                    <Icon className="h-5 w-5 text-accent-testing" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Testing &amp; Performance{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#testing"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Coverage</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                      <li>Playwright E2E for auth, create flow, and preview interactions.</li>
                      <li>Unit tests for media utilities & route guards.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Perf Budget</h3>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                      <li>LCP: &lt; 2.0s on hero (mid-tier device).</li>
                      <li>CLS: &lt; 0.05; INP: &lt; 200ms.</li>
                      <li>Bundle alerts in CI; lazy routes for heavy code paths.</li>
                    </ul>
                  </div>
                </div>
              </section>
            );
          })()}

          {/* Lessons */}
          {(() => {
            const config = sectionConfig.lessons;
            const Icon = config.icon;
            return (
              <section
                id="lessons"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-challenges/10 p-2 dark:bg-accent-challenges/20">
                    <Icon className="h-5 w-5 text-accent-challenges" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Challenges &amp; Lessons{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#lessons"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <p className="mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  Balancing high-quality media with fast first paint required a dedicated poster
                  strategy and careful preloading. AI tools accelerated scaffolding but still needed
                  strong human review for edge cases (responsive states, focus management).
                </p>
              </section>
            );
          })()}

          {/* Results */}
          {(() => {
            const config = sectionConfig.results;
            const Icon = config.icon;
            return (
              <section
                id="results"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-results/10 p-2 dark:bg-accent-results/20">
                    <Icon className="h-5 w-5 text-accent-results" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Results{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#results"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  <li>Shipped creation flow with stable preview interactions.</li>
                  <li>Established testing/analytics foundation for ongoing experiments.</li>
                  <li>Improved perceived performance with LCP below 2s.</li>
                </ul>
                <blockquote className="mt-6 rounded-lg border-l-4 border-accent-results bg-accent-results/5 p-4 italic text-on-surface-variant-light dark:bg-accent-results/10 dark:text-on-surface-variant-dark">
                  "Chien communicates like a PM and ships like a senior FE. He moved us from concept to
                  a clean, fast site." — Founder, AI startup
                </blockquote>
              </section>
            );
          })()}

          {/* Gallery - Enhanced */}
          {(() => {
            const config = sectionConfig.gallery;
            const Icon = config.icon;
            return (
              <section
                id="gallery"
                className={`group relative rounded-xl border-l-4 border-t border-r border-b ${config.color} ${config.bgTint} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:border-gray-700 dark:bg-neutral-900`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary-light/10 p-2 dark:bg-primary-dark/20">
                    <Icon className="h-5 w-5 text-primary-light dark:text-primary-dark" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Gallery{" "}
                    <a
                      className="ml-1 text-primary-light opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-dark"
                      href="#gallery"
                      aria-hidden
                    >
                      #
                    </a>
                  </h2>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                  Replace gray boxes with real screenshots or short MP4/WebM loops.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {galleryItems.map((g, idx) => (
                    <div
                      key={idx}
                      className="group/gallery relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 shadow-md transition-all hover:scale-105 hover:shadow-xl dark:from-neutral-700 dark:to-neutral-800"
                    >
                      {g ? (
                        <img
                          src={g.src}
                          alt={g.alt}
                          className="h-full w-full object-cover transition-transform group-hover/gallery:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          <Images className="h-12 w-12 opacity-30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* CTA */}
          <section className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-light to-accent-solution px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:from-primary-dark dark:to-accent-solution"
            >
              Discuss a build like this
            </a>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CaseStudyPage;
