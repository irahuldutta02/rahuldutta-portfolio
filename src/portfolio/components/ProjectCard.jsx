import { FaDownload, FaEye, FaGithub, FaLink } from "react-icons/fa";

export function ProjectCard({ project }) {

  return (
    <article className="project__item glass">
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
          decoding="async"
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
          {project.note && <p className="project__notes">{project.note}</p>}
        </div>

        {/* Action Buttons */}
        <div className="project__btns">
          {project.livePreview && (
            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label={`View live demo of ${project.title}`}
            >
              <FaEye />
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label={`View source code of ${project.title}`}
            >
              <FaGithub />
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label={`View link for ${project.title}`}
            >
              <FaLink />
            </a>
          )}

          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="project__btn"
              aria-label={`Download ${project.title}`}
            >
              <FaDownload />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
