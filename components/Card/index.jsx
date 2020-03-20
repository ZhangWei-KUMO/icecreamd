import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Card extends Component {
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
  }
  render() {
    let { prefixCls, title, content, image, moment, link } = this.props;
    let cardName = classNames({ [`${prefixCls}-card`]: true });
    let coverName = classNames({ [`${prefixCls}-card-cover`]: true });
    let bodyName = classNames({ [`${prefixCls}-card-body`]: true });
    return (
      <div className={cardName}>
        <a href={link}>
          <div className={coverName}>
            <img src={image} />
          </div>
          <div className={bodyName}>
            <div className={`${cardName}-title`}>{title}</div>
            <div className={`${cardName}-content`}>{content}</div>
            <div className={`${cardName}-moment`}>{moment}</div>
          </div>
        </a>
      </div >
    )
  }
}

export default Card;