import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../../data/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  const [featuredProjects] = useState(getFeaturedProjects().reverse().slice(0, 6));

  return (
    <>
      {/* <!-- project-preview section start --> */}
      <section className="projects-preview" id="projects">
        <div className="max-width">
          <h2 className="title">Projects</h2>

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
