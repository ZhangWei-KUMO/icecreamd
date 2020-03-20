import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    gsap.registerPlugin(MotionPathPlugin);

    var tl = new TimelineMax();
    tl.to('#industry-balancer', 1, { rotation: 20, transformOrigin: "center" })
      .to('#industry-balancer', 1, { rotation: 0, transformOrigin: "center" })
      .to('#industry-balancer', 1, { rotation: 20, transformOrigin: "center" })
      .to('#industry-balancer', 1, { rotation: 0, transformOrigin: "center" })

    tl.to("#industry-right", 1, { y: 80, transformOrigin: "top" }, 0)
      .to("#industry-right", 1, { y: 0, transformOrigin: "top" }, 1)
      .to("#industry-right", 1, { y: 80, transformOrigin: "top" }, 2)
      .to("#industry-right", 1, { y: 0, transformOrigin: "top" }, 3)
    tl.to("#industry-left", 1, { y: -30, transformOrigin: "top" }, 0)
      .to("#industry-left", 1, { y: 0, transformOrigin: "top" }, 1)
      .to("#industry-left", 1, { y: -30, transformOrigin: "top" }, 2)
      .to("#industry-left", 1, { y: 0, transformOrigin: "top" }, 3)
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
        <svg id="Capa_5" enableBackground="new 0 0 514.607 514.607" height={size} width={size} viewBox="0 0 514.607 514.607" xmlns="http://www.w3.org/2000/svg"><g>
          <path id="industry-left" d="m33.769 225.092h30v289.516h-30z" fill="#ce7000" />
          <g id="industry-towar">
            <path d="m327.7 425.701 29.229-6.76-47.327-204.611v-161.966c0-28.865-23.483-52.349-52.349-52.349s-52.35 23.483-52.35 52.349v162.109l-47.293 204.468 29.229 6.76 13.194-57.04h114.474zm-44.991-194.515 8.965 38.758h-68.807l8.965-38.758zm-25.455-201.17c12.323 0 22.349 10.025 22.349 22.349v148.822h-44.698v-148.823c-.001-12.323 10.025-22.348 22.349-22.348zm-50.283 308.645 8.955-38.717h82.686l8.955 38.717z"
              fill="#ce7000" />
            <path d="m309.602 214.33v-161.966c0-28.86-23.475-52.34-52.333-52.348v30c12.316.009 22.333 10.03 22.333 22.348v148.822h-22.333v30h25.439l8.965 38.758h-34.404v30h41.343l8.955 38.717h-50.298v30h57.237l13.193 57.04 29.229-6.76z"
              fill="#823c08" />
          </g>
          <g id="industry-bottom">
            <path d="m416.312 496.041-30 16.01h-288.086v-104.73h318.086z" fill="#ce7000" />
            <path d="m257.269 407.321v104.731h129.043l30-16.011v-88.72z" fill="#823c08" />
          </g>
          <g id="industry-right">
            <path d="m434.791 93.783h30v263.565h-30z" fill="#823c08" />
            <path d="m513.269 512.016h-126.957v-169.667h126.957z" fill="#f49d14" />
          </g>
          <g id="industry-balancer">
            <path d="m103.958 214.336-30.15-100.297 372.011-111.797c13.397-4.028 27.558-2.595 39.876 4.028 12.319 6.624 21.321 17.65 25.348 31.045 4.026 13.396 2.596 27.558-4.028 39.877s-17.65 21.321-31.045 25.348z"
              fill="#f9ecd7" />
            <path d="m511.043 37.315c-4.026-13.395-13.028-24.421-25.348-31.045-12.318-6.623-26.479-8.057-39.876-4.028l-188.55 56.663v109.358l218.7-65.723c13.395-4.026 24.421-13.028 31.045-25.348 6.624-12.319 8.055-26.481 4.029-39.877z"
              fill="#f5d7b0" />
            <path d="m114.047 276.82c-19.368 0-38.618-7.071-55.876-20.804-22.024-17.525-39.496-44.949-49.197-77.221-11.125-37.009-10.075-74.515 2.881-102.901l6.647-14.565 84.436 45.404 48.791 162.306-14.365 4.318c-7.71 2.318-15.524 3.463-23.317 3.463z"
              fill="#f9b700" />
          </g>


        </g></svg>
      </span >
    )
  }
}

export default Icon;