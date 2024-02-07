import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../context/context";
import { ThemeToggler } from "../theme/ThemeToggler";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { ScrollUp } from "./components/ScrollUp";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import "./portfolio.css";

export function Portfolio() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Rahul-Dutta/portfolio";
    window.scrollTo(0, 0);
    document
      .querySelector(":root")
      .style.setProperty("--portfolio-page-color-1", theme);
  });

  return (
    <>
      <ScrollUp />
      <Nav />
      <Home />
      <About />
      <Works />
      <Skills />
      <Background />
      <Contact />
      <Footer />
      <ThemeToggler />
      <ToastContainer />
    </>
  );
}
