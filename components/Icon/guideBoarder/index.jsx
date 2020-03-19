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
    tl.from('#bottomLeft', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut })
      .from('#bottomRight', 0.2, { scaleX: 0, transformOrigin: "top", ease: Power2.easeOut })
      .from('#woodBc', 0.5, { scaleY: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#wood', 0.3, { scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#leftBc', 0.5, { scale: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#left', 0.2, { scaleX: 0, transformOrigin: "center", ease: Circ.easeOut })
      .from('#rightBc', 0.5, { scale: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#right', 0.2, { scaleX: 0, transformOrigin: "center", ease: Power2.easeOut })
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
        <svg id="Capa_1" enableBackground="new 0 0 512 512" height={size} width={size}
          viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="m316 474.67h-120v-474.668l120-.001z" fill="#ce7000" id="woodBc" />
            <path d="m256 .001h60v474.669h-60z" fill="#823c08" id="wood" />
            <path d="m400.092 511.999h-288.184v-15c0-54.639 44.452-99.092 99.092-99.092h90c54.64 0 99.092 44.453 99.092 99.092z"
              fill="#f9ecd7" id="bottomLeft" />
            <path d="m400.092 496.999c0-54.639-44.452-99.092-99.092-99.092h-45v114.092h144.092z" fill="#f5d7b0" id="bottomRight" />
            <path d="m61.031 190.005-61.031-60.003 61.031-60.003 374.469.003v120l-266.519.002-12.021-12.228-12.022 12.229z"
              fill="#f9b700" id="leftBc" />
            <path d="m256 70.001h179.5v120.001h-179.5z" fill="#f49d14" id="left" />
            <path d="m450.969 350.011-287.025-.002-12.021-12.227-12.02 12.226h-63.403v-120l266.519-.002 12.021 12.228 12.022-12.228 83.906-.001 61.032 60.003z"
              fill="#f9b700" id="rightBc" />
            <path d="m512 290.008-61.031-60.003-83.906.001-12.023 12.228-12.021-12.228-87.019.001v120.003l194.969.001z" fill="#f49d14" id="right" />
          </g>
        </svg>

      </span >
    )
  }
}

export default Icon;