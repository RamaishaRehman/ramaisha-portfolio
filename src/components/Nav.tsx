"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/70 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="display text-xl sm:text-2xl tracking-tight">
          {site.firstName}
          <span className="text-lime">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:text-paper"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-paper px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-lime hover:text-[var(--color-ink)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_var(--color-lime)] md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden cursor-pointer"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-paper transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-paper transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {site.nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="display block py-3 text-3xl transition-colors hover:text-lime"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
