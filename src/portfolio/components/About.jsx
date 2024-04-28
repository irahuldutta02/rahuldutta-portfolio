import { useEffect } from "react";
import Typed from "typed.js";

export function About() {
  useEffect(() => {
    // Initialize Typed.js when component mounts
    var typed = new Typed(".typing-2", {
      strings: ["Full Stack Developer"],
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
                src="https://ik.imagekit.io/irahuldutta02/rahuldutta-portfolio/image-rahuldutta-1.png"
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
                <a
                  target="_blank"
                  href="https://linkedin.com/in/irahuldutta02"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/48/linkedin-circled--v1.png"
                    alt="linkedin-@irahuldutta02"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/irahuldutta02/"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="github-@irahuldutta02"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://rahuldutta.hashnode.dev/"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/48/hashnode.png"
                    alt="leetcode-@irahuldutta02"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/irahuldutta02"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/twitterx--v1.png"
                    alt="twitter-@irahuldutta02"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/irahuldutta02"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-@irahuldutta02"
                  />
                </a>
              </div>
              <div className="about-hireme-btn">
                <a className="about-button" href="#contact">
                  Hire me{" "}
                  <i className="fa-solid fa-hand-point-down fa-bounce"></i>
                </a>
                <a
                  href="/files/resume-rahul-dutta.pdf"
                  className="about-button"
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
