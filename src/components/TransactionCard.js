import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Nazwa transakcji: {this.props.transactionName}<br/>
        Data: {this.props.transactionDate}<br/>
        Kwota: {this.props.transactionValue} PLN<br/>
        Kategoria: {this.props.categoryName}
      </div>
    )
  }
}

TransactionCard.propTypes = {
  transactionName: PropTypes.string,
  transactionValue: PropTypes.number,
  transactionDate: PropTypes.instanceOf(Date),
  categoryName: PropTypes.string
}

export default TransactionCard;