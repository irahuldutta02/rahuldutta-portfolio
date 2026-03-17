import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../../context/context";

const CODE_SNIPPETS = [
  "const", "let", "var", "=>", "function", "return", "import",
  "export", "async", "await", "class", "new", "this", "if",
  "else", "for", "while", "map", "filter", "reduce", "push",
  "useState", "useEffect", "props", "render", "null", "true",
  "false", "===", "!==", "&&", "||", "...", "[]", "{}", "()",
  "npm", "git", "ssh", "api", "req", "res", "next", "err",
  "try", "catch", "throw", "</>", "<div>", "onClick", "fetch",
  "Promise", ".then", "JSON", "console", ".log", "module",
  "require", "exports", "app.get", "router", "middleware",
  "schema", "model", "query", "select", "from", "where",
  "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER",
  "0x0F", "0b1010", "127.0.0.1", ":3000", "/api/v1", "TCP",
  "HTTP", "POST", "GET", "PUT", "PATCH", "DELETE", "ws://",
  "ssh-rsa", "chmod", "sudo", "grep", "pipe", "stdin",
  "stdout", "stderr", "fork", "exec", "spawn", "kill -9",
  "docker", "kubectl", "deploy", "build", "test", "lint",
];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }
  return { r: 0, g: 229, b: 255 };
}

export function CodeRain() {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    let columns = [];
    let w, h, colCount;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const fontSize = 14;
      colCount = Math.floor(w / (fontSize * 1.8));

      columns = [];
      for (let i = 0; i < colCount; i++) {
        columns.push({
          x: i * (fontSize * 1.8) + Math.random() * 10,
          y: Math.random() * h * -2,
          speed: 0.3 + Math.random() * 0.8,
          chars: [],
          nextCharTime: 0,
          charInterval: 80 + Math.random() * 200,
          opacity: 0.02 + Math.random() * 0.06,
        });
      }
    }

    resize();
    window.addEventListener("resize", resize);

    let lastTime = 0;

    function draw(timestamp) {
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      ctx.fillStyle = "rgba(10, 10, 15, 0.06)";
      ctx.fillRect(0, 0, w, h);

      const rgb = hexToRgb(themeRef.current);

      for (let col of columns) {
        col.y += col.speed * (delta * 0.06);
        col.nextCharTime -= delta;

        if (col.nextCharTime <= 0) {
          const snippet =
            CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          col.chars.push({
            text: snippet,
            y: col.y,
            life: 1.0,
            decay: 0.001 + Math.random() * 0.003,
          });
          col.nextCharTime = col.charInterval;
        }

        for (let i = col.chars.length - 1; i >= 0; i--) {
          const char = col.chars[i];
          char.life -= char.decay * (delta * 0.06);

          if (char.life <= 0) {
            col.chars.splice(i, 1);
            continue;
          }

          const alpha = char.life * col.opacity;
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
          ctx.font = "12px 'Fira Code', monospace";
          ctx.fillText(char.text, col.x, char.y);
        }

        if (col.y > h + 200) {
          col.y = Math.random() * -300;
          col.chars = [];
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="code-rain-canvas" />;
}
