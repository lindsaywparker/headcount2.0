import React, { Component } from 'react';
import Start from './Start'
import Comparison from './Comparison'
import Filter from './Filter'
import CardList from './CardList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Start />
        <Comparison />
        <Filter />
        <CardList />
      </div>
    );
  }
}

export default App;
