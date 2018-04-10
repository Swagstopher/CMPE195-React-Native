import React, { Component } from 'react';
//import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main/>
      </div>
    );
  }
}

export default App;
