import React, { Component } from 'react';
import { func } from 'prop-types';
import './Filter.css';

export default class Filter extends Component {
  constructor( { handleInput }) {
    super();
    this.state = {
      input: ''
    }
  }

  handleFilter(e) {
    this.setState({ input: e.target.value });
    this.props.handleInput(e.target.value);
  }

  handleShowAll() {
    this.setState({input: ''});
    this.props.handleInput();
  }

  render() {
    return (
      <div className='filter'>
        <input type="text"
               className="filter-input"
               value={this.state.input}
               placeholder='Filter results'
               onChange={this.handleFilter.bind(this)}/>
        <input type="button"
               disabled={!this.state.input}
               className="show-all-button"
               value="Show All"
               onClick={this.handleShowAll.bind(this)}/>
      </div>
    );
  }
}

Filter.propTypes = {
  handleInput: func
}
