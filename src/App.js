import React, { Component } from 'react';
import './App.css';
import CardCarousel from './CardCarousel';
import HeaderComponent from './HeaderComponent';
import CategoryList from './CategoryList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CategoryList />
        <CardCarousel />
      </div>
    );
  }
}
