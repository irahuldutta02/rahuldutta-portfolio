import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/context";

export function ThemeToggler() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    let themeToggler = document.querySelector(".theme-toggler");
    let toggleBtn = document.querySelector(".toggle-btn");

    toggleBtn.onclick = () => {
      themeToggler.classList.toggle("active");
    };

    window.onscroll = () => {
      themeToggler.classList.remove("active");
    };

    document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
      btn.onclick = () => {
        let newColor = btn.style.background;
        setTheme(newColor);
        document
          .querySelector(":root")
          .style.setProperty("--theme-toggler-bg-color-1", newColor);
        document
          .querySelector(":root")
          .style.setProperty("--project-page-color-1", newColor);
      };
    });
  }, [setTheme]);

  return (
    <>
      {/* <!-- theme toggler --> */}
      <div className="theme-toggler">
        <div className="toggle-btn">
          <i className="fas fa-cog"></i>
        </div>
        <h3>Choose Theme</h3>
        <div className="buttons">
          <div className="theme-btn" style={{ background: "#14afc1" }}></div>
          <div className="theme-btn" style={{ background: "#20bf6b" }}></div>
          <div className="theme-btn" style={{ background: "#f7b731" }}></div>
          <div className="theme-btn" style={{ background: "#fa8231" }}></div>
          <div className="theme-btn" style={{ background: "#ff3c38" }}></div>
          <div className="theme-btn" style={{ background: "#FC427B" }}></div>
        </div>
      </div>
    </>
  );
}
