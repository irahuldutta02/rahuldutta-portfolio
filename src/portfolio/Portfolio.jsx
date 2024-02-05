import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { ScrollUp } from "./components/ScrollUp";
import { Works } from "./components/Works";
import { Skills } from "./components/Skills";
import "./portfolio.css";
import { ThemeToggler } from "./components/ThemeToggler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export function Portfolio() {
  useEffect(() => {
    document.title = "Rahul-Dutta/portfolio";
    window.scrollTo(0, 0);
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
