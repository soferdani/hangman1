import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Solution />
        <Score />
        <Letters />
      </div>
    )
  }
}

export default App;
