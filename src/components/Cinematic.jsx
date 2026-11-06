import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Site-wide film layer: grain, vignette, and a pointer-following red glow.
 * Also feeds --mx/--my to `.glass` cards so their spotlight tracks the cursor.
 */
export function Cinematic() {
  const glow = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = glow.current;
    let raf = 0;

    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--cx", `${e.clientX}px`);
        el.style.setProperty("--cy", `${e.clientY}px`);
        el.classList.add("on");
        const card = e.target.closest?.(".glass, .chip");
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
      });
    };
    const onLeave = () => el.classList.remove("on");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <>
      <div ref={glow} className="fx-cursor" aria-hidden="true" />
      <div className="fx-stripes" aria-hidden="true" />
      <div className="fx-vignette" aria-hidden="true" />
      <div className="fx-grain" aria-hidden="true" />
    </>
  );
}
