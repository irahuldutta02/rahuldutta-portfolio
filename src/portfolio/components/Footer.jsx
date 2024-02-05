import { useEffect } from "react";
import "../portfolio.css";

export function Footer() {
  useEffect(() => {
    const lastUpdated = new Date(document.lastModified);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = lastUpdated.toLocaleString("en-US", options);
    document.getElementById("last-modified").innerHTML = formattedDate;
  });

  return (
    <>
      {/* <!-- footer section start --> */}
      <footer>
        <span>
          Created By :{" "}
          <a
            href="https://rahuldutta.bio.link/"
            target="_blank"
            rel="noreferrer"
          >
            Rahul-Dutta
          </a>{" "}
          | Last Updated : <span id="last-modified"></span> | {" "}
          <a
            target="_blank"
            href="https://github.com/irahuldutta02/rahuldutta-portfolio.git"
            rel="noreferrer"
          >
            
            Source Code
          </a>
        </span>
      </footer>
    </>
  );
}
