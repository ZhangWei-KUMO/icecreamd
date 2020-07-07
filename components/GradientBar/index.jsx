import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class GradientBar extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    moment: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
  };

  static defaultProps = {
    prefixCls: "ice",
    title: "Your Title",
    content: "Please input your content text",
    buttonName: "Expand More",
    image: "https://github.githubassets.com/images/modules/marketplace/action-icon-white.png",
    moment: "2020-3-20",
    link: "/#"
  };

  render() {
    const {
      prefixCls, title, content, image, moment, link
    } = this.props;
    const barName = classNames({ [`${prefixCls}-bar`]: true });
    const containerName = classNames({ [`${prefixCls}-bar-container`]: true });
    return (
      <div className={barName}>
        <div>
          <img src={this.props.image} className={`${barName}-img`} />
        </div>
        <div className={containerName}>
          <h3 className={`${containerName}-title`}>{this.props.title}</h3>
          <p className={`${containerName}-content`}>{this.props.content}</p>
        </div>
        <div>
          <a href={this.props.link}>
            <button>
              {this.props.buttonName}
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default GradientBar;
