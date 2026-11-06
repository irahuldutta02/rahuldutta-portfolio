import { FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getSocialLinks } from "../../data/data";
import { Magnetic } from "../../components/Magnetic";
import { Reveal } from "../../components/Reveal";
import { SectionHead } from "../../components/SectionHead";

const ICONS = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead eyebrow="Let's connect" title="Contact me" id="contact-title" />
        <Reveal className="glass contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <h3 className="contact-lead">
            Keep it direct. If there is a role or project, let&apos;s talk.
          </h3>
          <div className="contact-actions">
            <Magnetic>
              <a className="btn btn-primary" href="mailto:rdtech2002@gmail.com">
                Email me <FaRegEnvelope aria-hidden="true" />
              </a>
            </Magnetic>
            <ul className="socials">
              {getSocialLinks().map((s) => {
                const Icon = ICONS[s.id];
                return (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.alt}>
                      {Icon ? <Icon aria-hidden="true" /> : <img src={s.iconSrc} alt="" width="22" height="22" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
