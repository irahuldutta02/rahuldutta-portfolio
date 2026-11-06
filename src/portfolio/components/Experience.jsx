import { getExperiences } from "../../data/data";
import {
  durationBetweenDates,
  formatMonthYear,
  getCountFromDate,
} from "../../helper/helper";
import { Reveal } from "../../components/Reveal";
import { SectionHead } from "../../components/SectionHead";

export function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <SectionHead eyebrow="Career" title="Experience" id="exp-title" />
        <ol className="timeline">
          {getExperiences().map((exp, i) => {
            const duration = exp.endDate
              ? durationBetweenDates(exp.startDate, exp.endDate)
              : getCountFromDate(exp.startDate);
            const start = formatMonthYear(exp.startDate);
            const end = exp.endDate ? formatMonthYear(exp.endDate) : "Present";

            return (
              <Reveal as="li" className="tl-item" key={exp.id} delay={i * 0.08}>
                <span className={`tl-dot ${exp.endDate ? "" : "live"}`} aria-hidden="true" />
                <article className="glass tl-card">
                  <a
                    className="tl-logo"
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${exp.company} website`}
                  >
                    <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" />
                  </a>
                  <div className="tl-body">
                    <h3>{exp.company}</h3>
                    <p className="tl-role">{exp.role}</p>
                    <ul className="tl-meta">
                      <li>
                        {start} – {end} <span>({duration})</span>
                      </li>
                      <li>{exp.location}</li>
                      <li>{exp.employmentType}</li>
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
