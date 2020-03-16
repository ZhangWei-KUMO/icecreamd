import React, { Component } from 'react';
import "./index.less"
class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    )
  }
}

export default Card;