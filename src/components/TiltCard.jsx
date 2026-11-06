import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

/** 3D tilt + moving glare. Falls back to a static card for touch / reduced motion. */
export function TiltCard({ children, className, max = 10 }) {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 18, mass: 0.5 };
  const rotY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const rotX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const glare = useTransform(
    [px, py],
    ([x, y]) =>
      `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.28), rgba(255,59,59,0.12) 30%, transparent 60%)`
  );

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  if (reduce || !fine) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
      <motion.span className="tilt-glare" style={{ backgroundImage: glare }} aria-hidden="true" />
    </motion.div>
  );
}
