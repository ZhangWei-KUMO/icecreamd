import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Button extends PureComponent {
  render() {
    const {
      prefixCls, type, style, children
    } = this.props;
    const buttonName = classNames({ [`${prefixCls}-btn-${type}`]: true });
    if (type === "option") {
      return (
        <div className={buttonName}>
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${buttonName}-shape`} height="40" width="150" />
          </svg>
          <div className={`${buttonName}-text`}>
            <span className={`${buttonName}-spot`} />
            {children}
          </div>
        </div>
      );
    }
    return (
      <button className={`${prefixCls}-btn ${buttonName}`} style={style || {}} type="button">
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string
};

Button.defaultProps = {
  prefixCls: "ice",
  type: "empty",
  children: "button"
};

export default Button;
