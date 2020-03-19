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
    tl.from('#ice-cream-cover', 0.5, { scaleX: 0, transformOrigin: "center", ease: Power2.easeOut })
      .from('#ice-cream-green', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#ice-cream-red', 0.5, { scaleX: 0, transformOrigin: "top", ease: Bounce.easeOut })
      .from('#ice-cream-blue', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut })
      .from('#ice-cream-prex', 2, { scaleY: 0, transformOrigin: "top", ease: Power2.easeOut })
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
        <svg id="Capa_4" enable-background="new 0 0 512 512" height={size} width={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <g id="ice-cream-green">
                <circle cx="295.549" cy="158.16" fill="#aee097" r="81.817" />
                <path d="m377.369 158.164c0 45.187-36.632 81.809-81.819 81.809-7.482 0-14.737-1.004-21.619-2.894 34.693-9.471 60.19-41.21 60.19-78.915s-25.498-69.444-60.19-78.925c6.881-1.89 14.137-2.894 21.619-2.894 45.187 0 81.819 36.632 81.819 81.819z"
                  fill="#83d167" />
              </g>
              <g id="ice-cream-blue">
                <circle cx="216.448" cy="81.817" fill="#a8e7ef" r="81.817" />
                <path d="m298.268 81.821c0 45.187-36.632 81.809-81.819 81.809-7.482 0-14.737-1.004-21.619-2.894 34.693-9.471 60.19-41.21 60.19-78.915s-25.498-69.444-60.19-78.925c6.881-1.89 14.137-2.894 21.619-2.894 45.187 0 81.819 36.632 81.819 81.819z"
                  fill="#70d9e6" />
                <g>
                  <path d="m240.553 147.692c-4.267 0-7.726-3.459-7.726-7.726v-34.336c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v34.335c0 4.267-3.459 7.727-7.726 7.727z"
                    fill="#70d9e6" />
                </g>
                <g>
                  <path d="m192.343 147.692c-4.267 0-7.726-3.459-7.726-7.726v-23.521c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v23.521c.001 4.266-3.459 7.726-7.726 7.726z"
                    fill="#70d9e6" />
                </g>
              </g>
              <g id="ice-cream-red">
                <path d="m203.272 201.893v66.788c0 9.046 7.333 16.378 16.378 16.378 9.046 0 16.378-7.333 16.378-16.378v-66.788z" fill="#fb6672" />

                <circle cx="224.89" cy="208.849" fill="#fb6672" r="81.817" />
                <path d="m306.71 208.853c0 45.187-36.632 81.809-81.819 81.809-7.482 0-14.737-1.004-21.619-2.894 34.693-9.471 60.19-41.21 60.19-78.915s-25.498-69.444-60.19-78.925c6.881-1.89 14.137-2.894 21.619-2.894 45.187 0 81.819 36.632 81.819 81.819z" fill="#fb4a59" />
                <g><path d="m243.755 243.442c-4.267 0-7.726-3.459-7.726-7.726v-24.551c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v24.551c.001 4.266-3.458 7.726-7.726 7.726z" fill="#fb4a59" />
                </g>
                <g>
                </g>
              </g>
              <g id="ice-cream-cover">
                <path d="m345.924 255.519-85.552 249.826c-3.039 8.874-15.589 8.874-18.627 0l-85.552-249.826z" fill="#fcb44d" />
                <path d="m345.925 255.516-15.216 44.442-5.295 15.453-13.279 38.786-5.295 15.453-13.279 38.786-5.295 15.453-13.289 38.786-5.285 15.453-9.323 27.217c-3.039 8.87-15.587 8.87-18.626 0l-5.264-15.36-9.344-27.31-9.066-26.465-9.509-27.774-9.024-26.342-9.55-27.897-13.279-38.786-5.295-15.453-15.216-44.442z" fill="#fcb44d" />
                <path d="m345.925 255.516-11.59 33.831h-166.549l-11.59-33.831z" fill="#fca62f" />
                <path d="m345.925 255.516-85.557 249.829c-3.039 8.87-15.587 8.87-18.626 0l-9.344-27.3 76.202-222.529z" fill="#fca62f" />
                <path d="m325.414 315.411 5.295-15.453h-29.164l13.083-38.178c.742-2.163.464-4.419-.567-6.263h-13.495c-.227.391-.412.814-.567 1.257l-14.783 43.185h-20.48l13.073-38.178c.742-2.163.464-4.419-.567-6.263h-13.495c-.216.391-.402.814-.556 1.257l-14.793 43.185h-20.728l12.166-35.531c1.154-3.379-.165-7.005-2.998-8.911h-8.633c-1.35.906-2.421 2.246-2.988 3.904l-13.887 40.538h-39.92l5.295 15.453h29.329l-13.279 38.786h-2.771l9.55 27.897 4.265-12.445h20.738l-13.289 38.786h-2.689l9.509 27.774 4.224-12.321h20.48l-13.279 38.786h-2.359l9.344 27.31 4.059-11.857h29.154l5.285-15.453h-29.144l13.279-38.786h29.154l5.295-15.453h-29.154l13.279-38.786h29.154l5.295-15.453h-29.164l13.289-38.786h29.155zm-116.318 38.786 13.279-38.786h20.738l-13.289 38.786zm38.972 54.239h-20.48l13.279-38.786h20.48zm18.574-54.239h-20.48l13.279-38.786h20.48z"
                  fill="#fb9927" />
                <path d="m344.512 268.744h-186.908c-11.601 0-21.005-9.404-21.005-21.005 0-11.601 9.404-21.005 21.005-21.005h186.908c11.601 0 21.005 9.404 21.005 21.005 0 11.601-9.404 21.005-21.005 21.005z" fill="#fcc16d" />
                <path d="m365.519 247.738c0 5.8-2.349 11.054-6.15 14.855s-9.055 6.15-14.855 6.15h-34.614c5.8 0 11.054-2.349 14.855-6.15s6.15-9.055 6.15-14.855c0-11.6-9.406-21.005-21.005-21.005h34.614c11.599 0 21.005 9.405 21.005 21.005z" fill="#fcb44d" />


              </g>
              <g id="ice-cream-prex">
                <path d="m195.546 243.442c-4.267 0-7.726-3.459-7.726-7.726v-33.823c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v33.823c0 4.266-3.459 7.726-7.726 7.726z" fill="#fb4a59" />
                <path d="m200.07 116.445v23.521c0 9.046 7.333 16.378 16.378 16.378 9.046 0 16.378-7.333 16.378-16.378v-23.521z" fill="#a8e7ef" />
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </g>
        </svg>
      </span >
    )
  }
}

export default Icon;