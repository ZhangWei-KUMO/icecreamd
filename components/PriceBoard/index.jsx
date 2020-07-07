import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './index.less';
const style = {
  height: "800px"
}
class Iconcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      mouseEnter: false
    }
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    color: PropTypes.string
  };

  static defaultProps = {
    prefixCls: "ice",
    title: "",
    link: "#",
    background: "https://marketplace-images.githubusercontent.com/703/15031fc4-e40e-11e7-9e6c-42cd55ee6584?auto=webp&format=jpeg&width=600",
    icon: "https://avatars1.githubusercontent.com/ml/283?s=106&v=4",
    iconColor: "#45D298",
    color: "#000"
  }

  handleMouseEnter = () => {
    this.setState({
      mouseEnter: true
    })
  }

  handleMouseEnter = () => {
    this.setState({
      mouseEnter: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      mouseEnter: false
    })
  }
  render() {
    let { prefix, title, link, background, icon, iconColor, color } = this.props;
    let { mouseEnter } = this.state;
    return (
      <Fragment>
        <a href={link}
          target="__blank"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className={`${prefix}-iconcard`}
            style={{ backgroundImage: `url(${background})` }}>
            <div className={`${prefix}-ciclebadget ${prefix}-ciclebadget-float`}
              style={{ backgroundColor: `${iconColor}` }}
            >
              <img src={icon} alt="浪视频" />
            </div>
            <h2 style={{ color }}>{title}</h2>
          </div>
        </a>
      </Fragment >
    )
  }
}

export default Iconcard