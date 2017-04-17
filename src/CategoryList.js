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
        <div className="CategoryList" key={`category${index}`}
             style={{backgroundColor: bgColor}}>
          {value}
        </div>
      );
    });
    return (
      <div>{categories}</div>
    )
  }
}
