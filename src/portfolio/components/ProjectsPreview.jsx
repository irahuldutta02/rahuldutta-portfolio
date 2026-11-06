import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { getFeaturedProjects } from "../../data/data";
import { Magnetic } from "../../components/Magnetic";
import { Reveal } from "../../components/Reveal";
import { SectionHead } from "../../components/SectionHead";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="section projects-preview" id="projects" aria-labelledby="proj-title">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Projects" id="proj-title" />
        <div className="project-preview-container">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="view-all">
          <Magnetic>
            <Link to="/projects" className="btn btn-ghost">
              View All Projects
              <FaArrowRight aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
