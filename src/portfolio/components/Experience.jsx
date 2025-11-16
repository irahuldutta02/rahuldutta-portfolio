import techMantraLogo from "../../assets/images/techmantra-logo.png";
import planysTechLogo from "../../assets/images/planystech-logo.png";
import { getCountFromDate } from "../../helper/helper";

export function Experience() {
  return (
    <>
      {/* <!-- background section starts  --> */}
      <section className="background experience" id="experience">
        <div className="max-width">
          <h2 className="title">Experience</h2>
          <div className="box-container">
            {/* tech mantra */}
            <div className="box">
              <a href="https://techmantra.co/" target="_blank" rel="noreferrer">
                <div className="ex-icon-img-div">
                  <img src={techMantraLogo} alt="techmantra-logo" />
                </div>
              </a>
              <div className="ex-txt-div">
                <h3>Tech Mantra Co.</h3>
                <p>MERN Stack Developer</p>
                <div className="ex-text-div-div">
                  <p>April, 2024 - Aug, 2025</p>
                  <p>(1 Year 5 Months)</p>
                  <p>Kolkata, West Bengal, India</p>
                  <p>(Full Time, In Office)</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box">
              <a
                href="https://planystech.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="ex-icon-img-div">
                  <img src={planysTechLogo} alt="planys-tech-logo" />
                </div>
              </a>
              <div className="ex-txt-div">
                <h3>Planys Technologies</h3>
                <p>Software Engineer</p>
                <div className="ex-text-div-div">
                  <p>Sep, 2022 – Nov, 2022</p>
                  <p>({getCountFromDate("2025-09-10")})</p>
                  <p>Chennai, Tamil Nadu, India</p>
                  <p>(Full Time, In Office)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
