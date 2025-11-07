import React, { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../constants";
import { Project } from "../types";

interface CaseStudyPageProps {
  projectId: string;
}

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
      className={`toc-link text-sm ${
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
    // Reflect reading progress in a CSS variable to avoid inline styles
    document.documentElement.style.setProperty("--reading-progress", `${progress}%`);
    return () => {
      document.documentElement.style.removeProperty("--reading-progress");
    };
  }, [progress]);

  // Build a gallery of up to 6 items (must be before early return)
  const galleryItems = useMemo(() => {
    if (!project) return new Array(6).fill(null);
    const imgs = project.images ?? [];
    if (imgs.length === 0) return new Array(6).fill(null);
    const out: ((typeof imgs)[number] | null)[] = [];
    let i = 0;
    while (out.length < 6) {
      out.push(imgs[i % imgs.length]);
      i++;
      if (i > 24) break; // guard
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
      {/* Reading progress bar above header */}
      <div
        aria-hidden
        className="progress-bar fixed left-0 top-0 z-[60] h-1 bg-primary-light dark:bg-primary-dark"
      />

      {/* Hero */}
      <section className="border-b border-gray-200 bg-surface-light dark:border-gray-700 dark:bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-light dark:text-primary-dark">
                Case Study
              </p>
              <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">{project.title}</h1>
              <p className="mt-4 text-base text-on-surface-variant-light dark:text-on-surface-variant-dark md:text-lg">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack?.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-neutral-200/60 bg-neutral-100 px-2.5 py-1 text-[11px] text-neutral-700 dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <aside className="self-start rounded-xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-neutral-900">
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
              <div className="space-y-2 pt-3">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 hover:bg-neutral-50 dark:border-gray-700 dark:hover:bg-neutral-800"
                  >
                    <span>Live site</span> <span aria-hidden>→</span>
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 hover:bg-neutral-50 dark:border-gray-700 dark:hover:bg-neutral-800"
                  >
                    <span>GitHub</span> <span aria-hidden>↗</span>
                  </a>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-light px-3 py-2 text-white hover:brightness-95 dark:bg-primary-dark dark:text-background-dark"
                >
                  <span>Book 15-min Call</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* TOC */}
        <nav className="sticky top-24 hidden self-start lg:block" aria-label="On this page">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-neutral-900">
            <p className="mb-3 text-xs uppercase tracking-wide text-on-surface-variant-light dark:text-on-surface-variant-dark">
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
              className="inline-flex items-center font-semibold text-primary-light hover:underline dark:text-primary-dark"
            >
              ← Back to Portfolio
            </a>
          </div>

          {/* Overview */}
          <section
            id="overview"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Overview{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#overview"
                aria-hidden
              >
                #
              </a>
            </h2>
            <p className="mt-3 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              {project.summary}
            </p>
            {heroImg && (
              <div className="mt-4 overflow-hidden rounded-lg shadow">
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

          {/* Goals */}
          <section
            id="goals"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Goals{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#goals"
                aria-hidden
              >
                #
              </a>
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              <li>Deliver a polished creation flow with preview on hover and instant feedback.</li>
              <li>Keep LCP &lt; 2.0s on the hero and ensure smooth scroll/route transitions.</li>
              <li>Stand up analytics and E2E coverage for reliable iteration.</li>
            </ul>
          </section>

          {/* Solution */}
          <section
            id="solution"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Solution{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#solution"
                aria-hidden
              >
                #
              </a>
            </h2>
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
                <div className="mt-4 grid h-36 place-items-center rounded-lg bg-neutral-100 text-sm text-on-surface-variant-light dark:bg-neutral-800 dark:text-on-surface-variant-dark">
                  Architecture diagram placeholder
                </div>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section
            id="metrics"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Impact &amp; Metrics{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#metrics"
                aria-hidden
              >
                #
              </a>
            </h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-3">
              {metrics.map((m, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-gray-200 bg-neutral-50 p-4 dark:border-gray-700 dark:bg-neutral-800/50"
                >
                  <div className="text-lg font-extrabold md:text-2xl">{m.split(" ")[0]}</div>
                  <div className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    {m.substring(m.indexOf(" ")).trim()}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-on-surface-variant-light dark:text-on-surface-variant-dark">
              (*Replace with real numbers when available.)
            </p>
          </section>

          {/* Process */}
          <section
            id="process"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Process{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#process"
                aria-hidden
              >
                #
              </a>
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
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
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                >
                  <div className="text-xs font-semibold uppercase text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    {s.step}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section
            id="architecture"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Architecture Notes{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#architecture"
                aria-hidden
              >
                #
              </a>
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              <li>Feature-based folders with co-located tests.</li>
              <li>
                Edge-cached media posters; LQIP → full-res swap with fade to avoid black frames.
              </li>
              <li>Strict TS configs; ESLint/Prettier; CI gate on tests and size limits.</li>
            </ul>
            <pre className="mt-4 overflow-auto whitespace-pre-wrap rounded-lg bg-neutral-900 p-4 text-xs text-neutral-100">
              <code>{`// Example route guard (simplified)
import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const authed = useAuth();
  const loc = useLocation();
  return authed ? children : <Navigate to="/signin" state={{ from: loc }} replace />;
}`}</code>
            </pre>
          </section>

          {/* Testing & Perf */}
          <section
            id="testing"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Testing &amp; Performance{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#testing"
                aria-hidden
              >
                #
              </a>
            </h2>
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

          {/* Lessons */}
          <section
            id="lessons"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Challenges &amp; Lessons{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#lessons"
                aria-hidden
              >
                #
              </a>
            </h2>
            <p className="mt-3 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Balancing high-quality media with fast first paint required a dedicated poster
              strategy and careful preloading. AI tools accelerated scaffolding but still needed
              strong human review for edge cases (responsive states, focus management).
            </p>
          </section>

          {/* Results */}
          <section
            id="results"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Results{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#results"
                aria-hidden
              >
                #
              </a>
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant-light dark:text-on-surface-variant-dark">
              <li>Shipped creation flow with stable preview interactions.</li>
              <li>Established testing/analytics foundation for ongoing experiments.</li>
              <li>Improved perceived performance with LCP below 2s.</li>
            </ul>
            <blockquote className="mt-6 border-l-4 pl-4 italic text-on-surface-variant-light dark:text-on-surface-variant-dark">
              “Chien communicates like a PM and ships like a senior FE. He moved us from concept to
              a clean, fast site.” — Founder, AI startup
            </blockquote>
          </section>

          {/* Gallery */}
          <section
            id="gallery"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-neutral-900"
          >
            <h2 className="text-2xl font-bold">
              Gallery{" "}
              <a
                className="ml-1 text-primary-light opacity-0 hover:opacity-100 dark:text-primary-dark"
                href="#gallery"
                aria-hidden
              >
                #
              </a>
            </h2>
            <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
              Replace gray boxes with real screenshots or short MP4/WebM loops.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((g, idx) => (
                <div
                  key={idx}
                  className="aspect-video overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800"
                >
                  {g ? (
                    <img
                      src={g.src}
                      alt={g.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-light px-5 py-3 text-white shadow hover:brightness-95 dark:bg-primary-dark dark:text-background-dark"
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
