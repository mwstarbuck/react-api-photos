import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetcher from './components/Fetcher'

class App extends Component {

  constructor() {
    super()

  }
  render() {
    return (
      <div className="App">
        <Fetcher></Fetcher>
      </div>
    );
  }
}

export default App;
