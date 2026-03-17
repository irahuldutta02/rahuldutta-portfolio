import { useState } from "react";

import { getTechStack } from "../../data/data";

export function Skills() {
  const [techStack] = useState(getTechStack());

  return (
    <>
      {/* <!-- skills section start --> */}
      <section className="skills" id="skills">
        <div className="code-leak code-leak-left" style={{ top: "20%" }} aria-hidden="true">
          <div><span className="cl-keyword">const</span> <span className="cl-variable">stack</span> <span className="cl-operator">=</span> <span className="cl-keyword">new</span> <span className="cl-function">Set</span>();</div>
          <div>stack.<span className="cl-function">add</span>(<span className="cl-string">'React'</span>);</div>
          <div>stack.<span className="cl-function">add</span>(<span className="cl-string">'NodeJS'</span>);</div>
          <div>stack.<span className="cl-function">add</span>(<span className="cl-string">'Mongo'</span>);</div>
          <div>{" "}</div>
          <div><span className="cl-keyword">for</span> (<span className="cl-keyword">let</span> tech <span className="cl-keyword">of</span> stack) {"{"}</div>
          <div>{"  "}<span className="cl-variable">console</span>.<span className="cl-function">log</span>(tech);</div>
          <div>{"}"}</div>
          <div>{" "}</div>
          <div><span className="cl-comment">{"// constantly learning"}</span></div>
          <div>stack.size<span className="cl-operator">++</span>;</div>
        </div>

        <div className="max-width">
          <h2 className="title">Tech stack</h2>
          <div className="skills-content">
            <div className="inside-coloum">
              {techStack.map((tech) => {
                return (
                  <div key={tech.id}>
                    <span>{tech.name}</span>
                    <span className="icon">
                      <img src={tech.iconSrc} alt={tech.name} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
