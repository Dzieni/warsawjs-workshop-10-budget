import React, { Component } from 'react';
import TransactionCard from './TransactionCard.js';
import PropTypes from 'prop-types';

class TransactionList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((el) => {
          return <li key={el.id}><TransactionCard item={el} removeCardFunction={this.props.removeCardFunction} /></li>
        })}
      </ul>
    );
  }
}

TransactionCard.propTypes = {
  list: PropTypes.array
}

export default TransactionList;