import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaRegEnvelope } from "react-icons/fa";
import { Magnetic } from "../../components/Magnetic";
import { RoleRotator } from "../../components/RoleRotator";
import { ParticleName } from "../../components/ParticleName";

export function Home() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="hero-beam hero-beam-a" />
        <span className="hero-beam hero-beam-b" />
        <span className="hero-floor" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello, I&apos;m
          </motion.span>

          {/* real heading for SEO + screen readers; the canvas is the visual */}
          <h1 id="hero-title" className="sr-only">Rahul Dutta</h1>
          <ParticleName text="Rahul Dutta" className="hero-name" />

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A <RoleRotator className="hero-role-text" />
          </motion.p>

        </div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <Magnetic>
            <a className="btn btn-primary" href="#contact">
              <span>Let&apos;s connect</span>
              <FaRegEnvelope aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic>
            <Link className="btn btn-ghost" to="/projects">
              <span>Projects</span>
              <FaCode aria-hidden="true" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}
