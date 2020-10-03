import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      info : [
        { word: "zebra" , hint: 'animal in africa'},
        { word: "phone", hint: 'we use it every day'},
      ] 
    }
  }
  
  render() {
  
    return(
      <div className="App">
        <Score />
        <Solution />
        <Letters />
      </div>
    )
  }
}

export default App;
