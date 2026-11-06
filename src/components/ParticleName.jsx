import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "../theme/useTheme";

const PALETTE = {
  dark: { base: "rgb(247,234,224)", hot: "rgb(255,92,60)", glow: "rgba(255,59,59,0.35)" },
  light: { base: "rgb(40,6,12)", hot: "rgb(214,24,48)", glow: "rgba(200,16,46,0.25)" },
};

/**
 * Renders `text` as a field of particles. They fly in on load, are pushed away
 * by the pointer, then spring back. Static (settled) when reduced motion is on.
 * The real text lives in a sibling <h1>; this canvas is decorative.
 */
export function ParticleName({ text, className }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const { theme } = useTheme();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pal = PALETTE[theme] ?? PALETTE.dark;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0, h = 0, n = 0;
    let X, Y, TX, TY, VX, VY, PH;
    let raf = 0, running = false, cancelled = false;
    let last = performance.now();
    const pointer = { x: -9999, y: -9999 };
    const FONT = '700 {S}px "Space Grotesk", "Inter", system-ui, sans-serif';

    function build() {
      const cw = wrap.clientWidth;
      if (!cw) return;
      const narrow = cw < 640;
      const lines = narrow ? text.split(" ") : [text];
      const probe = document.createElement("canvas").getContext("2d");
      probe.font = FONT.replace("{S}", "100");
      const widest = Math.max(...lines.map((l) => probe.measureText(l).width));
      const maxW = Math.min(cw, 1100) * (narrow ? 0.94 : 1);
      const fs = Math.min((maxW / widest) * 100, narrow ? 190 : 230);
      const lineH = fs * 1.02;
      w = cw;
      h = Math.ceil(lineH * lines.length + fs * 0.25);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;

      // rasterise the text, then sample it on a grid
      const off = document.createElement("canvas");
      off.width = Math.round(w);
      off.height = Math.round(h);
      const o = off.getContext("2d", { willReadFrequently: true });
      o.font = FONT.replace("{S}", String(fs));
      o.textAlign = "center";
      o.textBaseline = "alphabetic";
      o.fillStyle = "#fff";
      lines.forEach((l, i) => o.fillText(l, w / 2, fs * 0.82 + i * lineH));
      const img = o.getImageData(0, 0, off.width, off.height).data;

      const step = Math.max(2.4, fs / (narrow ? 66 : 54));
      const tx = [], ty = [];
      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          if (img[(Math.floor(y) * off.width + Math.floor(x)) * 4 + 3] > 140) {
            tx.push(x + (Math.random() - 0.5) * step * 0.5);
            ty.push(y + (Math.random() - 0.5) * step * 0.5);
          }
        }
      }
      n = tx.length;
      TX = Float32Array.from(tx);
      TY = Float32Array.from(ty);
      X = new Float32Array(n);
      Y = new Float32Array(n);
      VX = new Float32Array(n);
      VY = new Float32Array(n);
      PH = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        PH[i] = Math.random() * 6.283;
        if (reduce) {
          X[i] = TX[i];
          Y[i] = TY[i];
        } else {
          // start scattered around the canvas, then fly in
          const a = Math.random() * 6.283;
          const r = Math.max(w, h) * (0.35 + Math.random() * 0.6);
          X[i] = w / 2 + Math.cos(a) * r;
          Y[i] = h / 2 + Math.sin(a) * r * 0.6;
        }
      }
    }

    // Physics runs in sub-steps so a slow/late frame still settles on schedule.
    function step(dt, t, R, R2) {
      const damp = Math.pow(0.86, dt);
      for (let i = 0; i < n; i++) {
        // gentle idle shimmer on the target so the text feels alive
        const gx = TX[i] + Math.sin(t * 1.3 + PH[i]) * 0.7;
        const gy = TY[i] + Math.cos(t * 1.1 + PH[i]) * 0.7;
        let vx = VX[i], vy = VY[i];

        vx += (gx - X[i]) * 0.045 * dt;
        vy += (gy - Y[i]) * 0.045 * dt;

        const dx = X[i] - pointer.x, dy = Y[i] - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / R) * 5.5;
          vx += (dx / d) * f * dt;
          vy += (dy / d) * f * dt;
        }

        vx *= damp;
        vy *= damp;
        X[i] += vx * dt;
        Y[i] += vy * dt;
        VX[i] = vx;
        VY[i] = vy;
      }
    }

    function frame(now, settle = false) {
      const total = settle ? 0 : Math.min((now - last) / 16.67, 6); // 16.67ms = 1 unit; capped so slow frames can't snowball
      last = now;
      const t = now / 1000;
      const R = Math.min(130, Math.max(70, w * 0.09));
      const R2 = R * R;
      const steps = Math.min(3, Math.max(1, Math.ceil(total / 2)));
      for (let k = 0; k < steps; k++) step(total ? total / steps : 1, t, R, R2);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const size = Math.max(1.6, w / 600);
      let hotMode = false;
      ctx.fillStyle = pal.base;
      for (let i = 0; i < n; i++) {
        const hot = VX[i] * VX[i] + VY[i] * VY[i] > 1.4;
        if (hot !== hotMode) {
          hotMode = hot;
          ctx.fillStyle = hot ? pal.hot : pal.base;
        }
        ctx.fillRect(X[i] - size / 2, Y[i] - size / 2, size, size);
      }
    }

    const loop = (now) => {
      frame(now);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce || cancelled) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };

    let io, ro;
    const init = () => {
      if (cancelled) return;
      build();
      if (reduce) {
        frame(performance.now());
      } else {
        start();
      }
      ro = new ResizeObserver(() => {
        build();
        if (reduce) frame(performance.now());
      });
      ro.observe(wrap);
      io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
      io.observe(canvas);
    };

    // wait for the display font so the sampled glyphs are the right shape
    const fontReady = document.fonts?.load
      ? document.fonts.load('700 100px "Space Grotesk"').catch(() => {})
      : Promise.resolve();
    fontReady.then(init);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelled = true;
      stop();
      ro?.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [text, theme, reduce]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ width: "100%", display: "block" }} />
    </div>
  );
}
