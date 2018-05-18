import React, { Component } from 'react';

import Header from './components/header/Header.js'
import Stats from './components/stats/Stats.js'

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        < Header/>
        <h2 className="Stats-header">Stats</h2>
        < Stats/>
      </div>
    );
  }
}

export default App;
