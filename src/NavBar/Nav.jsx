import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [makeSticky, setMakeSticky] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.scrollY > 30) {
        setMakeSticky(true);
      } else {
        setMakeSticky(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setMakeSticky(true);
      } else {
        setMakeSticky(false);
      }
    });
  }, []);

  if (path === "/") {
    return (
      <>
        <nav className={`navbar ${makeSticky ? "cSticky" : ""}`}>
          <div className="max-width">
            <div className="logo">
              <Link to={"/"}>
                Rahul <span>Dutta</span>
              </Link>
            </div>
            <ul className={`menu ${showMenu && "active"}`}>
              <li>
                <a href="#about" className="menu-btn" onClick={handleShowMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="menu-btn" onClick={handleShowMenu}>
                  Tech stack
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="menu-btn"
                  onClick={handleShowMenu}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="menu-btn"
                  onClick={handleShowMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="menu-btn"
                  onClick={handleShowMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="menu-btn" onClick={handleShowMenu}>
              {showMenu ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }

  if (path === "/projects") {
    return (
      <>
        <nav className="navbar cSticky">
          <div className="max-width">
            <div className="logo">
              <Link to={"/"}>
                Rahul <span>Dutta</span>
              </Link>
            </div>
            <ul className={`menu ${showMenu && "active"}`}>
              <li>
                <a
                  href="https://rahuldutta.bio.link"
                  className="menu-btn"
                  onClick={handleShowMenu}
                  target="_blank"
                  rel="noreferrer"
                >
                  My Links
                </a>
              </li>
            </ul>
            <div className="menu-btn" onClick={handleShowMenu}>
              {showMenu ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
}
