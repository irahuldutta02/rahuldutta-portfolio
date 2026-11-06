import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ROLES = ["Full Stack Developer", "Software Engineer"];
const LONGEST = ROLES.reduce((a, b) => (b.length > a.length ? b : a));
const cell = { gridArea: "1 / 1" };

/** Replaces typed.js: same two roles, no extra dependency, no layout shift. */
export function RoleRotator({ className }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) return <span className={className}>{ROLES[0]}</span>;

  return (
    <span className={className} style={{ display: "inline-grid" }}>
      {/* invisible sizer reserves the widest role's width */}
      <span aria-hidden="true" style={{ ...cell, visibility: "hidden" }}>{LONGEST}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={ROLES[i]}
          style={cell}
          initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-70%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
