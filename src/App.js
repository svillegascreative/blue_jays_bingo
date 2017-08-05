import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
// import * as events from './Objects.js';

const events =  [
  'Buck says "Get up ball!"',
  'Pat says "pounding the strike zone"',
  'Anyone is "really hitting the ball well"',
  'Anyone is "really seeing the ball well"',
  'Any talk about a pitcher\'s "stuff"',
  'Hazel reports from the side of the field',
  'Arash reports from the side of the field',
  'A player questions the ump\'s call',
  'Jays hit a home run',
  'Jays leave men stranded',
  'A conversation in the dugout is pointed out',
  'Buck says "That\'s the ball game!"',
  'Anyone was "talking to him before the game"',
  'Inning goes "three up, three down"',
  'Any player steals a base',
  'Buck describes a hit ball as a "looper"',
  'Buck describes a hit ball as a "squibbler"',
  'Jays hit into double play',
  'Replay of awesome defensive play by Donaldson',
  'Broken bat',
  'No trace of eye black left on Steve Pearce',
  'Bases loaded, no outs',
  'Gibby yells at the ump',
  'A play is reviewed and upheld',
  'A play is reviewed and overturned',
  'Butt pats',
  'Camera shot of something cooking in the ball park'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blue Jays Broadcast Bingo</h1>
        <Card boxes={events} />
      </div>
    );
  }
}

export default App;
