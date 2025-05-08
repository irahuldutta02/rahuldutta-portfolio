import { useContext } from "react";
import { FaChevronRight, FaEye, FaGithub, FaLink } from "react-icons/fa";
import { ThemeContext } from "../../context/context";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

export function ProjectCard({ project }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="project__item">
      {/* Project Preview Image */}
      <div className="project__preview">
        {project.isFeatured && (
          <span className="project__featured">Featured</span>
        )}
        {project.isNew && <span className="badge-new">NEW</span>}
        <img
          src={`${project.preview}`}
          alt={project.title}
          className="project__img"
          loading="lazy"
        />
      </div>

      {/* Project Details */}
      <div className="project__details">
        <div className="project__head">
          <h3 className="project__title">{project.title}</h3>

          {/* Tech Stack Tags */}
          <div className="project__tech__stacks">
            {project.techStack.map((tech, index) => (
              <span key={index} className="project__tech__stack">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Notes */}
          <p className="project__notes">{project.notes}</p>
        </div>

        {/* Action Buttons */}
        <div className="project__btns">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label="View live demo"
              style={{ backgroundColor: theme }}
            >
              <FaEye />
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label="View source code"
              style={{ backgroundColor: theme }}
            >
              <FaGithub />
            </a>
          )}

          {project.deployLink && (
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label="View deployed app"
              style={{ backgroundColor: theme }}
            >
              <FaLink />
            </a>
          )}

          {project.detailLink && (
            <a
              href={project.detailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label="More details"
              style={{ backgroundColor: theme }}
            >
              <FaChevronRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
