import React, { Component } from 'react';
import './Card.css';
import Box from './Box.js';

class Card extends Component {
  render() {
    
    let gameBoxes = [
      <Box text={this.props.boxes[0]} />,
      <Box text={this.props.boxes[1]} />,
      <Box text={this.props.boxes[2]} />
    ];

    return (
      <div className="Card">
        {gameBoxes}
      </div>
    );
  }
}

export default Card;
