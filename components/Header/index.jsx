import React, { Component } from 'react';
import Button from '../Button';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circle_x: 380.35976602685764,
      circle_y: 28.782306472650163
    }
    this.move = this.move.bind(this)
  }

  move = () => {

  };

  componentDidMount() {

  }

  render() {
    let { circle_x, circle_y } = this.state;
    return (
      <div className="welcome-container">
        <svg viewBox="0 0 1440 500">
          <g transform={`translate(${circle_x}, ${circle_y})`} opacity="1" frame="534">
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 170, 170)">
                <svg>
                  <defs>
                    <filter id="banner-circle-shadow-1">
                      <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.06)">
                      </feDropShadow>
                    </filter>
                    <linearGradient id="banner-circle-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "rgb(250, 252, 254)" }}></stop>
                      <stop offset="100%" style={{ stopColor: "rgb(249, 252, 254)" }}></stop>
                    </linearGradient></defs>
                  <circle cx="170" cy="170" r="140" fill="url(#banner-circle-fill-1)" filter="url(#banner-circle-shadow-1)">
                  </circle>
                </svg>
              </g>
            </g>
          </g>
          <g transform="translate(-227.73901011485552, 222.45608310899212)" opacity="1" frame="534">
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 230, 230)">
                <svg>
                  <defs>
                    <filter id="banner-circle-shadow-2">
                      <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)">
                      </feDropShadow>
                    </filter>
                    <linearGradient id="banner-circle-fill-2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "rgb(250, 252, 254)" }}></stop>
                      <stop offset="50%" style={{ stopColor: "rgb(243, 249, 254)" }}></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="230" cy="230" r="200" fill="url(#banner-circle-fill-2)" filter="url(#banner-circle-shadow-2)"></circle>
                </svg>
              </g>
            </g>
          </g>
          <g transform="translate(1283.018786761164, 181.0104718055677)" opacity="1" frame="534"><g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 120, 120)"><svg><defs>
              <filter id="banner-rect-shadow-1">
                <feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)">
                </feDropShadow></filter>
              <linearGradient id="banner-rect-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="25%" style={{ stopColor: "rgb(248, 252, 255)" }}></stop>
                <stop offset="100%" style={{ stopColor: "rgb(248, 251, 255)" }}></stop>
              </linearGradient></defs><rect x="30" y="30" width="180" height="180" fill="url(#banner-rect-fill-1)" filter="url(#banner-rect-shadow-1)"></rect>
            </svg>
            </g>
          </g>
          </g>
          <g transform="translate(668.1605646891296, -661.6483337623511)" opacity="1" frame="534"><g transform="matrix(1, 0, 0, 1, 0, 0)">
            <g transform="rotate(0, 430, 430)">
              <svg width="860" height="860"><defs>
                <filter id="banner-diamond-shadow-1"><feDropShadow dx="10" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.05)"></feDropShadow></filter>
                <linearGradient id="banner-diamond-fill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="60%" style={{ stopColor: "rgb(252, 253, 255)" }} ></stop>
                  <stop offset="100%" style={{ stopColor: "rgb(252, 253, 254)" }}>
                  </stop></linearGradient></defs><path d="M 30 430 430 30 830 430 430 830 Z" fill="url(#banner-diamond-fill-1)" filter="url(#banner-diamond-shadow-1)">
                </path>
              </svg>
            </g>
          </g>
          </g>
        </svg>
        <div className="welcome-background">
          <div className="welcome-holder">
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            <a>{this.props.tag}</a>
            <div className="welcome-btn-groups">
              {this.props.buttonLeft ? <a href={this.props.buttonLeft.link}>
                <Button type="primary" style={{ fontSize: "16px" }}>{this.props.buttonLeft.text}</Button></a> : null}
              {this.props.buttonRight ? <a href={this.props.buttonRight.link}>
                <Button style={{ fontSize: "16px" }}>{this.props.buttonRight.text}</Button></a> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;