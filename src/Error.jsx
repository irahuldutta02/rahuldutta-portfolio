import { Link } from "react-router-dom";

export function Error() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          gap: "20px",
        }}
      >
        <h1>404</h1>
        <p>Page not found</p>
        <Link
          to="/"
          style={{
            backgroundColor: "#fa8231",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Rahul-Dutta/portfolio
        </Link>
      </div>
    </>
  );
}
