import { Link } from "react-router-dom";

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
                  <i className="fa-solid fa-code"></i>
                  <div className="text">Projects</div>
                  <p>Click here view projects done by me.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
