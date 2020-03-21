import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GuideBoarder from './guideBoarder';
import Navigator from './navigator';
import Thermometer from './thermometer';
import DoubleCheck from './doubleCheck';
import Finance from './finance';
import Icecream from './icecream';
import Tools from './tools';
import Industry from './industry';
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'


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


  renderSVG = (svg) => {
    if (!svg) {
      return "Nothing"
    } else {
      return svg
    }
  }

  componentDidMount() {
    gsap.registerPlugin(CSSPlugin)
  }
  render() {
    let { size, type, trigger } = this.props;
    const iconset = {
      guideBoarder: <GuideBoarder size={size} trigger={trigger} />,
      navigator: <Navigator size={size} trigger={trigger} />,
      thermometer: <Thermometer size={size} trigger={trigger} />,
      doubleCheck: <DoubleCheck size={size} trigger={trigger} />,
      tools: <Tools size={size} trigger={trigger} />,
      finance: <Finance size={size} trigger={trigger} />,
      icecream: <Icecream size={size} trigger={trigger} />,
      industry: <Industry size={size} trigger={trigger} />
    };
    return (
      <span>
        {this.renderSVG(iconset[type])}
      </span >
    )
  }
}

export default Icon;