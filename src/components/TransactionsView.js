import React, { Component } from 'react';
import { TransactionList, TransactionForm } from '.';

class TransactionsView extends Component {
  render() {
    return (
      <div>
        <TransactionForm addCardFunction={this.props.addCardFunction} />
        <TransactionList list={this.props.list} removeCardFunction={this.props.removeCardFunction} changeCategoryFunction={this.props.changeCategoryFunction} />
      </div>
    );
  }
}

export default TransactionsView;