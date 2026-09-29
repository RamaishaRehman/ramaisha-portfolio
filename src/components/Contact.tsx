"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden py-32 sm:py-48">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,var(--color-blush),var(--color-cyan),var(--color-blush-2),var(--color-lime),var(--color-blush))] opacity-40 blur-[120px] animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_80%)]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lime sm:text-sm">Contact</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display text-[clamp(3.2rem,12vw,11rem)] leading-[0.88]">
            Let&apos;s build
            <br />
            <span className="text-gradient">something bold.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg leading-relaxed text-paper/80 sm:text-2xl">
            If there is a process eating your team&apos;s time, tell me what it looks like today and I will tell you honestly whether, and how, it should be automated.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="display inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-lg text-ink hover:bg-lime transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_-10px_var(--color-lime)] sm:text-2xl"
          >
            {site.email}
            <ArrowUpRight className="h-6 w-6" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-14 items-center gap-2 rounded-full border border-paper/25 px-5 text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:border-lime hover:text-lime cursor-pointer"
            aria-live="polite"
          >
            {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </Reveal>

        <Reveal delay={0.4}>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {site.socials.map((s) => (
              <li key={s.label} data-accent={s.accent}>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="group inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:accent-text"
                >
                  {s.label}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </motion.a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript and too much coffee.
        </span>
        <a href="#top" className="font-semibold uppercase tracking-[0.2em] transition-colors hover:text-lime">
          Back to top
        </a>
      </div>
    </footer>
  );
}
