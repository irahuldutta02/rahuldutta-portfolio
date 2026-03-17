import { useEffect } from "react";

import { Link } from "react-router-dom";
import Typed from "typed.js";

export function Home() {
  useEffect(() => {
    // Initialize Typed.js when component mounts
    var typed = new Typed(".typing", {
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
      {/* home section start */}
      <section className="home" id="home">
        {/* Leaky code decorations */}
        <div className="code-leak code-leak-left" style={{ top: "20%" }} aria-hidden="true">
          <div><span className="cl-keyword">const</span> <span className="cl-variable">dev</span> <span className="cl-operator">=</span> {"{"}</div>
          <div>{"  name: "}<span className="cl-string">'Rahul'</span>,</div>
          <div>{"  role: "}<span className="cl-string">'fullstack'</span>,</div>
          <div>{"  stack: ["}<span className="cl-string">'React'</span>,</div>
          <div>{"    "}<span className="cl-string">'Node'</span>, <span className="cl-string">'MongoDB'</span>],</div>
          <div>{"  available: "}<span className="cl-boolean">true</span>,</div>
          <div>{"};"}</div>
          <div>&nbsp;</div>
          <div><span className="cl-keyword">async function</span> <span className="cl-function">build</span>() {"{"}</div>
          <div>{"  "}<span className="cl-keyword">const</span> <span className="cl-variable">app</span> <span className="cl-operator">=</span> <span className="cl-keyword">await</span></div>
          <div>{"    "}<span className="cl-function">createApp</span>(config);</div>
          <div>{"  "}<span className="cl-keyword">return</span> app.<span className="cl-function">deploy</span>();</div>
          <div>{"}"}</div>
        </div>
        <div className="code-leak code-leak-right" style={{ top: "30%" }} aria-hidden="true">
          <div><span className="cl-keyword">import</span> {"{ "}useState{" }"}</div>
          <div>{"  "}<span className="cl-keyword">from</span> <span className="cl-string">'react'</span>;</div>
          <div>&nbsp;</div>
          <div><span className="cl-keyword">export default</span></div>
          <div>{"  "}<span className="cl-keyword">function</span> <span className="cl-function">App</span>() {"{"}</div>
          <div>{"  "}<span className="cl-keyword">const</span> [data,</div>
          <div>{"    setData] "}<span className="cl-operator">=</span></div>
          <div>{"    "}<span className="cl-function">useState</span>(<span className="cl-boolean">null</span>);</div>
          <div>&nbsp;</div>
          <div>{"  "}<span className="cl-function">useEffect</span>(() <span className="cl-keyword">{"=>"}</span> {"{"}</div>
          <div>{"    "}<span className="cl-function">fetchData</span>()</div>
          <div>{"      ."}<span className="cl-function">then</span>(res <span className="cl-keyword">{"=>"}</span></div>
          <div>{"        "}<span className="cl-function">setData</span>(res))</div>
          <div>{"  }, []);"}</div>
          <div>{"}"}</div>
        </div>

        <div className="max-width">
          <div className="home-content">
            <div className="text-1">
              <span className="code-comment">{"// "}</span>Hello, I'm
            </div>
            <div className="text-2">Rahul Dutta</div>
            <div className="text-3">
              <span className="code-prefix">{">"} </span>
              A <span className="typing"></span>
              <span className="cursor-blink">_</span>
            </div>
            <div className="home-button-div">
              <Link className="home-button" to="/projects">
                <span>Projects</span>
                <i className="fa-solid fa-code"></i>
              </Link>
              <a
                className="home-button"
                href="https://rahuldutta.bio.link/"
                target="_blank"
                rel="noreferrer"
              >
                <span>My links</span>
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
