import React, { Component } from 'react';
import './Card.css';
import categoryColors from './colors';

class Card extends Component {

  render() {
    const card = this.props;
    return (
      <div className="Card">
        <div className="Card-MoreInfo">More...</div>
        <div className="Card-Category"
          style={{backgroundColor: categoryColors.get(card.category)}} >
          {card.category} 
        </div>
        <div className="Card-Main">{card.main}</div>
        <div className="Card-Tech">{card.tech}</div>
      </div>
    );
  }
}

export default Card;
