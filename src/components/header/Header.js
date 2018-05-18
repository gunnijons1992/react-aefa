import React, { Component } from 'react';

import './Header.css';

import smiley from './../../layout/799.png'
import satoshi from './../../layout/satoshi.jpg'
import southx from './../../layout/southxchange.png'

export default class Header extends Component {

  render()  {
    return (
      <header className="App-header">
        <h1 className="App-title">SMLY Observer</h1>
        <div className="Logo-flex">
          <a href="https://tradesatoshi.com/Exchange/?market=SMLY_BTC" target="_blank">
            <img src={satoshi} className="TradeSatoshi-logo" alt="TradeSatoshi logo" />
          </a>
          <a href="https://bitcointalk.org/index.php?topic=845761.0" target="_blank">
            <img src={smiley} className="Smiley-logo" alt="SmileyCoin logo" />
          </a>
          <a href="https://www.southxchange.com/Market/Book/SMLY/BTC" target="_blank">
            <img src={southx} className="SouthXchange-logo" alt="SouthXchange logo" />
          </a>
        </div>
      </header>
    );
  }
}
