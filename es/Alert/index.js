import React, { Component } from 'react';
import "./index.css";

class Alert extends Component {
  render() {
    return React.createElement("div", {
      className: "alert"
    }, React.createElement("div", null, React.createElement("img", {
      src: this.props.image
    })), React.createElement("div", {
      className: "alert-container"
    }, React.createElement("h3", null, this.props.title), React.createElement("p", null, this.props.content)));
  }

}

export default Alert;