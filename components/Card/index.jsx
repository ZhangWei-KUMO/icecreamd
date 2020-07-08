import React, { PureComponent } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

class Card extends PureComponent {
  render() {
    const {
      prefixCls, title, content, image, moment, link
    } = this.props;
    const cardName = classNames({ [`${prefixCls}-card`]: true });
    const coverName = classNames({ [`${prefixCls}-card-cover`]: true });
    const bodyName = classNames({ [`${prefixCls}-card-body`]: true });
    return (
      <div className={cardName}>
        <a href={link}>
          <div className={coverName}>
            <img src={image} alt={`${cardName}-title`} />
          </div>
          <div className={bodyName}>
            <div className={`${cardName}-title`}>{title}</div>
            <div className={`${cardName}-content`}>{content}</div>
            <div className={`${cardName}-moment`}>{moment}</div>
          </div>
        </a>
      </div>
    );
  }
}

Card.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  moment: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

Card.defaultProps = {
  prefixCls: "ice",
  title: "请填写标题",
  content: "请填写文章内容",
  image: "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ",
  moment: "2020-3-20",
  link: "/#"
};
export default Card;
