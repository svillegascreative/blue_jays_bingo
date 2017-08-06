import React, { Component } from 'react';
import './Card.css';
import Box from './Box.js';

class Card extends Component {
  render() {

    let gameBoxes = this.props.boxes.map(
      (text, index) => ( <Box text={text} key={index} /> )
    );

    const numberOfBoxes = 25;

    const shuffleBoxes = (array) => {
      let lastPlace = array.length;

      for (let i = 0; i <= numberOfBoxes; i++) {
        let random = Math.floor(Math.random() * lastPlace);
        let temp = array[lastPlace];
        array[lastPlace] = array[random];
        array[random] = temp;
        lastPlace -=1;
      }

      return array.slice(0, numberOfBoxes+1);
    }

    return (
      <div className="Card">
        {shuffleBoxes(gameBoxes)}
      </div>
    );
  }
}

export default Card;
