import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blue Jays Broadcast Bingo</h1>
        <Card />
      </div>
    );
  }
}

export default App;
