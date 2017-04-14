import React, { Component } from 'react';
import Card from './Card';
import cardInfo from './cardInfo';

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocusIndex: 0
    };
  }

  render() {
    let cards = cardInfo.map(function(card, index) {
      let bgColor = index === this.state.inFocusIndex ? '#e842f4' : '#9bcfe8';
      return (
        <li key={`card${index}`} >
          <Card
            title={card.title}
            date={card.date}
            category={card.category}
            details={card.details}
            link={card.link}
            cardColor={bgColor}
          />
        </li>
      );
    }, this);
    return (
      <ol>{cards}</ol>
    )
  }
}
