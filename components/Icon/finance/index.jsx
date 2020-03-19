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
    tl.from('#finance-bottom-line', 0.5, { scaleY: 0, transformOrigin: "center", ease: Bounce.easeOut })
      .from('#finance-red', 0.3, { scaleX: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#finance-orange', 0.3, { scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#finance-blue', 0.3, { scaleX: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#finance-up-line', 0.4, { scale: 0, transformOrigin: "left", ease: Bounce.easeOut })
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
        <svg id="Capa_7" enable-background="new 0 0 512 512" viewBox="0 0 512 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <g>
                <g id="finance-red">
                  <path d="m154.325 439.396h-96.65v-201.892l48.325-38.213 48.325 38.213z" fill="#ff7c48" />
                  <path d="m154.325 439.396h-48.325v-248.468l48.325 46.576z" fill="#ff415b" />
                </g>
                <g id="finance-orange">
                  <path d="m303.197 439.396h-94.394v-219.969l47.197-47.197 47.197-30.372z" fill="#ffda44" />
                  <path d="m303.197 439.396h-47.197v-267.166l47.197-30.372z" fill="#ff9f22" />
                </g>
                <g id="finance-blue">
                  <path d="m452.67 439.396h-93.34v-323.628l46.67 44.988 46.67-44.988z" fill="#69b1e9" />
                  <path d="m452.67 439.396h-46.67v-278.64l46.67-44.988z" fill="#2681ff" />
                </g>
              </g>
              <g id="finance-bottom-line">
                <path d="m0 424.396h512v30h-512z" fill="#00429c" />
                <g>
                  <path d="m256 424.396h256v30h-256z" fill="#00347b" />
                </g>
              </g>
            </g>
            <g id="finance-up-line">
              <path d="m27.106 286.583-21.212-21.212 95.656-95.657 67.876 67.877 167.984-167.985 69.938 69.937 70.018-70.019 21.213 21.213-91.231 91.233-69.938-69.937-167.984 167.985-67.876-67.877z" fill="#2681ff" />
              <path d="m409.172 57.604v30h50.115l-51.939 51.939-69.938-69.937-81.41 81.41v42.427l81.41-81.41 69.938 69.937 73.152-73.153v50.115h30v-101.328z" fill="#0051be" />
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;