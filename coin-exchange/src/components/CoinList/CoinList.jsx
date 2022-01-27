import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const TableCoin = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
  render() {
    return (
      <TableCoin>
        <thead>
          <tr>
          <td>Name</td>
          <td>Ticker</td>
          <td>Price($)</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.coinData.map(
               ({name, ticker, price}) => 
               <Coin key={ticker} name={name} ticker={ticker} price={price} handleRefresh={this.props.handleRefresh} />
            )
          }
        </tbody>
      </TableCoin>
    )
  }
}
