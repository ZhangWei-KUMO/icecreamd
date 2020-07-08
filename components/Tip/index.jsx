import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Tip(props) {
  const [visible, setVisible] = useState(false);

  const {
    prefixCls, children, content
  } = props;
  const tipName = classNames({ [`${prefixCls}-tip`]: true });
  return (
    <div
      className={tipName}
      onMouseLeave={() => setVisible(false)}
      onMouseEnter={() => setVisible(true)}
    >
      <div className={`${tipName}-box`} style={{ display: visible ? "block" : "none" }}>
        {content}
        <div className={`${tipName}-box-arrow`} />
      </div>
      {children}
    </div>
  );
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
