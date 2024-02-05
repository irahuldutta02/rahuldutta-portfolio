import { useEffect } from "react";
import "../portfolio.css";
import Typed from "typed.js";

export function Home() {
  useEffect(() => {
    // Initialize Typed.js when component mounts
    var typed = new Typed(".typing", {
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
      {/* <!-- home section start --> */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, I'm</div>
            <div className="text-2">Rahul Dutta</div>
            <div className="text-3">
              A <span className="typing"></span>
            </div>
            <div className="home-button-div">
              <a
                className="home-button"
                href="./projects/index.html"
                target="_blank"
              >
                <span>Projects</span>
                <i className="bx bx-laptop bx-tada"></i>
              </a>
              <a
                className="home-button"
                href="https://rahuldutta.bio.link/"
                target="_blank"
                rel="noreferrer"
              >
                <span>My links</span>
                <i className="bx bx-link-external bx-tada"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
