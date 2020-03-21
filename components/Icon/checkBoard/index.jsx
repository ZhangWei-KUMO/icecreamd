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
    tl.from('#ice-board', 0.6, { y: -800, transformOrigin: "center", ease: Power2.easeOut })
      .from('#ice-board-bc', 0.2, { opacity: 0, transformOrigin: "center", ease: Power2.easeOut })
      .from('#ice-board-check', 0.2, { opacity: 0, transformOrigin: "center", ease: Power2.easeOut })

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
        onMouseEnter={debounce(this.handleMouseEnter, 2500)}
        onClick={debounce(this.handleClick, 2500)}
      >
        <svg enableBackground="new 0 0 512 512" height={size} viewBox="0 0 512 512" width={size} xmlns="http://www.w3.org/2000/svg">
          <g id="ice-board">
            <path d="m442.31 512h-372.62v-453.577h80.399l105.911 10 105.911-10h80.399z" fill="#f5f2f1" />
            <path d="m442.31 512h-186.31v-443.577l105.911-10h80.399z" fill="#dbd1cc" />
            <path d="m256 153.317 21.667-94.893-21.667-58.424c-32.266 0-58.423 26.157-58.423 58.423h-47.488v94.893h105.911z"
              fill="#dbd1cc" />
            <path d="m361.911 153.317v-94.894h-47.487c-.001-32.266-26.158-58.423-58.424-58.423v153.317z"
              fill="#b3a9a9" />
          </g>
          <g id="ice-board-check">
            <path d="m345.411 333.104-89.411 109.411c-60.426 0-109.411-48.985-109.411-109.411s48.985-109.411 109.411-109.411z" fill="#69b1e9" />
            <path d="m256 223.693c60.426 0 109.411 48.985 109.411 109.411s-48.985 109.411-109.411 109.411z" fill="#2681ff" />
          </g>
          <g id="ice-board-bc">
            <path d="m237.271 391.099-46.713-46.714 21.213-21.213 25.5 25.501 18.729-18.729 15.167 12.556-15.167 29.87z" fill="#f5f2f1" />
            <path d="m256 372.37 65.442-65.442-21.213-21.213-44.229 44.229z" fill="#dbd1cc" />
          </g>



        </svg>
      </span >
    )
  }
}

export default Icon;