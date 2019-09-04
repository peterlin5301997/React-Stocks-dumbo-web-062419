import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // console.log(this.props.boughtStocks)
    const boughtStocks = this.props.boughtStocks.map(stock => {
      return <Stock stock={stock} sellStock={this.props.sellStock} />
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            boughtStocks
          }
      </div>
    );
  }

}

export default PortfolioContainer;
