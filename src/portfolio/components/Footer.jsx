import { useEffect } from "react";

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
            gap: "6px",
            flexWrap: "wrap",
            fontSize: "13px",
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
              color: "#ef4444",
            }}
            className="fa-solid fa-heart"
          ></i>
          and
          <i
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#61dafb",
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
