import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    // console.log(this.props.allStocks)
    // console.log(this.props.boughtStocks)
    return (
      <div>
        <SearchBar
          sortByAbc={this.props.sortByAbc}
          sortByPrice={this.props.sortByPrice}
          filterByIndustry={this.props.filterByIndustry}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                allStocks={this.props.allStocks}
                buyStock={this.props.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                boughtStocks={this.props.boughtStocks}
                sellStock={this.props.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
