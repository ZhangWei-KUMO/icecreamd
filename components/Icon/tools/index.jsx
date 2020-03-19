import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TimelineMax, Power2, Bounce, Circ } from "gsap";
import debounce from '../../util/debounce';

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
    var tl = new TimelineMax();
    tl.from('#tem-left', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#tem-right', 0.2, { scaleX: 0, transformOrigin: "top", ease: Power2.easeOut })
      .from('#tem-silk-1', 1.5, { scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut })
      .from('#tem-silk-2', 0.3, { scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#tem-note', 0.2, { scale: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#tem-sun', 0.2, { scaleX: 0, transformOrigin: "center", ease: Circ.easeOut })
  };

  handleClick = () => {
    let { trigger, type } = this.props;
    if (trigger === "onClick") {
      this.animation()
    }
    return;
  }
  handleMouseEnter = () => {
    let { trigger, type } = this.props;
    if (trigger === "mouseEnter") {
      this.animation()
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
    let { size } = this.props;
    return (
      <span
        height={size} width={size}
        onMouseEnter={debounce(this.handleMouseEnter, 4000)}
        onClick={debounce(this.handleClick, 4000)}
      >
        <svg id="Capa_6" enable-background="new 0 0 512 512" height={size} width={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g>
          <g><path d="m0 447.616 427.893-427.894 64.386 64.386-427.894 427.892z" fill="#ce7000" /></g></g>
          <path d="m-40.329 259.196h605.132v45.525h-605.132z" fill="#823c08" transform="matrix(.707 -.707 .707 .707 -122.568 268.013)" />
          <path d="m511.996 367.155c.336-77.836-21.304-139.587-70.364-204.83l-91.956-91.955c-65.244-49.06-126.995-70.7-204.832-70.365 49.222 40.613 86.149 78.106 135.129 124.973l107.051 107.05c46.868 48.98 84.361 85.906 124.972 135.127z" fill="#f9ecd7" />
          <path d="m395.656 116.348-62.155 62.155 53.524 53.524c46.867 48.981 84.36 85.906 124.971 135.128.336-77.836-21.304-139.587-70.364-204.83z" fill="#f5d7b0" />
          <path d="m511.996 367.156v-.001z" fill="#f9ecd7" />
          <path d="m441.632 162.325 5.854-33.423-64.388-64.388-33.421 5.855-69.703 54.608-9.059 51.724 64.388 64.388 51.722-9.062z" fill="#f9b700" />
          <path d="m447.486 128.902-32.192-32.192-112.185 112.185 32.194 32.194 51.722-9.062 54.607-69.703z" fill="#f49d14" /></g>
          <path d="m512 161.33h-.001z" fill="#ce7000" />
        </svg>
      </span >
    )
  }
}

export default Icon;