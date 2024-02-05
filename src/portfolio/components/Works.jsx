import { Link } from "react-router-dom";
import "../portfolio.css";

export function Works() {
  return (
    <>
      {/* <!-- works section start --> */}
      <section className="works" id="works">
        <div className="max-width">
          <h2 className="title">My Works</h2>
          <div className="serv-content">
            <Link className="card" to="/projects">
              <div>
                <div className="box">
                  <i className="bx bx-laptop bx-tada"></i>
                  <div className="text">Projects</div>
                  <p>Click here view projects done by me.</p>
                </div>
              </div>
            </Link>
            <a
              className="card"
              target="_blank"
              href="https://rahuldutta.hashnode.dev/"
              rel="noreferrer"
            >
              <div>
                <div className="box">
                  <i className="bx bx-edit bx-tada"></i>
                  <div className="text">Blogs</div>
                  <p>Click here to go through my blogs.</p>
                </div>
              </div>
            </a>
            <a
              className="card"
              target="_blank"
              href="https://rahuldutta.bio.link/"
              rel="noreferrer"
            >
              <div>
                <div className="box">
                  <i className="bx bx-link-external bx-tada"></i>
                  <div className="text">All Links</div>
                  <p>Click here visit all my listed links.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
