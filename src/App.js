import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator.js';
import ChangeList from './ChangeList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Calculator/>
        <ChangeList/>
      </div>
    );
  }
}

export default App;
