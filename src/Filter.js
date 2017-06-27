import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div>
      <input type="text"
             className="filter-input"/>
      <input type="button"
             className="filter-button"
             value="Filter"/>
      <input type="button"
             className="show-all-button"
             value="Show All"/>
    </div>
  )
}

export default Filter;
