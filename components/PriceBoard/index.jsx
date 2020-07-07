import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Iconcard extends PureComponent {
  render() {
    const {
      prefixCls, title, link, background, icon, iconColor, color
    } = this.props;
    return (
      <>
        <a
          href={link}
          target="__blank"
        >
          <div
            className={`${prefixCls}-iconcard`}
            style={{ backgroundImage: `url(${background})` }}
          >
            <div
              className={`${prefixCls}-ciclebadget ${prefixCls}-ciclebadget-float`}
              style={{ backgroundColor: `${iconColor}` }}
            >
              <img src={icon} alt="浪视频" />
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
  title: "",
  link: "#",
  background: "https://marketplace-images.githubusercontent.com/703/15031fc4-e40e-11e7-9e6c-42cd55ee6584?auto=webp&format=jpeg&width=600",
  icon: "https://avatars1.githubusercontent.com/ml/283?s=106&v=4",
  iconColor: "#45D298",
  color: "#000"
};

export default Iconcard;
