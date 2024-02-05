import { useEffect, useRef } from "react";
import "../portfolio.css";

export function ScrollUp() {
  const scrollUpRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 560) {
        scrollUpRef.current.classList.add("show");
      } else {
        scrollUpRef.current.classList.remove("show");
      }
    });
  });

  return (
    <>
      <div
        ref={scrollUpRef}
        className="scroll-up-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-angle-up"></i>
      </div>
    </>
  );
}
