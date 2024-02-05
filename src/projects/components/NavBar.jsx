import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="navigation">
          <div className="nav__item">
            <div className="icon">
              <Link to="/" rel="noreferrer">
                <i className="fa-solid fa-angles-left"></i>
              </Link>
            </div>
          </div>
          <div className="nav__item">
            <a href="">
              <h1>My Projects</h1>
            </a>
          </div>
          <div className="nav__item">
            <div className="icon">
              <a
                target="_blank"
                href="https://rahuldutta.bio.link"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
