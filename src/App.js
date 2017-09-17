import React, { Component } from 'react';
import './App.css';
import { TransactionsView, CategoriesView } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.removeTransactionCardById = this.removeTransactionCardById.bind(this);
    this.addTransactionCard = this.addTransactionCard.bind(this);
    this.changeCurrentCategory = this.changeCurrentCategory.bind(this);
  }
  state = {
    currentView: 'transactions',
    currentCategory: null,
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
    ],
    categories: [
      {
        id: 1,
        name: 'Edukacja',
        budgeted: 100,
        activity: 50
      },
      {
        id: 2,
        name: 'Transport',
        budgeted: 200,
        activity: 123
      },
      {
        id: 3,
        name: 'Samochód',
        budgeted: 300,
        activity: 170
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
  changeCategoryBudget(categoryId, newBudget) {
    const newCategories = this.state.categories;
    const categoryIndex = this.state.transactions.findIndex((el) => {
      return el.id === categoryId;
    });
    if (categoryIndex > -1) {
      newCategories[categoryIndex].budget = newBudget;
      this.setState({
        categories: newCategories
      });
    }
  }
  changeView(newView) {
    this.setState({
      currentView: newView
    });
  }
  changeCurrentCategory(newCategory) {
    this.setState({
      currentCategory: newCategory
    });
    if (this.state.currentView === 'categories') {
      this.changeView('transactions');
    }
    else {
      this.changeView('categories');      
    }
  }
  render() {
    let transactions;
    if (typeof this.state.currentCategory === 'string') {
      transactions = this.state.transactions.filter((el) => {
        return el.category === this.state.currentCategory;
      });
    }
    else {
      transactions = this.state.transactions;
    }
    const categories = this.state.categories;
    const transactionsView = <TransactionsView list={transactions} addCardFunction={this.addTransactionCard} removeCardFunction={this.removeTransactionCardById} changeCategoryFunction={this.changeCurrentCategory} />
    return (
      <div className="budget">
        <button onClick={() => this.changeView('transactions')}>Transakcje</button>
        <button onClick={() => this.changeView('categories')}>Kategorie</button>
        {this.state.currentView === 'transactions' && transactionsView}
        {this.state.currentView === 'categories' && <CategoriesView showTransactions={typeof this.state.currentCategory === 'string' ? transactionsView : ''} list={categories} changeCategoryFunction={this.changeCurrentCategory} />}
      </div>
    );
  }
}

export default App;
