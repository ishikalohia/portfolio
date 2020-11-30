import React, { Component } from "react";
import "./App.css";
import Hero from "./components/header";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
