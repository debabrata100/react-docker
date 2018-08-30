import React, { Component } from 'react';
import logo from './docker.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{backgroundImage: `url(${logo})`}} className="App-header">
        </header>
        <p className="App-intro">
          This project explains how to run a react application in docker.
        </p>
      </div>
    );
  }
}

export default App;
