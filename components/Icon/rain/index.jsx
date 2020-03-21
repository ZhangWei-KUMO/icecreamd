import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gsap, TimelineMax, Power2, Bounce, Circ } from "gsap";
import debounce from '../../util/debounce';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

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
    gsap.registerPlugin(MotionPathPlugin);
    let { trigger } = this.props;
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
    gsap.registerPlugin(MotionPathPlugin);

    var tl = new TimelineMax();
    tl.from('#rain', 1, { y: -600, transformOrigin: "top", ease: Power2.easeOut })

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
        onMouseEnter={debounce(this.handleMouseEnter, 1500)}
        onClick={debounce(this.handleClick, 1500)}
      >
        <svg enableBackground="new 0 0 512 512" height={size} viewBox="0 0 512 512" width={size} xmlns="http://www.w3.org/2000/svg">
          <g id="rain">
            <path d="m388.701 208.992 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.356 6.243-27.773z" fill="#69b1e9" />
            <g>
              <path d="m6.243 336.852 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.355 6.243-27.773z" fill="#69b1e9" />
              <path d="m197.472 272.922 58.528-126.388 39.562 154.161-39.562 64.771c-35.772 0-64.771-28.999-64.771-64.771 0-9.94 2.242-19.356 6.243-27.773z" fill="#69b1e9" />
              <g fill="#2681ff">
                <path d="m64.771 210.464 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
                <path d="m256 146.534 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
                <path d="m447.229 82.604 58.528 126.388c4.001 8.417 6.243 17.833 6.243 27.773 0 35.772-28.999 64.771-64.771 64.771z" />
              </g>
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;