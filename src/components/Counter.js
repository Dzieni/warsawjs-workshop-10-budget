import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  incrementCount() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrementCount() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={ () => this.incrementCount() }>+1</button>
        <button onClick={ () => this.decrementCount() }>-1</button>
      </div>
    )
  }
}

export default Counter;