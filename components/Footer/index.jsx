import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    startYear: PropTypes.number,
    company: PropTypes.string,
    webNo: PropTypes.string,
    policeNo: PropTypes.string,
    list: PropTypes.array
  };

  static defaultProps = {
    prefixCls: 'ice',
    webNo: '',
    policeNo: '',
    company: 'cloud-wave.,ltd',
    list: [],
    startYear: 2020

  }
  render() {
    let { prefixCls, company, webNo, policeNo, startYear } = this.props;
    let footerName = classNames({ [`${prefixCls}-footer`]: true });
    let year = new Date().getFullYear()
    return (
      <div className={footerName}>
        {this.props.children}
        <center>
          {company} @copyrights {startYear}-{year}
          {webNo}
          {policeNo}
        </center>
      </div>
    )
  }
}

export default Footer;