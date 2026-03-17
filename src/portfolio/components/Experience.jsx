import { getExperiences } from "../../data/data";
import {
  durationBetweenDates,
  formatMonthYear,
  getCountFromDate,
} from "../../helper/helper";

export function Experience() {
  return (
    <>
      {/* <!-- background section starts  --> */}
      <section className="background experience" id="experience">
        <div className="code-leak code-leak-right" style={{ top: "35%" }} aria-hidden="true">
          <div><span className="cl-keyword">const</span> <span className="cl-variable">history</span> <span className="cl-operator">=</span> [</div>
          <div>{"  { "}<span className="cl-variable">year</span>: <span className="cl-boolean">2024</span>,</div>
          <div>{"    "}<span className="cl-variable">event</span>: <span className="cl-string">'Tech Mantra'</span> {"},"}</div>
          <div>{"  { "}<span className="cl-variable">year</span>: <span className="cl-boolean">2025</span>,</div>
          <div>{"    "}<span className="cl-variable">event</span>: <span className="cl-string">'Planys Tech'</span> {"},"}</div>
          <div>{"  { "}<span className="cl-variable">year</span>: <span className="cl-boolean">2026</span>,</div>
          <div>{"    "}<span className="cl-variable">event</span>: <span className="cl-string">'Chola'</span> {"}"}</div>
          <div>{"];"}</div>
          <div>{" "}</div>
          <div>history.<span className="cl-function">map</span>(h <span className="cl-keyword">{"=>"}</span></div>
          <div>{"  "}<span className="cl-function">grow</span>(h.event)</div>
          <div>{");"}</div>
        </div>

        <div className="max-width">
          <h2 className="title">Experience</h2>
          <div className="box-container">
            {getExperiences().map((exp) => {
              const duration = exp.endDate
                ? durationBetweenDates(exp.startDate, exp.endDate)
                : getCountFromDate(exp.startDate);

              const startDisplay = formatMonthYear(exp.startDate);
              const endDisplay = exp.endDate
                ? formatMonthYear(exp.endDate)
                : "Present";

              return (
                <div className="box" key={exp.id}>
                  <a href={exp.link} target="_blank" rel="noreferrer">
                    <div className="ex-icon-img-div">
                      <img src={exp.logo} alt={`${exp.id}-logo`} />
                    </div>
                  </a>
                  <div className="ex-txt-div">
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                    <div className="ex-text-div-div">
                      <p>{`${startDisplay} - ${endDisplay}`}</p>
                      <p>({duration})</p>
                      <p>{exp.location}</p>
                      <p>({exp.employmentType})</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
