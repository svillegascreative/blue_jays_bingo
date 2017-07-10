import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        {this.props.text}
      </div>
    );
  }
}

export default Box;
