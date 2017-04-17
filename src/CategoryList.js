import React, { Component } from 'react';
import cardInfo from './cardInfo';
import './CategoryList.css';
import categoryColors from './colors';
import _ from 'underscore';

export default class CategoryList extends Component {
  render() {
    let categories = _.uniq(_.map(cardInfo, (value) => {
      return value.category;
    }));

    categories = _.map(categories, (value, index) => {
      const bgColor = categoryColors.get(value);
      return (
        <button className="CategoryList"
                key={`category${index}`}
                style={{backgroundColor: bgColor}}
                onClick={() => {this.props.onCategoryClick(value)}} >
          {value}
        </button>
      );
    });
    categories.push(
      <button className="CategoryList"
              key={`category${categories.length}`}
              style={{backgroundColor: categoryColors.get("All")}}
              onClick={() => {this.props.onCategoryClick(null)}} >
        Show All
      </button>
    );
    console.log(categories);

    return (
      <div>{categories}</div>
    )
  }
}
