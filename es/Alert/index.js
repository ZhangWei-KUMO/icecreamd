import React, { PureComponent } from "react";

class Alert extends PureComponent {
  render() {
    const {
      image,
      title,
      content
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "alert"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      alt: "alert-img",
      src: image,
      className: "alert-img"
    })), /*#__PURE__*/React.createElement("div", {
      className: "alert-container"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "alert-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "alert-content"
    }, content)));
  }

}

export default Alert;