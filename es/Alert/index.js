import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "alert"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: this.props.image
    })), /*#__PURE__*/React.createElement("div", {
      className: "alert-container"
    }, /*#__PURE__*/React.createElement("h3", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.content)));
  }

}

export default Alert;