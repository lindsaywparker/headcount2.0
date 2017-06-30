import React from 'react';
import Card from './Card';
import { arrayOf, string, object, shape, func, bool } from 'prop-types';
import './CardList.css';

const CardList = ({dataArray, toggleSelected}) => {
  return (
    <div className='cardlist'>
      {dataArray.map( (district, i) =>
        <Card key={i}
              location={district.location}
              data={district.data}
              average={district.average}
              selected={district.selected}
              toggleSelected={toggleSelected}
        />
      )}
    </div>
  )
}

const allData = shape({
  location: string,
  data: object,
  selected: bool
})

CardList.propTypes = {
  dataArray: arrayOf(allData),
  toggleSelected: func
}

export default CardList;
