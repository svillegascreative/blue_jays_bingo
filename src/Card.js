import React, { Component } from 'react';
import './Card.css';
import Box from './Box.js';

class Card extends Component {
  render() {

    let gameBoxes = this.props.boxes.map(
      (text, index) => ( <Box text={text} key={index} /> )
    );

    return (
      <div className="Card">
        {gameBoxes}
      </div>
    );
  }
}

export default Card;
