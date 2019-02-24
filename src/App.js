import React, { Component } from 'react';
import logo from './logo.svg';
import newlogo from './newlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={newlogo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <br/>
          <p className="title">sara jazi</p>
          <hr/>
          <br/>
          <p className="parag">Je suis entrain d'apprendre REACTJS chez GOMYCODE</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
