import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

const events =  [
    "Buck says 'Get up ball!'",
    "Pat says 'pounding the strike zone'",
    "Anyone is 'really hitting the ball well'",
    "Anyone is 'really seeing the ball well'",
    "A pitcher's 'got great stuff'",
    "Hazel reports from the side of the field",
    "Arash reports from the side of the field",
    "Any broadcaster tells how they 'talked to him before the game'"
  ]


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blue Jays Broadcast Bingo</h1>
      </div>
    );
  }
}

export default App;
