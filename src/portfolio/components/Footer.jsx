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
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          Created By
          <a
            href="https://rahuldutta.bio.link/"
            target="_blank"
            rel="noreferrer"
          >
            Rahul-Dutta
          </a>
          with
          <i
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
            }}
            className="fa-solid fa-heart"
          ></i>
          and
          <i
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#74c0fc",
            }}
            className="fa-brands fa-react fa-spin" 
          ></i>
          | Last Updated : <span id="last-modified"></span> |
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
