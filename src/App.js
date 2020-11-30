import React, { Component } from "react";
import "./App.css";
import Hero from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Education />
        <Work />
        <Skills />
      </div>
    );
  }
}

export default App;
