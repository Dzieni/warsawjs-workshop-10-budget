import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionCard extends Component {
  render() {
    const { item: {id, description, category, date, value} } = this.props;
    
    return (
      <div className="transaction-card" id={'transactionCard_'+id}>
        Nazwa transakcji: {description}<br/>
        Data: {date}<br/>
        Kwota: {value} PLN<br/>
        Kategoria: {category}
      </div>
    )
  }
}

TransactionCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    value: PropTypes.number
  })
}

export default TransactionCard;