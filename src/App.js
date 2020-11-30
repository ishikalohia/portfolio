import React, { Component } from 'react';
import './App.css';
import Hero from './components/header';
import About from './components/About';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <Hero/>
        <About/>
      </div>
    );
  }
}

export default App;
