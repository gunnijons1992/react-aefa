import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StatsSatoshi from './StatsSatoshi'
import './Stats.css';

export default class Stats extends Component {

  static propTypes = {
    bid: PropTypes.number || null,
    ask: PropTypes.number,
    variation: PropTypes.number || null,
    volume: PropTypes.number || null,
  }


  render()  {
    return  (
      <div className="Stats-flex">
        <div className="Stats-satoshi">
          <h3 className="Stats-satoshi-header">Trade Satoshi</h3>
          <StatsSatoshi currency="SMLY/BTC" />
        </div>
        <div className="Stats-south">
          <h3 className="Stats-south-header">SouthXchange</h3>
          <p>HH</p>
          <p>HH</p>
          <p>HH</p>
          <p>HH</p>
          <p>HH</p>
        </div>
      </div>
    );
  }
}
