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
    tl.to("#compress-pointer", 0.5, { rotation: 720, transformOrigin: "center" })
      .to("#compress-pointer", 0.5, { rotation: -20, transformOrigin: "center" })
      .to("#compress-pointer", 1, { rotation: 20, transformOrigin: "center" })
      .to("#compress-pointer", 1, { rotation: 0, transformOrigin: "center" })
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
        <svg id="Capa_2" enableBackground="new 0 0 80 80" height={size} width={size}
          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="m241.006 83.405h30v45.737h-30z" fill="#f9ecd7" id="nav-bottom-left" />
            <path d="m256.006 83.405h15v45.737h-15z" fill="#f5d7b0" id="nav-bottom-right" />
            <path d="m256.006 512.011c-109.693 0-198.936-89.242-198.936-198.935s89.242-198.935 198.936-198.935 198.936 89.242 198.936 198.935c-.001 109.694-89.243 198.935-198.936 198.935z"
              fill="#ce7000" id="nav-left" />
            <path d="m256.006 114.142v397.87c109.693 0 198.936-89.242 198.936-198.935-.001-109.694-89.243-198.935-198.936-198.935z"
              fill="#823c08" id="nav-right" />
            <path d="m256.006 198.731c-63.05 0-114.34 51.3-114.34 114.35 0 63.04 51.29 114.34 114.34 114.34s114.34-51.3 114.34-114.34c0-63.05-51.29-114.35-114.34-114.35z"
              fill="#f9ecd7" id="nav-white-left" />
            <path d="m370.346 313.081c0 63.04-51.29 114.34-114.34 114.34v-228.69c63.05 0 114.34 51.3 114.34 114.35z"
              fill="#f5d7b0" id="nav-white-right" />
            <path d="m255.904 94.511c-9.832 0-19.39-3.067-27.524-8.929-10.237-7.379-16.989-18.303-19.01-30.76-2.021-12.456.929-24.954 8.308-35.191 7.379-10.238 18.302-16.989 30.759-19.01 12.452-2.021 24.953.929 35.192 8.308 10.237 7.379 16.989 18.303 19.01 30.76 2.021 12.456-.929 24.954-8.308 35.191-7.379 10.238-18.302 16.989-30.759 19.01-2.559.416-5.123.621-7.668.621zm.141-65.695c-.993 0-1.993.08-2.993.242-4.86.789-9.123 3.423-12.002 7.418s-4.03 8.871-3.241 13.732 3.422 9.124 7.417 12.003c3.994 2.879 8.871 4.031 13.732 3.242s9.123-3.423 12.002-7.418 4.03-8.871 3.241-13.732v-.001c-.789-4.86-3.422-9.123-7.417-12.002-3.173-2.287-6.903-3.484-10.739-3.484z"
              fill="#ce7000" id="nav-top-left" />
            <path d="m302.64 39.689c-2.021-12.457-8.772-23.381-19.01-30.76-8.161-5.882-17.76-8.939-27.625-8.918v28.807c.013 0 .026-.002.039-.002 3.836 0 7.566 1.197 10.74 3.484 3.995 2.879 6.629 7.141 7.417 12.002v.001c.789 4.861-.362 9.737-3.241 13.732s-7.141 6.629-12.002 7.418c-.987.16-1.973.22-2.953.221v28.835c2.511-.005 5.041-.209 7.567-.619 12.457-2.021 23.381-8.772 30.759-19.01 7.38-10.237 10.33-22.736 8.309-35.191z"
              fill="#823c08" id="nav-top-right" />
            <path d="m256.006 183.735c-71.319 0-129.342 58.022-129.342 129.342 0 71.319 58.022 129.341 129.342 129.341s129.342-58.022 129.342-129.341c-.001-71.32-58.023-129.342-129.342-129.342zm98.21 114.342h-83.21v-83.21c42.792 6.508 76.701 40.417 83.21 83.21zm-113.21-83.211v83.21h-83.21c6.508-42.792 40.417-76.701 83.21-83.21zm-83.211 113.211h83.21v83.21c-42.792-6.509-76.701-40.418-83.21-83.21zm113.211 83.21v-83.21h83.21c-6.509 42.792-40.418 76.701-83.21 83.21z"
              fill="#f9b700" id="nav-center-left" />
            <path d="m256.006 183.735v258.683c71.319 0 129.342-58.022 129.342-129.341-.001-71.32-58.023-129.342-129.342-129.342zm15 31.131c42.792 6.509 76.702 40.418 83.21 83.21h-83.21zm0 196.421v-83.21h83.21c-6.509 42.792-40.418 76.701-83.21 83.21z"
              fill="#f49d14" id="nav-center-right" />
            <g >
              <g id="compress-pointer">
                <path d="m321.141 247.941-93.7 36.571-36.57 93.699 93.699-36.57z" fill="#f3403f" />
                <path d="m321.141 247.941-65.135 25.423v79.425l28.564-11.148z" fill="#d10040" />

              </g>
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;