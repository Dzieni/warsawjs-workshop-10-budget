import React, { Component } from 'react';
import { CategoryList } from '.';

class CategoriesView extends Component {
  render() {
    return (
      <div>
        <h2>Kategorie</h2>
        <label><input type="checkbox" /> Tryb edycji</label>
        <CategoryList currentCategory={this.props.currentCategory} list={this.props.list} changeCategoryFunction={this.props.changeCategoryFunction} />
      </div>
    );
  }
}

export default CategoriesView;