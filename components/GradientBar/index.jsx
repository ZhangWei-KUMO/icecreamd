import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class GradientBar extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    moment: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'ice',
    title: '请填写标题',
    content: '请填写文章内容',
    image: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ',
    moment: '2020-3-20',
    link: "/#"
  };

  render() {
    let { prefixCls, title, content, image, moment, link } = this.props;
    let barName = classNames({ [`${prefixCls}-bar`]: true });
    let containerName = classNames({ [`${prefixCls}-card-container`]: true });
    return (
      <div className={barName}>
        <div>
          <img src={this.props.image} />
        </div>
        <div className={containerName}>
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
        <div>
          <a href={this.props.link}>
            <button>
              {this.props.buttonName}
            </button>
          </a>
        </div>
      </div>
    )
  }
}

export default GradientBar;