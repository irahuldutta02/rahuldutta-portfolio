import { Route, Routes } from "react-router-dom";
import { Portfolio } from "../portfolio/Portfolio";
import { Projects } from "../projects/Projects";

export function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
