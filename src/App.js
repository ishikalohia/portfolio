import React, { Component } from "react";
import "./App.css";
import Hero from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Education />
        <Work />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
