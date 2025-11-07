import React, { useState } from "react";
import { Video, Mail, Linkedin, Github, LayoutGrid, CalendarCheck, Download } from "lucide-react";
import Section from "./Section";
import { INTRO_VIDEO_URL, RESUME_URL } from "../constants";

const EMAIL = "chien.escalera.duong@gmail.com";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: open mailto if clipboard fails
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const toYouTubeEmbed = (url: string): string => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) {
        const id = u.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.hostname.includes("youtube.com")) {
        const id = u.searchParams.get("v");
        if (id) return `https://www.youtube.com/embed/${id}`;
        // already an embed URL or other path
        return url;
      }
      return url;
    } catch {
      return url;
    }
  };

  const renderIntroVideo = () => {
    if (!INTRO_VIDEO_URL) {
      return (
        <div className="rounded-2xl border border-neutral-200/70 bg-surface-light p-6 text-left dark:border-neutral-800/70 dark:bg-surface-dark">
          <div className="flex items-start gap-3">
            <Video
              className="mt-1 h-5 w-5 text-primary-light dark:text-primary-dark"
              aria-hidden="true"
            />
            <div>
              <div className="mb-1 font-semibold">60s Intro</div>
              <p className="text-sm text-on-surface-variant-light dark:text-on-surface-variant-dark">
                Who I am, what I ship, how I work with AI. (Video coming soon)
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (/youtu\.be|youtube\.com/.test(INTRO_VIDEO_URL)) {
      return (
        <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="h-full w-full"
            src={toYouTubeEmbed(INTRO_VIDEO_URL)}
            title="Intro video: Who I am, what I ship, how I work with AI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <video className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg" controls>
        <source src={INTRO_VIDEO_URL} />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <Section id="contact" className="text-center">
      <h2 className="mb-4 text-4xl font-bold">Let's Build Something Great.</h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark">
        I'm currently available for freelance projects and full-time opportunities. Feel free to
        reach out or schedule a chat.
      </p>

      <div className="mb-8 flex items-center justify-center gap-6" aria-label="Contact links">
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email to clipboard"
          title={copied ? "Copied!" : "Copy email"}
          className="transform text-4xl text-on-surface-variant-light transition-transform hover:scale-110 hover:text-primary-light dark:text-on-surface-variant-dark dark:hover:text-primary-dark"
        >
          <Mail className="h-10 w-10" aria-hidden="true" />
          <span className="sr-only">Copy email to clipboard</span>
        </button>
        <a
          href="https://www.linkedin.com/in/chien-duong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="transform text-4xl text-on-surface-variant-light transition-transform hover:scale-110 hover:text-primary-light dark:text-on-surface-variant-dark dark:hover:text-primary-dark"
        >
          <Linkedin className="h-10 w-10" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Chien-Duong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="transform text-4xl text-on-surface-variant-light transition-transform hover:scale-110 hover:text-primary-light dark:text-on-surface-variant-dark dark:hover:text-primary-dark"
        >
          <Github className="h-10 w-10" aria-hidden="true" />
        </a>
      </div>

      <div className="mx-auto mb-8 max-w-3xl">{renderIntroVideo()}</div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-surface-light px-6 py-3 font-semibold text-on-surface-light transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:bg-neutral-800"
        >
          <LayoutGrid className="h-5 w-5" aria-hidden="true" />
          <span>View Case Studies</span>
        </a>
        <a
          href="https://calendly.com/chien-duong/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex transform items-center gap-2 rounded-full bg-primary-light px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600 dark:bg-primary-dark dark:text-background-dark dark:hover:bg-blue-300"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          <span>Schedule a Chat (Calendly)</span>
        </a>
        <a
          href={RESUME_URL || "#"}
          onClick={(e) => {
            if (!RESUME_URL) e.preventDefault();
          }}
          aria-disabled={!RESUME_URL ? "true" : undefined}
          tabIndex={RESUME_URL ? undefined : -1}
          title={RESUME_URL ? "Download Resume (PDF)" : "Resume coming soon"}
          target={RESUME_URL ? "_blank" : undefined}
          rel={RESUME_URL ? "noopener noreferrer" : undefined}
          download={!!RESUME_URL}
          className={`inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-on-surface-light transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-surface-dark dark:text-on-surface-dark dark:hover:bg-neutral-800 ${!RESUME_URL ? "cursor-not-allowed opacity-60" : ""}`}
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
