import React, { Component } from 'react';
class Alert extends Component {
  render() {
    return (
      <div className="alert">
        <div>
          <img src={this.props.image} className="alert-img"/>
        </div>
        <div className="alert-container">
          <h3 className="alert-title">{this.props.title}</h3>
          <p className="alert-content">{this.props.content}</p>
        </div>
      </div>
    )
  }
}

export default Alert;