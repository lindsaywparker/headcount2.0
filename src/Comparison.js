import React from 'react';
import Card from './Card';
import './Comparison.css';


const Comparison = ({ dataArray, toggleSelected }) => {
  const selectedDistricts = dataArray.filter((district) => {
    return district.selected;
  })

  let showOne = false;
  let showComp = false;
  let showTwo = false;

  if(selectedDistricts.length >= 1) {
    showOne = true;
  }
  if(selectedDistricts.length >= 2) {
    showComp = true;
    showTwo = true;
  }

  return (
    <div className='comparison'>
      {showOne && <Card key={0}
        location={selectedDistricts[0].location}
        data={selectedDistricts[0].data}
        selected={selectedDistricts[0].selected}
        toggleSelected={toggleSelected}
      />}
      {showComp && <p></p>}
      {showTwo && <Card key={1}
        location={selectedDistricts[1].location}
        data={selectedDistricts[1].data}
        selected={selectedDistricts[1].selected}
        toggleSelected={toggleSelected}
      />}
    </div>
  )
}

export default Comparison;
