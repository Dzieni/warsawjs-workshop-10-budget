import React, { Component } from 'react';
import './App.css';
import { Counter, TransactionCard } from './components';

class App extends Component {
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
  render() {
    const transaction = this.state.transactions[0];
    return (
      <div className="App">
        <Counter />

        <TransactionCard item={transaction} />
      </div>
    );
  }
}

export default App;
