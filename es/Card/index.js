import React, { Component } from 'react';
import "./index.css";

class Card extends Component {
  render() {
    return React.createElement("div", {
      className: "card"
    }, this.props.children);
  }

}

export default Card;