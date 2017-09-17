import React, { Component } from 'react';
import { TransactionsList } from '.';
import PropTypes from 'prop-types';

class CategoryCard extends Component {
  render() {
    const { item: { id, name, budgeted, activity } } = this.props;
    return (
      <div className="category-card" id={'categoryCard_' + id}>
        Nazwa kategorii: <a href="#" onClick={() => this.props.changeCategoryFunction(name)}>{name}</a><br />
        Wydałeś hajsu: {activity} PLN<br />
        Budżet: {budgeted} PLN
        {this.props.showTransactions}
      </div>
    )
  }
}

CategoryCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    activity: PropTypes.number,
    budgeted: PropTypes.number
  })
}

export default CategoryCard;