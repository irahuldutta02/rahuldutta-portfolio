import { useEffect } from "react";
import Typed from "typed.js";
import rahulDuttaImage from "../../assets/images/rahul-dutta.png";
import { getSocialLinks } from "../../data/data";

export function About() {
  useEffect(() => {
    // Initialize Typed.js when component mounts
    var typed = new Typed(".typing-2", {
      strings: ["Full Stack Developer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Clean up Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* <!-- about section start --> */}

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img
                src={rahulDuttaImage}
                width="320"
                height="320"
                alt="rahul-dutta-image"
              />
            </div>
            <div className="column right">
              <div className="text">
                I'm Rahul and I'm a <span className="typing-2"></span>
              </div>
              <p>
                I'm a Ambitious individual with strong technical skills in full
                stack developmet as well as excellent interpersonal & management
                skills, enabling me to interact with a wide range of industries.
                Ready to contribute in a dynamic environment that offers
                opportunities to grow and learn new things in the work field.
              </p>
              <br />
              <div className="about-social-icons">
                {getSocialLinks().map((s) => (
                  <a key={s.id} target="_blank" href={s.href} rel="noreferrer">
                    <img src={s.iconSrc} alt={s.alt} />
                  </a>
                ))}
              </div>
              <div className="about-hireme-btn">
                <a className="about-button" href="#contact">
                  Hire me{" "}
                  <i className="fa-solid fa-hand-point-down fa-bounce"></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1uGMN5bGO7-6gSVstjHhgSMpfJ2-R9n6b/view?usp=sharing"
                  className="about-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume <i className="fa-solid fa-download fa-bounce"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
