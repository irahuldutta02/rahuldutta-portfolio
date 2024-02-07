import { useState } from "react";
import "../portfolio.css";
import { getTechStack } from "../../data/data";

export function Skills() {
  const [techStack] = useState(getTechStack());

  return (
    <>
      {/* <!-- skills section start --> */}
      <section className="skills" id="skills">
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
