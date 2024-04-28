import { Route, Routes } from "react-router-dom";
import { Error } from "../Error";
import { Portfolio } from "../portfolio/Portfolio";
import { Projects } from "../portfolio/Projects";

export function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
