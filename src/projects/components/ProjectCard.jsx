import { useEffect, useRef } from "react";

export function ProjectCard({ project }) {
  const projectNoteRef = useRef();

  useEffect(() => {
    if (project.note.length > 0) {
      projectNoteRef.current.innerHTML = project.note;
    }
  }, [project.note]);

  return (
    <>
      <div className="project__item ${filterClasses}">
        <div className="project__preview">
          {/* preview image if any */}
          {project.preview && (
            <img
              src={project.preview}
              alt="preview"
              className="project__image"
            />
          )}
          {/* preview video if any */}
          {project.videoPreview && (
            <div className="project__preview">
              <video
                className="project__video"
                muted
                autoPlay
                loop
                poster={project.thumbnail && project.thumbnail}
                onMouseOver={(event) => {
                  event.target.style.cursor = "pointer";
                  event.target.controls = true;
                }}
                onMouseOut={(event) => {
                  event.target.style.cursor = "default";
                  event.target.controls = false;
                }}
              >
                <source src={project.videoPreview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <div className="project__details">
          <div className="project__head">
            <div className="project__title">
              <h2>{project.title}</h2>
            </div>
            {/* tech stack */}
            <div className="project__tech__stacks">
              Using:{" "}
              {project.techStack.map((techStack) => {
                return (
                  <span key={techStack} className="project__tech__stack">
                    {techStack}
                  </span>
                );
              })}
            </div>
            {/* project note */}
            <div className="project__notes">
              <p ref={projectNoteRef}></p>
            </div>
          </div>

          {/* btns */}
          <div className="project__btns">
            {project.livePreview && (
              <a
                target="_blank"
                href={project.livePreview}
                className="project__btn"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            )}
            {project.code && (
              <a
                target="_blank"
                href={project.code}
                className="project__btn"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            )}
            {project.download && (
              <a
                target="_blank"
                href={project.download}
                className="project__btn"
                rel="noreferrer"
              >
                <i className="fa-solid fa-download"></i>
              </a>
            )}
            {project.link && (
              <a
                target="_blank"
                href={project.link}
                className="project__btn"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}