
import React, { useState } from 'react';
import Section from './Section';
import { INTRO_VIDEO_URL, RESUME_URL } from '../constants';

const EMAIL = 'chien.escalera.duong@gmail.com';

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
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.hostname.includes('youtube.com')) {
        const id = u.searchParams.get('v');
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
        <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-surface-light dark:bg-surface-dark p-6 text-left">
          <div className="flex items-start gap-3">
            <i className="fa-solid fa-video text-primary-light dark:text-primary-dark mt-1" aria-hidden="true"></i>
            <div>
              <div className="font-semibold mb-1">60s Intro</div>
              <p className="text-on-surface-variant-light dark:text-on-surface-variant-dark text-sm">Who I am, what I ship, how I work with AI. (Video coming soon)</p>
            </div>
          </div>
        </div>
      );
    }
    if (/youtu\.be|youtube\.com/.test(INTRO_VIDEO_URL)) {
      return (
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={toYouTubeEmbed(INTRO_VIDEO_URL)}
            title="Intro video: Who I am, what I ship, how I work with AI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <video className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg" controls>
        <source src={INTRO_VIDEO_URL} />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <Section id="contact" className="text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Build Something Great.</h2>
      <p className="text-lg text-on-surface-variant-light dark:text-on-surface-variant-dark max-w-2xl mx-auto mb-8">I'm currently available for freelance projects and full-time opportunities. Feel free to reach out or schedule a chat.</p>

      <div className="flex justify-center items-center gap-6 mb-8" aria-label="Contact links">
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email to clipboard"
          title={copied ? 'Copied!' : 'Copy email'}
          className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"
        >
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span className="sr-only">Copy email to clipboard</span>
        </button>
        <a
          href="https://www.linkedin.com/in/chien-duong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/Chien-Duong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-4xl text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-primary-light dark:hover:text-primary-dark transition-transform transform hover:scale-110"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        {renderIntroVideo()}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="bg-surface-light dark:bg-surface-dark border border-neutral-300 dark:border-neutral-700 text-on-surface-light dark:text-on-surface-dark font-semibold py-3 px-6 rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2"
        >
          <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
          <span>View Case Studies</span>
        </a>
        <a
          href="https://calendly.com/chien-duong/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-light hover:bg-blue-600 dark:bg-primary-dark dark:hover:bg-blue-300 dark:text-background-dark text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
        >
          <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
          <span>Schedule a Chat (Calendly)</span>
        </a>
        <a
          href={RESUME_URL || '#'}
          onClick={(e) => { if (!RESUME_URL) e.preventDefault(); }}
          aria-disabled={!RESUME_URL ? 'true' : undefined}
          tabIndex={RESUME_URL ? undefined : -1}
          title={RESUME_URL ? 'Download Resume (PDF)' : 'Resume coming soon'}
          target={RESUME_URL ? '_blank' : undefined}
          rel={RESUME_URL ? 'noopener noreferrer' : undefined}
          download={!!RESUME_URL}
          className={`bg-white dark:bg-surface-dark text-on-surface-light dark:text-on-surface-dark border border-neutral-300 dark:border-neutral-700 font-semibold py-3 px-6 rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2 ${!RESUME_URL ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
