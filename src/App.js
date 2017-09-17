import React, { Component } from 'react';
import './App.css';
import { TransactionList, TransactionForm } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.removeTransactionCardById = this.removeTransactionCardById.bind(this);
    this.addTransactionCard = this.addTransactionCard.bind(this);
  }
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ]
  }
  removeTransactionCardById(transactionId) {
    this.setState({
      transactions: this.state.transactions.filter((el) => {
        return el.id !== transactionId;
      })
    });
  }
  addTransactionCard(transaction) {
    const newTransactions = this.state.transactions;
    transaction.id = newTransactions[newTransactions.length-1].id+1;
    newTransactions.push(transaction);
    this.setState({
      transactions: newTransactions
    });
  }
  render() {
    const transactions = this.state.transactions;
    return (
      <div className="App">
        <TransactionForm addCardFunction={this.addTransactionCard} />
        <TransactionList list={transactions} removeCardFunction={this.removeTransactionCardById} />
      </div>
    );
  }
}

export default App;
