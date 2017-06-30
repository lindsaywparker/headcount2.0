import React from 'react';
import Card from './Card';
import { arrayOf, string, object, func, bool, shape } from 'prop-types';
import './Comparison.css';

const Comparison = ({ dataArray, toggleSelected, findAverage, compareDistrictAverages }) => {
  const selectedDistricts = dataArray.filter((district) => {
    return district.selected;
  })

  let showStart = true;
  let showOne = false;
  let showComp = false;
  let showTwo = false;
  let comparisonResults;

  if(selectedDistricts.length >= 1) {
    showStart = false;
    showOne = true;
  }

  if(selectedDistricts.length >= 2) {
    showComp = true;
    showTwo = true;
    comparisonResults = compareDistrictAverages(selectedDistricts[0].location, selectedDistricts[1].location)
  }

  return (
    <div className='comparison'>
      {showStart &&
        <div>
          <p className='start-message'>
            Compare your school district's kindergarten enrollment rate with others across Colorado.
          </p>
          <p className='start-message'>
            Select any two cards below to see your results!
          </p>
        </div>
        }
      {showOne && <Card key={0}
        location={selectedDistricts[0].location}
        data={selectedDistricts[0].data}
        selected={selectedDistricts[0].selected}
        toggleSelected={toggleSelected}
      />}
      {showComp && <div className='comparison-results'>
        <p>{selectedDistricts[0].location} AVERAGE: {(comparisonResults[selectedDistricts[0].location] * 100).toFixed(1)}%</p>
        <p>Ratio ({selectedDistricts[0].location} / {selectedDistricts[1].location}): {(comparisonResults.compared * 100).toFixed(1)}%</p>
        <p>{selectedDistricts[1].location} AVERAGE: {(comparisonResults[selectedDistricts[1].location] * 100).toFixed(1)}%</p>
      </div>}
      {showTwo && <Card key={1}
        location={selectedDistricts[1].location}
        data={selectedDistricts[1].data}
        selected={selectedDistricts[1].selected}
        toggleSelected={toggleSelected}
      />}
    </div>
  )
}

const allData = shape({
  location: string,
  data: object,
  selected: bool
})

Comparison.propTypes = {
  dataArray: arrayOf(allData),
  toggleSelected: func,
  findAverage: func,
  compareDistrictAverages: func
}

export default Comparison;
