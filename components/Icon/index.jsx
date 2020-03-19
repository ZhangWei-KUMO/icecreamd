import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GuideBoarder from './SVG/GuideBoarder.svg';
import debounce from '../util/debounce';
import animationSet from './animationSet';

const iconSet = {
  guideBoarder: <GuideBoarder />
};

class Icon extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    trigger: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: "ice-components",
    type: "",
    size: "60",
    trigger: ""
  };

  constructor(props) {
    super(props);
    this.timer = null
  };

  componentDidMount() {
    let { trigger, type } = this.props;
    if (trigger === "loaded") {
      this.animation()
      return;
    } else if (trigger === "loopPlay") {
      this.animation()
      setInterval(() => {
        this.animation()
      }, 5000)
    } else {
      return;
    }
  };

  animation = () => {
    let { type } = this.props;
    if (animationSet[type]) {
      animationSet[type]();
    } else {
      return;
    }
  };
  handleClick = () => {
    let { trigger, type } = this.props;
    if (trigger === "onClick") {
      animationSet[type]();
    }
    return;
  }
  handleMouseEnter = () => {
    let { trigger, type } = this.props;
    if (trigger === "mouseEnter") {
      animationSet[type]();
    }
    return;
  };

  componentWillUnmount() {
    this.timer = null
  };

  renderSVG = (svg) => {
    if (!svg) {
      return ""
    } else {
      return svg
    }
  }
  render() {
    let { prefixCls, type, size } = this.props;
    return (
      <div
        height={size} width={size}
        onMouseEnter={debounce(this.handleMouseEnter, 4000)}
        onClick={debounce(this.handleClick, 4000)}
      >
        <svg id="Capa_1" enableBackground="new 0 0 512 512" height={size} width={size}
          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          {this.renderSVG(iconSet[type])}
        </svg>

      </div >
    )
  }
}

export default Icon;