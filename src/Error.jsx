import { Link } from "react-router-dom";
import { Cinematic } from "./components/Cinematic";
import { Seo } from "./components/Seo";

export function Error() {
  return (
    <main className="error-page">
      <Seo title="Page not found | Rahul Dutta" description="This page does not exist." path="/404" noindex />
      <Cinematic />
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="btn btn-ghost">
        Rahul-Dutta/portfolio
      </Link>
    </main>
  );
}
