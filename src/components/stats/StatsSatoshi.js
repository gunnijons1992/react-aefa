
import React, { Component } from 'react';
import Fetch from '../../Fetch';

class StatsSatoshi extends Component {


  render() {
    const curr = '55';
    console.log(this.props);
    const { data, loading, error, currency } = this.props;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    console.log(data.Bid);
    return (
      <section>
        <ul>
          <li>Buy: {data.Bid = 'null' ? 'No bids' : data.Bid}</li>
          <li>Sell: {data.Ask.toFixed(8)}</li>
          <li>Volume 24H: {data.Volume24Hr} SMLY</li>
        </ul>
      </section>
    );
  }
}

export default Fetch(StatsSatoshi, 'https://www.southxchange.com/api/price/' + curr);
