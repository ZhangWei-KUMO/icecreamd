import React, { Component } from 'react';
import "./index.less"
class Alert extends Component {
  render() {
    return (
      <div className="alert">
        <div>
          <img src={this.props.image} />
        </div>
        <div className="alert-container">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default Alert;