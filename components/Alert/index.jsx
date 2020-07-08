import React, { PureComponent } from "react";

class Alert extends PureComponent {
  render() {
    const { image, title, content } = this.props;
    return (
      <div className="alert">
        <div>
          <img alt="alert-img" src={image} className="alert-img" />
        </div>
        <div className="alert-container">
          <h3 className="alert-title">{title}</h3>
          <p className="alert-content">{content}</p>
        </div>
      </div>
    );
  }
}

export default Alert;
