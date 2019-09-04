import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.allStocks)
    const stockComponents = this.props.allStocks.map(stock => {
      return <Stock stock={stock} buyStock={this.props.buyStock} />
    })
    return (
      <div>
        <h2>Stocks</h2>
        {
          stockComponents
        }
      </div>
    );
  }

}

export default StockContainer;
