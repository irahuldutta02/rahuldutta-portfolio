import { Cinematic } from "../components/Cinematic";
import { Seo } from "../components/Seo";
import { Nav } from "../NavBar/Nav";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { ScrollUp } from "./components/ScrollUp";
import { Skills } from "./components/Skills";

export function Portfolio() {
  return (
    <>
      <Seo
        title="Rahul Dutta | Full Stack Developer (MERN)"
        description="Rahul Dutta is a full stack web developer (MERN stack). Explore his portfolio: tech stack, work experience and projects built with React, Node.js, Express and MongoDB."
        path="/"
      />
      <a className="skip-link" href="#main">Skip to content</a>
      <Cinematic />
      <Nav />
      <main id="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <ProjectsPreview />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
