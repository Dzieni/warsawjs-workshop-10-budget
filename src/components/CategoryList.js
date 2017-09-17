import React, { Component } from 'react';
import CategoryCard from './CategoryCard.js';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((el) => {
          return <li key={el.id}><CategoryCard item={el} changeCategoryFunction={this.props.changeCategoryFunction} currentCategory={this.props.currentCategory}/></li>
        })}
      </ul>
    );
  }
}

CategoryCard.propTypes = {
  list: PropTypes.array
}

export default CategoryList;