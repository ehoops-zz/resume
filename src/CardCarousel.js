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
    for (let i = 0; i < cardInfo.length; i++) {
      let card = cardInfo[i];
      let bgColor = i === iFocus ? '#EAF2EF' : '#CFD6D3';
      cards.push(
        <div key={`card${i}`} >
          <Card
            title={card.title}
            date={card.date}
            category={card.category}
            details={card.details}
            link={card.link}
            cardColor={bgColor}
          />
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => this.updateFocus()} >Next Card</button>
        {cards}
      </div>
    )
  }
}
