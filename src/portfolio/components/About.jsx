import { FaRegEnvelope } from "react-icons/fa";
import { Magnetic } from "../../components/Magnetic";
import { Reveal } from "../../components/Reveal";
import { TiltCard } from "../../components/TiltCard";
import { RoleRotator } from "../../components/RoleRotator";

const FLOATERS = [
  { t: "</>", x: "0%", y: "16%", d: "0s", z: "50px" },
  { t: "{ }", x: "100%", y: "10%", d: "-1.2s", z: "70px" },
  { t: "=>", x: "100%", y: "52%", d: "-0.6s", z: "80px" },
  { t: "npm run", x: "0%", y: "78%", d: "-2.4s", z: "60px" },
  { t: "git push", x: "68%", y: "100%", d: "-3.1s", z: "50px" },
];

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-media">
          <TiltCard className="about-frame">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/hero-480.webp 480w, /images/hero-720.webp 720w, /images/hero-1080.webp 1080w"
                sizes="(max-width: 800px) 80vw, 440px"
              />
              <img
                src="/images/hero-1080.jpg"
                width="1080"
                height="1080"
                loading="lazy"
                decoding="async"
                alt="Portrait of Rahul Dutta in black sunglasses and a black knit sweater, lit by a red studio rim light against a deep crimson backdrop"
              />
            </picture>

            {/* Cinematic FX layers (decorative) */}
            <span className="fx-ring" aria-hidden="true" />
            <span className="fx-clip" aria-hidden="true">
              <span className="fx-grid" />
            </span>
            {FLOATERS.map((f) => (
              <span
                key={f.t}
                className="fx-float"
                style={{ "--x": f.x, "--y": f.y, "--d": f.d, "--z": f.z }}
                aria-hidden="true"
              >
                {f.t}
              </span>
            ))}
          </TiltCard>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="eyebrow">About me</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="about-title" className="about-title">
              I&apos;m Rahul and I&apos;m a <em><RoleRotator /></em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about-text">
              with experience in building scalable and high-performance Web
              Applications and Software. Proficient in modern technologies to
              drive impactful business outcomes. Adept at collaborating with
              cross-functional teams to deliver solutions on time and within
              scope.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <Magnetic>
              <a className="btn btn-primary" href="#contact">
                Let&apos;s connect
                <FaRegEnvelope aria-hidden="true" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
