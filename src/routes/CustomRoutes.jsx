import { Route, Routes } from "react-router-dom";
import { Portfolio } from "../portfolio/Portfolio";
import { Projects } from "../projects/Projects";
import { Error } from "../Error";

export function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
