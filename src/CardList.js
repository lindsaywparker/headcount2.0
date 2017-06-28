import React from 'react';
import Card from './Card';
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

export default CardList;
