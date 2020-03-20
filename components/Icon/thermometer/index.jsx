import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { gsap, TimelineMax, Power2, Bounce, Circ } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

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
    gsap.registerPlugin(CSSRulePlugin);
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
    var tl = new TimelineMax();
    tl.from('#tem-left', 0.5, { scaleX: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
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
        <svg id="Capa_3" enableBackground="new 0 0 80 80" height={size} width={size}
          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="m200.388 512c-77.733 0-140.975-63.24-140.975-140.974 0-48.495 24.949-93.354 65.685-119.146v-176.59c0-41.515 33.775-75.29 75.29-75.29s75.29 33.775 75.29 75.29v176.591c40.735 25.791 65.685 70.65 65.685 119.146-.001 77.733-63.242 140.973-140.975 140.973z"
              fill="#a1d4fd" id="tem-left" />
            <path d="m275.678 251.881v-176.591c0-41.515-33.775-75.29-75.29-75.29v512c77.733 0 140.975-63.24 140.975-140.974-.001-48.495-24.95-93.354-65.685-119.145z"
              fill="#74bdef" id="tem-right" />
            <path d="m215.388 303.816v-233.316h-30v233.316c-30.786 6.867-53.875 34.385-53.875 67.21 0 37.978 30.897 68.875 68.875 68.875s68.875-30.897 68.875-68.875c0-32.825-23.09-60.342-53.875-67.21z"
              fill="#f3403f" id="tem-silk-1" />
            <path d="m215.388 303.816v-233.316h-15v369.401c37.978 0 68.875-30.897 68.875-68.875 0-32.825-23.09-60.342-53.875-67.21z"
              fill="#d10040" id="tem-silk-2" />
            <g fill="#f3403f" id="tem-note">
              <path d="m26.986 70.667h60.314v30h-60.314z" />
              <path d="m26.986 132.578h60.314v30h-60.314z" />
              <path d="m26.986 194.49h60.314v30h-60.314z" />
            </g>
            <path d="m485.014 70.667h-49.454l28.633-28.634-21.212-21.213-28.634 28.634v-49.454h-30v49.454l-28.633-28.634-21.213 21.213 28.633 28.634h-49.454v30h49.454l-28.633 28.633 21.213 21.213 28.633-28.634v49.454h30v-49.453l28.634 28.633 21.212-21.213-28.633-28.633h49.454z"
              fill="#f9b700" id="tem-sun" />
            <path d="m485.014 70.667h-49.454l28.633-28.634-21.212-21.213-28.634 28.634v-49.454h-15v171.333h15v-49.453l28.634 28.633 21.212-21.213-28.633-28.633h49.454z"
              fill="#f49d14" id="tem-sun" />
            <path d="m399.347 143.371c-31.818 0-57.705-25.886-57.705-57.705s25.886-57.704 57.705-57.704 57.704 25.886 57.704 57.704-25.885 57.705-57.704 57.705z"
              fill="#fee46f" id="tem-sun" />
            <path d="m399.347 27.962v115.409c31.818 0 57.704-25.886 57.704-57.705s-25.885-57.704-57.704-57.704z"
              fill="#fed330" id="tem-sun" />
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;