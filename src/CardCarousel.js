import React, { Component } from 'react';
import Card from './Card';
import cardInfo from './cardInfo';

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocusIndex: 0
    };
  };

  updateFocus() {
    const inFocusIndex = (this.state.inFocusIndex + 1) % cardInfo.length;
    this.setState({inFocusIndex});
  };

  render() {
    let cards = [];
    let iFocus = this.state.inFocusIndex;
    for (let i = iFocus; i < iFocus + cardInfo.length; i++) {
      let index = i % cardInfo.length;
      let card = cardInfo[index];
      let bgColor = index === iFocus ? '#41d9f4' : '#9bcfe8';
      cards.push(
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
    }

    return (
      <div>
        <button onClick={() => this.updateFocus()} >Next Card</button>
        <ol>{cards}</ol>
      </div>
    )
  }
}
