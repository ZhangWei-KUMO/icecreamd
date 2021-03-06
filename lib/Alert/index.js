"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Alert extends _react.PureComponent {
  render() {
    const {
      image,
      title,
      content
    } = this.props;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "alert"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
      alt: "alert-img",
      src: image,
      className: "alert-img"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "alert-container"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "alert-title"
    }, title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "alert-content"
    }, content)));
  }

}

var _default = Alert;
exports["default"] = _default;