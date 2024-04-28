import techMantraLogo from "../../assets/images/techmantra-logo.png";
import businessWebSolutionsLogo from "../../assets/images/bws-logo.png";
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
                  <p>From April 2024 To Present</p>
                  <p>({getCountFromDate("2024-04-01")})</p>
                  <p>Full Time, In Office</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box">
              <a href="https://businesswebsolutions.in/" target="_blank" rel="noreferrer">
                <div className="ex-icon-img-div">
                  <img src={businessWebSolutionsLogo} alt="techmantra-logo" />
                </div>
              </a>
              <div className="ex-txt-div">
                <h3>Business Web Solutions</h3>
                <p>Full Stack Web Developer Intern</p>
                <div className="ex-text-div-div">
                  <p>From April 2024 To Present</p>
                  <p>2 Months</p>
                  <p>Internship, Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
