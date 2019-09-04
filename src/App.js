import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    allStocks: [],
    sortByAbc: false,
    sortByPrice: false,
    filteredStocks: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocksData => {
        let stocksArray = stocksData.map(stock => {
          return {...stock, bought: false}
        })
        return this.setState({ allStocks: stocksArray, filteredStocks: stocksArray })
      })
  }

  buyStock = (boughtStock) => {
    // console.log("Stock Bought", boughtStock)
    let stocksArray = this.state.allStocks.map(stock => {
      if (stock.id === boughtStock.id) {
        stock.bought = true
        return stock
      } else {
        return stock
      }
    })
    this.setState({ allStocks: stocksArray })
  }

  sellStock = (soldStock) => {
    // console.log("sold stock", soldStock)
    let stocksArray = this.state.allStocks.map(stock => {
      if (stock.id === soldStock.id) {
        stock.bought = false
        return stock
      } else {
        return stock
      }
    })
    this.setState({ boughtStocks: stocksArray })
  }

  sortByAbc = () => {
    // console.log("sortByAbc")
    this.setState({ sortByAbc: true })
  }

  sortByPrice = () => {
    // console.log("sortByPrice")
    this.setState({ sortByPrice: true })
  }

  filterByIndustry = (event) => {
    // console.log("filterByIndustry", event.target.value)
    let stocksArray = this.state.allStocks.filter(stock => {
      return stock.type === event.target.value
    })
    this.setState({ filteredStocks: stocksArray })
  }

  render() {

    let boughtStocks = this.state.allStocks.filter(stock => {
      if (stock.bought) {
        return stock
      }
    })

    // console.log(boughtStocks)

    if (this.state.sortByAbc) {
      this.state.filteredStocks.sort((stockA, stockB) => {
        return stockA.ticker.localeCompare(stockB.ticker)
      })
    }

    if (this.state.sortByPrice) {
      this.state.filteredStocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price
      })
    }

    // console.log(this.state.allStocks)

    return (
      <div>
        <Header/>
        <MainContainer
          allStocks={this.state.filteredStocks}
          buyStock={this.buyStock}
          boughtStocks={boughtStocks}
          sellStock={this.sellStock}
          sortByAbc={this.sortByAbc}
          sortByPrice={this.sortByPrice}
          filterByIndustry={this.filterByIndustry}
        />
      </div>
    );
  }
}

export default App;
