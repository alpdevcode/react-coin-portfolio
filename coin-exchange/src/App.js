import './App.css';
import React, { Component } from 'react';
import CoinHeader from './components/CoinHeader/CoinHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        { 
          name: "Bitcoin",
          ticker: "BTC",
          price: 35000
        },
        { 
          name: "Ethereum",
          ticker: "ETH",
          price: 3000
        },
        { 
          name: "Binance Coin",
          ticker: "BNB",
          price: 300
        },
        { 
          name: "Cardano",
          ticker: "ADA",
          price: 1
        },
        { 
          name: "Solana",
          ticker: "SOL",
          price: 100
        },
        { 
          name: "Polkadot",
          ticker: "DOT",
          price: 19
        },
      ],
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(tickerChangeValue) {

    const newCoinData = this.state.coinData.map( ({name, ticker, price}) =>
      {
        let newPrice = price;
        if (ticker === tickerChangeValue) {
          const randomPercent = 0.99 + Math.random() * 0.01;
          newPrice = price * randomPercent;
        }

        return {
          name,
          ticker,
          price: newPrice,
        }
      }
    )

    this.setState( {coinData: newCoinData} )
  }

  render() {
    return (
      <div className="App">
        <CoinHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </div>
    );
  }
}