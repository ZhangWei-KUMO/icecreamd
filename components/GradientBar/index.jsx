import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <div className="gradient-bar">
        <div>
          <img src={this.props.image} />
        </div>
        <div className="gradien-bar-container">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
        <div>
          <a href={this.props.link}>
            <button>
              {this.props.buttonName}
            </button>
          </a>
        </div>
      </div>
    )
  }
}

export default Card;