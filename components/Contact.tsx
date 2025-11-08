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
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-left">
          <div className="flex items-start gap-3">
            <Video
              className="mt-1 h-5 w-5 text-white"
              aria-hidden="true"
            />
            <div>
              <div className="mb-1 font-semibold text-white">60s Intro</div>
              <p className="text-sm text-white/70">
                Who I am, what I ship, how I work with AI. (Video coming soon)
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (/youtu\.be|youtube\.com/.test(INTRO_VIDEO_URL)) {
      return (
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
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
      <video className="aspect-video w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg" controls>
        <source src={INTRO_VIDEO_URL} />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <Section id="contact" className="text-center">
      <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-white">Let's Build Something Great.</h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
        I'm currently available for freelance projects and full-time opportunities. Feel free to
        reach out or schedule a chat.
      </p>

      <div className="mb-8 flex items-center justify-center gap-6" aria-label="Contact links">
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email to clipboard"
          title={copied ? "Copied!" : "Copy email"}
          className="transform text-white/80 transition-all hover:scale-110 hover:text-white"
        >
          <Mail className="h-10 w-10" aria-hidden="true" />
          <span className="sr-only">Copy email to clipboard</span>
        </button>
        <a
          href="https://www.linkedin.com/in/chien-duong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="transform text-white/80 transition-all hover:scale-110 hover:text-white"
        >
          <Linkedin className="h-10 w-10" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Chien-Duong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="transform text-white/80 transition-all hover:scale-110 hover:text-white"
        >
          <Github className="h-10 w-10" aria-hidden="true" />
        </a>
      </div>

      <div className="mx-auto mb-8 max-w-3xl">{renderIntroVideo()}</div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-white/20 hover:shadow-lg"
        >
          <LayoutGrid className="h-5 w-5" aria-hidden="true" />
          <span>View Case Studies</span>
        </a>
        <a
          href="https://calendly.com/chien-duong/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex transform items-center gap-2 rounded-full bg-gradient-to-r from-primary-light to-accent-solution px-6 py-3 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:from-primary-dark dark:to-accent-solution"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          <span>Schedule a Chat (Calendly)</span>
        </a>
        <a
          href={RESUME_URL || "#"}
          onClick={(e) => {
            if (!RESUME_URL) e.preventDefault();
          }}
          {...(!RESUME_URL && { "aria-disabled": "true" })}
          tabIndex={RESUME_URL ? undefined : -1}
          title={RESUME_URL ? "Download Resume (PDF)" : "Resume coming soon"}
          target={RESUME_URL ? "_blank" : undefined}
          rel={RESUME_URL ? "noopener noreferrer" : undefined}
          download={!!RESUME_URL}
          className={`inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-white/20 hover:shadow-lg ${!RESUME_URL ? "cursor-not-allowed opacity-60" : ""}`}
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
