import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { generateUUID } from "../../helper/helper";

export function ProjectCard({ project }) {
  return (
    <>
      <div className="project__item">
        <div className="project__preview">
          {/* if Featured */}
          {project.isFeatured && (
            <div className="project__featured">
              <span>Featured</span>
            </div>
          )}
          {/* preview image if any */}
          {project.preview && (
            <img
              src={project.preview}
              alt="preview"
              className="project__image"
            />
          )}
          {/* if multi image */}
          {project?.multiImages && (
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {project?.multiImages.map((image) => {
                return (
                  <SwiperSlide key={generateUUID()}>
                    <img src={image} alt="multi" className="project__image" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
              <p>{project.note.length > 0 && project.note}</p>
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
