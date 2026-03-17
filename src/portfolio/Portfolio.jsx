import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/context";
import { ThemeToggler } from "../theme/ThemeToggler";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ScrollUp } from "./components/ScrollUp";
import { Skills } from "./components/Skills";
import { Nav } from "../NavBar/Nav";
import { Experience } from "./components/Experience";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { CodeRain } from "./components/CodeRain";

export function Portfolio() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Rahul-Dutta/portfolio";
    document.querySelector(":root").style.setProperty("--page-color-1", theme);
  });

  return (
    <>
      <CodeRain />
      <ScrollUp />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <Contact />
      <Footer />
      <ThemeToggler />
      <ToastContainer />
    </>
  );
}
