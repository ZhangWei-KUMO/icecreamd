import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonType = 'empty';
    let { type, style } = this.props;
    let btnname = classNames({ [`btn-${type ? type : buttonType}`]: true });
    return (
      <button className={`btn ${btnname}`} style={style ? style : {}}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;