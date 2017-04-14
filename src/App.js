import React, { Component } from 'react';
import './App.css';
import CardCarousel from './CardCarousel';
import HeaderComponent from './HeaderComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CardCarousel />
      </div>
    );
  }
}
