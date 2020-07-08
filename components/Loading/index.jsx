import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Loading extends PureComponent {
  render() {
    const {
      prefixCls, type
    } = this.props;
    const loadingName = classNames({ [`${prefixCls}-loading-${type}`]: true });
    return (
      <div className={loadingName}>
        <div className="wings">
          <div className="fan">
            <div className="fan-wings">
              <div className="fan-a" />
              <div className="fan-b" />
              <div className="fan-c" />
              <div className="fan-d" />
            </div>
          </div>
          <div className="cat">
            <div className="legs" />
          </div>
        </div>
        <div className="wheel">
          <div className="left" />
          <div className="right" />
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string
};

Loading.defaultProps = {
  prefixCls: "ice",
  type: "plane"
};

export default Loading;
