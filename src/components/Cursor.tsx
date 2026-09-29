"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** A soft colour glow that trails the pointer. Hidden on touch devices. */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(96,26,53,0.14) 0%, rgba(240,163,187,0.14) 35%, rgba(246,191,208,0.08) 60%, transparent 72%)",
        filter: "blur(10px)",
      }}
    />
  );
}
