import { useRef, useState } from "react";
import "../portfolio.css";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const navRef = useRef();

  window.addEventListener("load", () => {
    if (window.scrollY > 30) {
      navRef.current.classList.add("cSticky");
    }
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navRef.current.classList.add("cSticky");
    } else {
      navRef.current.classList.remove("cSticky");
    }
  });

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Rahul <span>Dutta</span>
            </a>
          </div>
          <ul className={`menu ${showMenu && "active"}`}>
            <li>
              <a href="#about" className="menu-btn" onClick={handleShowMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#works" className="menu-btn" onClick={handleShowMenu}>
                Works
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn" onClick={handleShowMenu}>
                Tech stack
              </a>
            </li>
            <li>
              <a
                href="#background"
                className="menu-btn"
                onClick={handleShowMenu}
              >
                Background
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn" onClick={handleShowMenu}>
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
