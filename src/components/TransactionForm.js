import React, { Component } from 'react';

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.props.addCardFunction(this.state);
    event.preventDefault();
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input type="text" name="description" placeholder="Nazwa zadania" />
        <input type="number" name="value" placeholder="Kwota" />
        <input type="text" name="category" placeholder="Kategoria" />
        <input type="text" name="date" placeholder="Data" />
        <button type="submit">Dodaj</button>
      </form>
    );
  }
}

export default TransactionForm;