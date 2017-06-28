import React, { Component } from 'react';
import Start from './Start';
import Comparison from './Comparison';
import Filter from './Filter';
import CardList from './CardList';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const district = new DistrictRepository(kinderData);
    this.state = {
      dataArray: district.findAllMatches(),
    }
  }

  render() {
    return (
      <div>
        <Start />
        <Comparison />
        <Filter />
        <CardList dataArray={this.state.dataArray}/>
      </div>
    );
  }
}

export default App;
