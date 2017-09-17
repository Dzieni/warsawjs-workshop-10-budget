import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item: { id, description, category, date, value } } = this.props;

    return (
      <div>
        Nazwa transakcji: {description}<br />
        Data: {date}<br />
        Kwota: {value} PLN<br />
        Kategoria: {category}
      </div>
    )
  }
}

TransactionCard.propTypes = {
  transactionName: PropTypes.string,
  transactionValue: PropTypes.number,
  transactionDate: PropTypes.string,
  categoryName: PropTypes.string
}

export default TransactionCard;