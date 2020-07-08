import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Tip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      direction: "up"
    };
    this.elerefs = React.createRef();
  }

  componentDidMount() {
    const rect = ReactDOM.findDOMNode(this);
    const { top } = rect.getBoundingClientRect();
    if (top > 200) {
      this.setState({
        direction: "down"
      });
    }
  }

  setVisible = (bool) => {
    this.setState({
      visible: bool
    });
  }

  render() {
    const {
      prefixCls, children, content
    } = this.props;
    const { visible, direction } = this.state;
    const tipName = classNames({ [`${prefixCls}-tip`]: true });
    const style = {};
    const arrow = {};
    if (direction === "down") {
      style.top = "60px";
      arrow.boxShadow = "-5px -10px 12px 0 rgba(0,0,0,.1)";
      arrow.top = "-8px";
      arrow.borderTop = "10px solid #fff";
      arrow.borderLeft = "10px solid #fff";
    } else {
      style.bottom = "60px";
      arrow.boxShadow = "18px 2px 14px 0 rgba(0,0,0,.2)";
      arrow.bottom = "-8px";
      arrow.borderBottom = "10px solid #fff";
      arrow.borderRight = "10px solid #fff";
    }

    return (
      <div
        className={tipName}
        onMouseLeave={() => this.setVisible(false)}
        onMouseEnter={() => this.setVisible(true)}
      >
        <div
          className={`${tipName}-box`}
          style={({ display: visible ? "block" : "none", ...style })}
        >
          <div
            className={`${tipName}-box-arrow`}
            style={arrow}
          />
          {content}
        </div>
        {children}
      </div>
    );
  }
}

Tip.propTypes = {
  prefixCls: PropTypes.string,
  content: PropTypes.string
};

Tip.defaultProps = {
  prefixCls: "ice",
  content: "Please input your content"
};

export default Tip;
