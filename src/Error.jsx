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
          gap: "24px",
          background: "#0a0a0f",
          color: "#e8e8ed",
        }}
      >
        <h1
          style={{
            fontSize: "96px",
            fontWeight: 900,
            letterSpacing: "-4px",
            background: "linear-gradient(135deg, #00e5ff, #7c4dff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        <p style={{ color: "#8b8b9e", fontSize: "18px" }}>Page not found</p>
        <Link
          to="/"
          style={{
            backgroundColor: "transparent",
            color: "#00e5ff",
            padding: "12px 28px",
            borderRadius: "8px",
            border: "1px solid #00e5ff",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease",
          }}
        >
          Rahul-Dutta/portfolio
        </Link>
      </div>
    </>
  );
}
