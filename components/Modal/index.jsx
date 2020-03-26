import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.node = document.createElement('div');

  }

  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    isVisible: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'ice',
    title: '请填写标题',
    children: null,
    isVisible: false,
  }
  componentDidMount() {
    if (this.node) {
      document.body.appendChild(this.node);
    }
  }
  componentWillMount() {
    this.node && this.node.remove();
  };

  renderModal = () => {
    let { prefixCls, title, children } = this.props;
    let modalName = classNames({ [`${prefixCls}-modal`]: true });
    return (
      <div className={`${modalName}-mask`}>
        {title}
        {children}
      </div>
    )
  }
  render() {
    let { prefixCls, title, isVisible } = this.props;
    let modalName = classNames({ [`${prefixCls}-modal`]: true });
    if (isVisible) {
      let VirtulDOM = ReactDOM.createPortal(this.renderModal(), this.node);
      return (
        <div className={modalName}>
          {VirtulDOM}
        </div>
      )
    } else {
      return null
    }
  }
}

export default Modal;