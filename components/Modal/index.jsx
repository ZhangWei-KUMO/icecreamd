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
    if (!this.node) {
      this.node = document.createElement('div');

    }
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

  remove = () => {
    this.props.onCancel()
  };

  prevent = (e) => {
    e.stopPropagation()
  }


  renderModal = () => {
    let { prefixCls, title, children } = this.props;
    let modalName = classNames({ [`${prefixCls}-modal`]: true });
    return (
      <div className={`${modalName}-mask`} onClick={this.remove}>
        <div className={`${modalName}-container`} onClick={this.prevent}>
          <h2>{title}</h2>
          <span className={`${modalName}-close`} onClick={this.remove}>X</span>
          {children}
        </div>

      </div>
    )
  }
  render() {
    let { prefixCls, title, isVisible } = this.props;
    let modalName = classNames({ [`${prefixCls}-modal`]: true });
    if (isVisible) {
      console.log(ReactDOM.createPortal(this.renderModal(), this.node))
      return (
        this.node && ReactDOM.createPortal(this.renderModal(), this.node)
      )
    } else {
      return null
    }
  }
}

export default Modal;