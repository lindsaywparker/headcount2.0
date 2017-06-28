import React from 'react';
import Card from './Card';
import PropTypes, { arrayOf, string, object, shape } from 'prop-types';
import './CardList.css';


const CardList = ({dataArray}) => {
  return (
    <div>
      {dataArray.map( (district, i) =>
        <Card key={i}
              location={district.location}
              data={district.data}
        />
      )}
    </div>
  )
}

const allData = shape({
  location: string,
  data: object
})

CardList.propTypes = {
  dataArray: arrayOf(allData)
}

export default CardList;
