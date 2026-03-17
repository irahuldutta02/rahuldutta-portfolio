import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../../data/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  const [featuredProjects] = useState(
    getFeaturedProjects().slice(0, 3)
  );

  return (
    <>
      {/* <!-- project-preview section start --> */}
      <section className="projects-preview" id="projects">
        <div className="code-leak code-leak-left" style={{ top: "25%" }} aria-hidden="true">
          <div><span className="cl-keyword">function</span> <span className="cl-function">Project</span>() {"{"}</div>
          <div>{"  "}<span className="cl-keyword">const</span> [data,</div>
          <div>{"    setData] "}<span className="cl-operator">=</span></div>
          <div>{"    "}<span className="cl-function">useData</span>();</div>
          <div>&nbsp;</div>
          <div>{"  "}<span className="cl-keyword">return</span> (</div>
          <div>{"    "}<span className="cl-tag">{"<Grid>"}</span></div>
          <div>{"      {"}data.<span className="cl-function">map</span>(p <span className="cl-keyword">{"=>"}</span> (</div>
          <div>{"        "}<span className="cl-tag">{"<Card"}</span></div>
          <div>{"          "}<span className="cl-variable">key</span><span className="cl-operator">=</span>{"{p.id}"}</div>
          <div>{"          {"}<span className="cl-operator">...</span>p{"}"}</div>
          <div>{"        "}<span className="cl-tag">{"/>"}</span></div>
          <div>{"      ))}"}</div>
          <div>{"    "}<span className="cl-tag">{"</Grid>"}</span></div>
          <div>{"  );"}</div>
          <div>{"}"}</div>
        </div>

        <div className="max-width">
          <h2 className="title">Projects </h2>

          <div className="project-preview-container">
            {featuredProjects.map((project) => {
              return (
                <Fragment key={project?.id}>
                  <ProjectCard project={project} />
                </Fragment>
              );
            })}
          </div>

          <div className="view-all">
            <Link to={"/projects"} className="view-all-button">
              View All Projects
              <i className="fa-solid fa-arrow-right fa-beat"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
