import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Iconcard extends PureComponent {
  render() {
    const {
      prefixCls, title, link, background, icon, iconColor, color
    } = this.props;
    const iconcardName = classNames({ [`${prefixCls}-iconcard`]: true });

    return (
      <>
        <a
          href={link}
          target="__blank"
        >
          <div
            className={iconcardName}
            style={{ backgroundImage: `url(${background})` }}
          >
            <div
              className={`${iconcardName}-ciclebadget ${iconcardName}-ciclebadget-float`}
              style={{ backgroundColor: `${iconColor}` }}
            >
              <img src={icon} alt="浪视频" className={`${iconcardName}-img`} />
            </div>
            <h2 style={{ color }}>{title}</h2>
          </div>
        </a>
      </>
    );
  }
}

Iconcard.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  color: PropTypes.string
};

Iconcard.defaultProps = {
  prefixCls: "ice",
  title: "Your title",
  link: "#",
  background: "https://marketplace-images.githubusercontent.com/703/15031fc4-e40e-11e7-9e6c-42cd55ee6584?auto=webp&format=jpeg&width=600",
  icon: "https://cloud-wave.cn/images/h5-icon.png",
  iconColor: "#45D298",
  color: "#000"
};

export default Iconcard;
