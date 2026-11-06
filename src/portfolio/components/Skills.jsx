import { motion, useReducedMotion } from "framer-motion";
import { stackIcons } from "../../data/stackIcons";
import { useTheme } from "../../theme/useTheme";
import { getTechStack } from "../../data/data";
import { SectionHead } from "../../components/SectionHead";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.035 } } };
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const GROUPS = ["Languages", "Libs & Frameworks", "Databases", "AI & Agents", "Tools & DevOps"];

// Display order inside each group: related skills sit side by side.
const ORDER = [
  // Languages: web foundation -> logic
  "HTML", "CSS", "JavaScript", "TypeScript", "Python",
  // Libs & Frameworks: React ecosystem -> styling -> server (MERN)
  "ReactJs", "NextJs", "React Router", "Redux Toolkit", "RTK Query", "TanStack Query", "Axios", "Framer Motion",
  "Tailwind", "DaisyUI", "Bootstrap",
  "Node Js", "Express Js", "FastAPI", "Socket.io", "Mongoose",
  // Databases
  "MongoDB", "PostgreSQL", "Redis", "Valkey",
  // AI & Agents: model providers -> coding agents / assistants
  "Anthropic", "OpenAI", "Gemini AI", "Claude Code", "Codex", "Antigravity", "Cursor", "GitHub Copilot",
  // Tools & DevOps: version control -> editor & build -> API & quality -> deploy -> OS & design
  "Git", "GitHub", "VS Code", "npm", "Vite", "ESLint", "Postman", "Docker", "Nginx", "Linux", "Figma",
];
const rank = (name) => {
  const i = ORDER.indexOf(name);
  return i === -1 ? ORDER.length : i; // unlisted skills go last
};

export function Skills() {
  const techStack = getTechStack();
  const { theme } = useTheme();
  const reduce = useReducedMotion();

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead eyebrow="Toolkit" title="Tech stack" id="skills-title" />
        <div className="skill-groups">
          {GROUPS.map((group) => {
            const items = techStack
              .filter((t) => t.category === group)
              .sort((a, b) => rank(a.name) - rank(b.name));
            if (!items.length) return null;
            return (
              <section className="skill-group" key={group} aria-label={group}>
                <h3 className="skill-group-title">{group}</h3>
                <motion.ul
                  className="chips"
                  variants={reduce ? undefined : container}
                  initial={reduce ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                >
                  {items.map((tech) => (
                    <motion.li className="chip" key={tech.id} variants={reduce ? undefined : item}>
                      {stackIcons[tech.icon] ? (
                        <span
                          className="chip-icon"
                          aria-hidden="true"
                          // trusted: generated from the tech-stack-icons package at build time
                          dangerouslySetInnerHTML={{
                            __html: stackIcons[tech.icon][theme] ?? stackIcons[tech.icon].dark,
                          }}
                        />
                      ) : (
                        <img src={tech.iconSrc} alt="" width="28" height="28" loading="lazy" decoding="async" />
                      )}
                      <a
                        className="chip-link"
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${tech.name} (opens in a new tab)`}
                      >
                        {tech.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
