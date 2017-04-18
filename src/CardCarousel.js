import React, { Component } from 'react';
import Card from './Card';
import CategoryList from './CategoryList';
import cardInfo from './cardInfo';

export default class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inFocusIndex: 0,
      categorySubset: null
    };
  };

  updateFocus() {
    const inFocusIndex = (this.state.inFocusIndex + 1) % cardInfo.length;
    this.setState({inFocusIndex});
  };

  filterByCategory(categorySubset) {
    this.setState({categorySubset});
  }

  render() {
    let cards = [];
    let catSubset = this.state.categorySubset;
    for (let i = 0; i < cardInfo.length; i++) {
      let card = cardInfo[i];
      let bgColor = '#CFD6D3';
      if (!catSubset || card.category === catSubset) {
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
    }

    return (
      <div>
        <CategoryList onCategoryClick={(cat) => this.filterByCategory(cat)}/>

        {cards}
      </div>
    )
  }
}
