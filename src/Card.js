import React, { Component } from 'react';
import './Card.css';
import categoryColors from './colors';

export default class Card extends Component {

  render() {
    const card = this.props;
    const bgColor = categoryColors.get(card.category);
    return (
      <div className="Card"
        style={{backgroundColor: card.cardColor}} >
        <a className="Card-MoreInfo" href={card.link}
          style={{backgroundColor: bgColor}} >More...</a>
        <div className="Card-Category"
          style={{backgroundColor: bgColor}} >
          {card.category}
        </div>
        <div className="Card-Main">{card.title}</div>
        <div className="Card-Date">{card.date}</div>
        <div className="Card-Details">{card.details}</div>
      </div>
    );
  }
}
