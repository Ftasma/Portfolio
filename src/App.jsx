import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LinksSocial from "./components/LinksSocial";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Socials />
      <LinksSocial />
    </>
  );
}

export default App;
