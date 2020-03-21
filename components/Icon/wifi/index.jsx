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
    tl.from('#wifi-three', 0.2, { opacity: 0.2, transformOrigin: "center" })
      .from('#wifi-two', 0.2, { opacity: 0.2, transformOrigin: "center" })
      .from('#wifi-one', 0.2, { opacity: 0.2, transformOrigin: "center" })
      .to('#wifi-one', 1, { opacity: 0.2, transformOrigin: "center" })
      .to('#wifi-one', 1, { opacity: 1, transformOrigin: "center" })
      .from('#wifi-star', 0.5, { opacity: 0, transformOrigin: "center" })
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
        <svg enableBackground="new 0 0 512 512" height={size} viewBox="0 0 512 512" width={size} xmlns="http://www.w3.org/2000/svg">
          <g>
            <g id="wifi-star">
              <path d="m256 12.53 128.293 320.607-128.293 115.006-158.217 51.327-.076-166.333-97.707-134.613 158.169-51.473z" fill="#ffda44" />
              <path d="m256 12.53 97.831 134.521 158.169 51.473-97.707 134.613-.076 166.333-158.217-51.327z" fill="#ff9f22" />
            </g>
            <g id="wifi-one">
              <path d="m330.862 248.175c-41.279-41.277-108.445-41.277-149.725 0l-21.213-21.213c52.976-52.975 139.175-52.975 192.15 0z"
                fill="#0051be" />
              <path d="m256 187.231v29.986c27.111 0 54.223 10.319 74.862 30.958l21.213-21.213c-26.488-26.487-61.281-39.731-96.075-39.731z" fill="#00347b" />
            </g>
            <g id="wifi-two">
              <path d="m289.429 292.21c-18.433-18.432-48.425-18.432-66.857 0l-21.213-21.213c30.13-30.129 79.153-30.129 109.283 0z"
                fill="#0051be" />
              <path d="m256 248.4v29.986c12.106 0 24.212 4.608 33.429 13.824l21.213-21.213c-15.065-15.064-34.854-22.597-54.642-22.597z" fill="#00347b" />
            </g>
            <g id="wifi-three">
              <path d="m241 318.832h30v30h-30z" fill="#0051be" />
              <path d="m256 318.832h15v30h-15z" fill="#00347b" />
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;