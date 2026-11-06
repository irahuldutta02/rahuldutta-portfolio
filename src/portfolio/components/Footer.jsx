import { useState } from "react";
import { FaHeart, FaReact } from "react-icons/fa";
import { getSocialLinks } from "../../data/data";

export function Footer() {
  const linkedin = getSocialLinks().find((s) => s.id === "linkedin");
  const [lastUpdated] = useState(() =>
    new Date(document.lastModified).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  return (
    <footer className="footer">
      <p>
        <span>Created By</span>
        <strong>
          <a href={linkedin?.href} target="_blank" rel="noreferrer">
            Rahul-Dutta
          </a>
        </strong>
        <span>with</span>
        <FaHeart className="heart" aria-label="love" />
        <span>and</span>
        <FaReact aria-label="React" />
        <span aria-hidden="true">|</span>
        <span>Last Updated : {lastUpdated}</span>
        <span aria-hidden="true">|</span>
        <a
          target="_blank"
          href="https://github.com/irahuldutta02/rahuldutta-portfolio.git"
          rel="noreferrer"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
}
